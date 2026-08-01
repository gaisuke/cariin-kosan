import { NextRequest, NextResponse } from 'next/server';
import { parseNaturalLanguageQuery } from '@/lib/gemmaEngine';
import { generateContentWithVertexGemma } from '@/lib/vertexGemmaApi';

export async function POST(req: NextRequest) {
  let query = '';

  try {
    const body = await req.json();
    query = body.query || '';

    if (!query || typeof query !== 'string' || !query.trim()) {
      const fallback = parseNaturalLanguageQuery('');
      return NextResponse.json({
        success: true,
        source: 'local-fallback',
        data: fallback,
      });
    }

    const prompt = `You are the Gemma AI Natural Language Search Engine for "CariKos AI" (an Indonesian boarding house / kos finder).
Analyze this user search query in Indonesian or English: "${query}".

Extract structured filters as JSON matching this exact schema:
{
  "maxPrice": number | null (in IDR integer amount, e.g. 2500000 for "2.5jt" or "2.5 juta", 2000000 for "2jt", null if unspecified),
  "selectedLocation": string | null (e.g. "Setiabudi", "Kemanggisan", "Dramaga", "Tembalang", "Cisitu", "Margonda", "Jakarta", "Bandung", "Depok", "Semarang", "Bogor", null if unspecified),
  "genderType": "Putra" | "Putri" | "Campur" | null (null if unspecified),
  "facilityBadges": string[] (array of short facility or transit badge strings like "Mandi Dalam", "Free WiFi", "Ber-AC", "Dekat MRT/KRL", "WFH Desk"),
  "summaryText": string (short 1-sentence Indonesian summary starting with "Gemma AI: ..."),
  "gemmaRationale": string (short reasoning sentence)
}`;

    const responseText = await generateContentWithVertexGemma(prompt, true);
    const parsedJSON = JSON.parse(responseText);

    const badges = [];

    if (parsedJSON.maxPrice) {
      const million = parsedJSON.maxPrice / 1000000;
      badges.push({
        id: 'price-filter',
        label: `< Rp ${million % 1 === 0 ? million : million.toFixed(1)} Juta / bln`,
        category: 'price' as const,
      });
    }

    if (parsedJSON.selectedLocation) {
      badges.push({
        id: `loc-${parsedJSON.selectedLocation}`,
        label: parsedJSON.selectedLocation,
        category: 'location' as const,
      });
    }

    if (parsedJSON.genderType) {
      badges.push({
        id: `type-${parsedJSON.genderType.toLowerCase()}`,
        label: `Khusus ${parsedJSON.genderType}`,
        category: 'type' as const,
      });
    }

    if (Array.isArray(parsedJSON.facilityBadges)) {
      parsedJSON.facilityBadges.forEach((fac: string, idx: number) => {
        badges.push({
          id: `gemma-fac-${idx}`,
          label: fac,
          category: 'facility' as const,
        });
      });
    }

    return NextResponse.json({
      success: true,
      source: 'gemma-4-26b-a4b-it-maas',
      data: {
        maxPrice: parsedJSON.maxPrice || null,
        selectedLocation: parsedJSON.selectedLocation || null,
        genderType: parsedJSON.genderType || null,
        extractedBadges: badges,
        summaryText: parsedJSON.summaryText || `Gemma 4 MaaS analyzed query: "${query}"`,
        gemmaRationale: parsedJSON.gemmaRationale || '',
      },
    });
  } catch (error: any) {
    console.info(`[Vertex Gemma 4 MaaS Engine] Switching to local engine (${error?.message || 'Error'})`);
    const fallback = parseNaturalLanguageQuery(query || '');
    return NextResponse.json({
      success: true,
      source: 'local-fallback',
      data: fallback,
    });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { generateBobiResponse } from '@/lib/gemmaEngine';
import { generateContentWithVertexGemma } from '@/lib/vertexGemmaApi';

export async function POST(req: NextRequest) {
  let listing: any = null;
  let userQuestion: string = '';

  try {
    const body = await req.json();
    listing = body.listing;
    userQuestion = body.userQuestion || '';

    if (!userQuestion || !listing) {
      return NextResponse.json(
        { error: 'Missing listing or userQuestion' },
        { status: 400 }
      );
    }

    const nearbyPOIsText = Array.isArray(listing.nearbyPOIs)
      ? listing.nearbyPOIs.map((p: any) => `${p.name} (${p.distance}, ${p.time})`).join('; ')
      : 'None';

    const facilitiesText = Array.isArray(listing.facilities)
      ? listing.facilities.join(', ')
      : 'Standard amenities';

    const rulesText = Array.isArray(listing.rules)
      ? listing.rules.join('; ')
      : 'Standard rules';

    const landlordName = listing.landlord?.name || 'Owner';
    const landlordRate = listing.landlord?.responseRate || 'Fast';

    const prompt = `You are Bobi, the friendly, helpful AI Concierge for "${listing.name}" located at ${listing.address || ''} in ${listing.area || ''}, ${listing.city || ''}.

Kos Facts & Specs:
- Price: Rp ${Number(listing.price || 0).toLocaleString('id-ID')} / month
- Security Deposit: Rp ${Number(listing.deposit || 0).toLocaleString('id-ID')} (Refundable)
- Type: ${listing.type || 'Campur'}
- Facilities: ${facilitiesText}
- House Rules: ${rulesText}
- Nearby Transport/Campuses: ${nearbyPOIsText}
- Landlord Contact: ${landlordName} (${landlordRate} response time)

User Question: "${userQuestion}"

Answer the user in a warm, concise, and helpful manner in Indonesian or English (matching the language of the question). Reference specific facts from the Kos details when applicable. Keep your answer under 3-4 sentences.`;

    const responseText = await generateContentWithVertexGemma(prompt, false);

    return NextResponse.json({
      success: true,
      source: 'gemma-4-26b-a4b-it-maas',
      text: responseText,
    });
  } catch (error: any) {
    console.info(`[Vertex Gemma 4 MaaS Engine] Switching Bobi AI to local engine (${error?.message || 'Error'})`);
    const fallbackText = listing
      ? generateBobiResponse(listing, userQuestion || '')
      : 'Halo! I am Bobi, your CariKos AI concierge.';

    return NextResponse.json({
      success: true,
      source: 'local-fallback',
      text: fallbackText,
    });
  }
}

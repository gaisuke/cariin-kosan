import { GoogleGenAI } from '@google/genai';

const MODEL_NAMES = [
  'gemma-4-26b-a4b-it-maas',
  'gemma-2-9b-it',
  'gemini-2.5-flash',
  'gemini-1.5-flash',
  'gemini-2.0-flash',
];

export async function generateContentWithGemma(
  apiKey: string,
  prompt: string,
  jsonMode: boolean = false
): Promise<string> {
  const cleanKey = apiKey ? apiKey.trim() : '';

  // Google AI Studio / Gemini API keys start with "AIzaSy"
  if (!cleanKey || !cleanKey.startsWith('AIzaSy')) {
    throw new Error('GEMMA_API_KEY is inactive or not a Google AI Studio key (must start with AIzaSy)');
  }

  const ai = new GoogleGenAI({ apiKey: cleanKey });
  let lastError: any = null;

  for (const modelName of MODEL_NAMES) {
    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: jsonMode
          ? {
              responseMimeType: 'application/json',
              temperature: 0.2,
            }
          : {
              temperature: 0.4,
              maxOutputTokens: 300,
            },
      });

      const text = response.text;
      if (text) {
        return text;
      }
    } catch (err: any) {
      lastError = err;
      if (err?.status === 404 || err?.message?.includes('404')) {
        continue;
      }
      throw err;
    }
  }

  throw lastError || new Error('Gemma API model request failed');
}

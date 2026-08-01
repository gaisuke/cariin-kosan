import { GoogleAuth } from 'google-auth-library';
import { execSync } from 'child_process';

const PROJECT_ID = process.env.GCP_PROJECT_ID || 'kodingdeepdive0826-9613';
const ENDPOINT_URL = `https://aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/global/endpoints/openapi/chat/completions`;
const MODEL_NAME = 'google/gemma-4-26b-a4b-it-maas';

async function getAccessToken(): Promise<string> {
  // 1. Try google-auth-library Application Default Credentials (ADC)
  try {
    const auth = new GoogleAuth({
      scopes: 'https://www.googleapis.com/auth/cloud-platform',
    });
    const client = await auth.getClient();
    const tokenResponse = await client.getAccessToken();
    if (tokenResponse.token) {
      return tokenResponse.token;
    }
  } catch (err) {
    console.warn('[Vertex Gemma] ADC token resolution note:', err);
  }

  // 2. Fall back to gcloud auth print-access-token in CloudShell / local dev
  try {
    const token = execSync('gcloud auth print-access-token', { encoding: 'utf8' }).trim();
    if (token) {
      return token;
    }
  } catch (err) {
    console.warn('[Vertex Gemma] gcloud token resolution note:', err);
  }

  // 3. Fall back to GEMMA_API_KEY if passed as token
  if (process.env.GEMMA_API_KEY && process.env.GEMMA_API_KEY.length > 20) {
    return process.env.GEMMA_API_KEY;
  }

  throw new Error('Could not obtain Google Cloud access token for Vertex AI Model Garden');
}

export async function generateContentWithVertexGemma(
  prompt: string,
  jsonMode: boolean = false
): Promise<string> {
  const token = await getAccessToken();

  const response = await fetch(ENDPOINT_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL_NAME,
      messages: [
        {
          role: 'user',
          content: jsonMode
            ? `${prompt}\n\nIMPORTANT: Return ONLY a valid JSON object matching the requested schema. Do not wrap in markdown backticks.`
            : prompt,
        },
      ],
      temperature: jsonMode ? 0.1 : 0.4,
      max_tokens: 400,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Vertex AI Gemma MaaS returned ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  const messageContent = data.choices?.[0]?.message?.content;

  if (!messageContent) {
    throw new Error('No content returned from Vertex AI Gemma MaaS');
  }

  // Clean JSON response string if wrapped in markdown
  let cleaned = messageContent.trim();
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\s*/, '').replace(/```$/, '').trim();
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\s*/, '').replace(/```$/, '').trim();
  }

  return cleaned;
}

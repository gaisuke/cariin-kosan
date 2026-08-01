import { KOS_LISTINGS } from '../src/data/kosListings';

interface TestResult {
  name: string;
  passed: boolean;
  durationMs: number;
  details?: string;
  error?: string;
}

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';
const CLOUD_RUN_URL = 'https://cariin-kosan-832762872936.us-central1.run.app';

console.log('====================================================');
console.log('🧪 CARIKOS AI - AUTOMATED QA TEST SUITE RUNNER');
console.log(`Target Local URL: ${BASE_URL}`);
console.log(`Target Cloud Run URL: ${CLOUD_RUN_URL}`);
console.log('====================================================\n');

async function runTestCase(
  name: string,
  testFn: () => Promise<void>
): Promise<TestResult> {
  const start = Date.now();
  try {
    await testFn();
    const durationMs = Date.now() - start;
    console.log(`✅ [PASS] ${name} (${durationMs}ms)`);
    return { name, passed: true, durationMs };
  } catch (err: any) {
    const durationMs = Date.now() - start;
    console.error(`❌ [FAIL] ${name} (${durationMs}ms) - ${err.message}`);
    return { name, passed: false, durationMs, error: err.message };
  }
}

async function main() {
  const results: TestResult[] = [];

  // TEST CASE 1: Dataset Integrity & Jakarta Regional Coverage
  results.push(
    await runTestCase('Test Case 1: Dataset Integrity & Regional Coverage', async () => {
      if (!KOS_LISTINGS || KOS_LISTINGS.length < 12) {
        throw new Error(`Expected at least 12 listings, found ${KOS_LISTINGS?.length}`);
      }

      const cities = new Set(KOS_LISTINGS.map((k) => k.city));
      const requiredCities = ['Jakarta South', 'Jakarta Central', 'Jakarta West', 'Jakarta North', 'Jakarta East'];
      for (const city of requiredCities) {
        if (!cities.has(city as any)) {
          throw new Error(`Missing required Jakarta region: ${city}`);
        }
      }
    })
  );

  // TEST CASE 2: Live Kos Search API (/api/kos/search)
  results.push(
    await runTestCase('Test Case 2: Live Kos Search API (/api/kos/search)', async () => {
      const res = await fetch(`${BASE_URL}/api/kos/search?q=Setiabudi&city=Jakarta%20South`);
      if (!res.ok) throw new Error(`HTTP status ${res.status}`);
      const json = await res.json();
      if (!json.success || !Array.isArray(json.data) || json.data.length === 0) {
        throw new Error('API returned invalid or empty search data');
      }
    })
  );

  // TEST CASE 3: Gemma 4 MaaS AI Search Query Parser (/api/ai/analyze)
  results.push(
    await runTestCase('Test Case 3: Gemma 4 MaaS AI Search Analysis (/api/ai/analyze)', async () => {
      const res = await fetch(`${BASE_URL}/api/ai/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: 'Kos di Menteng under 3.5jt dekat MRT' }),
      });
      if (!res.ok) throw new Error(`HTTP status ${res.status}`);
      const json = await res.json();
      if (!json.success || !json.data) throw new Error('AI analysis failed');
      if (json.data.maxPrice !== 3500000) {
        throw new Error(`Expected maxPrice 3500000, got ${json.data.maxPrice}`);
      }
    })
  );

  // TEST CASE 4: Bobi AI Concierge Chat (/api/ai/chat)
  results.push(
    await runTestCase('Test Case 4: Bobi AI Concierge Chat (/api/ai/chat)', async () => {
      const testListing = KOS_LISTINGS[0];
      const res = await fetch(`${BASE_URL}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          listing: testListing,
          userQuestion: 'Apakah ada jam malam?',
        }),
      });
      if (!res.ok) throw new Error(`HTTP status ${res.status}`);
      const json = await res.json();
      if (!json.success || typeof json.text !== 'string' || !json.text.trim()) {
        throw new Error('Bobi AI response was empty');
      }
    })
  );

  // TEST CASE 5: Standalone Kos Detail Page Route (/kos/[id])
  results.push(
    await runTestCase('Test Case 5: Standalone Detail Route (/kos/cove-nine-setiabudi)', async () => {
      const res = await fetch(`${BASE_URL}/kos/cove-nine-setiabudi`);
      if (!res.ok) throw new Error(`HTTP status ${res.status}`);
      const html = await res.text();
      if (!html.includes('Cove Nine Setiabudi')) {
        throw new Error('Rendered HTML missing expected Kos title');
      }
    })
  );

  // TEST CASE 6: Live Production Deployment Health Check
  results.push(
    await runTestCase('Test Case 6: Live Production Deployment Health Check', async () => {
      const res = await fetch(CLOUD_RUN_URL, { method: 'HEAD' });
      if (!res.ok) throw new Error(`Cloud Run returned HTTP status ${res.status}`);
    })
  );

  // SUMMARY REPORT
  console.log('\n====================================================');
  const passedCount = results.filter((r) => r.passed).length;
  console.log(`📊 QA SUMMARY: ${passedCount}/${results.length} PASSED`);
  console.log('====================================================');

  if (passedCount < results.length) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Fatal error running QA test suite:', err);
  process.exit(1);
});

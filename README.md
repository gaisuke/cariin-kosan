# 🏠 CariKos AI (Cariin Kosan)
> **Smart Boarding House Finder in Indonesia, Powered by Google Gemma 4 & Google Maps API**

![CariKos AI Banner](https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Google%20Cloud%20Run-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)](https://cariin-kosan-832762872936.us-central1.run.app)
[![Google Gemma 4](https://img.shields.io/badge/AI%20Model-Gemma%204%2026B%20IT%20MaaS-34A853?style=for-the-badge&logo=google&logoColor=white)](https://console.cloud.google.com/agent-platform/publishers/google/model-garden/gemma-4-26b-a4b-it-maas?project=kodingdeepdive0826-9613)
[![GitHub Repository](https://img.shields.io/badge/GitHub-gaisuke%2Fcariin--kosan-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gaisuke/cariin-kosan.git)

CariKos AI is an AI-powered platform designed to revolutionize how students, expats, and young professionals find boarding houses (*kos-kosan*) across Greater Jakarta and major Indonesian urban hubs.

By leveraging **Google Gemma 4** (`google/gemma-4-26b-a4b-it-maas` on Vertex AI Model Garden) and **Google Maps API**, CariKos AI translates unstructured Indonesian natural language queries into verified, precise listings paired with an interactive Leaflet map canvas, an AI Concierge ("Bobi"), and direct 1-click WhatsApp landlord negotiation.

---

## 🌐 Live Production URL

🚀 **Live Web Application**: [https://cariin-kosan-832762872936.us-central1.run.app](https://cariin-kosan-832762872936.us-central1.run.app)

---

## ✨ Key Features

- 🧠 **Gemma 4 Natural Language Search Engine**: Type queries like *"Kos putri dekat BINUS Kemanggisan dibawah 2jt ada WiFi dan AC"* or *"under 2jt dekat sudirman"* and let Gemma 4 automatically extract exact price caps, location landmarks, gender preferences, and facility badges.
- 🤖 **Bobi AI Concierge**: An interactive AI assistant embedded in every listing that answers specific questions about curfew rules, total move-in costs (rent + deposit breakdown), internet speed, and nearby transit hubs.
- 📍 **Real-time Google Maps Integration**: Live ingestion of places, coordinates, ratings, and addresses using the Google Maps Places API, backed by a pre-verified dataset with vision feature badges.
- 🗺️ **Synchronized Interactive Map Canvas**: Dual-pane split view (Listings + Leaflet Map) with real-time hover highlighting, active filter counting, and mobile-responsive toggles.
- 💬 **WhatsApp Landlord Negotiator**: Pre-fills structured, polite Indonesian WhatsApp inquiry templates with move-in dates, selected room types, and custom notes for instant 1-click contacting.
- 🧪 **Automated QA Test Suite**: Integrated test runner (`npm run test:qa`) verifying API endpoints, natural language price parsing (`under 1800000`), model garden MaaS integration, and production deployment health.
- 🛡️ **Dual-Engine Fault Tolerance**: Built with a primary Vertex AI MaaS connection (`google/gemma-4-26b-a4b-it-maas`) and a deterministic local fallback engine to guarantee 100% uptime.

---

## 📍 Regional & Landmark Coverage

Comprehensive listings covering all 5 Greater Jakarta regions and key business/university hubs:
- **Jakarta South**: Sudirman, Setiabudi, SCBD, Senopati, Kemang, Tebet, Kuningan, Jl. Kapten Tendean, Kalibata, Jagakarsa.
- **Jakarta Central**: Menteng, Cikini, Thamrin, Tanah Abang, Kebon Kacang, Salemba, Cempaka Putih.
- **Jakarta West**: Kemanggisan (BINUS), Grogol (UNTAR/Trisakti), Palmerah, Slipi, Puri Indah.
- **Jakarta North**: Kelapa Gading, Sunter, Pluit, Pantai Indah Kapuk (PIK).
- **Jakarta East**: Rawamangun (UNJ), Jatinegara.
- **University Hubs**: Depok (UI Margonda), Bogor (IPB Dramaga).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI & Styling**: React 19, TypeScript, Tailwind CSS v4, Lucide React, Radix UI
- **AI Models**: Google Gemma 4 (`google/gemma-4-26b-a4b-it-maas`) on Vertex AI Model Garden, `@google/genai`
- **Mapping**: Leaflet / React-Leaflet & Google Maps Places API
- **Deployment**: Google Cloud Run & Cloud Build
- **Authentication**: `google-auth-library` (Application Default Credentials / ADC)

---

## 🚀 Getting Started

### 1. Prerequisites

- Node.js 18.x or higher
- npm / pnpm / yarn

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
GCP_PROJECT_ID=kodingdeepdive0826-9613
GEMMA_API_KEY=your-gemma-api-key-or-gemini-key
GOOGLE_MAPS_API_KEY=your-google-maps-api-key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### 3. Installation & Run

```bash
# Install dependencies
npm install

# Run automated QA test suite
npm run test:qa

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view CariKos AI.

---

## 📂 Project Structure

```
cariin-kosan/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── ai/analyze/     # Gemma 4 Natural Language Search Route
│   │   │   ├── ai/chat/        # Bobi AI Concierge Chat Route
│   │   │   └── kos/search/     # Google Maps Places API Ingestion Route
│   │   ├── layout.tsx
│   │   └── page.tsx            # Main Dual-Pane Dashboard Page
│   ├── components/
│   │   ├── AISearchBar.tsx     # Smart Search Input & Active Filter Badges
│   │   ├── BobiChatWidget.tsx  # Property Concierge Chatbot Widget
│   │   ├── Header.tsx          # Navigation Header with City Filters & Favorites
│   │   ├── KosCard.tsx         # Listing Card Component with Gemma Match Badges
│   │   ├── ListingDetailModal.tsx # Slide-over Modal for Detailed Specs & Amenities
│   │   ├── WhatsAppDialog.tsx  # Direct Landlord Inquiry & Draft Negotiator
│   │   └── Map/                # Leaflet Map Canvas Component
│   ├── data/
│   │   └── kosListings.ts      # Verified Boarding House Dataset (30+ Listings)
│   └── lib/
│       ├── gemmaApi.ts         # Google GenAI SDK Client Helper
│       ├── gemmaEngine.ts      # Rule-Based NLU Fallback Engine
│       └── vertexGemmaApi.ts   # Vertex AI MaaS Gemma 4 Client
├── scripts/
│   └── run-qa-tests.ts         # Automated QA Test Suite Runner
├── WRITEUP.md                  # Kaggle Hackathon Official Writeup
└── README.md
```

---

## 📜 License

Distributed under the MIT License.
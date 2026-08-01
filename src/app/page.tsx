'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import AISearchBar from '@/components/AISearchBar';
import KosCard from '@/components/KosCard';
import Map from '@/components/Map/Map';
import ListingDetailModal from '@/components/ListingDetailModal';
import { KOS_LISTINGS, KosListing } from '@/data/kosListings';
import {
  parseNaturalLanguageQuery,
  ExtractedFilterBadge,
} from '@/lib/gemmaEngine';
import { Sparkles, MapPin, Map as MapIcon, List, Frown, Filter } from 'lucide-react';

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeBadges, setActiveBadges] = useState<ExtractedFilterBadge[]>([]);
  const [summaryText, setSummaryText] = useState('Gemma AI ready. Enter your search query above.');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Map & Modal State
  const [selectedListing, setSelectedListing] = useState<KosListing | null>(null);
  const [selectedMapListingId, setSelectedMapListingId] = useState<string | null>(null);
  const [hoveredListingId, setHoveredListingId] = useState<string | null>(null);

  // Mobile view toggle (List vs Map)
  const [mobileTab, setMobileTab] = useState<'list' | 'map'>('list');

  // Favorite toggle helper
  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // AI Analyze Action with Gemma API Route Handler
  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const res = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        setActiveBadges(json.data.extractedBadges || []);
        const badgeSource = json.source === 'gemma-api' ? ' (Powered by Gemma API)' : '';
        setSummaryText(`${json.data.summaryText}${badgeSource}`);
      } else {
        const fallback = parseNaturalLanguageQuery(searchQuery);
        setActiveBadges(fallback.extractedBadges);
        setSummaryText(fallback.summaryText);
      }
    } catch (err) {
      console.error('Error analyzing query:', err);
      const fallback = parseNaturalLanguageQuery(searchQuery);
      setActiveBadges(fallback.extractedBadges);
      setSummaryText(fallback.summaryText);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Reset Filters
  const handleReset = () => {
    setSearchQuery('');
    setActiveBadges([]);
    setSummaryText('Filters reset. Showing all 6 verified Indonesian boarding houses.');
    setSelectedCity('All');
  };

  const [liveListings, setLiveListings] = useState<KosListing[]>(KOS_LISTINGS);
  const [isFetchingLivePlaces, setIsFetchingLivePlaces] = useState(false);

  // Fetch real-time Google Maps Places data
  useEffect(() => {
    let isMounted = true;
    const fetchLivePlaces = async () => {
      setIsFetchingLivePlaces(true);
      try {
        const queryParam = searchQuery ? encodeURIComponent(searchQuery) : '';
        const cityParam = selectedCity !== 'All' ? encodeURIComponent(selectedCity) : '';
        const res = await fetch(`/api/kos/search?q=${queryParam}&city=${cityParam}`);
        const json = await res.json();
        if (isMounted && json.success && Array.isArray(json.data)) {
          setLiveListings(json.data);
        }
      } catch (err) {
        console.error('Error fetching real-time Google Maps Places:', err);
      } finally {
        if (isMounted) setIsFetchingLivePlaces(false);
      }
    };

    const timer = setTimeout(fetchLivePlaces, 250);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [searchQuery, selectedCity]);

  // Filter listings based on AI query, city pill, and favorites toggle
  const displayedListings = useMemo(() => {
    let result = liveListings;

    // Apply natural language AI query filter if present
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const parsed = parseNaturalLanguageQuery(searchQuery);

      result = result.filter((item) => {
        // Price limit
        if (parsed.maxPrice !== null && item.price > parsed.maxPrice) {
          return false;
        }

        // Location / area filter from query
        if (parsed.selectedCityOrArea) {
          const locLower = parsed.selectedCityOrArea.toLowerCase();
          const matchCity = item.city.toLowerCase().includes(locLower);
          const matchArea = item.area.toLowerCase().includes(locLower);
          const matchAddress = item.address.toLowerCase().includes(locLower);
          const matchName = item.name.toLowerCase().includes(locLower);
          if (!matchCity && !matchArea && !matchAddress && !matchName) {
            return false;
          }
        }

        // Gender filter
        if (parsed.genderType && item.type !== parsed.genderType && item.type !== 'Campur') {
          return false;
        }

        // Transit / MRT / KRL filter
        if (q.includes('mrt') || q.includes('krl') || q.includes('stasiun') || q.includes('transit')) {
          const hasTransitPOI = item.nearbyPOIs.some(
            (p) =>
              p.type === 'transit' ||
              p.name.toLowerCase().includes('mrt') ||
              p.name.toLowerCase().includes('krl') ||
              p.name.toLowerCase().includes('stasiun') ||
              p.name.toLowerCase().includes('halte')
          );
          const hasTransitFacility = item.facilities.some((f) => f.toLowerCase().includes('mrt') || f.toLowerCase().includes('krl'));
          if (!hasTransitPOI && !hasTransitFacility) {
            return false;
          }
        }

        // Facility check (AC)
        if (q.includes('ac') && !q.includes('access')) {
          if (!item.facilities.some((f) => f.toLowerCase().includes('ac'))) {
            return false;
          }
        }

        // Facility check (WiFi)
        if (q.includes('wifi') || q.includes('internet')) {
          if (!item.facilities.some((f) => f.toLowerCase().includes('wifi') || f.toLowerCase().includes('internet'))) {
            return false;
          }
        }

        // Facility check (Private Bathroom / Mandi Dalam)
        if (q.includes('mandi dalam') || q.includes('km dalam') || q.includes('private bathroom')) {
          if (!item.facilities.some((f) => f.toLowerCase().includes('private bathroom') || f.toLowerCase().includes('mandi dalam'))) {
            return false;
          }
        }

        return true;
      });
    }

    // Filter by city pill if selected
    if (selectedCity !== 'All') {
      result = result.filter(
        (item) => item.city === selectedCity || item.area.toLowerCase().includes(selectedCity.toLowerCase())
      );
    }

    // Filter by favorites only
    if (showFavoritesOnly) {
      result = result.filter((item) => favorites.includes(item.id));
    }

    return result;
  }, [liveListings, searchQuery, selectedCity, showFavoritesOnly, favorites]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      {/* Header Bar */}
      <Header
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
        favoritesCount={favorites.length}
        onToggleFavoritesOnly={() => setShowFavoritesOnly((prev) => !prev)}
        showFavoritesOnly={showFavoritesOnly}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col gap-4">
        {/* Top AI Search Header */}
        <AISearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAnalyze={handleAnalyze}
          isAnalyzing={isAnalyzing}
          activeBadges={activeBadges}
          onRemoveBadge={(id) =>
            setActiveBadges((prev) => prev.filter((b) => b.id !== id))
          }
          onReset={handleReset}
          summaryText={summaryText}
        />

        {/* Mobile View Toggle Switch (List vs Map) */}
        <div className="flex md:hidden items-center justify-between bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <button
            onClick={() => setMobileTab('list')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileTab === 'list'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <List className="w-4 h-4" />
            List View ({displayedListings.length})
          </button>
          <button
            onClick={() => setMobileTab('map')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileTab === 'map'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <MapIcon className="w-4 h-4" />
            Interactive Map
          </button>
        </div>

        {/* Dual Pane Layout (Desktop 50% / 50%) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-start">
          {/* Left Pane (Kos Listings) */}
          <div
            className={`space-y-4 ${
              mobileTab === 'map' ? 'hidden md:block' : 'block'
            }`}
          >
            {/* Active Filter Stats Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  Available Kos
                </span>
                <span className="bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-extrabold px-2.5 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                  {displayedListings.length}
                </span>
              </div>

              {showFavoritesOnly && (
                <span className="text-xs text-rose-500 font-semibold bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-900">
                  Showing Saved Favorites
                </span>
              )}
            </div>

            {/* List of Kos Cards */}
            {displayedListings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                {displayedListings.map((listing) => (
                  <KosCard
                    key={listing.id}
                    listing={listing}
                    isSelected={selectedMapListingId === listing.id}
                    isFavorite={favorites.includes(listing.id)}
                    onSelect={(l) => {
                      setSelectedListing(l);
                      setSelectedMapListingId(l.id);
                    }}
                    onToggleFavorite={handleToggleFavorite}
                    onHover={(id) => setHoveredListingId(id)}
                  />
                ))}
              </div>
            ) : (
              /* No Results Fallback Card */
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto">
                  <Frown className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  No matching Kos entries found
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Try adjusting your budget threshold or location keyword in the AI Search Bar.
                </p>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-500 transition-all inline-flex items-center gap-1.5"
                >
                  <Filter className="w-3.5 h-3.5" />
                  Reset Search
                </button>
              </div>
            )}
          </div>

          {/* Right Pane (Interactive Leaflet Map Canvas - Sticky Desktop) */}
          <div
            className={`sticky top-20 h-[calc(100vh-6rem)] min-h-[480px] ${
              mobileTab === 'list' ? 'hidden md:block' : 'block'
            }`}
          >
            <Map
              listings={displayedListings}
              selectedListingId={selectedMapListingId}
              hoveredListingId={hoveredListingId}
              onSelectListing={(id) => {
                const found = KOS_LISTINGS.find((k) => k.id === id);
                if (found) {
                  setSelectedListing(found);
                  setSelectedMapListingId(id);
                }
              }}
            />
          </div>
        </div>
      </main>

      {/* Slide-over Detail Modal */}
      {selectedListing && (
        <ListingDetailModal
          listing={selectedListing}
          isOpen={!!selectedListing}
          onClose={() => setSelectedListing(null)}
          isFavorite={favorites.includes(selectedListing.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </div>
  );
}

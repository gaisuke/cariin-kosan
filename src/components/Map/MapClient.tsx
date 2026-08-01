'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { KosListing } from '@/data/kosListings';
import { formatIDRShort } from '@/lib/utils';
import { Sparkles, MapPin } from 'lucide-react';

interface MapClientProps {
  listings: KosListing[];
  selectedListingId: string | null;
  hoveredListingId: string | null;
  onSelectListing: (id: string) => void;
}

// Helper component to smoothly animate map center when selectedListingId changes
function MapRecenter({ listings, selectedListingId }: { listings: KosListing[]; selectedListingId: string | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedListingId) {
      const selected = listings.find((item) => item.id === selectedListingId);
      if (selected) {
        map.flyTo([selected.coordinates.lat, selected.coordinates.lng], 15, {
          duration: 1.2,
        });
      }
    } else if (listings.length > 0) {
      // Fit bounds for all listings
      const bounds = L.latLngBounds(listings.map((l) => [l.coordinates.lat, l.coordinates.lng]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    }
  }, [selectedListingId, listings, map]);

  return null;
}

export default function MapClient({
  listings,
  selectedListingId,
  hoveredListingId,
  onSelectListing,
}: MapClientProps) {
  // Default center (Jakarta South)
  const defaultCenter: [number, number] = [-6.2088, 106.8229];

  // Helper to create custom HTML icon for price badge pin
  const createPriceMarker = (listing: KosListing, isSelected: boolean, isHovered: boolean) => {
    const isHighlighted = isSelected || isHovered;
    const priceText = formatIDRShort(listing.price);

    const html = `
      <div class="relative group cursor-pointer transition-all duration-300 transform ${
        isHighlighted ? 'scale-110 z-50' : 'scale-100'
      }">
        <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-lg border-2 border-white transition-all ${
          isSelected
            ? 'bg-teal-600 text-white ring-4 ring-teal-300 ring-opacity-50'
            : isHovered
            ? 'bg-teal-500 text-white'
            : 'bg-slate-900/90 text-teal-300 backdrop-blur-md hover:bg-teal-600 hover:text-white'
        }">
          <span class="w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-300 animate-ping' : 'bg-teal-400'}"></span>
          <span>${priceText}</span>
        </div>
        <div class="w-2 h-2 bg-slate-900 rotate-45 mx-auto -mt-1 ${isSelected ? 'bg-teal-600' : ''}"></div>
      </div>
    `;

    return L.divIcon({
      html,
      className: 'custom-map-price-marker',
      iconSize: [80, 36],
      iconAnchor: [40, 36],
      popupAnchor: [0, -36],
    });
  };

  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-800">
      <MapContainer
        center={defaultCenter}
        zoom={12}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
        style={{ minHeight: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        <MapRecenter listings={listings} selectedListingId={selectedListingId} />

        {listings.map((listing) => {
          const isSelected = listing.id === selectedListingId;
          const isHovered = listing.id === hoveredListingId;

          return (
            <Marker
              key={listing.id}
              position={[listing.coordinates.lat, listing.coordinates.lng]}
              icon={createPriceMarker(listing, isSelected, isHovered)}
              eventHandlers={{
                click: () => onSelectListing(listing.id),
              }}
            >
              <Popup className="custom-leaflet-popup">
                <div className="w-56 p-1">
                  <div className="relative h-28 rounded-lg overflow-hidden mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={listing.images[0]}
                      alt={listing.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-1.5 left-1.5 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] px-1.5 py-0.5 rounded font-medium flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                      {listing.gemmaMatch.percentage}% Gemma Match
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-xs line-clamp-1 mb-0.5">
                    {listing.name}
                  </h4>
                  <div className="flex items-center text-[11px] text-slate-500 mb-2">
                    <MapPin className="w-3 h-3 mr-0.5 text-slate-400 inline" />
                    <span>{listing.area}, {listing.city}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-teal-600 font-bold text-xs">
                      {formatIDRShort(listing.price)}
                    </span>
                    <button
                      onClick={() => onSelectListing(listing.id)}
                      className="bg-teal-600 text-white hover:bg-teal-700 text-[11px] font-medium px-2 py-1 rounded transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

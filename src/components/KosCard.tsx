'use client';

import React, { useState } from 'react';
import { KosListing } from '@/data/kosListings';
import { formatIDR } from '@/lib/utils';
import {
  Sparkles,
  MapPin,
  Wifi,
  Wind,
  Bath,
  Bike,
  Clock,
  Heart,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
} from 'lucide-react';

interface KosCardProps {
  listing: KosListing;
  isSelected: boolean;
  isFavorite: boolean;
  onSelect: (listing: KosListing) => void;
  onToggleFavorite: (id: string) => void;
  onHover: (id: string | null) => void;
}

export default function KosCard({
  listing,
  isSelected,
  isFavorite,
  onSelect,
  onToggleFavorite,
  onHover,
}: KosCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  // Facility Icon Helper
  const renderFacilityIcon = (facility: string) => {
    const fLower = facility.toLowerCase();
    if (fLower.includes('wifi')) return <Wifi className="w-3.5 h-3.5" />;
    if (fLower.includes('ac')) return <Wind className="w-3.5 h-3.5" />;
    if (fLower.includes('bathroom') || fLower.includes('mandi')) return <Bath className="w-3.5 h-3.5" />;
    if (fLower.includes('parking') || fLower.includes('motorbike')) return <Bike className="w-3.5 h-3.5" />;
    if (fLower.includes('24h') || fLower.includes('access')) return <Clock className="w-3.5 h-3.5" />;
    return <CheckCircle2 className="w-3.5 h-3.5" />;
  };

  return (
    <div
      onClick={() => onSelect(listing)}
      onMouseEnter={() => onHover(listing.id)}
      onMouseLeave={() => onHover(null)}
      className={`group relative bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl ${
        isSelected
          ? 'border-teal-500 ring-2 ring-teal-500/20 shadow-teal-500/10'
          : 'border-slate-200/90 dark:border-slate-800 hover:border-teal-500/50'
      }`}
    >
      {/* Thumbnail & Badges Container */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={listing.images[currentImageIndex]}
          alt={listing.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Controls (if multiple) */}
        {listing.images.length > 1 && (
          <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
            <button
              onClick={prevImage}
              className="pointer-events-auto p-1.5 rounded-full bg-slate-900/60 text-white backdrop-blur-md hover:bg-slate-900/90 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="pointer-events-auto p-1.5 rounded-full bg-slate-900/60 text-white backdrop-blur-md hover:bg-slate-900/90 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Carousel Dots */}
        {listing.images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
            {listing.images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>
        )}

        {/* Gemma Match Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/85 backdrop-blur-md text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            {listing.gemmaMatch.badge}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(listing.id);
          }}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:text-rose-500 hover:scale-110 transition-all shadow-md"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Gender Badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold text-white shadow-sm ${
            listing.type === 'Putri' ? 'bg-pink-600' : listing.type === 'Putra' ? 'bg-blue-600' : 'bg-purple-600'
          }`}>
            {listing.type}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
            <MapPin className="w-3.5 h-3.5 mr-1 text-teal-600 shrink-0" />
            <span className="truncate">{listing.area}, {listing.city}</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{listing.rating}</span>
            <span className="text-slate-400 font-normal">({listing.reviewCount})</span>
          </div>
        </div>

        <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-1 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {listing.name}
        </h3>

        {/* Rationale snippet */}
        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-3 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
          <span className="font-semibold text-teal-700 dark:text-teal-300">AI Rationale: </span>
          {listing.gemmaMatch.rationale}
        </p>

        {/* Facility Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {listing.facilities.slice(0, 4).map((facility) => (
            <span
              key={facility}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md"
            >
              {renderFacilityIcon(facility)}
              <span>{facility}</span>
            </span>
          ))}
          {listing.facilities.length > 4 && (
            <span className="text-[10px] font-medium text-slate-400 self-center">
              +{listing.facilities.length - 4} more
            </span>
          )}
        </div>

        {/* Price Footer */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-normal block">Rent starting at</span>
            <div className="text-teal-600 dark:text-teal-400 font-extrabold text-base sm:text-lg">
              {formatIDR(listing.price)}
              <span className="text-xs font-normal text-slate-500"> / bln</span>
            </div>
          </div>

          <button className="px-3.5 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 font-semibold text-xs border border-teal-200 dark:border-teal-800 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-sm">
            View Kos
          </button>
        </div>
      </div>
    </div>
  );
}

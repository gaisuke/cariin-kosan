'use client';

import React, { useState } from 'react';
import { KosListing } from '@/data/kosListings';
import { formatIDR } from '@/lib/utils';
import BobiChatWidget from './BobiChatWidget';
import WhatsAppDialog from './WhatsAppDialog';
import {
  X,
  Sparkles,
  MapPin,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Building,
  Navigation,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Star,
  Share2,
  Heart,
  Info,
} from 'lucide-react';

interface ListingDetailModalProps {
  listing: KosListing;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function ListingDetailModal({
  listing,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
}: ListingDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleShare = () => {
    const url = `${window.location.origin}/kos/${listing.id}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <>
      {/* Slide-over Drawer Backdrop */}
      <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-fade-in flex justify-end">
        {/* Slide-over Content Container */}
        <div className="w-full max-w-2xl h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-slide-left">
          {/* Top Bar */}
          <div className="p-4 sm:px-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close detail panel"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">
                {listing.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
              </button>

              <button
                onClick={() => onToggleFavorite(listing.id)}
                className={`p-2 rounded-xl border transition-all ${
                  isFavorite
                    ? 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-thin">
            {/* Image Gallery & Carousel */}
            <div className="space-y-3">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={listing.images[activeImageIndex]}
                  alt={listing.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />

                {/* AI Vision Verification Overlay Badge */}
                <div className="absolute top-3 left-3 z-10 bg-slate-900/90 backdrop-blur-md text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified by AI Vision</span>
                </div>

                {/* Gallery Navigation Controls */}
                {listing.images.length > 1 && (
                  <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between z-10">
                    <button
                      onClick={() =>
                        setActiveImageIndex(
                          (prev) => (prev - 1 + listing.images.length) % listing.images.length
                        )
                      }
                      className="p-2 rounded-full bg-slate-900/70 text-white backdrop-blur-md hover:bg-slate-900 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev + 1) % listing.images.length)
                      }
                      className="p-2 rounded-full bg-slate-900/70 text-white backdrop-blur-md hover:bg-slate-900 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {listing.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {listing.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx ? 'border-teal-500 ring-2 ring-teal-500/30' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* AI Vision Confirmed Features Section */}
            <div className="bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/20 rounded-2xl p-4">
              <h4 className="font-bold text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 mb-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Gemma Vision Inspection Report
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                {listing.gemmaMatch.visionVerification.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white/60 dark:bg-slate-900/60 p-2 rounded-lg border border-emerald-500/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Title, Location & Quick Rating */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold text-white ${
                  listing.type === 'Putri' ? 'bg-pink-600' : listing.type === 'Putra' ? 'bg-blue-600' : 'bg-purple-600'
                }`}>
                  Kos {listing.type}
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                  {listing.availableFrom}
                </span>
              </div>

              <h2 className="font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
                {listing.name}
              </h2>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                  {listing.address}
                </p>
                {listing.googleMapsUrl && (
                  <a
                    href={listing.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 hover:text-teal-700 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 px-2.5 py-1 rounded-lg transition-all shrink-0"
                  >
                    <span>View on Google Maps</span>
                    <Share2 className="w-3 h-3" />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{listing.rating} Rating</span>
                  <span className="text-slate-400 font-normal">({listing.reviewCount} reviews)</span>
                </div>
                <div className="h-4 w-px bg-slate-300 dark:bg-slate-700" />
                <div className="flex items-center gap-1 text-teal-600 dark:text-teal-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Landlord</span>
                </div>
              </div>
            </div>

            {/* Price & Deposit Terms Breakdown */}
            <div className="bg-gradient-to-r from-teal-900/10 via-emerald-900/10 to-slate-900/10 dark:from-teal-950/40 dark:to-slate-900 p-4 rounded-2xl border border-teal-500/20">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Price & Payment Breakdown
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400">
                    {formatIDR(listing.price)}
                  </span>
                  <span className="text-xs text-slate-500"> / month</span>
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-300">
                  <span>Refundable Security Deposit: </span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {formatIDR(listing.deposit)}
                  </span>
                </div>
              </div>
            </div>

            {/* Facilities Grid */}
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3">
                Facilities & Amenities
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {listing.facilities.map((fac) => (
                  <div
                    key={fac}
                    className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby POIs (Walking & Driving Distance) */}
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-teal-600" />
                Nearby Transit, Campuses & Amenities
              </h3>
              <div className="space-y-2">
                {listing.nearbyPOIs.map((poi, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200/80 dark:border-slate-700/50 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-500" />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {poi.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 font-medium">
                      <span>{poi.distance}</span>
                      <span className="bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-[11px] text-slate-700 dark:text-slate-200 font-semibold">
                        {poi.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-500" />
                House Rules
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {listing.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Bobi AI Assistant Widget */}
            <div>
              <BobiChatWidget listing={listing} />
            </div>
          </div>

          {/* Sticky Bottom Action Footer */}
          <div className="p-4 sm:px-6 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-slate-400 block">Total starting rent</span>
              <span className="text-lg sm:text-xl font-extrabold text-teal-600 dark:text-teal-400">
                {formatIDR(listing.price)}
              </span>
            </div>

            <button
              onClick={() => setShowWhatsAppModal(true)}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              Draft WhatsApp Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Dialog Component */}
      <WhatsAppDialog
        listing={listing}
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </>
  );
}

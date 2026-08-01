'use client';

import React, { useState } from 'react';
import { KosListing } from '@/data/kosListings';
import { formatIDR } from '@/lib/utils';
import BobiChatWidget from '@/components/BobiChatWidget';
import WhatsAppDialog from '@/components/WhatsAppDialog';
import Link from 'next/link';
import {
  ArrowLeft,
  Sparkles,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Navigation,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Star,
  Share2,
  Heart,
  Info,
} from 'lucide-react';

interface StandaloneKosDetailProps {
  listing: KosListing;
}

export default function StandaloneKosDetail({ listing }: StandaloneKosDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pb-20">
      {/* Navigation Header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Kos Search</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Share2 className="w-4 h-4 text-teal-600" />
              <span>{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-xl border transition-all ${
                isFavorite
                  ? 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        {/* Gallery Carousel */}
        <div className="space-y-3">
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={listing.images[activeImageIndex]}
              alt={listing.name}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* AI Vision Verification Badge */}
            <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified by AI Vision</span>
            </div>

            {/* Carousel Arrow Controls */}
            {listing.images.length > 1 && (
              <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between z-10">
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev - 1 + listing.images.length) % listing.images.length
                    )
                  }
                  className="p-2.5 rounded-full bg-slate-900/70 text-white backdrop-blur-md hover:bg-slate-900 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev + 1) % listing.images.length)
                  }
                  className="p-2.5 rounded-full bg-slate-900/70 text-white backdrop-blur-md hover:bg-slate-900 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {listing.images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {listing.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
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

        {/* AI Vision Inspection Highlights */}
        <div className="bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/20 rounded-2xl p-4 sm:p-5">
          <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            Gemma AI Vision Inspection Report
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300">
            {listing.gemmaMatch.visionVerification.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-white/80 dark:bg-slate-900/80 p-3 rounded-xl border border-emerald-500/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid: Details + AI Assistant Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
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

              <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">
                {listing.name}
              </h1>

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

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
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

            {/* Description */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">
                About this Kos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {listing.description}
              </p>
            </div>

            {/* Facilities */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3">
                Included Facilities
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

            {/* Nearby Points of Interest */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-teal-600" />
                Nearby Transit, Campuses & Malls
              </h3>
              <div className="space-y-2">
                {listing.nearbyPOIs.map((poi, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200/80 dark:border-slate-700/50 text-xs"
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {poi.name}
                    </span>
                    <div className="flex items-center gap-3 text-slate-500 font-medium">
                      <span>{poi.distance}</span>
                      <span className="bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-teal-200 dark:border-teal-800">
                        {poi.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-500" />
                House Rules & Regulations
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {listing.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (1 Col) - Pricing & Bobi Chat Sidebar */}
          <div className="space-y-6">
            {/* Sticky Pricing Card */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-lg space-y-4">
              <div>
                <span className="text-xs text-slate-400 font-medium">Monthly Rent</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400">
                  {formatIDR(listing.price)}
                  <span className="text-xs font-normal text-slate-500"> / bln</span>
                </div>
                <span className="text-xs text-slate-500 block mt-1">
                  Deposit: {formatIDR(listing.deposit)} (Refundable)
                </span>
              </div>

              <button
                onClick={() => setShowWhatsAppModal(true)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-102"
              >
                <MessageSquare className="w-4 h-4" />
                Draft WhatsApp Inquiry
              </button>
            </div>

            {/* Bobi AI Assistant Widget */}
            <BobiChatWidget listing={listing} />
          </div>
        </div>
      </main>

      {/* WhatsApp Dialog */}
      <WhatsAppDialog
        listing={listing}
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </div>
  );
}

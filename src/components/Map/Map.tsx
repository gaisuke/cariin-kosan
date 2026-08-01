'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { KosListing } from '@/data/kosListings';
import { MapPin, Loader2 } from 'lucide-react';

interface MapProps {
  listings: KosListing[];
  selectedListingId: string | null;
  hoveredListingId: string | null;
  onSelectListing: (id: string) => void;
}

const MapClient = dynamic(() => import('./MapClient'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-slate-100 dark:bg-slate-900 rounded-2xl flex flex-col items-center justify-center p-6 border border-slate-200 dark:border-slate-800 animate-pulse">
      <Loader2 className="w-8 h-8 text-teal-600 animate-spin mb-3" />
      <div className="flex items-center text-slate-500 text-sm font-medium">
        <MapPin className="w-4 h-4 mr-1.5 text-teal-600" />
        Loading Interactive CariKos Map...
      </div>
    </div>
  ),
});

export default function Map(props: MapProps) {
  return <MapClient {...props} />;
}

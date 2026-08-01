'use client';

import React, { useState } from 'react';
import { ExtractedFilterBadge } from '@/lib/gemmaEngine';
import {
  Sparkles,
  Search,
  Loader2,
  X,
  SlidersHorizontal,
  RefreshCw,
} from 'lucide-react';

interface AISearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  activeBadges: ExtractedFilterBadge[];
  onRemoveBadge: (id: string) => void;
  onReset: () => void;
  summaryText: string;
}

export default function AISearchBar({
  searchQuery,
  onSearchChange,
  onAnalyze,
  isAnalyzing,
  activeBadges,
  onRemoveBadge,
  onReset,
  summaryText,
}: AISearchBarProps) {
  const exampleQueries = [
    'Setiabudi under 2.5jt dekat MRT kamar mandi dalam',
    'Kemanggisan BINUS WiFi fast 150Mbps',
    'ITB Bandung Dago loft under 2.5jt',
    'Depok UI Margonda < 2jt dekat KRL',
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-lg shadow-teal-500/5 space-y-3 transition-all">
      {/* Search Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAnalyze();
        }}
        className="relative flex items-center gap-2"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="e.g., Cari kos di Setiabudi under 2.5jt, dekat MRT, kamar mandi dalam, & free WiFi"
            className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all font-medium"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={onReset}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Analyze with AI Button */}
        <button
          type="submit"
          disabled={isAnalyzing}
          className="px-4 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-teal-500/20 transition-all hover:scale-102 shrink-0 disabled:opacity-70"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span className="hidden sm:inline">Analyzing...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-emerald-200 animate-pulse" />
              <span>Analyze with AI</span>
            </>
          )}
        </button>
      </form>

      {/* Preset Query Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-[11px] font-semibold text-slate-400 shrink-0 flex items-center gap-1">
          <SlidersHorizontal className="w-3 h-3 text-teal-600" /> Try:
        </span>
        {exampleQueries.map((query) => (
          <button
            key={query}
            onClick={() => {
              onSearchChange(query);
              setTimeout(onAnalyze, 50);
            }}
            className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 border border-slate-200/80 dark:border-slate-700 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors"
          >
            {query}
          </button>
        ))}
      </div>

      {/* Extracted Filter Badges */}
      {activeBadges.length > 0 && (
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-teal-700 dark:text-teal-300 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" /> Active AI Badges:
          </span>
          {activeBadges.map((badge) => (
            <span
              key={badge.id}
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 shadow-sm"
            >
              {badge.label}
              <button
                onClick={() => onRemoveBadge(badge.id)}
                className="p-0.5 rounded-full hover:bg-teal-200 dark:hover:bg-teal-800 transition-colors"
              >
                <X className="w-3 h-3 text-teal-600 dark:text-teal-300" />
              </button>
            </span>
          ))}

          <button
            onClick={onReset}
            className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white underline ml-auto flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" /> Reset Filters
          </button>
        </div>
      )}

      {/* AI Summary Text */}
      {summaryText && (
        <div className="text-[11px] text-slate-500 dark:text-slate-400 italic flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          {summaryText}
        </div>
      )}
    </div>
  );
}

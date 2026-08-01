'use client';

import React from 'react';
import { Sparkles, MapPin, Heart, Moon, Sun, Home } from 'lucide-react';
import { useTheme } from 'next-themes';

interface HeaderProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  favoritesCount: number;
  onToggleFavoritesOnly: () => void;
  showFavoritesOnly: boolean;
}

export default function Header({
  selectedCity,
  onSelectCity,
  favoritesCount,
  onToggleFavoritesOnly,
  showFavoritesOnly,
}: HeaderProps) {
  const { theme, setTheme } = useTheme();

  const cities = ['All Locations', 'Jakarta South', 'Jakarta Central', 'Jakarta West', 'Jakarta North', 'Jakarta East'];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-teal-500/20 text-white">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-teal-900 to-teal-600 dark:from-white dark:via-teal-200 dark:to-teal-400">
                CariKos
              </span>
              <span className="bg-teal-500/10 text-teal-700 dark:text-teal-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-teal-500/20 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-teal-500" />
                Gemma AI
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:block">
              Smart Boarding House Finder Indonesia
            </p>
          </div>
        </div>

        {/* Location Pill Selector */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-full border border-slate-200 dark:border-slate-700/60 overflow-x-auto max-w-md">
          <MapPin className="w-4 h-4 ml-2.5 text-teal-600 shrink-0" />
          {cities.map((city) => {
            const isSelected = selectedCity === city || (city === 'All Locations' && selectedCity === 'All');
            return (
              <button
                key={city}
                onClick={() => onSelectCity(city === 'All Locations' ? 'All' : city)}
                className={`px-3 py-1.2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/50'
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>

        {/* Right Actions: Favorites & Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Favorites Button */}
          <button
            onClick={onToggleFavoritesOnly}
            className={`relative p-2 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-semibold ${
              showFavoritesOnly
                ? 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900'
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-teal-500/50'
            }`}
            title="Saved Favorites"
          >
            <Heart className={`w-4 h-4 ${showFavoritesOnly ? 'fill-rose-500 text-rose-500' : 'text-slate-500 dark:text-slate-400'}`} />
            <span className="hidden sm:inline">Favorites</span>
            {favoritesCount > 0 && (
              <span className="bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all"
            aria-label="Toggle Theme"
          >
            <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
            <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-teal-400 -mt-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

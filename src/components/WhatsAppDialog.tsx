'use client';

import React, { useState } from 'react';
import { KosListing } from '@/data/kosListings';
import { formatIDR } from '@/lib/utils';
import {
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Calendar,
  X,
  Send,
  UserCheck,
} from 'lucide-react';

interface WhatsAppDialogProps {
  listing: KosListing;
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppDialog({ listing, isOpen, onClose }: WhatsAppDialogProps) {
  const [moveInDate, setMoveInDate] = useState('2026-08-15');
  const [selectedRoom, setSelectedRoom] = useState(listing.roomTypes[0]?.name || 'Standard Room');
  const [userName, setUserName] = useState('');
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Auto-formatted Indonesian WhatsApp Message
  const formattedMessage = `Halo ${listing.landlord.name},
Saya ${userName || '[Nama Saya]'} tertarik dengan kos *${listing.name}* di ${listing.area}.

Detail Rencana Sewa:
• Tipe Kamar: ${selectedRoom}
• Harga Sewa: ${formatIDR(listing.price)}/bulan
• Rencana Masuk: ${moveInDate}
${customNote ? `• Catatan Tambahan: ${customNote}\n` : ''}
Apakah kamar ini masih tersedia? Apakah saya bisa menjadwalkan survey lokasi?

Terima kasih! (Dikirim via CariKos AI)`;

  const encodedMessage = encodeURIComponent(formattedMessage);
  const whatsappUrl = `https://wa.me/${listing.landlord.phone}?text=${encodedMessage}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Draft WhatsApp Inquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct Landlord Contact for {listing.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Landlord Info Card */}
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={listing.landlord.avatar}
              alt={listing.landlord.name}
              className="w-10 h-10 rounded-full object-cover border border-emerald-500/40"
            />
            <div>
              <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1">
                {listing.landlord.name}
                {listing.landlord.verified && (
                  <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                )}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Response Time: {listing.landlord.responseRate}
              </p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
            Verified Landlord
          </span>
        </div>

        {/* Form Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. Andi Saputra"
              className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-teal-600" /> Planned Move-in
            </label>
            <input
              type="date"
              value={moveInDate}
              onChange={(e) => setMoveInDate(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
            />
          </div>
        </div>

        {/* Form Note */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Additional Questions / Notes
          </label>
          <input
            type="text"
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
            placeholder="e.g. Ada parkir mobil? / Bawa hewan peliharaan?"
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Formatted Message Preview */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Generated Message Preview:
            </span>
            <button
              onClick={handleCopy}
              className="text-xs text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 font-medium"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied to Clipboard!' : 'Copy Text'}
            </button>
          </div>
          <div className="bg-slate-900 text-teal-300 font-mono text-[11px] p-3 rounded-xl border border-slate-800 max-h-36 overflow-y-auto whitespace-pre-wrap leading-relaxed">
            {formattedMessage}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy Text'}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-emerald-600/20"
          >
            <Send className="w-4 h-4" />
            Open WhatsApp
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
}

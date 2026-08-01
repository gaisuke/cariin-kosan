'use client';

import React, { useState } from 'react';
import { KosListing } from '@/data/kosListings';
import { generateBobiResponse } from '@/lib/gemmaEngine';
import { Bot, Send, Sparkles, Loader2, User } from 'lucide-react';

interface BobiChatWidgetProps {
  listing: KosListing;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'bobi';
  text: string;
  timestamp: string;
}

export default function BobiChatWidget({ listing }: BobiChatWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bobi',
      text: `Halo! I'm Bobi, your AI Concierge for ${listing.name}. Ask me about rules, total costs, internet speed, or nearby transport!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const presets = [
    'Is late night entry allowed?',
    'How is the internet speed?',
    'Calculate total cost including deposit',
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listing, userQuestion: query }),
      });
      const json = await res.json();
      const bobiText = json.success && json.text ? json.text : generateBobiResponse(listing, query);

      const bobiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bobi',
        text: bobiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, bobiMsg]);
    } catch (err) {
      console.error('Error fetching Bobi AI response:', err);
      const bobiText = generateBobiResponse(listing, query);
      const bobiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bobi',
        text: bobiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, bobiMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
              Ask Bobi
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-medium px-1.5 py-0.2 rounded border border-emerald-500/30 flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5" /> Gemma AI
              </span>
            </h4>
            <p className="text-[11px] text-slate-400">Instant AI answers regarding {listing.area}</p>
          </div>
        </div>
      </div>

      {/* Preset Prompts */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {presets.map((preset) => (
          <button
            key={preset}
            onClick={() => handleSendMessage(preset)}
            className="text-[11px] bg-slate-800/80 hover:bg-teal-900/40 text-teal-300 hover:text-white border border-slate-700/60 hover:border-teal-500/40 px-2.5 py-1 rounded-full transition-all text-left truncate max-w-full"
          >
            💬 {preset}
          </button>
        ))}
      </div>

      {/* Message List */}
      <div className="space-y-3 max-h-56 overflow-y-auto pr-1 mb-3 scrollbar-thin scrollbar-thumb-slate-700">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2 text-xs ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bobi' && (
              <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                <Bot className="w-3.5 h-3.5" />
              </div>
            )}
            <div
              className={`p-2.5 rounded-2xl max-w-[85%] whitespace-pre-line leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-teal-600 text-white rounded-br-none'
                  : 'bg-slate-800 text-slate-200 border border-slate-700/80 rounded-bl-none'
              }`}
            >
              {msg.text}
              <span className="block text-[9px] opacity-60 text-right mt-1">{msg.timestamp}</span>
            </div>
            {msg.sender === 'user' && (
              <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                <User className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-2 items-center text-xs text-slate-400">
            <Bot className="w-4 h-4 text-teal-400 animate-spin" />
            <span className="flex items-center gap-1">
              Bobi is reasoning with Gemma AI <Loader2 className="w-3 h-3 animate-spin text-teal-400" />
            </span>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask Bobi anything about this kos..."
          className="flex-1 bg-slate-800/90 border border-slate-700 text-white text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-teal-500"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="p-2 bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white rounded-xl transition-all"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

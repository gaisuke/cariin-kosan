import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "CariKos AI — Intelligent Indonesian Boarding House Finder",
  description:
    "Find your ideal Indonesian boarding house (kos) with AI natural language search, interactive Leaflet maps, Gemma AI vision verification, and automated landlord WhatsApp communication.",
  keywords: [
    "Cari Kos",
    "Kos-kosan Indonesia",
    "Kos Jakarta",
    "Kos Bandung",
    "Kos Depok",
    "Kos Semarang",
    "Kos Bogor",
    "Gemma AI Kos Finder",
    "WhatsApp Kos Inquiry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

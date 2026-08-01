import React from 'react';
import { KOS_LISTINGS } from '@/data/kosListings';
import { notFound } from 'next/navigation';
import StandaloneKosDetail from './StandaloneKosDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return KOS_LISTINGS.map((kos) => ({
    id: kos.id,
  }));
}

export default async function KosDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const listing = KOS_LISTINGS.find((k) => k.id === resolvedParams.id);

  if (!listing) {
    notFound();
  }

  return <StandaloneKosDetail listing={listing} />;
}

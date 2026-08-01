import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatIDRShort(amount: number): string {
  if (amount >= 1000000) {
    const million = amount / 1000000;
    return `Rp ${million % 1 === 0 ? million : million.toFixed(1)}jt / bln`;
  }
  return `Rp ${(amount / 1000).toFixed(0)}k / bln`;
}

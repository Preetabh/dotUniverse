/**
 * Utility helper functions for CodexConquer
 */

export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount: number, currency: 'INR' | 'USD' | 'GBP' | 'AED' = 'INR'): string {
  const symbols = {
    INR: '₹',
    USD: '$',
    GBP: '£',
    AED: 'AED ',
  };
  return `${symbols[currency]}${amount.toLocaleString()}`;
}

import { useState } from 'react';

export type Currency = 'INR' | 'USD' | 'GBP' | 'AED';

export function useCurrencyPricing() {
  const [currency, setCurrency] = useState<Currency>('INR');

  return {
    currency,
    setCurrency,
  };
}

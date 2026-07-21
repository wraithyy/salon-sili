export interface PriceItem {
  id: string;
  label: string;
  price: number;
  category: 'pedikura' | 'podologie' | 'manikura';
  note?: string;
}

// Orientational — carried over from the salon's previous price list, not yet
// reconfirmed. Every page that renders these must show the disclaimer.
export const pricing: PriceItem[] = [
  { id: 'pedikura-kombinovana', label: 'Kombinovaná pedikúra', price: 750, category: 'pedikura' },
  { id: 'pedikura-odborna', label: 'Odborná pedikúra', price: 850, category: 'pedikura' },
  { id: 'pedikura-pristrojova', label: 'Přístrojová pedikúra', price: 700, category: 'pedikura' },
  { id: 'pedikura-gel', label: 'Gel lak na nohy', price: 250, category: 'pedikura', note: 'k pedikúře' },
  { id: 'podologie-osetreni', label: 'Podologické ošetření', price: 900, category: 'podologie' },
  { id: 'podologie-zarostly', label: 'Korekce zarostlého nehtu', price: 500, category: 'podologie' },
  { id: 'podologie-kurioko', label: 'Odstranění kuřího oka', price: 300, category: 'podologie' },
  { id: 'podologie-ortonyxie', label: 'Rovnátko na nehet (ortonyxie)', price: 600, category: 'podologie', note: 'první nasazení' },
  { id: 'manikura-klasicka', label: 'Klasická manikúra', price: 400, category: 'manikura' },
  { id: 'manikura-gel', label: 'Manikúra + gel lak', price: 750, category: 'manikura' },
  { id: 'manikura-japonska', label: 'Japonská manikúra', price: 550, category: 'manikura' },
  { id: 'manikura-doplneni', label: 'Doplnění gel laku', price: 600, category: 'manikura' },
];

export function pricesByIds(ids: string[]): PriceItem[] {
  return ids.map((id) => pricing.find((p) => p.id === id)).filter((p): p is PriceItem => Boolean(p));
}

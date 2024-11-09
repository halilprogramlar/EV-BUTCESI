export type EntryType = 'gelir' | 'gider';

export type Category =
  | 'gıda'
  | 'kira'
  | 'fatura'
  | 'eğlence'
  | 'ulaşım'
  | 'sağlık'
  | 'eğitim'
  | 'diğer';

export interface Entry {
  id: string;
  date: string;
  type: EntryType;
  category: Category;
  description: string;
  amount: number;
}

export interface Summary {
  totalIncome: number;
  totalExpense: number;
  balance: number;
}
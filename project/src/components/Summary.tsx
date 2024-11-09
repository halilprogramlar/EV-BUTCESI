import React from 'react';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { Summary as SummaryType } from '../types/expense';

interface SummaryProps {
  summary: SummaryType;
}

export default function Summary({ summary }: SummaryProps) {
  const { totalIncome, totalExpense, balance } = summary;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 rounded-full">
            <TrendingUp className="text-green-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Toplam Gelir</p>
            <p className="text-xl font-bold text-green-700">
              ₺{totalIncome.toLocaleString('tr-TR')}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-100 rounded-full">
            <TrendingDown className="text-red-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-red-600 font-medium">Toplam Gider</p>
            <p className="text-xl font-bold text-red-700">
              ₺{totalExpense.toLocaleString('tr-TR')}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-full">
            <Wallet className="text-blue-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Kalan Bakiye</p>
            <p className="text-xl font-bold text-blue-700">
              ₺{balance.toLocaleString('tr-TR')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
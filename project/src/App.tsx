import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry, Summary as SummaryType } from './types/expense';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import Summary from './components/Summary';
import { Wallet } from 'lucide-react';

export default function App() {
  const [entries, setEntries] = React.useState<Entry[]>(() => {
    const saved = localStorage.getItem('entries');
    return saved ? JSON.parse(saved) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const summary: SummaryType = React.useMemo(() => {
    const totalIncome = entries
      .filter((entry) => entry.type === 'gelir')
      .reduce((sum, entry) => sum + entry.amount, 0);

    const totalExpense = entries
      .filter((entry) => entry.type === 'gider')
      .reduce((sum, entry) => sum + entry.amount, 0);

    return {
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
    };
  }, [entries]);

  const handleAddEntry = (newEntry: Omit<Entry, 'id'>) => {
    setEntries((prev) => [...prev, { ...newEntry, id: uuidv4() }]);
  };

  const handleDeleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-100 rounded-full">
            <Wallet className="text-blue-600" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Ev Bütçesi Takip Sistemi
          </h1>
        </div>

        <div className="space-y-8">
          <Summary summary={summary} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <EntryForm onSubmit={handleAddEntry} />
            </div>
            <div className="lg:col-span-2">
              <EntryList entries={entries} onDelete={handleDeleteEntry} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
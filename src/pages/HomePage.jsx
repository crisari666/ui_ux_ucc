import { useState } from 'react';
import PageShell from '../components/layout/PageShell';
import HeroSearch from '../components/home/HeroSearch';
import QuickAccessGrid from '../components/home/QuickAccessGrid';
import InfoGrid from '../components/home/InfoGrid';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <PageShell>
      <HeroSearch onSearch={setSearchQuery} />
      <QuickAccessGrid highlightQuery={searchQuery} onComingSoon={showToast} />
      <InfoGrid />
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-eps-nav px-5 py-3 text-sm text-white shadow-lg"
        >
          {toast} — Próximamente en el prototipo
        </div>
      )}
    </PageShell>
  );
}

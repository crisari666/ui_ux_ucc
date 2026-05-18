import { useMemo, useState } from 'react';
import PageShell from '../components/layout/PageShell';
import LocatorSidebar from '../components/locator/LocatorSidebar';
import MapPlaceholder from '../components/locator/MapPlaceholder';
import { mockLocations } from '../data/mockLocations';

export default function LocatorPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Todos');
  const [selectedId, setSelectedId] = useState('ips-ibague');

  const filtered = useMemo(() => {
    let list = [...mockLocations].sort((a, b) => a.distance - b.distance);
    if (filter !== 'Todos') {
      list = list.filter((l) => l.type === filter);
    }
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.address.toLowerCase().includes(q) ||
          l.city.toLowerCase().includes(q),
      );
    }
    return list;
  }, [search, filter]);

  return (
    <PageShell navProps={{ backLink: { to: '/', label: '← Inicio' } }} showFooter={false}>
      <div className="grid min-h-[calc(100vh-52px)] md:grid-cols-[280px_1fr]">
        <LocatorSidebar
          search={search}
          onSearchChange={setSearch}
          activeFilter={filter}
          onFilterChange={setFilter}
          locations={filtered}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <MapPlaceholder selectedId={selectedId} />
      </div>
    </PageShell>
  );
}

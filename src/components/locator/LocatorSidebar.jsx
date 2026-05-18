import { filterOptions } from '../../data/mockLocations';

export default function LocatorSidebar({
  search,
  onSearchChange,
  activeFilter,
  onFilterChange,
  locations,
  selectedId,
  onSelect,
}) {
  return (
    <aside className="border-b border-[#E8E8E8] p-4 md:border-b-0 md:border-r md:p-5">
      <label htmlFor="locator-search" className="sr-only">
        Buscar ciudad o dirección
      </label>
      <input
        id="locator-search"
        type="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="🔍 Ciudad o dirección..."
        className="mb-3 w-full rounded-md border-[1.5px] border-eps-border px-3 py-2 text-sm outline-none focus:border-eps-primary"
      />
      <div className="mb-3.5 flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por tipo">
        {filterOptions.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => onFilterChange(f)}
            className={`rounded-full border-[1.5px] px-2.5 py-1 text-[12px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-eps-primary ${
              activeFilter === f
                ? 'border-eps-primary bg-eps-primary text-white'
                : 'border-eps-border text-[#555] hover:border-eps-primary'
            }`}
            aria-pressed={activeFilter === f}
          >
            {f}
          </button>
        ))}
      </div>
      <ul className="max-h-[320px] space-y-2 overflow-y-auto md:max-h-none">
        {locations.length === 0 ? (
          <li className="text-sm text-eps-muted">No hay resultados para tu búsqueda.</li>
        ) : (
          locations.map((loc, i) => {
            const selected = selectedId === loc.id;
            return (
              <li key={loc.id}>
                <button
                  type="button"
                  onClick={() => onSelect(loc.id)}
                  className={`w-full rounded-lg border-[1.5px] p-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-eps-primary ${
                    selected
                      ? 'border-eps-primary bg-eps-highlight'
                      : 'border-eps-border hover:border-eps-primary'
                  }`}
                >
                  <p className="text-[12px] font-semibold text-eps-primary">
                    📍 {loc.distance} km{ i === 0 ? ' · Más cercano' : ''}
                  </p>
                  <h3 className="text-sm font-bold text-eps-text">{loc.name}</h3>
                  <p className="text-[13px] text-eps-muted">
                    {loc.address} · {loc.hours}
                  </p>
                </button>
              </li>
            );
          })
        )}
      </ul>
    </aside>
  );
}

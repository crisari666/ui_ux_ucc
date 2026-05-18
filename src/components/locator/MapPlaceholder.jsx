import { mockLocations } from '../../data/mockLocations';

export default function MapPlaceholder({ selectedId }) {
  const pins = mockLocations;

  return (
    <div
      className="relative flex min-h-[280px] flex-1 items-center justify-center bg-eps-light-blue md:min-h-[360px]"
      role="img"
      aria-label="Mapa interactivo de puntos de atención"
    >
      <p className="text-sm font-bold text-eps-primary/40">🗺 Mapa interactivo</p>
      {pins.map((loc) => {
        const active = selectedId === loc.id;
        return (
          <button
            key={loc.id}
            type="button"
            className={`absolute -translate-x-1/2 -translate-y-full text-2xl transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-eps-primary ${
              active ? 'scale-125' : 'opacity-70 hover:scale-110'
            }`}
            style={{ left: `${loc.lng * 100}%`, top: `${loc.lat * 100}%` }}
            aria-label={loc.name}
            tabIndex={-1}
          >
            📍
          </button>
        );
      })}
    </div>
  );
}

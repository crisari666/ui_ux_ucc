# Page Override: Encontrar atención (`/encontrar-atencion`)

> Overrides `MASTER.md` for this page only.

## IA role

**Herramienta de ubicación** — encontrar IPS, farmacia o urgencias cercanas.

## Layout

| Viewport | Estructura |
|----------|------------|
| Mobile | Panel superior (búsqueda + filtros + lista scroll) + mapa debajo |
| Desktop | Sidebar 280px + mapa flexible |

## Filters (taxonomía)

- Todos | IPS | Farmacia | Urgencias

## Interactions

- Búsqueda: ciudad, dirección, nombre (client-side mock).
- Selección en lista → highlight en `MapPlaceholder`.
- Orden por distancia (mock km).

## Nav

- `backLink`: ← Inicio
- Sin footer

## Future IA

- Integrar mapa real (Google/Mapbox).
- Ficha detalle de sede + «Cómo llegar» + horarios ampliados.

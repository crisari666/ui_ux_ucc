# Page Override: Inicio (`/`)

> Overrides `MASTER.md` for this page only.

## IA role

**Hub de descubrimiento** — orientar al afiliado en < 10 s hacia la tarea correcta.

## Content blocks (orden fijo)

1. Hero + buscador («¿Qué necesitas hoy?»)
2. Accesos rápidos (4 tarjetas, 2×2 móvil / 4 cols desktop)
3. InfoGrid (régimen, urgencias, contacto)

## Primary tasks

| Tarea | Entrada | Destino |
|-------|---------|---------|
| Agendar | Tarjeta / búsqueda | `/citas/nueva` |
| IPS cercana | Tarjeta / búsqueda | `/encontrar-atencion` |
| Autorizaciones / Certificados | Tarjeta | Toast → futuro `/mi-perfil?tab=…` |

## Search behavior

- Filtra solo `QuickAccessGrid` por keywords locales.
- No es búsqueda global del portal (documentar si se expande).

## Empty / edge states

- Sin resultados de búsqueda: tarjetas atenuadas (`opacity-40`).
- Toast 3s para funciones no implementadas.

## Nav

- Footer visible.
- Nav global completa (sin `backLink`).

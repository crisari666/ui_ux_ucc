# Page Override: Mi perfil (`/mi-perfil`)

> Overrides `MASTER.md` for this page only.

## IA role

**Hub del afiliado** — todas las gestiones posesivas («Mis …») en un solo lugar.

## Navigation model

| Viewport | Patrón |
|----------|--------|
| Desktop | Sidebar vertical 220px + área de contenido |
| Mobile | Drawer izquierdo + botón menú en header de sección |

## Tabs (orden canónico)

1. Mis citas ✅
2. Autorizaciones
3. Certificados
4. Incapacidades
5. Mis PQRS
6. Datos de afiliación
7. Grupo familiar

**Default tab:** Mis citas.

## Content — Mis citas

- Lista de `AppointmentCard` (estados: Confirmada, Pendiente, Pasada).
- CTA primario: «+ Agendar nueva cita» → `/citas/nueva`.
- Fuente: `localStorage` + recarga en `location.key`.

## Placeholder tabs

Mensaje único: sección disponible en versión futura. No inventar sub-navegación hasta definir requisitos.

## Nav

- `backLink`: ← Inicio
- `showUser: true`
- Sin footer

## Future IA

- Sincronizar tabs con `?tab=` para deep linking desde Inicio y notificaciones.

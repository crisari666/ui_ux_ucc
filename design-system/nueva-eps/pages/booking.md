# Page Override: Agendar cita (`/citas/nueva/*`)

> Overrides `MASTER.md` for this page only.

## IA role

**Flujo transaccional lineal** — una sola tarea: reservar cita médica.

## Step map

| Step | Route | h1 | Completion rule |
|------|-------|-----|-----------------|
| 1 | `/citas/nueva` | ¿Qué tipo de cita necesitas? | tipo + IPS + afiliado |
| 2 | `/citas/nueva/fecha` | (calendario + slots) | fecha + hora |
| 3 | `/citas/nueva/confirmar` | Confirmar cita | confirmación |
| Done | `/citas/confirmada` | ¡Cita agendada! | — |

## Guards

- `RequireStep1` → bloquea paso 2+
- `RequireStep2` → bloquea paso 3
- Estado: `BookingContext`

## Exit points

- Back nav → Inicio (paso 1) o paso anterior
- Éxito → Mis citas (`/mi-perfil`) o Inicio

## Nav

- `backLink` en todos los pasos
- Sin footer
- Sin tabs de perfil (contexto aislado)

## Notifications (paso 3)

- SMS / Email toggles (mock)
- Resumen en `ConfirmSummary`

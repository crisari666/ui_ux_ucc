# Mapa de viaje del usuario — Nueva EPS (prototipo)

**Proyecto:** Rediseño web Nueva EPS · Prototipo React (`src/`)  
**Persona:** Carlos Mendoza — régimen contributivo · `mockUser.js`  
**Flujo principal:** Agendar cita de medicina general y verla en Mis citas  
**Mapa visual:** `journey_map.html`  
**Historias relacionadas:** US-01 a US-05 en `HISTORIAS-USUARIO.md`

---

## Resumen

Este mapa describe la experiencia del **prototipo funcional** (no el portal legacy). El rediseño elimina la redirección a subdominios, expone un CTA claro de agendamiento en el inicio y cierra el ciclo con confirmación (`AUT-XXXXXX`) y persistencia en el perfil (`localStorage`).

| Aspecto | Portal anterior (referencia) | Prototipo `src/` |
|---------|------------------------------|------------------|
| Entrada a citas | Difusa en el home | Hero + tarjeta «Agendar cita» |
| Agendamiento | Subdominio + login duplicado | `/citas/nueva` → 3 pasos en el mismo sitio |
| Cierre | Abandono / llamada | `/citas/confirmada` → `/mi-perfil` |

---

## Persona

| Campo | Valor |
|-------|--------|
| Nombre | Carlos Mendoza (CM) |
| Documento | CC 80.456.123 |
| Régimen | Contributivo |
| Contexto | Ibagué · uso principalmente móvil |
| Objetivo del viaje | Agendar medicina general y ver la cita en línea sin llamar al 01 8000 |

---

## Viaje principal — Agendar cita (7 fases)

### Leyenda de emociones

| Etiqueta | Significado |
|----------|-------------|
| Neutral | Motivación inicial, sin fricción digital aún |
| Confiado / Tranquilo / En control / Seguro | Progresión positiva en el flujo |
| Satisfecho | Confirmación exitosa |

### Tabla del viaje

| Dimensión | F1 Necesidad | F2 Inicio `/` | F3 Paso 1 `/citas/nueva` | F4 Paso 2 `/citas/nueva/fecha` | F5 Paso 3 `/citas/nueva/confirmar` | F6 Éxito `/citas/confirmada` | F7 Seguimiento `/mi-perfil` |
|-----------|--------------|---------------|--------------------------|--------------------------------|-------------------------------------|------------------------------|------------------------------|
| **Acciones** | Decide agendar por molestia de espalda | Entra al home; busca «cita» o pulsa Agendar cita | Tipo, IPS, afiliado → Continuar | Elige día y hora en calendario | Revisa resumen; SMS/email; Confirma | Lee confirmación y AUT-XXXXXX; Ver mis citas | Abre menú perfil; revisa lista con badge Confirmada |
| **Pensamientos** | «Prefiero en línea antes que llamar» | «Está claro qué hacer» | «Pocos campos, entiendo cada uno» | «Veo días y horas» | «El resumen coincide» | «Tengo autorización» | «La cita está aquí» |
| **Emoción** | Neutral | Confiado | Tranquilo | En control | Seguro | Satisfecho | Tranquilo |
| **Mejoras del rediseño** | — | CTA + buscador en tarjetas | Flujo único; validación paso 1 | Calendario + slots; guard URL | Resumen + notificaciones | Pantalla éxito dedicada | AppointmentCard + storage |
| **Fricción residual** | — | Otros accesos «Próximamente» | Datos mock | Disponibilidad simulada | WhatsApp no integrado | — | Tabs perfil pendientes |
| **Touchpoints (código)** | — | HomePage, HeroSearch, QuickAccessGrid, Nav | BookingStep1Page, StepIndicator, BookingContext | BookingStep2Page, CalendarPicker, TimeSlotList | BookingStep3Page, ConfirmSummary, NotificationOptions | BookingSuccessPage | ProfilePage, ProfileSidebar, AppointmentCard |

### Curva de emoción (prototipo)

La emoción **asciende** desde neutral en la necesidad hasta satisfecho/tranquilo tras ver la cita en el perfil. Contrasta con la curva descendente del portal legacy documentada en US-01.

```text
Necesidad → Inicio → Paso1 → Paso2 → Paso3 → Éxito → Mis citas
   ○──────────↗──────↗─────↗─────↗─────★─────★
  neutral              confianza creciente → satisfacción
```

---

## Viaje secundario — Encontrar IPS

| Fase | Ruta / componente | Acción | Emoción |
|------|-------------------|--------|---------|
| 1 Necesidad | — | Busca farmacia o IPS cercana | Neutral |
| 2 Inicio | `/` · QuickAccessGrid | Tarjeta Encontrar IPS o nav | Orientado |
| 3 Localizar | `/encontrar-atencion` · LocatorSidebar | Búsqueda + filtros Todos/IPS/Farmacia/Urgencias | En control |
| 4 Selección | MapPlaceholder | Elige sede; pin en mapa mock | Informado (limitado) |

---

## Rutas del prototipo (`App.jsx`)

| Ruta | Pantalla |
|------|----------|
| `/` | Inicio |
| `/citas/nueva` | Agendar paso 1 |
| `/citas/nueva/fecha` | Agendar paso 2 (requiere paso 1) |
| `/citas/nueva/confirmar` | Agendar paso 3 (requiere fecha/hora) |
| `/citas/confirmada` | Confirmación |
| `/mi-perfil` | Perfil — Mis citas (+ drawer móvil) |
| `/encontrar-atencion` | Localizador IPS |

---

## Insights de diseño

### Insight 1 — Entrada clara (US-03)

El home prioriza tareas frecuentes. El buscador filtra accesos rápidos por palabra clave (ej. «cita»), alineado con `HeroSearch` y `QuickAccessGrid`.

### Insight 2 — Flujo cerrado (US-04)

`RequireStep1` y `RequireStep2` evitan saltos inválidos por URL. `BookingContext` + `appointmentsStorage` conectan confirmación y perfil sin backend.

### Insight 3 — Siguiente iteración (US-05)

Implementar tabs restantes del perfil, mapa real, SSO/login real; validar QA en 375px (menú drawer, formularios, checklist US-05).

---

## Criterios de aceptación del mapa (US-01)

- [x] Fases del viaje principal alineadas con pantallas en `src/pages/`
- [x] Emociones, pensamientos, dolores y oportunidades documentados
- [x] Touchpoints con nombres de componentes React
- [x] Contraste breve con experiencia anterior
- [x] Flujo secundario localizador incluido
- [x] Versión visual HTML + MD para informe

---

## Notas para Microsoft Word

1. Copiar este archivo o exportar con Pandoc:  
   `pandoc design-system/journey_map.md -o informe-journey-nueva-eps.docx`
2. Insertar captura de `journey_map.html` (tabla + curva SVG) como figura.
3. Título sugerido: *Mapa de viaje del usuario — Portal Nueva EPS (prototipo UI/UX)*.

---

## Referencias

- Mapa visual: `design-system/journey_map.html`
- Arquitectura de información: `design-system/nueva-eps/information-architecture-map.md`
- Historias de usuario: `HISTORIAS-USUARIO.md`
- Metodología: [Arquitectura de la información — UI from Mars](https://uifrommars.com/arquitectura-de-la-informacion/)

---

*Documento alineado con el código en `src/` · Nueva EPS · Prototipo UI/UX*

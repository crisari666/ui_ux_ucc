# Historias de usuario – Rediseño Nueva EPS (prototipo React)

Proyecto universitario UI/UX · Orden lineal: **Planning → Dev → QA**

Persona principal: **Carlos Mendoza**, afiliado régimen contributivo, 34 años, usa el portal desde el celular para agendar citas sin llamar a la línea.

---

## US-01 · Investigación y definición del problema (Planning)

**Como** equipo de diseño UX  
**Quiero** documentar la experiencia actual del portal Nueva EPS y los puntos de dolor al agendar citas  
**Para** justificar el rediseño con evidencia (journey map, arquitectura de información y wireframes) antes de escribir código.

### Criterios de aceptación
- [ ] Existe un **customer journey map** con fases, emociones, dolores y oportunidades.
- [ ] Está definida la **arquitectura de información** del portal rediseñado (home, citas, perfil, localizador).
- [ ] Los **wireframes** cubren 4 flujos: inicio, agendamiento (3 pasos), perfil y localizador IPS.
- [ ] Se priorizan tareas del usuario (agendar cita, encontrar IPS) sobre contenido institucional en el home.
- [ ] La paleta y tipografía institucional están documentadas (`#1A5276`, `#E74C3C`, `#1E8449`).

### Tareas por fase
| Planning | Dev | QA |
|----------|-----|-----|
| Entrevista desk research nuevaeps.com.co | — | Revisión de pares del journey map |
| Journey map + wireframes HTML | — | Checklist: ¿cubre el flujo demo completo? |

**Entregables:** `design-system/journey_map.html`, `design-system/journey_map.md`, `design-system/nueva-eps/information-architecture-map.html`, wireframes

---

## US-02 · Diseño de interacción y criterios del prototipo (Planning)

**Como** product owner del curso  
**Quiero** especificar rutas, estados y comportamiento esperado del prototipo funcional  
**Para** que desarrollo y QA trabajen sobre el mismo alcance sin ambigüedad.

### Criterios de aceptación
- [ ] Mapa de rutas acordado: `/`, `/citas/nueva`, `/citas/nueva/fecha`, `/citas/nueva/confirmar`, `/citas/confirmada`, `/mi-perfil`, `/encontrar-atencion`.
- [ ] Flujo de agendamiento en **3 pasos** con indicador visual (activo / completado / pendiente).
- [ ] **Guards de ruta:** no se accede al paso 2 sin paso 1; no al paso 3 sin fecha y hora.
- [ ] Datos **mock** definidos (IPS, horarios mayo 2025, ubicaciones Ibagué).
- [ ] Decisiones explícitas de fuera de alcance: sin backend, sin mapas reales, autorizaciones “próximamente”.

### Tareas por fase
| Planning | Dev | QA |
|----------|-----|-----|
| Refinar wireframes en Figma (referencia visual) | Scaffold Vite + React + Router + Tailwind | Casos de prueba borrador (tabla abajo US-05) |
| Definir `BookingContext` y campos del formulario | Tokens CSS en `index.css` | Validar rutas vs. documentación |

**Entregables:** plan de implementación, README con mapa de rutas

---

## US-03 · Portal de inicio y navegación global (Dev)

**Como** afiliado no autenticado  
**Quiero** entrar a un home claro con buscador y accesos rápidos a mis tareas frecuentes  
**Para** encontrar qué necesito sin recorrer menús profundos ni noticias institucionales.

### Criterios de aceptación
- [ ] Home con hero “¿Qué necesitas hoy?”, buscador y **4 tarjetas** de acceso rápido.
- [ ] “Agendar cita” navega a `/citas/nueva`; “Encontrar IPS” a `/encontrar-atencion`.
- [ ] Buscador filtra/resalta tarjetas por texto (sin backend).
- [ ] Nav con logo, enlaces principales y “Iniciar sesión” → `/mi-perfil` (simulación).
- [ ] Grid informativo (contributivo, subsidiado, urgencias, líneas) y footer institucional.
- [ ] Layout **responsive** (menú móvil, grid 2×2 → 4 columnas).

### Tareas por fase
| Planning | Dev | QA |
|----------|-----|-----|
| Validar copy en español con wireframe | `HomePage`, `Nav`, `Footer`, `HeroSearch`, `QuickAccessGrid`, `InfoGrid` | Probar en móvil y desktop |
| — | `PageShell` reutilizable | Verificar foco y contraste WCAG básico |

---

## US-04 · Agendamiento de cita en tres pasos con confirmación (Dev)

**Como** afiliado autenticado (Carlos M.)  
**Quiero** agendar una cita médica eligiendo tipo, fecha/hora y recordatorios  
**Para** completar el trámite en línea y verla reflejada en mi perfil.

### Criterios de aceptación
- [ ] **Paso 1:** tipo de consulta, IPS, motivo opcional, afiliado; botón “Continuar” con validación.
- [ ] **Paso 2:** calendario con días disponibles, navegación de mes, lista de horarios; selección única.
- [ ] **Paso 3:** resumen dinámico, opciones SMS / email / WhatsApp; “Confirmar cita” en verde.
- [ ] Pantalla de **éxito** con número de autorización mock (`AUT-XXXXXX`).
- [ ] Cita guardada en `localStorage` y visible en **Mis citas** del perfil.
- [ ] Estado compartido vía `BookingContext`; reset al finalizar.

### Tareas por fase
| Planning | Dev | QA |
|----------|-----|-----|
| Alinear calendario con wireframe (mayo 2025) | `BookingStep1–3`, `BookingSuccess`, guards, `mockTimeSlots` | Recorrido demo: paso 1 → 12 mayo → 9:00 AM → confirmar |
| — | `CalendarPicker`, `TimeSlotList`, `ConfirmSummary`, `NotificationOptions` | Intentar saltar a paso 3 por URL (debe redirigir) |

---

## US-05 · Perfil, localizador y validación QA del prototipo (Dev + QA)

**Como** afiliado  
**Quiero** consultar mis citas y encontrar IPS cercanas, y que el equipo valide que todo el prototipo funciona  
**Para** cerrar el ciclo de diseño con un entregable demostrable y sin regresiones críticas.

### Criterios de aceptación
- [ ] **Perfil:** sidebar, lista de citas (seed + nuevas), badges Confirmada / Pendiente / Pasada, “+ Agendar nueva cita”.
- [ ] **Localizador:** búsqueda, filtros Todos/IPS/Farmacia/Urgencias, selección con pin en mapa placeholder.
- [ ] Otras secciones del menú perfil muestran placeholder “versión futura”.
- [ ] `yarn dev` / `npm run dev` ejecuta sin error (nota: ruta con `:` requiere script `node ./node_modules/vite/bin/vite.js`).
- [ ] **Checklist QA** ejecutado y documentado (ver abajo).

### Tareas por fase
| Planning | Dev | QA |
|----------|-----|-----|
| Definir datos mock de ubicaciones | `ProfilePage`, `LocatorPage`, `appointmentsStorage` | Ejecutar checklist |
| README con instrucciones de demo | Tipografía accesible (18px base) | Regresión rápida post-cambios |

### Checklist QA (aceptación final)

| # | Caso | Resultado esperado |
|---|------|-------------------|
| 1 | Home → Agendar cita | Llega a paso 1 |
| 2 | Paso 1 sin datos → paso 2 por URL | Redirige a paso 1 |
| 3 | Elegir fecha sin hora → paso 3 | No avanza / redirige |
| 4 | Flujo completo + confirmar | Éxito con AUT-XXXXXX |
| 5 | Perfil tras confirmar | Nueva cita arriba de la lista |
| 6 | Home → Encontrar IPS → filtrar | Lista y pin se actualizan |
| 7 | Buscador home “cita” | Resalta tarjeta Agendar cita |
| 8 | Vista móvil 375px | Nav, grids y formularios usables |

---

## Resumen del orden lineal

```text
US-01 Planning  →  Investigación, journey, wireframes
US-02 Planning  →  Alcance, rutas, criterios del prototipo
US-03 Dev       →  Home + navegación
US-04 Dev       →  Flujo agendamiento + persistencia
US-05 Dev + QA  →  Perfil, localizador, pruebas de aceptación
```

## Definición de terminado (DoD) global

- Código en `nueva-eps-app/` compila (`yarn build`).
- Textos en español y coherencia con persona Carlos Mendoza.
- Demo de 5 minutos ejecutable siguiendo el README.
- Historias US-01 a US-05 con criterios de aceptación verificables.

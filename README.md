# Nueva EPS – Prototipo funcional (UI/UX)

Prototipo de alta fidelidad del rediseño del portal **Nueva EPS**, desarrollado como entrega universitaria de UI/UX. Implementa las pantallas definidas en los wireframes del proyecto y el flujo de agendamiento de citas en 3 pasos.

## Requisitos

- Node.js 18+
- npm

## Instalación y ejecución

```bash
cd nueva-eps-app
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://localhost:5173`).

Para generar build de producción:

```bash
npm run build
npm run preview
```

## Mapa de rutas

| Ruta | Pantalla | Qué demuestra |
|------|----------|----------------|
| `/` | Inicio | Hero con buscador, accesos rápidos, información por régimen |
| `/citas/nueva` | Agendar – paso 1 | Tipo de cita, IPS, afiliado |
| `/citas/nueva/fecha` | Agendar – paso 2 | Calendario interactivo y selección de hora |
| `/citas/nueva/confirmar` | Agendar – paso 3 | Resumen, recordatorios y confirmación |
| `/citas/confirmada` | Éxito | Confirmación con número de autorización mock |
| `/mi-perfil` | Perfil | Mis citas (incluye citas nuevas en `localStorage`) |
| `/encontrar-atencion` | Localizador IPS | Búsqueda, filtros y mapa placeholder |

## Recorrido demo sugerido

1. En **Inicio**, haz clic en **Agendar cita**.
2. Completa el paso 1 y continúa.
3. En el calendario, elige un día disponible (p. ej. 12 de mayo de 2025) y una hora (p. ej. 9:00 AM).
4. Confirma la cita con SMS y correo activados.
5. Ve a **Ver mis citas** y comprueba que la cita aparece en el perfil.
6. Desde **Inicio**, entra a **Encontrar IPS**, filtra y selecciona un punto en el mapa.

## Stack técnico

- React 19 + Vite
- React Router
- Tailwind CSS v4
- Estado: React Context (`BookingContext`) + `localStorage` para citas

## Notas importantes

- **No hay backend** ni integración con APIs reales de Nueva EPS.
- El mapa es un **placeholder visual** (sin Google Maps / Mapbox).
- Autorizaciones y certificados muestran mensaje “Próximamente”.
- Los datos de disponibilidad y ubicaciones son **mock** para la demostración.

## Referencias de diseño

- Wireframes fuente: `../wireframes.html`
- Figma (referencia visual): [Rediseño página principal EPS](https://www.figma.com/make/LrvZTwwfTjP25VrkRC6sdf/Redise%C3%B1o-p%C3%A1gina-principal-EPS)

## Paleta institucional

| Color | Hex | Uso |
|-------|-----|-----|
| Azul primario | `#1A5276` | Botones, títulos |
| Azul nav | `#154360` | Navegación, footer |
| Rojo CTA | `#E74C3C` | Buscar, login |
| Verde éxito | `#1E8449` | Confirmar, badges |

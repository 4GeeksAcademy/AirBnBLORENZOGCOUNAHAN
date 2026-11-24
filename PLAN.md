# Plan de implementación

## Fuente de verdad

`SPEC.md` es la especificación del proyecto y prevalece ante cualquier discrepancia. Este plan resume su arquitectura, flujo visual, comportamiento y validación; `TASKS.md` registra el avance real.

## Objetivo y alcance

Construir tres páginas de alojamiento vacacional en Next.js 16 con TypeScript, Tailwind CSS y App Router:

- `/`: búsqueda, categorías y alojamientos.
- `/catalog`: resultados ordenables y área de mapa.
- `/rooms/[id]`: detalle de alojamiento, galería, anfitrión, servicios y reserva.

La interfaz se diseña primero para 375px y adapta sus layouts desde 768px. La navegación interna usa `Link` de Next.js. No se usan librerías UI preconstruidas.

## Flujo antes de implementar cada vista

1. Mantener `context.md` en la raíz con el mini-brief, usuario y componentes.
2. Capturar cada vista de referencia en un viewport de 375px y adjuntarla al agente de código.
3. Pedir al agente nombres de componentes, props y relaciones de layout; documentar la especificación en `context.md` o en comentarios antes de implementar la vista.
4. Revisar la configuración creada con `npx create-next-app` y verificar el servidor de desarrollo antes de implementar componentes.

Las imágenes de `ScreenShotsAirbnb/` son referencias del repositorio; su existencia no demuestra por sí sola que se haya realizado el flujo de captura y prompts descrito arriba. Se mantiene la especificación visual en `context.md`.

## Arquitectura

```text
app/
  layout.tsx
  page.tsx                 Home: búsqueda, categoría, carga y grid
  catalog/page.tsx         Catálogo: carga, orden, grid y mapa
  rooms/[id]/page.tsx      Ruta dinámica del detalle
components/
  Header.tsx               Marca, búsqueda controlada y menú de usuario
  SearchBar.tsx            Campo de búsqueda
  CategoryFilter.tsx       Selector horizontal de categoría
  ListingCard.tsx          Tarjeta enlazada al detalle
  ListingGrid.tsx          Grid y estado de carga/vacío
  CatalogHeader.tsx        Contador y selector de orden
  MapPlaceholder.tsx       Mapa de muestra
  PhotoGallery.tsx         Foto placeholder y navegación
  RoomHeader.tsx           Título, rating, reseñas y ubicación
  HostInfo.tsx             Avatar placeholder y datos de anfitrión
  AmenitiesList.tsx        Cuadrícula icono + etiqueta
  BookingCard.tsx          Precio, huéspedes y CTA
  BackButton.tsx           Navegación interna de regreso
  Footer.tsx               Pie compartido
  RoomDetailView.tsx       Composición del contenido del detalle
  RoomRouteContent.tsx     Lookup por ID, carga y estado del detalle
types/index.ts             Tipos Listing, Room, Amenity y SortOrder
app/mock-home.ts           Categorías de Home
app/page.tsx               Fixtures de alojamientos de Home
app/catalog/page.tsx       Fixtures del catálogo
```

La ruta `app/rooms/[id]/page.tsx` compone Header, `Suspense`, `RoomRouteContent` y Footer. Los fixtures simulados permanecen en las rutas/componentes permitidos y se identifican por ID en el detalle.

Cada componente funcional vive en su propio archivo, usa `const` y mantiene una sola responsabilidad (objetivo: no superar ~80 líneas de JSX y lógica). `ListingCard` y `ListingGrid` se comparten entre Home y Catálogo.

## Diseño y comportamiento por página

### Home

- Header con marca, búsqueda y controles de usuario.
- Búsqueda controlada por `useState`; filtra resultados en cada pulsación.
- Categorías con icono, etiqueta y estado activo; filtran las tarjetas.
- `useEffect` simula la carga de datos al montar; muestra carga hasta recibirlos.
- Grid: 1 columna en 375px, 2 desde 768px y 3 desde 1024px.
- Cada tarjeta navega a `/rooms/[id]` usando `Link`.

### Catálogo

- Carga simulada, contador de resultados y orden ascendente/descendente por precio.
- Reutiliza tarjetas de Home.
- Mapa placeholder debajo del grid en móvil y a su derecha desde 768px.

### Detalle

- Resuelve el alojamiento por el ID dinámico y maneja el ID inexistente.
- Carga simulada con indicador visible.
- Galería de placeholders con navegación anterior/siguiente.
- Cabecera, anfitrión, servicios con icono/etiqueta y reserva.
- Contador de huéspedes limitado al rango `[minGuests, maxGuests]`.
- En móvil apila el contenido; desde 768px presenta contenido y reserva en columnas.
- Botón de regreso al Catálogo con `Link`.

## Estilos y calidad

- Tailwind CSS para los estilos; sin componentes UI externos, CSS Modules ni objetos `style={{}}`.
- Diseño responsive mobile-first, sin overflow horizontal y con controles usables en móvil.
- Tipos TypeScript estrictos para los datos y props; sin `any`.
- Todos los enlaces internos usan `Link`; sin navegación interna con `<a href>`.

## Fases

1. Alinear documentación y registrar el brief/las especificaciones visuales.
2. Completar tipos y datos simulados compartidos.
3. Implementar Header, tarjetas, navegación, galería, reserva y componentes compartidos.
4. Ajustar las tres rutas, estados, filtros, ordenación y layouts responsive.
5. Ejecutar validaciones dirigidas y actualizar `TASKS.md` con evidencia; dejar explícitas las comprobaciones manuales pendientes.

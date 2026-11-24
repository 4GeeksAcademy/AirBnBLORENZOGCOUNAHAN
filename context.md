# Brief de producto y especificación visual

## Contexto

Construimos una interfaz de alquiler vacacional para personas que quieren descubrir alojamientos, comparar precios y revisar los detalles antes de reservar. La persona usuaria principal es una viajera o un viajero que busca una estancia por destino o categoría; el proyecto replica tres vistas de navegación del producto.

## Páginas y componentes

### Home (`/`)

- **Header**: marca enlazada al inicio, búsqueda controlada y menú de usuario; contiene `SearchBar`.
- **SearchBar**: recibe `value` y `onChange`; en cada pulsación actualiza el filtro.
- **CategoryFilter**: recibe categorías `{ label, icon }`, categoría activa y callback; fila horizontal de icono + etiqueta.
- **ListingGrid**: recibe `listings` y `loading`; muestra carga, estado vacío o grid responsive.
- **ListingCard**: recibe los datos de un alojamiento y enlaza a `/rooms/[id]`.
- **Footer**: navegación secundaria.
- **Relación de layout**: Header → categorías → grid → Footer. Grid de una columna en 375px, dos desde 768px y tres desde 1024px.

### Catálogo (`/catalog`)

- **Header** y **BackButton**: navegación superior y regreso a Home.
- **CatalogHeader**: recibe el total, el orden seleccionado y callback de cambio.
- **ListingGrid** reutiliza **ListingCard** de Home.
- **MapPlaceholder**: ocupa la columna derecha desde 768px y se coloca debajo de los resultados en móvil.
- **Relación de layout**: encabezado de resultados → lista y mapa en columnas responsive → Footer.

### Detalle (`/rooms/[id]`)

- **Header** y **BackButton**: navegación y regreso al Catálogo.
- **PhotoGallery**: recibe fotos, índice actual y callbacks anterior/siguiente.
- **RoomHeader**: título, rating, reseñas y ubicación.
- **HostInfo**: avatar placeholder, nombre y años como anfitrión.
- **AmenitiesList**: lista de amenidades `{ id, name, icon }`.
- **BookingCard**: precio, huéspedes actual, mínimos/máximos y callback; incluye CTA.
- **Relación de layout**: galería arriba; en móvil, contenido y reserva apilados; desde 768px, contenido a la izquierda y reserva a la derecha; Footer al final.

## Registro del flujo de visión

Las capturas PNG de referencia para las tres vistas se cargaron y el usuario confirmó que se usaron en el flujo de prompts de visión. Las especificaciones de componentes, props y layout quedaron documentadas aquí y en `SPEC.md`, `PLAN.md` y `TASKS.md`.

Los siguientes prompts resumen el análisis solicitado para cada captura:

**Prompt Home:** “Analiza la captura móvil adjunta de la Home. Enumera los componentes, las props que necesita cada uno y cómo se relacionan en el layout. Identifica navbar/búsqueda, filtros, tarjetas y navegación.”

**Prompt Catálogo:** “Analiza la captura móvil adjunta del catálogo. Enumera los componentes, sus props y sus relaciones de layout. Identifica el encabezado/orden, lista de alojamientos y ubicación del mapa.”

**Prompt Detalle:** “Analiza la captura móvil adjunta del detalle de una habitación. Enumera los componentes, sus props y sus relaciones de layout. Identifica galería, cabecera, anfitrión, servicios y reserva.”

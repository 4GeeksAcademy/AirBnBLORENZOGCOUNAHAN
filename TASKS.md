# Checklist de implementación alineado con SPEC.md

Marca un requisito como completo solo cuando esté implementado y comprobado. Las verificaciones manuales y el flujo de visión marcados como completos fueron confirmados por el usuario. Las acciones de GitHub/Codespaces se deben marcar solo cuando se hayan ejecutado.

## Preparación y flujo de visión

- [x] `context.md` en la raíz describe páginas, componentes, usuario y objetivo con palabras propias.
- [x] Captura original de cada página en viewport de 375px (confirmado por el usuario).
- [x] Cada captura se adjunta al agente con prompt para identificar componentes, props y relaciones de layout (confirmado por el usuario).
- [x] Especificación de cada vista documentada en `context.md` o comentarios antes de implementarla (confirmado por el usuario).
- [ ] Se revisaron los comandos de `npx create-next-app` y el servidor arrancó antes de implementar componentes.
- [ ] Repositorio propio en GitHub, Git inicializado, primer commit subido y proyecto abierto en Codespaces o clonado localmente.

## Proyecto y calidad base

- [x] Next.js 16, TypeScript, Tailwind CSS y App Router.
- [x] Carpetas `/app`, `/components` y `/types`.
- [x] `tsconfig.json` usa `strict: true`; datos y props tienen tipos específicos, sin `any`.
- [x] Sin librerías UI preconstruidas, CSS Modules, clases React ni objetos `style={{}}`.
- [x] Componentes funcionales definidos con `const`, en archivos individuales, responsabilidad única y ~80 líneas máximo.
- [x] README documenta instalación y ejecución.

## Home (`/`)

- [x] Navbar incluye marca/logo, búsqueda y controles/iconos de usuario.
- [x] Búsqueda usa `useState` y filtra en tiempo real en cada pulsación.
- [x] Categorías muestran icono + etiqueta, usan `useState`, filtran y resaltan la activa.
- [x] Tarjetas muestran placeholder de imagen, título, precio por noche y rating.
- [x] `useEffect` carga datos simulados al montar y se ve el indicador de carga.
- [x] Grid de una columna en móvil, dos desde 768px y tres desde 1024px.

## Catálogo (`/catalog`)

- [x] Ruta implementada con contador de resultados y orden ascendente/descendente por precio.
- [x] Se reutiliza `ListingCard` de Home.
- [x] Mapa placeholder debajo de las tarjetas en móvil y a la derecha desde 768px.
- [x] `useEffect` simula la carga y muestra indicador hasta disponer de datos.

## Detalle (`/rooms/[id]`)

- [x] Ruta dinámica obtiene el ID y carga el alojamiento correspondiente; ID inexistente se maneja.
- [x] `useEffect` simula la carga y muestra indicador.
- [x] Galería placeholder muestra la foto activa y navega anterior/siguiente.
- [x] Cabecera muestra título, rating, reseñas y ubicación.
- [x] Anfitrión muestra avatar placeholder, nombre y años como anfitrión.
- [x] Servicios se muestran como pares icono + etiqueta.
- [x] Reserva muestra precio, CTA y contador limitado a `[minGuests, maxGuests]`.
- [x] Layout apilado en móvil y con reserva a la derecha desde 768px.

## Navegación y responsive

- [x] Las tres rutas `/`, `/catalog` y `/rooms/[id]` son navegables.
- [x] Clic en tarjetas de Home y Catálogo abre el detalle usando `Link`.
- [x] Botón de regreso del detalle vuelve al Catálogo con `Link`.
- [x] Ninguna navegación interna usa `<a href>`; no hay recarga completa entre páginas.
- [x] Diseño probado manualmente a 375px, 768px y 1024px; confirmado por el usuario.

## Datos, tipos y estilos

- [x] Interfaces `Listing`, `Room` y `Amenity`; props de componentes tipadas.
- [x] `ListingCard` y grid se reutilizan entre Home y Catálogo.
- [x] Tailwind utilities cubren los estilos; breakpoints y estados hover/activo visibles.

## Verificación final

- [x] `npm run lint`.
- [x] `npm run build`.
- [ ] Dev server probado y flujos de búsqueda, categorías, orden, galería y huéspedes comprobados.
- [ ] Validación manual de las tres vistas en los tres tamaños objetivo.
- [ ] Actualizar este checklist con resultados reales; no declarar 100% si queda una verificación pendiente.

## Opcionales (fuera de la evaluación base)

- [ ] Mapa interactivo con marcadores.
- [ ] Date picker funcional y total por noches.
- [ ] Favoritos persistentes.

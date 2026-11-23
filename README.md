# Airbnb Clone - Next.js 16 Project

Una réplica moderna de la interfaz de Airbnb construida con **Next.js 16**, **TypeScript**, **Tailwind CSS** y el **App Router**.

**Proyecto completo con estructura base, componentes y tipos TypeScript implementados.**

---

## 📸 Referencias Visuales

Consulta `ScreenShotsAirbnb/` para ver ejemplos visuales de cada página:

- **airbnbhome.png** - Home con búsqueda y filtros
- **airbnbhomeconmodal.png** - Home con modal de preferencias
- **airbnbhomes.png** - Catálogo de resultados
- **airbnbrooms.png** - Detalle de habitación

---

## 📖 Documentación

La documentación del proyecto se encuentra en los siguientes archivos:

| Archivo | Propósito |
|---------|-----------|
| [SPEC.md](./SPEC.md) | Especificación técnica completa - fuente de verdad del proyecto |
| [PLAN.md](./PLAN.md) | Arquitectura, estructura de carpetas y componentes |
| [TASKS.md](./TASKS.md) | Checklist de verificación (144 items) |
| [ESTATUS_PROYECTO.md](./ESTATUS_PROYECTO.md) | Estado actual e índice de navegación |

---

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
# Abre http://localhost:3000

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start

# Verificar código
npm run lint
```

## Estructura del Proyecto

```
/
├── app/
│   ├── layout.tsx              # Layout raíz
│   ├── page.tsx                # Home (/)
│   ├── catalog/
│   │   └── page.tsx            # Catalog (/catalog)
│   └── rooms/
│       └── [id]/
│           └── page.tsx        # Room detail (/rooms/[id])
├── components/
│   ├── Navbar.tsx
│   ├── SearchBar.tsx
│   ├── CategoryFilter.tsx
│   ├── ListingCard.tsx
│   ├── ListingGrid.tsx
│   ├── CatalogHeader.tsx
│   ├── MapPlaceholder.tsx
│   ├── PhotoGallery.tsx
│   ├── RoomHeader.tsx
│   ├── HostInfo.tsx
│   ├── AmenitiesList.tsx
│   ├── BookingCard.tsx
│   └── BackButton.tsx
├── types/
│   └── index.ts                # TypeScript types
├── data/
│   └── listings.ts             # Mock data
├── context.md
└── package.json
```

## Stack Tecnológico

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático (strict mode)
- **Tailwind CSS** - Estilos utility-first
- **React 19** - Incluido con Next.js 16

## Especificaciones Técnicas

### Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home - Búsqueda y filtro de alojamientos |
| `/catalog` | Catálogo - Resultados con ordenamiento |
| `/rooms/[id]` | Detalle - Información completa del alojamiento |

### Componentes

**Navegación**: Navbar  
**Búsqueda**: SearchBar, CategoryFilter  
**Catálogo**: ListingCard, ListingGrid, CatalogHeader  
**Detalle**: RoomHeader, PhotoGallery, HostInfo, AmenitiesList, BookingCard  
**Utilidad**: BackButton, MapPlaceholder

### Responsive Design

- Mobile: 375px
- Tablet: 768px (`md:`)
- Desktop: 1024px+ (`lg:`)

## Convenciones de Código

- **TypeScript**: Strict mode, tipos explícitos
- **Componentes**: Funcionales con `const`, una responsabilidad
- **Tailwind**: Solo utilities, sin CSS Modules
- **Navigation**: Usar `<Link>` de Next.js
- **Data**: Simulado con `useState` + `useEffect`
- **Comments**: Solo cuando aclaran lógica compleja

## 📄 Licencia

Proyecto educativo para 4Geeks Academy

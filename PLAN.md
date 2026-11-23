# 📐 PLAN - Arquitectura y Estructura

**Proyecto**: AirBnB Clone  
**Fecha**: 2026-11-23  
**Estado**: ✅ Configurado 100%

---

## 📸 Referencias Visuales

Consulta `ScreenShotsAirbnb/` para ver ejemplos visuales de la estructura implementada:

- **airbnbhome.png** - Home page (/) con SearchBar, CategoryFilter, ListingGrid
- **airbnbhomeconmodal.png** - Home con modal de preferencias (UX adicional)
- **airbnbhomes.png** - Catalog page (/catalog) con MapPlaceholder
- **airbnbrooms.png** - Room Detail page (/rooms/[id]) con PhotoGallery, BookingCard, AmenitiesList

Estas imágenes sirven como guía visual para la implementación de cada página y componente.

---

## 📂 Estructura de Carpetas (ACTUAL)

```
/workspaces/AirBnBLORENZOGCOUNAHAN/
│
├── 📚 DOCUMENTACIÓN
│   ├── SPEC.md                        ⭐ Especificación técnica
│   ├── PLAN.md                        📐 Este archivo (arquitectura)
│   ├── TASKS.md                       ✅ Verificación de requisitos
│   ├── README.md                      🔧 Instalación
│   ├── context.md                     🎨 Brief de producto
│   └── ESTATUS_PROYECTO.md            📊 Estado + próximos pasos
│
├── 📸 REFERENCIAS VISUALES
│   └── ScreenShotsAirbnb/             Visual reference para cada página
│       ├── airbnbhome.png            🏠 Home page
│       ├── airbnbhomeconmodal.png    🍪 Home con modal
│       ├── airbnbhomes.png           📋 Catalog page
│       └── airbnbrooms.png           🏨 Room detail page
│
├── 📄 CONFIGURACIÓN
│   ├── package.json                   Dependencies
│   ├── package-lock.json              Lock
│   ├── tsconfig.json                  TypeScript (strict: true)
│   ├── next.config.ts                 Next.js config
│   ├── tailwind.config.ts             Tailwind config
│   ├── postcss.config.mjs             PostCSS
│   ├── .eslintrc.json                 ESLint
│   └── .gitignore                     Git
│
├── 🎨 ESTILOS
│   └── styles/
│       └── globals.css                Estilos globales Tailwind
│
├── 📄 PÁGINAS (3 total)
│   └── app/
│       ├── layout.tsx                 Layout raíz
│       ├── page.tsx                   🏠 HOME (/)
│       ├── catalog/
│       │   └── page.tsx               📋 CATALOG (/catalog)
│       └── rooms/
│           └── [id]/
│               └── page.tsx           🏨 DETAIL (/rooms/[id])
│
├── 🧩 COMPONENTES (13 total)
│   └── components/
│       ├── Header.tsx                 Navbar
│       ├── SearchBar.tsx              Input de búsqueda
│       ├── CategoryFilter.tsx         Selector de categorías
│       ├── ListingCard.tsx            Tarjeta individual (reutilizable)
│       ├── ListingGrid.tsx            Grid de tarjetas
│       ├── CatalogHeader.tsx          Encabezado con contador
│       ├── MapPlaceholder.tsx         Área de mapa
│       ├── PhotoGallery.tsx           Galería de fotos
│       ├── RoomHeader.tsx             Título + rating
│       ├── HostInfo.tsx               Tarjeta de anfitrión
│       ├── AmenitiesList.tsx          Cuadrícula de amenities
│       ├── BookingCard.tsx            Panel de reserva
│       └── Footer.tsx                 Pie de página
│
├── 🎨 TIPOS
│   └── types/
│       └── index.ts                   Interfaces TypeScript
│
├── 📦 PÚBLICO
│   └── public/                        Assets estáticos
│
└── 🔧 HERRAMIENTAS
    ├── .next/                         Build cache (ignorar)
    ├── node_modules/                  Dependencies (ignorar)
    └── .git/                          Version control

```

---

## 🏗️ Arquitectura de Componentes

### Jerarquía de Componentes

```
Layout (app/layout.tsx)
│
├── Page / (Home)
│   ├── Header
│   ├── SearchBar
│   ├── CategoryFilter
│   ├── ListingGrid
│   │   └── ListingCard (reutilizable)
│   └── Footer
│
├── Page /catalog (Catalog)
│   ├── Header
│   ├── BackButton
│   ├── CatalogHeader
│   ├── Grid + MapPlaceholder
│   │   ├── ListingGrid
│   │   │   └── ListingCard (reutilizable)
│   │   └── MapPlaceholder (sticky)
│   └── Footer
│
└── Page /rooms/[id] (Detail)
    ├── Header
    ├── BackButton
    ├── Grid
    │   ├── PhotoGallery
    │   ├── RoomHeader
    │   ├── HostInfo
    │   └── AmenitiesList
    │   │
    │   └── BookingCard (sticky right)
    └── Footer
```

### Componentes Reutilizables

**ListingCard**: Usado en Home + Catalog
```typescript
// Recibe props: id, image, title, price, rating, reviews
// Retorna: Tarjeta individual con imagen, título, precio, rating
```

**ListingGrid**: Usado en Home + Catalog
```typescript
// Recibe props: listings[], loading
// Retorna: Grid responsivo (1→2→3 cols)
```

**Header/Navbar**: Usado en todas las páginas
```typescript
// Recibe props: —
// Retorna: Barra de navegación con logo, busca, usuario
```

---

## 🔀 Flujo de Datos

### Home Page (/)
```
user action
    ↓
SearchBar onChange
    ↓
setSearchTerm(value)
    ↓
listings.filter(bySearchTerm && byCategory)
    ↓
ListingGrid recibe filtered listings
    ↓
ListingCard renderiza cada una
```

### Catalog Page (/catalog)
```
user action
    ↓
CatalogHeader onChange
    ↓
setSortOrder('asc' | 'desc')
    ↓
listings.sort(byPrice)
    ↓
ListingGrid recibe sorted listings
    ↓
ListingCard renderiza cada una
```

### Room Detail Page (/rooms/[id])
```
URL params
    ↓
useParams() → roomId
    ↓
useEffect → fetch mockRooms[roomId]
    ↓
setRoom(data)
    ↓
componentes reciben room data
    ↓
user clicks gallery buttons
    ↓
setPhotoIndex(next/prev)
    ↓
PhotoGallery re-renderiza
```

---

## 🔧 Hooks por Página

### Home (/)
```typescript
// Estado
const [searchTerm, setSearchTerm] = useState('');
const [activeCategory, setActiveCategory] = useState<string | null>(null);
const [listings, setListings] = useState<Listing[]>([]);
const [loading, setLoading] = useState(true);

// Efectos
useEffect(() => {
  // Simulación de carga asincrónica
  setLoading(true);
  setTimeout(() => {
    setListings([...]); // Datos simulados
    setLoading(false);
  }, 1500);
}, []);
```

### Catalog (/catalog)
```typescript
// Estado
const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
const [listings, setListings] = useState<Listing[]>([]);
const [loading, setLoading] = useState(true);

// Efectos
useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setListings([...]);
    setLoading(false);
  }, 1500);
}, []);
```

### Room Detail (/rooms/[id])
```typescript
// Router
const params = useParams();
const roomId = params.id as string;

// Estado
const [room, setRoom] = useState<Room | null>(null);
const [loading, setLoading] = useState(true);
const [photoIndex, setPhotoIndex] = useState(0);
const [guestCount, setGuestCount] = useState(1);

// Efectos
useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setRoom(mockRooms[roomId]);
    setLoading(false);
  }, 1500);
}, [roomId]);

// Funciones
const handlePrevPhoto = () => {
  setPhotoIndex(prev => prev === 0 ? room!.photos.length - 1 : prev - 1);
};

const handleNextPhoto = () => {
  setPhotoIndex(prev => prev === room!.photos.length - 1 ? 0 : prev + 1);
};
```

---

## 🎨 Tipos TypeScript

### Archivo: `/types/index.ts`

```typescript
export interface Listing {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  category: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string; // emoji o clase
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Room extends Listing {
  description: string;
  photos: string[];
  hostName: string;
  hostAvatar: string;
  yearsAsHost: number;
  amenities: Amenity[];
  maxGuests: number;
  reviews: Review[];
}

export type SortOrder = 'asc' | 'desc';
```

---

## 🌐 Rutas

| Ruta | Componente | Propósito | Estado |
|------|-----------|----------|--------|
| `/` | `app/page.tsx` | Home con búsqueda y grid | ✅ |
| `/catalog` | `app/catalog/page.tsx` | Resultados con ordenación | ✅ |
| `/rooms/[id]` | `app/rooms/[id]/page.tsx` | Detalle del alojamiento | ✅ |

---

## 📊 Componentes Detallados

### 1. Header (navbar)
- **Archivo**: `components/Header.tsx`
- **Props**: `titulo?: string`
- **Estado**: ninguno
- **Uso**: Todas las páginas
- **Responsive**: Collapsible en mobile

### 2. SearchBar
- **Archivo**: `components/SearchBar.tsx`
- **Props**: `value: string`, `onChange: (value: string) => void`
- **Estado**: ninguno (controlado por padre)
- **Uso**: Home
- **Responsive**: Full-width

### 3. CategoryFilter
- **Archivo**: `components/CategoryFilter.tsx`
- **Props**: `categories: string[]`, `activeCategory: string | null`, `onSelect: (cat: string) => void`
- **Estado**: ninguno (controlado por padre)
- **Uso**: Home
- **Responsive**: Scroll horizontal en mobile

### 4. ListingCard
- **Archivo**: `components/ListingCard.tsx`
- **Props**: `id: string`, `image: string`, `title: string`, `price: number`, `rating: number`, `reviews: number`
- **Estado**: ninguno
- **Uso**: Home, Catalog (reutilizable)
- **Responsive**: Adapta a grid

### 5. ListingGrid
- **Archivo**: `components/ListingGrid.tsx`
- **Props**: `listings: Listing[]`, `loading: boolean`
- **Estado**: ninguno
- **Uso**: Home, Catalog (reutilizable)
- **Responsive**: 1→2→3 cols

### 6. CatalogHeader
- **Archivo**: `components/CatalogHeader.tsx`
- **Props**: `totalResults: number`, `sortOrder: 'asc' | 'desc'`, `onSortChange: (order) => void`
- **Estado**: ninguno (controlado por padre)
- **Uso**: Catalog
- **Responsive**: Stack vertical en mobile

### 7. MapPlaceholder
- **Archivo**: `components/MapPlaceholder.tsx`
- **Props**: ninguna
- **Estado**: ninguno
- **Uso**: Catalog
- **Responsive**: Sticky right en desktop, abajo en mobile

### 8. PhotoGallery
- **Archivo**: `components/PhotoGallery.tsx`
- **Props**: `photos: string[]`, `currentIndex: number`, `onPrev: () => void`, `onNext: () => void`
- **Estado**: ninguno (controlado por padre)
- **Uso**: Room Detail
- **Responsive**: Full-width

### 9. RoomHeader
- **Archivo**: `components/RoomHeader.tsx`
- **Props**: `title: string`, `rating: number`, `reviewCount: number`, `location: string`
- **Estado**: ninguno
- **Uso**: Room Detail
- **Responsive**: Stack vertical en mobile

### 10. HostInfo
- **Archivo**: `components/HostInfo.tsx`
- **Props**: `name: string`, `avatar: string`, `yearsAsHost: number`
- **Estado**: ninguno
- **Uso**: Room Detail
- **Responsive**: Card horizontal

### 11. AmenitiesList
- **Archivo**: `components/AmenitiesList.tsx`
- **Props**: `amenities: Amenity[]`
- **Estado**: ninguno
- **Uso**: Room Detail
- **Responsive**: 2→3→4 cols

### 12. BookingCard
- **Archivo**: `components/BookingCard.tsx`
- **Props**: `pricePerNight: number`, `guestCount: number`, `onGuestChange: (count: number) => void`, `maxGuests: number`
- **Estado**: ninguno (guestCount controlado por padre)
- **Uso**: Room Detail
- **Responsive**: Sticky right en desktop, sticky bottom en mobile

### 13. Footer
- **Archivo**: `components/Footer.tsx`
- **Props**: ninguna
- **Estado**: ninguno
- **Uso**: Todas las páginas
- **Responsive**: Stack vertical en mobile

---

## 🚀 Fases de Implementación

### Fase 1: Configuración (1-2 horas)
- [x] Proyecto Next.js 16 configurado
- [x] TypeScript en strict mode
- [x] Tailwind CSS integrado
- [x] Estructura de carpetas lista
- [x] Dev server funciona

### Fase 2: Tipos TypeScript (30 minutos)
- [x] `/types/index.ts` creado
- [x] Interfaces: `Listing`, `Room`, `Amenity`, etc.
- [x] Tipos específicos (no `any`)

### Fase 3: Componentes Base (2-3 horas) [PRÓXIMO]
- [ ] Header
- [ ] SearchBar
- [ ] CategoryFilter
- [ ] ListingCard
- [ ] PhotoGallery
- [ ] RoomHeader
- [ ] HostInfo
- [ ] AmenitiesList
- [ ] BookingCard
- [ ] etc.

### Fase 4: Home Page (1-2 horas)
- [ ] Implementar estado (searchTerm, activeCategory)
- [ ] Conectar SearchBar → filtrar
- [ ] Conectar CategoryFilter → filtrar
- [ ] useEffect con datos simulados
- [ ] ListingGrid con ListingCard
- [ ] Tailwind CSS styling

### Fase 5: Catalog Page (1 hora)
- [ ] Implementar estado (sortOrder)
- [ ] CatalogHeader con contador
- [ ] Ordenación por precio
- [ ] MapPlaceholder
- [ ] Responsive layout (grid + mapa)

### Fase 6: Room Detail Page (1-2 horas)
- [ ] useParams() para leer [id]
- [ ] PhotoGallery con navegación
- [ ] RoomHeader + HostInfo + AmenitiesList
- [ ] BookingCard con contador
- [ ] useEffect con datos simulados
- [ ] Responsive layout (content + booking sticky)

### Fase 7: Navegación y Polish (30 minutos)
- [ ] `<Link>` entre páginas
- [ ] Testing responsive (375px, 768px, 1024px)
- [ ] Code review
- [ ] Bug fixes

---

## ✅ Estado Actual

| Elemento | Estado | Notas |
|----------|--------|-------|
| Proyecto Next.js | ✅ | v16.4.6 con TypeScript y Tailwind |
| Rutas (3) | ✅ | Todas creadas y compilables |
| Componentes (13) | ✅ | Todos creados con lógica base |
| Tipos TypeScript | ✅ | Interfaces definidas |
| Build | ✅ | `npm run build` sin errores |
| Dev Server | ✅ | `npm run dev` funciona |
| Documentación | ✅ | SPEC.md, PLAN.md, TASKS.md |

---

## 🎯 Próximos Pasos

1. **Leer SPEC.md** (20 min) - Especificación técnica
2. **Leer TASKS.md** (5 min) - Checklist de requisitos
3. **Comenzar Fase 3** - Implementar componentes base con diseño visual
4. **Testing** - Verificar en 375px, 768px, 1024px

---

**Versión**: 1.0  
**Estado**: ✅ ESTRUCTURA LISTA

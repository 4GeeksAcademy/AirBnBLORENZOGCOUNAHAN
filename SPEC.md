# 📋 SPEC - Airbnb Clone

**Proyecto**: AirBnB Clone  
**Rol**: Desarrollador Frontend Junior  
**Tech Stack**: Next.js 16 + TypeScript + Tailwind CSS + App Router  
**Fecha**: 2026-11-23

---

## 🎯 Resumen Ejecutivo

Implementar una réplica funcional de la interfaz de Airbnb usando Next.js 16 con TypeScript y Tailwind CSS.

- **3 vistas principales**: Home, Catalog, Room Detail
- **13 componentes reutilizables**: Header, SearchBar, CategoryFilter, ListingCard, etc.
- **Enfoque mobile-first**: 375px → 768px → 1024px
- **100% TypeScript**: Tipado estático, sin `any`

---

## 📖 Tabla de Contenidos

1. [Objetivos](#objetivos)
2. [Tech Stack](#tech-stack)
3. [Especificación por Página](#especificación-por-página)
4. [Componentes (13 total)](#componentes)
5. [Criterios de Evaluación](#criterios-de-evaluación)
6. [Convenciones de Código](#convenciones-de-código)
7. [Retos Opcionales](#retos-opcionales)

---

## 🎯 Objetivos

### Primarios
- ✅ Validar arquitectura modular de componentes React
- ✅ Implementar navegación SPA sin recarga de página
- ✅ Crear componentes reutilizables (una responsabilidad)
- ✅ Dominar Next.js 16 App Router con rutas dinámicas
- ✅ Responsive design mobile-first (375px → 1024px)

### De Aprendizaje
- ✅ Capturar pantallas UI real → especificaciones de componentes
- ✅ `useState`: búsqueda, filtros, contadores, carga
- ✅ `useEffect`: simulación asincrónica de datos
- ✅ TypeScript: interfaces para datos de dominio
- ✅ Tailwind CSS: responsive design sin CSS Modules

---

## 🔧 Tech Stack

### Obligatorio
| Tecnología | Versión | Uso |
|---|---|---|
| **Next.js** | 16+ | Framework, App Router |
| **React** | 19+ | Componentes funcionales, Hooks |
| **TypeScript** | 5+ | Tipado estático |
| **Tailwind CSS** | 4+ | Estilos responsive |
| **Node.js** | 18+ | Runtime |

### Prohibido
- ❌ Librerías UI: shadcn/ui, MUI, Ant Design, Chakra UI
- ❌ CSS Modules, styled-components
- ❌ Componentes de clase (`class extends React.Component`)
- ❌ `<a href>` para navegación interna
- ❌ Estilos inline con objetos `style={{}}`

---

## 📄 Especificación por Página

### 🏠 Página Home (`/`)

**Propósito**: Pantalla principal con búsqueda, filtros y grid de alojamientos.

**Layout**:
```
┌─────────────────────────────────────────┐
│          Navbar                         │
├─────────────────────────────────────────┤
│  SearchBar (campo de búsqueda)          │
├─────────────────────────────────────────┤
│  [Playa] [Mansiones] [Cabañas] ...      │  ← CategoryFilter
├─────────────────────────────────────────┤
│  ┌────────────┐ ┌────────────┐           │
│  │ Alojamiento│ │ Alojamiento│ ...      │  ← Grid 1→2→3 cols
│  │ [IMG]      │ │ [IMG]      │           │
│  │ Título     │ │ Título     │           │
│  │ $120/noche │ │ $450/noche │           │
│  │ ⭐ 4.8     │ │ ⭐ 4.9     │           │
│  └────────────┘ └────────────┘           │
│        [Loading...]                     │
└─────────────────────────────────────────┘
```

**Componentes** (en esta página):
| Componente | Props | Estado |
|---|---|---|
| Navbar | — | — |
| SearchBar | value, onChange | searchTerm |
| CategoryFilter | categories, activeCategory, onSelect | activeCategory |
| ListingGrid | listings, loading | — |
| ListingCard | id, image, title, price, rating, reviews | — |

**Hooks**:
```typescript
const [searchTerm, setSearchTerm] = useState('');
const [activeCategory, setActiveCategory] = useState<string | null>(null);
const [listings, setListings] = useState<Listing[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setListings([...]); // Datos simulados
    setLoading(false);
  }, 1000);
}, []);
```

**Lógica**:
1. Filtrar por `searchTerm` (case-insensitive)
2. Filtrar por `activeCategory`
3. Mostrar indicador de carga mientras `loading === true`

**Responsive**:
- **375px**: grid-cols-1
- **768px+**: grid-cols-2
- **1024px+**: grid-cols-3

---

### 📋 Página Catalog (`/catalog`)

**Propósito**: Resultados de búsqueda con ordenación y mapa.

**Layout**:
```
┌─────────────────────────────────────────────────────────────┐
│          Navbar                                             │
├─────────────────────────────────────────────────────────────┤
│ [← Volver] | 24 resultados | [Precio: ↓]                   │
├──────────────────────────────────────┬──────────────────────┤
│ ┌────────────┐ ┌────────────┐       │                      │
│ │ Alojamiento│ │ Alojamiento│       │   MAPA               │
│ │ [IMG]      │ │ [IMG]      │       │   (placeholder)      │
│ │ Título     │ │ Título     │       │                      │
│ │ $120/noche │ │ $450/noche │       │                      │
│ │ ⭐ 4.8     │ │ ⭐ 4.9     │       │                      │
│ └────────────┘ └────────────┘       │                      │
│                                       │                      │
│ [Scroll down for more...]            │                      │
└──────────────────────────────────────┴──────────────────────┘
```

**Componentes**:
| Componente | Props | Estado |
|---|---|---|
| Navbar | — | — |
| BackButton | href | — |
| CatalogHeader | totalResults, sortOrder, onSortChange | sortOrder |
| ListingGrid | listings, loading | — |
| ListingCard | (igual a Home) | — |
| MapPlaceholder | — | — |

**Hooks**:
```typescript
const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
const [listings, setListings] = useState<Listing[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setListings([...]);
    setLoading(false);
  }, 1000);
}, []);

const sortedListings = [...listings].sort((a, b) =>
  sortOrder === 'asc' ? a.price - b.price : b.price - a.price
);
```

**Responsive**:
- **375px**: ListingGrid full-width, MapPlaceholder abajo
- **1024px+**: Grid 2 cols (left), Mapa sticky (right)

---

### 🏨 Página Room Detail (`/rooms/[id]`)

**Propósito**: Información detallada con galería, amenities y reserva.

**Layout**:
```
┌────────────────────────────────────────────────────────────┐
│          Navbar                                            │
├────────────────────────────────────────────────────────────┤
│ [← Volver]                                                 │
├────────────────────────────────────────────────────────────┤
│  [←] Foto 2/4 [→]                      │ BOOKING CARD       │
│  ┌─────────────────────────────────┐  │ $120/noche         │
│  │   GALERÍA DE FOTOS (placeholder)│  │ Huéspedes: 1-6     │
│  │                                 │  │ [−] 3 [+]          │
│  └─────────────────────────────────┘  │ [Reservar]         │
├────────────────────────────────────────────────────────────┤
│ Titulo | ⭐ 4.8 (234) | 📍 Ubicación                      │
│                                                             │
│ ┌──────────────────────────┐                              │
│ │ Avatar | Anfitrión        │                              │
│ │        | 5 años aquí      │                              │
│ └──────────────────────────┘                              │
│                                                             │
│ SERVICIOS: 🏠 🍳 ❄️ 🏊 🚗 📺                             │
└────────────────────────────────────────────────────────────┘
```

**Componentes**:
| Componente | Props | Estado |
|---|---|---|
| Navbar | — | — |
| BackButton | href | — |
| PhotoGallery | photos, currentIndex, onPrev, onNext | photoIndex |
| RoomHeader | title, rating, reviewCount, location | — |
| HostInfo | name, avatar, yearsAsHost | — |
| AmenitiesList | amenities | — |
| BookingCard | pricePerNight, guestCount, onGuestChange, maxGuests | guestCount |

**Hooks**:
```typescript
const params = useParams();
const roomId = params.id as string;

const [room, setRoom] = useState<Room | null>(null);
const [loading, setLoading] = useState(true);
const [photoIndex, setPhotoIndex] = useState(0);
const [guestCount, setGuestCount] = useState(1);

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setRoom(mockRooms[roomId]);
    setLoading(false);
  }, 1000);
}, [roomId]);

const handlePrevPhoto = () => {
  setPhotoIndex(prev => prev === 0 ? room.photos.length - 1 : prev - 1);
};

const handleNextPhoto = () => {
  setPhotoIndex(prev => prev === room.photos.length - 1 ? 0 : prev + 1);
};
```

**Responsive**:
- **375px**: Stack vertical
- **1024px+**: Grid 2 cols (content left, booking sticky right)

---

## 🧩 Componentes

### Lista Completa (13 componentes)

| # | Componente | Ubicación | Responsabilidad | Reutilizable |
|---|---|---|---|---|
| 1 | Header/Navbar | `components/Header.tsx` | Barra de navegación, logo, usuario | ✅ |
| 2 | SearchBar | `components/SearchBar.tsx` | Input de búsqueda controlado | ✅ |
| 3 | CategoryFilter | `components/CategoryFilter.tsx` | Selector horizontal de categorías | ✅ |
| 4 | ListingCard | `components/ListingCard.tsx` | Tarjeta individual de alojamiento | ✅ (Home + Catalog) |
| 5 | ListingGrid | `components/ListingGrid.tsx` | Cuadrícula responsiva de tarjetas | ✅ |
| 6 | CatalogHeader | `components/CatalogHeader.tsx` | Contador + selector de orden | ✅ |
| 7 | MapPlaceholder | `components/MapPlaceholder.tsx` | Área de mapa simulada | ✅ |
| 8 | PhotoGallery | `components/PhotoGallery.tsx` | Galería con navegación | ✅ |
| 9 | RoomHeader | `components/RoomHeader.tsx` | Título, rating, ubicación | ✅ |
| 10 | HostInfo | `components/HostInfo.tsx` | Tarjeta de anfitrión | ✅ |
| 11 | AmenitiesList | `components/AmenitiesList.tsx` | Cuadrícula de servicios | ✅ |
| 12 | BookingCard | `components/BookingCard.tsx` | Panel de reserva (precio + contador) | ✅ |
| 13 | Footer | `components/Footer.tsx` | Pie de página | ✅ |

### Principios de Diseño
- ✅ Una responsabilidad por componente
- ✅ Máximo ~80 líneas de JSX + lógica
- ✅ Props claras y tipadas
- ✅ Composición sobre herencia
- ✅ Sin estilos inline (solo Tailwind)

---

## ✅ Criterios de Evaluación

### 1. Proyecto Base (10 items)
- [ ] `context.md` documenta interfaz, componentes, usuario
- [ ] Proyecto configurado con `npx create-next-app`
- [ ] Next.js 16, TypeScript, Tailwind CSS, App Router
- [ ] Carpetas: `/app`, `/components`, `/types`
- [ ] `tsconfig.json` con `strict: true`
- [ ] Build sin errores: `npm run build` ✅
- [ ] Dev server: `npm run dev` ✅
- [ ] No hay librerías prohibidas
- [ ] README.md con instrucciones
- [ ] Proyecto compilable y ejecutable

### 2. Rutas y Navegación (10 items)
- [ ] Ruta `/` (home) implementada
- [ ] Ruta `/catalog` implementada
- [ ] Ruta `/rooms/[id]` implementada (dinámica)
- [ ] `<Link>` usado para navegación interna
- [ ] NO hay `<a href>` para navegación interna
- [ ] Navegación SPA sin recargas de página
- [ ] `useParams` usado en `/rooms/[id]`
- [ ] Rutas funcionan correctamente
- [ ] Backlinks funcionan
- [ ] Navegación fluida

### 3. Responsive Design (15 items)
- [ ] Mobile (375px): correcto
- [ ] Tablet (768px): correcto
- [ ] Desktop (1024px): correcto
- [ ] Grid tarjetas: 1→2→3 cols
- [ ] Tipografía legible en todos los tamaños
- [ ] Espaciado apropiado por viewport
- [ ] Mapa: bajo en mobile, derecha en desktop
- [ ] Componentes adaptan a viewport
- [ ] No hay scroll horizontal
- [ ] Touch-friendly (botones, inputs)
- [ ] Breakpoints de Tailwind correctos
- [ ] Media queries correctas
- [ ] Imágenes responsive
- [ ] Layouts flexibles
- [ ] Testing en 3 viewports

### 4. Componentes y Reutilización (15 items)
- [ ] `ListingCard` reutilizado en Home + Catalog
- [ ] Componentes en archivos individuales
- [ ] Máximo ~80 líneas por componente
- [ ] Una responsabilidad por componente
- [ ] Props claras y semánticas
- [ ] Componentes son composables
- [ ] No hay duplicación de lógica
- [ ] Naming consistente
- [ ] Estructura DRY (Don't Repeat Yourself)
- [ ] Componentes testables
- [ ] No hay lógica de negocio en JSX
- [ ] Separación de concerns
- [ ] Props tipadas con interfaces
- [ ] Componentes funcionales (no class)
- [ ] Reutilización lógica

### 5. Estado y Hooks (15 items)
- [ ] `useState` para: searchTerm, activeCategory, sortOrder
- [ ] `useState` para: photoIndex, guestCount
- [ ] `useState` para: listings, loading (data)
- [ ] `useEffect` en Home (simulación de datos)
- [ ] `useEffect` en Catalog (simulación de datos)
- [ ] `useEffect` en Detail (simulación de datos)
- [ ] `useParams` en `/rooms/[id]`
- [ ] Indicador de carga visible
- [ ] Estado actualiza UI correctamente
- [ ] Hooks en función principal del componente
- [ ] Dependencias de useEffect correctas
- [ ] No hay actualización infinita
- [ ] Estado local vs. global bien separado
- [ ] Lógica de estado clara
- [ ] Testing de estado

### 6. Funcionalidad (10 items)
- [ ] Home: búsqueda filtra tarjetas en tiempo real
- [ ] Home: categorías filtran tarjetas
- [ ] Home: categoría activa se resalta
- [ ] Catalog: ordenación (asc/desc) reordena
- [ ] Catalog: contador de resultados
- [ ] Detail: galería navega Anterior/Siguiente
- [ ] Detail: contador de huéspedes ±
- [ ] Detail: rango válido de huéspedes
- [ ] Loading state visible en las 3 páginas
- [ ] Funcionalidad sin errores de console

### 7. TypeScript (10 items)
- [ ] `/types/index.ts` define interfaces
- [ ] `Listing` interface
- [ ] `Room` interface
- [ ] `Amenity` interface
- [ ] Props tipadas en componentes
- [ ] No usar `any`
- [ ] Compilación sin errores de TS
- [ ] Tipos importados correctamente
- [ ] Tipos específicos (no `object`, `Object`)
- [ ] Tipado strict mode

### 8. Estilos (10 items)
- [ ] Solo Tailwind CSS utilities
- [ ] NO CSS Modules
- [ ] NO objetos `style={{}}` inline
- [ ] Responsive classes: `md:`, `lg:`
- [ ] Grid y flexbox con Tailwind
- [ ] Padding, margins con Tailwind
- [ ] Colores consistentes
- [ ] Tipografía consistente
- [ ] Hover states visibles
- [ ] Accesibilidad: contrast ratio

### 9. Código Limpio (5 items)
- [ ] Componentes funcionales (`const`, no `class`)
- [ ] Nombres descriptivos (PascalCase componentes)
- [ ] Código comentado donde aclara
- [ ] Sin `console.log` en producción
- [ ] Imports organizados

### 10. Documentación (5 items)
- [ ] `context.md`: descripción clara de interfaz
- [ ] `context.md`: listado de páginas y componentes
- [ ] `context.md`: descripción del usuario/rol
- [ ] `README.md`: cómo instalar y ejecutar
- [ ] Especificaciones documentadas en comentarios

---

## 💬 Convenciones de Código

### Nomenclatura
```
Componentes:       PascalCase (ListingCard.tsx)
Archivos:          PascalCase (.tsx) / camelCase (.ts)
Variables:         camelCase (searchTerm, handleSearch)
Constantes:        UPPER_SNAKE_CASE (MAX_GUESTS = 8)
Tipos/Interfaces:  PascalCase (Listing, Room)
Props interfaces:  ComponentNameProps (ListingCardProps)
```

### Estructura de Componente
```typescript
import { FC } from 'react';
import { Listing } from '@/types';

interface ListingCardProps {
  id: string;
  title: string;
  price: number;
}

const ListingCard: FC<ListingCardProps> = ({ id, title, price }) => {
  // Lógica aquí
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default ListingCard;
```

### Orden de Imports
```typescript
// 1. React y Next.js
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

// 2. Componentes locales
import ListingCard from '@/components/ListingCard';

// 3. Tipos
import { Listing } from '@/types';

// 4. Estilos (si los hay)
// (solo Tailwind classes)
```

### Comentarios
- Solo para lógica compleja
- Una línea: `//`
- Multi-línea: `/* */`
- No comentar código obvio

---

## 🎯 Retos Opcionales

### Reto 1: Mapa Interactivo
Reemplazar `MapPlaceholder` con mapa real:
- Stack: `react-leaflet`, `leaflet`
- Mostrar pin por cada alojamiento
- Click en pin → página de detalle
- Clusters si hay muchos pines

### Reto 2: Date Picker
Agregar selección de fechas en Detail:
- Stack: `react-day-picker`
- Entrada y salida
- Calcular noches
- Mostrar precio total

### Reto 3: Persistencia de Favoritos
Mantener estado con Context + localStorage:
- Agregar a favoritos
- Badge en navbar
- Persist al recargar

---

**Versión**: 1.0  
**Estado**: ✅ ESPECIFICACIÓN COMPLETA

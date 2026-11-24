import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Encuentra alojamientos para tu próxima estancia.',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="es">
    <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      {children}
    </body>
  </html>
);

export default RootLayout;

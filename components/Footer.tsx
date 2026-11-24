import Link from 'next/link';

const Footer = () => (
  <footer className="mt-12 border-t border-gray-200 bg-gray-50">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between lg:px-6">
      <p>© 2026 Airbnb Clone · Encuentra tu próxima estancia.</p>
      <nav aria-label="Enlaces del pie de página" className="flex gap-4">
        <Link href="/" className="hover:underline">Inicio</Link>
        <Link href="/catalog" className="hover:underline">Alojamientos</Link>
      </nav>
    </div>
  </footer>
);

export default Footer;

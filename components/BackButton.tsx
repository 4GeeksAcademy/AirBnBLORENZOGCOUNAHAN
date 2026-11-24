import Link from 'next/link';

interface BackButtonProps {
  href: string;
}

const BackButton = ({ href }: BackButtonProps) => (
  <Link
    href={href}
    className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-rose-600"
  >
    <span aria-hidden="true">←</span>
    Volver
  </Link>
);

export default BackButton;

// BackButton component - Navigation button to return to previous page
import React from 'react';
import Link from 'next/link';

interface BackButtonProps {
  href: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link
      href={href}
      className="inline-block mb-4 px-4 py-2 border rounded-lg hover:bg-gray-100 text-sm"
    >
      ← Back
    </Link>
  );
};

export default BackButton;

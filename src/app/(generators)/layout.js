import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function GeneratorsLayout({ children }) {
  return (
    <div className={`${inter.className} min-h-screen bg-background`}>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}
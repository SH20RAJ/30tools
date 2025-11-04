'use client';
import { usePathname } from 'next/navigation';
import DesignToolsNavbar from '@/components/navigation/DesignToolsNavbar';
import DesignToolsFooter from '@/components/footers/DesignToolsFooter';

export default function DesignToolsLayout({ children }) {
  const pathname = usePathname();
  const isWhiteboard = pathname === '/whiteboard';

  // If it's the whiteboard page, render only the children without nav/footer
  if (isWhiteboard) {
    return children;
  }

  // For all other design tools, render with nav and footer
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <DesignToolsNavbar />
      <main className="flex-1">
        {children}
      </main>
      <DesignToolsFooter />
    </div>
  );
}

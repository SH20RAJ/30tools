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
    <div className="min-h-screen flex flex-col bg-gradient-cute">
      <DesignToolsNavbar />
      <main className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-cute opacity-50"></div>
        <div className="relative z-10">{children}</div>
      </main>
      <DesignToolsFooter />
    </div>
  );
}

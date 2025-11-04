export default function LegalLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}

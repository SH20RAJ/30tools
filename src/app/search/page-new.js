import { Suspense } from 'react';
import SearchPageComponent from './SearchPageComponent';
import { Skeleton } from '@/components/ui/skeleton';

function SearchPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <Skeleton className="h-10 w-full max-w-md" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Search Tools - Find the Perfect Online Tool | 30tools",
  description: "Search through our collection of free online tools. Find image compressors, video converters, PDF tools, and more. Fast, free, and easy to use.",
  keywords: "search tools, online tools, image compressor, video converter, pdf tools, text tools, search free tools"
};

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchPageSkeleton />}>
      <SearchPageComponent />
    </Suspense>
  );
}

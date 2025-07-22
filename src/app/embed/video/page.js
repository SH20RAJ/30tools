import { Suspense } from 'react';
import EmbedVideoPlayer from './EmbedVideoPlayer';

export const metadata = {
  title: 'Embedded Video Player - 30Tools',
  description: 'Embedded video player for Terabox videos',
  robots: 'noindex, nofollow'
};

export default function EmbedVideoPage() {
  return (
    <div className="min-h-screen bg-black">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white">Loading video...</div>
        </div>
      }>
        <EmbedVideoPlayer />
      </Suspense>
    </div>
  );
}
import VideoPlayerTool from '@/components/tools/video/VideoPlayerTool';

export const metadata = {
  title: "Video Player Generator - Create Custom Video Players | 30tools",
  description: "Generate customizable video players with Plyr, Video.js, Fluid Player, and MediaElement.js. Choose themes, get embed codes, and create shareable video players with professional features.",
  keywords: [
    "video player generator",
    "custom video player",
    "embed video player",
    "plyr video player",
    "video.js player",
    "fluid player",
    "mediaelement.js",
    "html5 video player",
    "responsive video player",
    "video player themes",
    "video embed code",
    "fullscreen video player",
    "video player customization"
  ],
  openGraph: {
    title: "Video Player Generator - Create Custom Video Players",
    description: "Generate customizable video players with multiple libraries and themes. Get embed codes and shareable links.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Player Generator - Create Custom Video Players",
    description: "Generate customizable video players with multiple libraries and themes. Get embed codes and shareable links.",
  },
};

export default function VideoPlayerPage() {
  return <VideoPlayerTool />;
}

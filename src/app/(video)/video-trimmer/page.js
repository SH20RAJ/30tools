import VideoTrimmer from "@/components/tools/video/VideoTrimmerTool";

export const metadata = {
  title: 'Video Trimmer - Trim and Cut Videos | 30tools',
  description: 'Trim and cut video clips to specific lengths. Remove unwanted parts from videos and create perfect clips.',
  keywords: 'video trimmer, video cutter, trim video, cut video, video clips, video editing',
  openGraph: {
    title: 'Video Trimmer - Trim and Cut Videos | 30tools',
    description: 'Trim and cut video clips to specific lengths.',
    type: 'website',
  },
};

export default function VideoTrimmerPage() {
  return <VideoTrimmer />;
}

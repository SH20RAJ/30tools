import VideoConverter from "@/components/tools/video/VideoConverterTool";

export const metadata = {
  title: 'Video Converter - Convert Video Formats | 30tools',
  description: 'Convert videos between different formats (MP4, AVI, MOV, WMV, FLV). Fast and easy video format conversion online.',
  keywords: 'video converter, convert video format, mp4 converter, avi converter, mov converter, video format',
  openGraph: {
    title: 'Video Converter - Convert Video Formats | 30tools',
    description: 'Convert videos between different formats online.',
    type: 'website',
  },
};

export default function VideoConverterPage() {
  return <VideoConverter />;
}

import VideoEditor from "@/components/tools/video/VideoEditorTool";

export const metadata = {
  title: 'Video Editor - Edit Videos Online | 30tools',
  description: 'Basic video editing online - trim, cut, merge, and edit videos. Add text, filters, and effects to your videos.',
  keywords: 'video editor, edit videos, video trimmer, video cutter, video merger, online video editing',
  openGraph: {
    title: 'Video Editor - Edit Videos Online | 30tools',
    description: 'Basic video editing online - trim, cut, and merge videos.',
    type: 'website',
  },
};

export default function VideoEditorPage() {
  return <VideoEditor />;
}

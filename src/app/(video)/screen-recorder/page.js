import ScreenRecorder from "@/components/tools/video/ScreenRecorderTool";

export const metadata = {
  title: 'Screen Recorder - Record Your Screen | 30tools',
  description: 'Record your screen and save as video file. Capture desktop, browser tabs, or specific windows with audio.',
  keywords: 'screen recorder, screen capture, record screen, desktop recording, video recording',
  openGraph: {
    title: 'Screen Recorder - Record Your Screen | 30tools',
    description: 'Record your screen and save as video file.',
    type: 'website',
  },
};

export default function ScreenRecorderPage() {
  return <ScreenRecorder />;
}

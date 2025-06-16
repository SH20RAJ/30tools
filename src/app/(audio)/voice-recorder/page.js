import VoiceRecorder from "@/components/tools/audio/VoiceRecorderTool";

export const metadata = {
  title: 'Voice Recorder - Record Audio Online | 30tools',
  description: 'Record voice and audio directly in your browser. High-quality audio recording with download options.',
  keywords: 'voice recorder, audio recorder, record voice, microphone recording, online recording',
  openGraph: {
    title: 'Voice Recorder - Record Audio Online | 30tools',
    description: 'Record voice and audio directly in your browser.',
    type: 'website',
  },
};

export default function VoiceRecorderPage() {
  return <VoiceRecorder />;
}

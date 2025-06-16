import AudioTrimmer from "@/components/tools/audio/AudioTrimmerTool";

export const metadata = {
  title: 'Audio Trimmer - Trim and Cut Audio | 30tools',
  description: 'Trim and cut audio clips to specific lengths. Remove unwanted parts from audio files and create perfect clips.',
  keywords: 'audio trimmer, audio cutter, trim audio, cut audio, audio clips, mp3 trimmer',
  openGraph: {
    title: 'Audio Trimmer - Trim and Cut Audio | 30tools',
    description: 'Trim and cut audio clips to specific lengths.',
    type: 'website',
  },
};

export default function AudioTrimmerPage() {
  return <AudioTrimmer />;
}

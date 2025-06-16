import AudioEditor from "@/components/tools/audio/AudioEditorTool";


export const metadata = {
  title: 'Audio Editor - Edit Audio Files Online | 30tools',
  description: 'Edit audio files online - trim, merge, apply effects, and modify audio tracks. Support for MP3, WAV, and other formats.',
  keywords: 'audio editor, edit audio, audio trimmer, audio effects, mp3 editor, wav editor',
  openGraph: {
    title: 'Audio Editor - Edit Audio Files Online | 30tools',
    description: 'Edit audio files - trim, merge, and apply effects.',
    type: 'website',
  },
};

export default function AudioEditorPage() {
  return <AudioEditor />;
}

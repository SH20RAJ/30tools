import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import AudioCompressorTool from "@/components/tools/audio/AudioCompressorTool";

export const metadata = {
  title: "Audio Compressor - Reduce MP3 File Size Online",
  description: "Compress MP3, WAV, and M4A audio files online without losing quality. Free tool to reduce audio file size for sharing or uploading.",
  keywords: ["audio compressor", "reduce mp3 size", "compress audio online", "mp3 compressor", "audio size reducer"],
  alternates: {
    canonical: "/audio-compressor",
  },
};

export default function AudioCompressorPage() {
  return (
    <ToolSEOLayout toolId="AUDIO_COMPRESSOR">
      <AudioCompressorTool />
    </ToolSEOLayout>
  );
}

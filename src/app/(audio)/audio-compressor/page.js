import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import AudioCompressorTool from "@/components/tools/audio/AudioCompressorTool";

export const metadata = {
  title: "How to Reduce MP3 File Size Online (2026) - Free Audio Compressor | 30Tools",
  description: "Want to know how to shrink audio files for WhatsApp or Email? Use our free online audio compressor to reduce MP3, WAV, and M4A size instantly without losing quality. No sign-up required.",
  keywords: ["how to reduce mp3 size", "audio compressor online free", "shrink audio file size", "mp3 compressor 2026", "audio size reducer for whatsapp"],
  alternates: {
    canonical: "https://30tools.com/audio-compressor",
  },
};

export default function AudioCompressorPage() {
  return (
    <ToolSEOLayout toolId="AUDIO_COMPRESSOR">
      <AudioCompressorTool />
    </ToolSEOLayout>
  );
}

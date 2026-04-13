import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "audio-converter-mp3";
const CATEGORY = "audio";


export const metadata = {
  title: "Free Audio Converter Mp3 Online - No Signup | 30tools",
  description: "Use our free Audio Converter Mp3 to edit audio files instantly. No registration needed, high quality results, and secure browser-based processing. Try audio-converter-mp3 now!",
  keywords: ["audio-converter-mp3","audio","converter"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function Page() {
    return <PremiumToolPage toolId={TOOL_ID} />;
}

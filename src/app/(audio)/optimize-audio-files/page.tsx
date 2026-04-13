import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "optimize-audio-files";
const CATEGORY = "audio";


export const metadata = {
  title: "Free Optimize Audio Files Online - No Signup | 30tools",
  description: "Use our free Optimize Audio Files to edit audio files instantly. No registration needed, high quality results, and secure browser-based processing. Try optimize-audio-files now!",
  keywords: ["optimize-audio-files","optimize","audio","files"],
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

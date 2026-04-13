import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "free-mp3-extractor";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Free Mp3 Extractor Online - No Signup | 30tools",
  description: "Use our free Free Mp3 Extractor to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try free-mp3-extractor now!",
  keywords: ["free-mp3-extractor","free","extractor"],
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

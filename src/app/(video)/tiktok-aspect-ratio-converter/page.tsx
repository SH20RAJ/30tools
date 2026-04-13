import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "tiktok-aspect-ratio-converter";
const CATEGORY = "video";


export const metadata = {
  title: "Free Tiktok Aspect Ratio Converter Online - No Signup | 30tools",
  description: "Use our free Tiktok Aspect Ratio Converter to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try tiktok-aspect-ratio-converter now!",
  keywords: ["tiktok-aspect-ratio-converter","tiktok","aspect","ratio","converter"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "save-tiktok-mp4";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Save Tiktok Mp4 Online - No Signup | 30tools",
  description: "Use our free Save Tiktok Mp4 to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try save-tiktok-mp4 now!",
  keywords: ["save-tiktok-mp4","save","tiktok"],
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

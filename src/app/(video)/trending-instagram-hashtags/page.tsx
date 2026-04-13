import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "trending-instagram-hashtags";
const CATEGORY = "video";


export const metadata = {
  title: "Free Trending Instagram Hashtags Online - No Signup | 30tools",
  description: "Use our free Trending Instagram Hashtags to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try trending-instagram-hashtags now!",
  keywords: ["trending-instagram-hashtags","trending","instagram","hashtags"],
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

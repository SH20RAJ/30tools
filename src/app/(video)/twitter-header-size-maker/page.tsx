import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "twitter-header-size-maker";
const CATEGORY = "video";


export const metadata = {
  title: "Free Twitter Header Size Maker Online - No Signup | 30tools",
  description: "Use our free Twitter Header Size Maker to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try twitter-header-size-maker now!",
  keywords: ["twitter-header-size-maker","twitter","header","size","maker"],
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

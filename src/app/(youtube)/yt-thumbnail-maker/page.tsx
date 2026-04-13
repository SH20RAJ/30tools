import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "yt-thumbnail-maker";
const CATEGORY = "youtube";


export const metadata = {
  title: "Free Yt Thumbnail Maker Online - No Signup | 30tools",
  description: "Use our free Yt Thumbnail Maker to download YouTube content instantly. No registration needed, high quality results, and secure browser-based processing. Try yt-thumbnail-maker now!",
  keywords: ["yt-thumbnail-maker","thumbnail","maker"],
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

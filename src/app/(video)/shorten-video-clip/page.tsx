import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "shorten-video-clip";
const CATEGORY = "video";


export const metadata = {
  title: "Free Shorten Video Clip Online - No Signup | 30tools",
  description: "Use our free Shorten Video Clip to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try shorten-video-clip now!",
  keywords: ["shorten-video-clip","shorten","video","clip"],
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

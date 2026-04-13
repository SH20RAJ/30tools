import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "music-from-mp4";
const CATEGORY = "video";


export const metadata = {
  title: "Free Music From Mp4 Online - No Signup | 30tools",
  description: "Use our free Music From Mp4 to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try music-from-mp4 now!",
  keywords: ["music-from-mp4","music","from"],
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

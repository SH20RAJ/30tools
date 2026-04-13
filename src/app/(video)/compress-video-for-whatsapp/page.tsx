import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "compress-video-for-whatsapp";
const CATEGORY = "video";


export const metadata = {
  title: "Free Compress Video For Whatsapp Online - No Signup | 30tools",
  description: "Use our free Compress Video For Whatsapp to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try compress-video-for-whatsapp now!",
  keywords: ["compress-video-for-whatsapp","compress","video","whatsapp"],
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

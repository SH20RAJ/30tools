import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "mp4-converter-online";
const CATEGORY = "video";


export const metadata = {
  title: "Free Mp4 Converter Online Online - No Signup | 30tools",
  description: "Use our free Mp4 Converter Online to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try mp4-converter-online now!",
  keywords: ["mp4-converter-online","converter","online"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "download-ig-stories";
const CATEGORY = "video";


export const metadata = {
  title: "Free Download Ig Stories Online - No Signup | 30tools",
  description: "Use our free Download Ig Stories to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try download-ig-stories now!",
  keywords: ["download-ig-stories","download","stories"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "download-terabox-file";
const CATEGORY = "video";


export const metadata = {
  title: "Free Download Terabox File Online - No Signup | 30tools",
  description: "Use our free Download Terabox File to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try download-terabox-file now!",
  keywords: ["download-terabox-file","download","terabox","file"],
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

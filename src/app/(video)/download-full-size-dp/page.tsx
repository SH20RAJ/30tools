import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "download-full-size-dp";
const CATEGORY = "video";


export const metadata = {
  title: "Free Download Full Size Dp Online - No Signup | 30tools",
  description: "Use our free Download Full Size Dp to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try download-full-size-dp now!",
  keywords: ["download-full-size-dp","download","full","size"],
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

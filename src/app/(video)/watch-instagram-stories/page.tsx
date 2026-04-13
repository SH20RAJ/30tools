import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "watch-instagram-stories";
const CATEGORY = "video";


export const metadata = {
  title: "Free Watch Instagram Stories Online - No Signup | 30tools",
  description: "Use our free Watch Instagram Stories to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try watch-instagram-stories now!",
  keywords: ["watch-instagram-stories","watch","instagram","stories"],
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

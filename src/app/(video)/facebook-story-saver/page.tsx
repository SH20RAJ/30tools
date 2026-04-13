import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "facebook-story-saver";
const CATEGORY = "video";


export const metadata = {
  title: "Free Facebook Story Saver Online - No Signup | 30tools",
  description: "Use our free Facebook Story Saver to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try facebook-story-saver now!",
  keywords: ["facebook-story-saver","facebook","story","saver"],
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

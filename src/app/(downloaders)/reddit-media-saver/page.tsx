import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "reddit-media-saver";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Reddit Media Saver Online - No Signup | 30tools",
  description: "Use our free Reddit Media Saver to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try reddit-media-saver now!",
  keywords: ["reddit-media-saver","reddit","media","saver"],
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

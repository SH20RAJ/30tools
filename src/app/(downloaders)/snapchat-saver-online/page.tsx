import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "snapchat-saver-online";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Snapchat Saver Online Online - No Signup | 30tools",
  description: "Use our free Snapchat Saver Online to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try snapchat-saver-online now!",
  keywords: ["snapchat-saver-online","snapchat","saver","online"],
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

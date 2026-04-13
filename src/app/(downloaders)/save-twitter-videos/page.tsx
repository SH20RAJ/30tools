import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "save-twitter-videos";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Save Twitter Videos Online - No Signup | 30tools",
  description: "Use our free Save Twitter Videos to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try save-twitter-videos now!",
  keywords: ["save-twitter-videos","save","twitter","videos"],
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

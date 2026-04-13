import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "online-thumbnail-creator";
const CATEGORY = "youtube";


export const metadata = {
  title: "Free Online Thumbnail Creator Online - No Signup | 30tools",
  description: "Use our free Online Thumbnail Creator to download YouTube content instantly. No registration needed, high quality results, and secure browser-based processing. Try online-thumbnail-creator now!",
  keywords: ["online-thumbnail-creator","online","thumbnail","creator"],
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

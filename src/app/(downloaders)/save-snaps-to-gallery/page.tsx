import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "save-snaps-to-gallery";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Save Snaps To Gallery Online - No Signup | 30tools",
  description: "Use our free Save Snaps To Gallery to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try save-snaps-to-gallery now!",
  keywords: ["save-snaps-to-gallery","save","snaps","gallery"],
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

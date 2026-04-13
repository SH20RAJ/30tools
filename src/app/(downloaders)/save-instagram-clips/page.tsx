import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "save-instagram-clips";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Save Instagram Clips Online - No Signup | 30tools",
  description: "Use our free Save Instagram Clips to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try save-instagram-clips now!",
  keywords: ["save-instagram-clips","save","instagram","clips"],
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

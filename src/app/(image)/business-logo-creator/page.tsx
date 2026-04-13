import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "business-logo-creator";
const CATEGORY = "image";


export const metadata = {
  title: "Free Business Logo Creator Online - No Signup | 30tools",
  description: "Use our free Business Logo Creator to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try business-logo-creator now!",
  keywords: ["business-logo-creator","business","logo","creator"],
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

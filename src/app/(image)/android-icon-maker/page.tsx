import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "android-icon-maker";
const CATEGORY = "image";


export const metadata = {
  title: "Free Android Icon Maker Online - No Signup | 30tools",
  description: "Use our free Android Icon Maker to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try android-icon-maker now!",
  keywords: ["android-icon-maker","android","icon","maker"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "change-image-dimensions";
const CATEGORY = "image";


export const metadata = {
  title: "Free Change Image Dimensions Online - No Signup | 30tools",
  description: "Use our free Change Image Dimensions to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try change-image-dimensions now!",
  keywords: ["change-image-dimensions","change","image","dimensions"],
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

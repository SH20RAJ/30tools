import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "favicon-maker-from-image";
const CATEGORY = "image";


export const metadata = {
  title: "Free Favicon Maker From Image Online - No Signup | 30tools",
  description: "Use our free Favicon Maker From Image to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try favicon-maker-from-image now!",
  keywords: ["favicon-maker-from-image","favicon","maker","from","image"],
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

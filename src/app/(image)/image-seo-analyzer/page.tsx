import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "image-seo-analyzer";
const CATEGORY = "image";


export const metadata = {
  title: "Free Image Seo Analyzer Online - No Signup | 30tools",
  description: "Use our free Image Seo Analyzer to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try image-seo-analyzer now!",
  keywords: ["image-seo-analyzer","image","analyzer"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "enhance-image-quality";
const CATEGORY = "image";


export const metadata = {
  title: "Free Enhance Image Quality Online - No Signup | 30tools",
  description: "Use our free Enhance Image Quality to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try enhance-image-quality now!",
  keywords: ["enhance-image-quality","enhance","image","quality"],
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

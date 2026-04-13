import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "picture-collage-creator";
const CATEGORY = "image";


export const metadata = {
  title: "Free Picture Collage Creator Online - No Signup | 30tools",
  description: "Use our free Picture Collage Creator to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try picture-collage-creator now!",
  keywords: ["picture-collage-creator","picture","collage","creator"],
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

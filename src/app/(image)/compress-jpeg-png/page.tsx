import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "compress-jpeg-png";
const CATEGORY = "image";


export const metadata = {
  title: "Free Compress Jpeg Png Online - No Signup | 30tools",
  description: "Use our free Compress Jpeg Png to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try compress-jpeg-png now!",
  keywords: ["compress-jpeg-png","compress","jpeg"],
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

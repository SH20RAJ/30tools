import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "picture-background-eraser";
const CATEGORY = "image";


export const metadata = {
  title: "Free Picture Background Eraser Online - No Signup | 30tools",
  description: "Use our free Picture Background Eraser to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try picture-background-eraser now!",
  keywords: ["picture-background-eraser","picture","background","eraser"],
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

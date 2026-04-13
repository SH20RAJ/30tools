import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "image-optimization-test";
const CATEGORY = "image";


export const metadata = {
  title: "Free Image Optimization Test Online - No Signup | 30tools",
  description: "Use our free Image Optimization Test to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try image-optimization-test now!",
  keywords: ["image-optimization-test","image","optimization","test"],
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

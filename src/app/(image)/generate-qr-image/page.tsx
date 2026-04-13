import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "generate-qr-image";
const CATEGORY = "image";


export const metadata = {
  title: "Free Generate Qr Image Online - No Signup | 30tools",
  description: "Use our free Generate Qr Image to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try generate-qr-image now!",
  keywords: ["generate-qr-image","generate","image"],
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

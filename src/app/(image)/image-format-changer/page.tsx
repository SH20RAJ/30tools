import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "image-format-changer";
const CATEGORY = "image";


export const metadata = {
  title: "Free Image Format Changer Online - No Signup | 30tools",
  description: "Use our free Image Format Changer to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try image-format-changer now!",
  keywords: ["image-format-changer","image","format","changer"],
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

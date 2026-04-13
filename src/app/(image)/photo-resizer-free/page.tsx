import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "photo-resizer-free";
const CATEGORY = "image";


export const metadata = {
  title: "Free Photo Resizer Free Online - No Signup | 30tools",
  description: "Use our free Photo Resizer Free to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try photo-resizer-free now!",
  keywords: ["photo-resizer-free","photo","resizer","free"],
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

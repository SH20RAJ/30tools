import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "free-logo-maker";
const CATEGORY = "image";


export const metadata = {
  title: "Free Free Logo Maker Online - No Signup | 30tools",
  description: "Use our free Free Logo Maker to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try free-logo-maker now!",
  keywords: ["free-logo-maker","free","logo","maker"],
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

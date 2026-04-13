import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "ebook-format-converter";
const CATEGORY = "text";


export const metadata = {
  title: "Free Ebook Format Converter Online - No Signup | 30tools",
  description: "Use our free Ebook Format Converter to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try ebook-format-converter now!",
  keywords: ["ebook-format-converter","ebook","format","converter"],
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

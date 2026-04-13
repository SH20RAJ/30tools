import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "md-html-converter";
const CATEGORY = "text";


export const metadata = {
  title: "Free Md Html Converter Online - No Signup | 30tools",
  description: "Use our free Md Html Converter to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try md-html-converter now!",
  keywords: ["md-html-converter","html","converter"],
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

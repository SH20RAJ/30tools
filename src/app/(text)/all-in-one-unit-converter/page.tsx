import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "all-in-one-unit-converter";
const CATEGORY = "text";


export const metadata = {
  title: "Free All In One Unit Converter Online - No Signup | 30tools",
  description: "Use our free All In One Unit Converter to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try all-in-one-unit-converter now!",
  keywords: ["all-in-one-unit-converter","unit","converter"],
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

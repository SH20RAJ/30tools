import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "seo-keyword-generator";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Seo Keyword Generator Online - No Signup | 30tools",
  description: "Use our free Seo Keyword Generator to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try seo-keyword-generator now!",
  keywords: ["seo-keyword-generator","keyword","generator"],
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

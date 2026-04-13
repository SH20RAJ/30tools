import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "create-seo-tags";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Create Seo Tags Online - No Signup | 30tools",
  description: "Use our free Create Seo Tags to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try create-seo-tags now!",
  keywords: ["create-seo-tags","create","tags"],
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

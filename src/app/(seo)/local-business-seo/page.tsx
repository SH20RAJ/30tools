import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "local-business-seo";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Local Business Seo Online - No Signup | 30tools",
  description: "Use our free Local Business Seo to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try local-business-seo now!",
  keywords: ["local-business-seo","local","business"],
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

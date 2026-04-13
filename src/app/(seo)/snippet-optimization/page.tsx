import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "snippet-optimization";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Snippet Optimization Online - No Signup | 30tools",
  description: "Use our free Snippet Optimization to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try snippet-optimization now!",
  keywords: ["snippet-optimization","snippet","optimization"],
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

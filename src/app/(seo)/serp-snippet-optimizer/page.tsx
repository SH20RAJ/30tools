import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "serp-snippet-optimizer";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Serp Snippet Optimizer Online - No Signup | 30tools",
  description: "Use our free Serp Snippet Optimizer to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try serp-snippet-optimizer now!",
  keywords: ["serp-snippet-optimizer","serp","snippet","optimizer"],
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

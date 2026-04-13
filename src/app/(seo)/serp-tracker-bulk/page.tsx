import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "serp-tracker-bulk";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Serp Tracker Bulk Online - No Signup | 30tools",
  description: "Use our free Serp Tracker Bulk to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try serp-tracker-bulk now!",
  keywords: ["serp-tracker-bulk","serp","tracker","bulk"],
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

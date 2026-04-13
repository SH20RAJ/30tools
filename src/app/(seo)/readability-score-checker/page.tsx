import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "readability-score-checker";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Readability Score Checker Online - No Signup | 30tools",
  description: "Use our free Readability Score Checker to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try readability-score-checker now!",
  keywords: ["readability-score-checker","readability","score","checker"],
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

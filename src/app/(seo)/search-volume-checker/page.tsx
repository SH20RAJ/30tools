import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "search-volume-checker";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Search Volume Checker Online - No Signup | 30tools",
  description: "Use our free Search Volume Checker to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try search-volume-checker now!",
  keywords: ["search-volume-checker","search","volume","checker"],
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

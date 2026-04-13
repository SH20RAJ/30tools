import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "email-breach-checker";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Email Breach Checker Online - No Signup | 30tools",
  description: "Use our free Email Breach Checker to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try email-breach-checker now!",
  keywords: ["email-breach-checker","email","breach","checker"],
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

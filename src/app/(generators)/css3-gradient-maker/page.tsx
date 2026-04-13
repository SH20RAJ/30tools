import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "css3-gradient-maker";
const CATEGORY = "generators";


export const metadata = {
  title: "Free Css3 Gradient Maker Online - No Signup | 30tools",
  description: "Use our free Css3 Gradient Maker to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try css3-gradient-maker now!",
  keywords: ["css3-gradient-maker","css3","gradient","maker"],
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

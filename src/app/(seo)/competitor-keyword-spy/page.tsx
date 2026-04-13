import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "competitor-keyword-spy";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Competitor Keyword Spy Online - No Signup | 30tools",
  description: "Use our free Competitor Keyword Spy to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try competitor-keyword-spy now!",
  keywords: ["competitor-keyword-spy","competitor","keyword"],
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

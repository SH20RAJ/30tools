import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "keyword-ideas-bing";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Keyword Ideas Bing Online - No Signup | 30tools",
  description: "Use our free Keyword Ideas Bing to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try keyword-ideas-bing now!",
  keywords: ["keyword-ideas-bing","keyword","ideas","bing"],
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

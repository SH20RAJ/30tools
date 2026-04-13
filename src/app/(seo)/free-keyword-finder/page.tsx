import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "free-keyword-finder";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Free Keyword Finder Online - No Signup | 30tools",
  description: "Use our free Free Keyword Finder to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try free-keyword-finder now!",
  keywords: ["free-keyword-finder","free","keyword","finder"],
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

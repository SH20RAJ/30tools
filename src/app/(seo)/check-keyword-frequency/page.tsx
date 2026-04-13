import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "check-keyword-frequency";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Check Keyword Frequency Online - No Signup | 30tools",
  description: "Use our free Check Keyword Frequency to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try check-keyword-frequency now!",
  keywords: ["check-keyword-frequency","check","keyword","frequency"],
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

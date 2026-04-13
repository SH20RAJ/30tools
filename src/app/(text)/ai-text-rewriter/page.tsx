import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "ai-text-rewriter";
const CATEGORY = "text";


export const metadata = {
  title: "Free Ai Text Rewriter Online - No Signup | 30tools",
  description: "Use our free Ai Text Rewriter to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try ai-text-rewriter now!",
  keywords: ["ai-text-rewriter","text","rewriter"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "filler-text-maker";
const CATEGORY = "text";


export const metadata = {
  title: "Free Filler Text Maker Online - No Signup | 30tools",
  description: "Use our free Filler Text Maker to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try filler-text-maker now!",
  keywords: ["filler-text-maker","filler","text","maker"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "calculate-text-length";
const CATEGORY = "text";


export const metadata = {
  title: "Free Calculate Text Length Online - No Signup | 30tools",
  description: "Use our free Calculate Text Length to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try calculate-text-length now!",
  keywords: ["calculate-text-length","calculate","text","length"],
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

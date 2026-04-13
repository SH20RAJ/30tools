import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "check-word-count";
const CATEGORY = "text";


export const metadata = {
  title: "Free Check Word Count Online - No Signup | 30tools",
  description: "Use our free Check Word Count to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try check-word-count now!",
  keywords: ["check-word-count","check","word","count"],
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

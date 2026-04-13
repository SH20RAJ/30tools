import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "random-number-picker";
const CATEGORY = "text";


export const metadata = {
  title: "Free Random Number Picker Online - No Signup | 30tools",
  description: "Use our free Random Number Picker to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try random-number-picker now!",
  keywords: ["random-number-picker","random","number","picker"],
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

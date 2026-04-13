import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "random-color-schemes";
const CATEGORY = "text";


export const metadata = {
  title: "Free Random Color Schemes Online - No Signup | 30tools",
  description: "Use our free Random Color Schemes to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try random-color-schemes now!",
  keywords: ["random-color-schemes","random","color","schemes"],
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

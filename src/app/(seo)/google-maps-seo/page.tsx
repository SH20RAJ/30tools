import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "google-maps-seo";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Google Maps Seo Online - No Signup | 30tools",
  description: "Use our free Google Maps Seo to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try google-maps-seo now!",
  keywords: ["google-maps-seo","google","maps"],
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

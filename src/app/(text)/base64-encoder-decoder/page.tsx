import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "base64-encoder-decoder";
const CATEGORY = "text";


export const metadata = {
  title: "Free Base64 Encoder Decoder Online - No Signup | 30tools",
  description: "Use our free Base64 Encoder Decoder to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try base64-encoder-decoder now!",
  keywords: ["base64-encoder-decoder","base64","encoder","decoder"],
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

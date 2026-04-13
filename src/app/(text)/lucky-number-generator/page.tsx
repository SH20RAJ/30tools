import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "lucky-number-generator";
const CATEGORY = "text";


export const metadata = {
  title: "Free Lucky Number Generator Online - No Signup | 30tools",
  description: "Use our free Lucky Number Generator to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try lucky-number-generator now!",
  keywords: ["lucky-number-generator","lucky","number","generator"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "json-ld-generator";
const CATEGORY = "text";


export const metadata = {
  title: "Free Json Ld Generator Online - No Signup | 30tools",
  description: "Use our free Json Ld Generator to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try json-ld-generator now!",
  keywords: ["json-ld-generator","json","generator"],
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

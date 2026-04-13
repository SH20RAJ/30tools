import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "secure-pass-generator";
const CATEGORY = "text";


export const metadata = {
  title: "Free Secure Pass Generator Online - No Signup | 30tools",
  description: "Use our free Secure Pass Generator to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try secure-pass-generator now!",
  keywords: ["secure-pass-generator","secure","pass","generator"],
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

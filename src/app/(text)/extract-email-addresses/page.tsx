import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "extract-email-addresses";
const CATEGORY = "text";


export const metadata = {
  title: "Free Extract Email Addresses Online - No Signup | 30tools",
  description: "Use our free Extract Email Addresses to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try extract-email-addresses now!",
  keywords: ["extract-email-addresses","extract","email","addresses"],
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

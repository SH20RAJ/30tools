import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "currency-calculator-live";
const CATEGORY = "utilities";


export const metadata = {
  title: "Free Currency Calculator Live Online - No Signup | 30tools",
  description: "Use our free Currency Calculator Live to perform helpful calculations instantly. No registration needed, high quality results, and secure browser-based processing. Try currency-calculator-live now!",
  keywords: ["currency-calculator-live","currency","calculator","live"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "binary-code-translator";
const CATEGORY = "text";


export const metadata = {
  title: "Free Binary Code Translator Online - No Signup | 30tools",
  description: "Use our free Binary Code Translator to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try binary-code-translator now!",
  keywords: ["binary-code-translator","binary","code","translator"],
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

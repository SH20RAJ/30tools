import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "hash-string-message";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Hash String Message Online - No Signup | 30tools",
  description: "Use our free Hash String Message to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try hash-string-message now!",
  keywords: ["hash-string-message","hash","string","message"],
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

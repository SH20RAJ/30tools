import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "debug-regex-pattern";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Debug Regex Pattern Online - No Signup | 30tools",
  description: "Use our free Debug Regex Pattern to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try debug-regex-pattern now!",
  keywords: ["debug-regex-pattern","debug","regex","pattern"],
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

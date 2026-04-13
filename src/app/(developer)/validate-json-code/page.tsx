import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "validate-json-code";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Validate Json Code Online - No Signup | 30tools",
  description: "Use our free Validate Json Code to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try validate-json-code now!",
  keywords: ["validate-json-code","validate","json","code"],
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

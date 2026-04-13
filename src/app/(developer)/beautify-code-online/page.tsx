import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "beautify-code-online";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Beautify Code Online Online - No Signup | 30tools",
  description: "Use our free Beautify Code Online to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try beautify-code-online now!",
  keywords: ["beautify-code-online","beautify","code","online"],
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

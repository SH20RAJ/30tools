import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "regex-cheatsheet-tool";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Regex Cheatsheet Tool Online - No Signup | 30tools",
  description: "Use our free Regex Cheatsheet Tool to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try regex-cheatsheet-tool now!",
  keywords: ["regex-cheatsheet-tool","regex","cheatsheet","tool"],
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

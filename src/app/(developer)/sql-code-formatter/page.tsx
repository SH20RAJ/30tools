import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "sql-code-formatter";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Sql Code Formatter Online - No Signup | 30tools",
  description: "Use our free Sql Code Formatter to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try sql-code-formatter now!",
  keywords: ["sql-code-formatter","code","formatter"],
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

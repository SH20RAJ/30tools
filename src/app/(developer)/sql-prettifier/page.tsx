import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "sql-prettifier";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Sql Prettifier Online - No Signup | 30tools",
  description: "Use our free Sql Prettifier to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try sql-prettifier now!",
  keywords: ["sql-prettifier","prettifier"],
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

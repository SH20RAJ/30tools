import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "validate-sql-syntax";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Validate Sql Syntax Online - No Signup | 30tools",
  description: "Use our free Validate Sql Syntax to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try validate-sql-syntax now!",
  keywords: ["validate-sql-syntax","validate","syntax"],
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

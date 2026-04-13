import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "beautify-sql-query";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Beautify Sql Query Online - No Signup | 30tools",
  description: "Use our free Beautify Sql Query to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try beautify-sql-query now!",
  keywords: ["beautify-sql-query","beautify","query"],
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

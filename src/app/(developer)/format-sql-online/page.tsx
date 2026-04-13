import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "format-sql-online";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Format Sql Online Online - No Signup | 30tools",
  description: "Use our free Format Sql Online to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try format-sql-online now!",
  keywords: ["format-sql-online","format","online"],
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

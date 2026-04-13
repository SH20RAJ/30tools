import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "complex-regex-validator";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Complex Regex Validator Online - No Signup | 30tools",
  description: "Use our free Complex Regex Validator to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try complex-regex-validator now!",
  keywords: ["complex-regex-validator","complex","regex","validator"],
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

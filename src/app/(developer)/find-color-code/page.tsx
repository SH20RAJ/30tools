import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "find-color-code";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Find Color Code Online - No Signup | 30tools",
  description: "Use our free Find Color Code to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try find-color-code now!",
  keywords: ["find-color-code","find","color","code"],
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

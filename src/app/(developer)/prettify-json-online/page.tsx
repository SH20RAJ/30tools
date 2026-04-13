import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "prettify-json-online";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Prettify Json Online Online - No Signup | 30tools",
  description: "Use our free Prettify Json Online to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try prettify-json-online now!",
  keywords: ["prettify-json-online","prettify","json","online"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "generate-hash-online";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Generate Hash Online Online - No Signup | 30tools",
  description: "Use our free Generate Hash Online to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try generate-hash-online now!",
  keywords: ["generate-hash-online","generate","hash","online"],
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

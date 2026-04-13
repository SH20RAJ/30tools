import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "web-code-compressor";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Web Code Compressor Online - No Signup | 30tools",
  description: "Use our free Web Code Compressor to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try web-code-compressor now!",
  keywords: ["web-code-compressor","code","compressor"],
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

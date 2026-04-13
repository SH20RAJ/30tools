import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "decode-jwt-online";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Decode Jwt Online Online - No Signup | 30tools",
  description: "Use our free Decode Jwt Online to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try decode-jwt-online now!",
  keywords: ["decode-jwt-online","decode","online"],
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

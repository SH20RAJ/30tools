import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "hash-generator2";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Hash Generator2 Online - No Signup | 30tools",
  description: "Use our free Hash Generator2 to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try hash-generator2 now!",
  keywords: ["hash-generator2","hash","generator2"],
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

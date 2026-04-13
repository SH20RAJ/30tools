import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "verify-jwt-signature-free";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Verify Jwt Signature Free Online - No Signup | 30tools",
  description: "Use our free Verify Jwt Signature Free to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try verify-jwt-signature-free now!",
  keywords: ["verify-jwt-signature-free","verify","signature","free"],
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

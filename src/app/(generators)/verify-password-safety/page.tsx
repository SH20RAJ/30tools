import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "verify-password-safety";
const CATEGORY = "generators";


export const metadata = {
  title: "Free Verify Password Safety Online - No Signup | 30tools",
  description: "Use our free Verify Password Safety to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try verify-password-safety now!",
  keywords: ["verify-password-safety","verify","password","safety"],
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

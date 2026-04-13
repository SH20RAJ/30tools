import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "check-password-security";
const CATEGORY = "generators";


export const metadata = {
  title: "Free Check Password Security Online - No Signup | 30tools",
  description: "Use our free Check Password Security to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try check-password-security now!",
  keywords: ["check-password-security","check","password","security"],
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

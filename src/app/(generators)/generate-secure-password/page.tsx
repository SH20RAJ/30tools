import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "generate-secure-password";
const CATEGORY = "generators";


export const metadata = {
  title: "Free Generate Secure Password Online - No Signup | 30tools",
  description: "Use our free Generate Secure Password to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try generate-secure-password now!",
  keywords: ["generate-secure-password","generate","secure","password"],
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

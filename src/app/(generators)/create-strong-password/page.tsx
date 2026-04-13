import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "create-strong-password";
const CATEGORY = "generators";


export const metadata = {
  title: "Free Create Strong Password Online - No Signup | 30tools",
  description: "Use our free Create Strong Password to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try create-strong-password now!",
  keywords: ["create-strong-password","create","strong","password"],
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

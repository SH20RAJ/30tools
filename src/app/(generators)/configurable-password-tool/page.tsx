import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "configurable-password-tool";
const CATEGORY = "generators";


export const metadata = {
  title: "Free Configurable Password Tool Online - No Signup | 30tools",
  description: "Use our free Configurable Password Tool to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try configurable-password-tool now!",
  keywords: ["configurable-password-tool","configurable","password","tool"],
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

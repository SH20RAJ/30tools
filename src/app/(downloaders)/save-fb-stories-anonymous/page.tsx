import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "save-fb-stories-anonymous";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Save Fb Stories Anonymous Online - No Signup | 30tools",
  description: "Use our free Save Fb Stories Anonymous to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try save-fb-stories-anonymous now!",
  keywords: ["save-fb-stories-anonymous","save","stories","anonymous"],
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

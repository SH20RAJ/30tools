import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "generate-icons-for-apps";
const CATEGORY = "generators";


export const metadata = {
  title: "Free Generate Icons For Apps Online - No Signup | 30tools",
  description: "Use our free Generate Icons For Apps to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try generate-icons-for-apps now!",
  keywords: ["generate-icons-for-apps","generate","icons","apps"],
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

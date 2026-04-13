import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "change-audio-format";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Change Audio Format Online - No Signup | 30tools",
  description: "Use our free Change Audio Format to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try change-audio-format now!",
  keywords: ["change-audio-format","change","audio","format"],
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

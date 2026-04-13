import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "background-gradient-tool";
const CATEGORY = "image";


export const metadata = {
  title: "Free Background Gradient Tool Online - No Signup | 30tools",
  description: "Use our free Background Gradient Tool to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try background-gradient-tool now!",
  keywords: ["background-gradient-tool","background","gradient","tool"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "ios-app-icon-creator";
const CATEGORY = "image";


export const metadata = {
  title: "Free Ios App Icon Creator Online - No Signup | 30tools",
  description: "Use our free Ios App Icon Creator to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try ios-app-icon-creator now!",
  keywords: ["ios-app-icon-creator","icon","creator"],
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

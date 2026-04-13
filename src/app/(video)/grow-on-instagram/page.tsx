import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "grow-on-instagram";
const CATEGORY = "video";


export const metadata = {
  title: "Free Grow On Instagram Online - No Signup | 30tools",
  description: "Use our free Grow On Instagram to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try grow-on-instagram now!",
  keywords: ["grow-on-instagram","grow","instagram"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "aesthetic-fonts-for-instagram";
const CATEGORY = "video";


export const metadata = {
  title: "Free Aesthetic Fonts For Instagram Online - No Signup | 30tools",
  description: "Use our free Aesthetic Fonts For Instagram to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try aesthetic-fonts-for-instagram now!",
  keywords: ["aesthetic-fonts-for-instagram","aesthetic","fonts","instagram"],
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

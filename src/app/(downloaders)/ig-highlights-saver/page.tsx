import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "ig-highlights-saver";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Ig Highlights Saver Online - No Signup | 30tools",
  description: "Use our free Ig Highlights Saver to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try ig-highlights-saver now!",
  keywords: ["ig-highlights-saver","highlights","saver"],
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

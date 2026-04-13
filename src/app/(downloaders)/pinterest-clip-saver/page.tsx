import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "pinterest-clip-saver";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Pinterest Clip Saver Online - No Signup | 30tools",
  description: "Use our free Pinterest Clip Saver to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try pinterest-clip-saver now!",
  keywords: ["pinterest-clip-saver","pinterest","clip","saver"],
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

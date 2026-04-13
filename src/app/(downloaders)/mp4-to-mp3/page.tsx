import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "mp4-to-mp3";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Mp4 To Mp3 Online - No Signup | 30tools",
  description: "Use our free Mp4 To Mp3 to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try mp4-to-mp3 now!",
  keywords: ["mp4-to-mp3"],
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

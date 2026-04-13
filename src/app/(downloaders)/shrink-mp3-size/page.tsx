import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "shrink-mp3-size";
const CATEGORY = "downloaders";


export const metadata = {
  title: "Free Shrink Mp3 Size Online - No Signup | 30tools",
  description: "Use our free Shrink Mp3 Size to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try shrink-mp3-size now!",
  keywords: ["shrink-mp3-size","shrink","size"],
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

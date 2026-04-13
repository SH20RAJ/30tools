import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "edit-audio-online";
const CATEGORY = "image";


export const metadata = {
  title: "Free Edit Audio Online Online - No Signup | 30tools",
  description: "Use our free Edit Audio Online to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try edit-audio-online now!",
  keywords: ["edit-audio-online","edit","audio","online"],
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

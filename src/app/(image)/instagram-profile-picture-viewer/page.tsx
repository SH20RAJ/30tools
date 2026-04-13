import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "instagram-profile-picture-viewer";
const CATEGORY = "image";


export const metadata = {
  title: "Free Instagram Profile Picture Viewer Online - No Signup | 30tools",
  description: "Use our free Instagram Profile Picture Viewer to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try instagram-profile-picture-viewer now!",
  keywords: ["instagram-profile-picture-viewer","instagram","profile","picture","viewer"],
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

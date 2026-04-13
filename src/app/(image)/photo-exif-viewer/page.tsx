import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "photo-exif-viewer";
const CATEGORY = "image";


export const metadata = {
  title: "Free Photo Exif Viewer Online - No Signup | 30tools",
  description: "Use our free Photo Exif Viewer to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try photo-exif-viewer now!",
  keywords: ["photo-exif-viewer","photo","exif","viewer"],
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

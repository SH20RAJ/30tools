import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "merge-pdf-online";
const CATEGORY = "pdf";


export const metadata = {
  title: "Free Merge Pdf Online Online - No Signup | 30tools",
  description: "Use our free Merge Pdf Online to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try merge-pdf-online now!",
  keywords: ["merge-pdf-online","merge","online"],
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

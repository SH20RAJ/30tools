import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "shrink-pdf-file";
const CATEGORY = "pdf";


export const metadata = {
  title: "Free Shrink Pdf File Online - No Signup | 30tools",
  description: "Use our free Shrink Pdf File to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try shrink-pdf-file now!",
  keywords: ["shrink-pdf-file","shrink","file"],
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

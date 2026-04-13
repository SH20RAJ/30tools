import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "join-pdf-documents";
const CATEGORY = "pdf";


export const metadata = {
  title: "Free Join Pdf Documents Online - No Signup | 30tools",
  description: "Use our free Join Pdf Documents to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try join-pdf-documents now!",
  keywords: ["join-pdf-documents","join","documents"],
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

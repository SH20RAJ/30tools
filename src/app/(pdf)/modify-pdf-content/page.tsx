import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "modify-pdf-content";
const CATEGORY = "pdf";


export const metadata = {
  title: "Free Modify Pdf Content Online - No Signup | 30tools",
  description: "Use our free Modify Pdf Content to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try modify-pdf-content now!",
  keywords: ["modify-pdf-content","modify","content"],
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

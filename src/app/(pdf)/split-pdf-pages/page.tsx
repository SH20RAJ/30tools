import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "split-pdf-pages";
const CATEGORY = "pdf";


export const metadata = {
  title: "Free Split Pdf Pages Online - No Signup | 30tools",
  description: "Use our free Split Pdf Pages to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try split-pdf-pages now!",
  keywords: ["split-pdf-pages","split","pages"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "pdf-add-page-numbers";
const CATEGORY = "pdf";


export const metadata = {
  title: "Free Pdf Add Page Numbers Online - No Signup | 30tools",
  description: "Use our free Pdf Add Page Numbers to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try pdf-add-page-numbers now!",
  keywords: ["pdf-add-page-numbers","page","numbers"],
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

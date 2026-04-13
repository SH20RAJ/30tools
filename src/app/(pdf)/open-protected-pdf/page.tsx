import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "open-protected-pdf";
const CATEGORY = "pdf";


export const metadata = {
  title: "Free Open Protected Pdf Online - No Signup | 30tools",
  description: "Use our free Open Protected Pdf to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try open-protected-pdf now!",
  keywords: ["open-protected-pdf","open","protected"],
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

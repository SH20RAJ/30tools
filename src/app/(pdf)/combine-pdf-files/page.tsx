import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "combine-pdf-files";
const CATEGORY = "pdf";


export const metadata = {
  title: "Free Combine Pdf Files Online - No Signup | 30tools",
  description: "Use our free Combine Pdf Files to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try combine-pdf-files now!",
  keywords: ["combine-pdf-files","combine","files"],
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

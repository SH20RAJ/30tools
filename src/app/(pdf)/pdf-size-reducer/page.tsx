import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "pdf-size-reducer";
const CATEGORY = "pdf";


export const metadata = {
  title: "Free Pdf Size Reducer Online - No Signup | 30tools",
  description: "Use our free Pdf Size Reducer to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try pdf-size-reducer now!",
  keywords: ["pdf-size-reducer","size","reducer"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "meta-description-length-check";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Meta Description Length Check Online - No Signup | 30tools",
  description: "Use our free Meta Description Length Check to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try meta-description-length-check now!",
  keywords: ["meta-description-length-check","meta","description","length","check"],
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

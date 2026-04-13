import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "robots-file-maker";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Robots File Maker Online - No Signup | 30tools",
  description: "Use our free Robots File Maker to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try robots-file-maker now!",
  keywords: ["robots-file-maker","robots","file","maker"],
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

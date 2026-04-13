import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "fb-clip-downloader";
const CATEGORY = "youtube";


export const metadata = {
  title: "Free Fb Clip Downloader Online - No Signup | 30tools",
  description: "Use our free Fb Clip Downloader to download YouTube content instantly. No registration needed, high quality results, and secure browser-based processing. Try fb-clip-downloader now!",
  keywords: ["fb-clip-downloader","clip","downloader"],
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

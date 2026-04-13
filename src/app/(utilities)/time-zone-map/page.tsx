import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "time-zone-map";
const CATEGORY = "utilities";


export const metadata = {
  title: "Free Time Zone Map Online - No Signup | 30tools",
  description: "Use our free Time Zone Map to perform helpful calculations instantly. No registration needed, high quality results, and secure browser-based processing. Try time-zone-map now!",
  keywords: ["time-zone-map","time","zone"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "duplicate-content-finder";
const CATEGORY = "text";


export const metadata = {
  title: "Free Duplicate Content Finder Online - No Signup | 30tools",
  description: "Use our free Duplicate Content Finder to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try duplicate-content-finder now!",
  keywords: ["duplicate-content-finder","duplicate","content","finder"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "sentence-case-tool";
const CATEGORY = "text";


export const metadata = {
  title: "Free Sentence Case Tool Online - No Signup | 30tools",
  description: "Use our free Sentence Case Tool to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try sentence-case-tool now!",
  keywords: ["sentence-case-tool","sentence","case","tool"],
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

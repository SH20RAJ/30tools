import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "extract-hyperlinks";
const CATEGORY = "text";


export const metadata = {
  title: "Free Extract Hyperlinks Online - No Signup | 30tools",
  description: "Use our free Extract Hyperlinks to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try extract-hyperlinks now!",
  keywords: ["extract-hyperlinks","extract","hyperlinks"],
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

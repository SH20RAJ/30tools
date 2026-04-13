import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "website-meta-audit";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Website Meta Audit Online - No Signup | 30tools",
  description: "Use our free Website Meta Audit to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try website-meta-audit now!",
  keywords: ["website-meta-audit","website","meta","audit"],
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

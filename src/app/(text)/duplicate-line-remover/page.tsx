import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "duplicate-line-remover";
const CATEGORY = "text";


export const metadata = {
  title: "Free Duplicate Line Remover Online - No Signup | 30tools",
  description: "Use our free Duplicate Line Remover to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try duplicate-line-remover now!",
  keywords: ["duplicate-line-remover","duplicate","line","remover"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "sha256-hash-calculator";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Sha256 Hash Calculator Online - No Signup | 30tools",
  description: "Use our free Sha256 Hash Calculator to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try sha256-hash-calculator now!",
  keywords: ["sha256-hash-calculator","sha256","hash","calculator"],
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

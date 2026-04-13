import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "remove-duplicate-lines";
const CATEGORY = "text";


export const metadata = {
  title: "Free Remove Duplicate Lines Online - No Signup | 30tools",
  description: "Use our free Remove Duplicate Lines to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try remove-duplicate-lines now!",
  keywords: ["remove-duplicate-lines","remove","duplicate","lines"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "remove-bg-online";
const CATEGORY = "text";


export const metadata = {
  title: "Free Remove Bg Online Online - No Signup | 30tools",
  description: "Use our free Remove Bg Online to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try remove-bg-online now!",
  keywords: ["remove-bg-online","remove","online"],
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

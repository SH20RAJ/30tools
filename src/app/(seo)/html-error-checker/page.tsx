import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "html-error-checker";
const CATEGORY = "seo";


export const metadata = {
  title: "Free Html Error Checker Online - No Signup | 30tools",
  description: "Use our free Html Error Checker to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try html-error-checker now!",
  keywords: ["html-error-checker","html","error","checker"],
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

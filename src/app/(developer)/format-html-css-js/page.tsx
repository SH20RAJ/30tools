import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "format-html-css-js";
const CATEGORY = "developer";


export const metadata = {
  title: "Free Format Html Css Js Online - No Signup | 30tools",
  description: "Use our free Format Html Css Js to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try format-html-css-js now!",
  keywords: ["format-html-css-js","format","html"],
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

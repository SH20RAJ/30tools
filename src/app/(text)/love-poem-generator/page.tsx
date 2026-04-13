import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "love-poem-generator";
const CATEGORY = "text";


export const metadata = {
  title: "Free Love Poem Generator Online - No Signup | 30tools",
  description: "Use our free Love Poem Generator to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try love-poem-generator now!",
  keywords: ["love-poem-generator","love","poem","generator"],
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

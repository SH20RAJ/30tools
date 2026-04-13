import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "fake-chat-generator";
const CATEGORY = "text";


export const metadata = {
  title: "Free Fake Chat Generator Online - No Signup | 30tools",
  description: "Use our free Fake Chat Generator to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try fake-chat-generator now!",
  keywords: ["fake-chat-generator","fake","chat","generator"],
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

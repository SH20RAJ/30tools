import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "password-tester-online";
const CATEGORY = "generators";


export const metadata = {
  title: "Free Password Tester Online Online - No Signup | 30tools",
  description: "Use our free Password Tester Online to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try password-tester-online now!",
  keywords: ["password-tester-online","password","tester","online"],
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

import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "paypal-donation-link";
const CATEGORY = "others";


export default async function Page() {
    return <PremiumToolPage toolId={TOOL_ID} />;
}

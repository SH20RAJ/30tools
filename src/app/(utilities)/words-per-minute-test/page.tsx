import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "words-per-minute-test";
const CATEGORY = "others";


export default async function Page() {
    return <PremiumToolPage toolId={TOOL_ID} />;
}

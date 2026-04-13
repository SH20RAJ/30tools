import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "rich-results-test";
const CATEGORY = "others";


export default async function Page() {
    return <PremiumToolPage toolId={TOOL_ID} />;
}

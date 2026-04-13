import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "good-excuses-for-work";
const CATEGORY = "others";

export async function generateMetadata({ searchParams }: any) {
    const params = await searchParams;
    return generateToolMetadata(TOOL_ID, CATEGORY, params.lang || "en", {}, params.variant);
}

export default async function Page() {
    return <PremiumToolPage toolId={TOOL_ID} />;
}

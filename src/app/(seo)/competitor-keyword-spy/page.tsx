import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "competitor-keyword-spy";
const CATEGORY = "seo";

export async function generateMetadata({ searchParams }: any) {
    const params = await searchParams;
    return generateToolMetadata(TOOL_ID, CATEGORY, params.lang || "en", {}, params.variant);
}

export default async function Page() {
    return <PremiumToolPage toolId={TOOL_ID} />;
}

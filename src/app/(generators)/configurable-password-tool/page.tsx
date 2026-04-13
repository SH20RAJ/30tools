import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "configurable-password-tool";
const CATEGORY = "generators";

export async function generateMetadata({ searchParams }: any) {
    const params = await searchParams;
    return generateToolMetadata(TOOL_ID, CATEGORY, params.lang || "en", {}, params.variant);
}

export default async function Page() {
    return <PremiumToolPage toolId={TOOL_ID} />;
}

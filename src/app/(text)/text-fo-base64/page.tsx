import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "text-fo-base64";
const CATEGORY = "text";

export async function generateMetadata({ searchParams }: any) {
    const params = await searchParams;
    return generateToolMetadata(TOOL_ID, CATEGORY, params.lang || "en", {}, params.variant);
}

export default async function Page() {
    return <PremiumToolPage toolId={TOOL_ID} />;
}

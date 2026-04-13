import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

const TOOL_ID = "save-snaps-to-gallery";
const CATEGORY = "downloaders";

export async function generateMetadata({ searchParams }: any) {
    const params = await searchParams;
    return generateToolMetadata(TOOL_ID, CATEGORY, params.lang || "en", {}, params.variant);
}

export default async function Page() {
    return <ToolPlaceholderPage toolId={TOOL_ID} />;
}

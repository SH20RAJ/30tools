import ComingSoon from "@/components/shared/ComingSoon";

export const metadata = {
	title: "Free Batch Image Processor Online - No Signup | 30tools",
	description: "Batch Image Processor - Coming Soon",
	robots: { index: true, follow: true },
};

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	return <ComingSoon toolName="Batch Image Processor" />;
}

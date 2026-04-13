import ComingSoon from "@/components/shared/ComingSoon";

export const metadata = {
	title: "Free Code Tools Online - No Signup | 30tools",
	description: "Code Tools - Coming Soon",
	robots: { index: true, follow: true },
};

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	return <ComingSoon toolName="Code Tools" />;
}

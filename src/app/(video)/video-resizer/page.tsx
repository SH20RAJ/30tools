import ComingSoon from "@/components/shared/ComingSoon";

export const metadata = {
	title: "Free Video Resizer Online - No Signup | 30tools",
	description: "Video Resizer - Coming Soon",
	robots: { index: true, follow: true },
};

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	return <ComingSoon toolName="Video Resizer" />;
}

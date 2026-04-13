import ComingSoon from "@/components/shared/ComingSoon";

export const metadata = {
	title: "Free Instagram Reel Maker Online - No Signup | 30tools",
	description: "Instagram Reel Maker - Coming Soon",
	robots: { index: true, follow: true },
};

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	return <ComingSoon toolName="Instagram Reel Maker" />;
}

import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
	title: { absolute: "Image to Icon - Free Online Tool | 30Tools" },
	description:
		"Free online Image to Icon. Fast, secure, and easy to use with no registration required.",
};

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	return <ComingSoon toolName="Image to Icon" />;
}

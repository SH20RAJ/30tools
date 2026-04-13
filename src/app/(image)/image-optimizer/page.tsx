import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
	title: { absolute: "Image Optimizer - Free Online Tool | 30Tools" },
	description:
		"Free online Image Optimizer. Fast, secure, and easy to use with no registration required.",
};

export const metadata = {
	title: "Free Image Optimizer Online - No Signup | 30tools",
	description: "Free Image Optimizer online tool. Fast and secure.",
	robots: { index: true, follow: true },
};

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	return <ComingSoon toolName="Image Optimizer" />;
}

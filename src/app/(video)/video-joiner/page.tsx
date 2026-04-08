import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata = generateToolMetadata("video-joiner", "others");

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	return <ComingSoon toolName="Video Joiner" />;
}

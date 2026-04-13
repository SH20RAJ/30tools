import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata = {
  title: "Free Audio Joiner Online - No Signup | 30tools",
  description: "Audio Joiner - Coming Soon",
  robots: { index: true, follow: true },
};

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	return <ComingSoon toolName="Audio Joiner" />;
}

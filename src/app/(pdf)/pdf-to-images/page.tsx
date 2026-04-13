import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
	title: { absolute: "PDF to Images - Free Online Tool | 30Tools" },
	description:
		"Free online PDF to Images. Fast, secure, and easy to use with no registration required.",
};

export const metadata = {
	title: "Free Pdf To Images Online - No Signup | 30tools",
	description: "Free Pdf To Images online tool. Fast and secure.",
	robots: { index: true, follow: true },
};

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	return <ComingSoon toolName="PDF to Images" />;
}

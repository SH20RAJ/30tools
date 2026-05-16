import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Backlink Checker Online – Fast & No Signup | 30tools",
	description: "Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data.",
	keywords: "backlink checker, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/backlink-checker",
	},
	openGraph: {
		title: "Free Backlink Checker Online – Fast & No Signup | 30tools",
		description: "Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data.",
		url: "https://30tools.com/backlink-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Backlink Checker Online – Fast & No Signup | 30tools",
		description: "Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/backlink-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp />
		</ToolLayout>
	);
}

import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LegalTemplateGenerator from "@/components/tools/built-ins/LegalTemplateGenerator";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Privacy Policy Generator Online – Fast & No Signup | 30tools",
	description: "Free privacy policy generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "privacy policy generator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/privacy-policy-generator",
	},
	openGraph: {
		title: "Free Privacy Policy Generator Online – Fast & No Signup | 30tools",
		description: "Free privacy policy generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/privacy-policy-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Privacy Policy Generator Online – Fast & No Signup | 30tools",
		description: "Free privacy policy generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/privacy-policy-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LegalTemplateGenerator />
		</ToolLayout>
	);
}

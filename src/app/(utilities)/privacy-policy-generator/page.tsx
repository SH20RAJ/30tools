import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LegalTemplateGenerator from "@/components/tools/built-ins/LegalTemplateGenerator";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Privacy Policy Generator Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Privacy Policy Generator online. Fast, secure browser-based utility with no registration. Try it free now.",
	keywords: "privacy policy generator, free online tool, no signup, privacy-policy-generator, free privacy-policy-generator, Privacy Policy Generator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/privacy-policy-generator",
	},
	openGraph: {
		title: "Free Privacy Policy Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Privacy Policy Generator online. Fast, secure browser-based utility with no registration. Try it free now.",
		url: "https://30tools.com/privacy-policy-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Privacy Policy Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Privacy Policy Generator online. Fast, secure browser-based utility with no registration. Try it free now.",
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

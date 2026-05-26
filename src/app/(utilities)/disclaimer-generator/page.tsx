import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LegalTemplateGenerator from "@/components/tools/built-ins/LegalTemplateGenerator";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Disclaimer Generator Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Disclaimer Generator online. Fast, secure browser-based utility with no registration. No signup required.",
	keywords: "disclaimer generator, free online tool, no signup, disclaimer-generator, free disclaimer-generator, Disclaimer Generator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/disclaimer-generator",
	},
	openGraph: {
		title: "Free Disclaimer Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Disclaimer Generator online. Fast, secure browser-based utility with no registration. No signup required.",
		url: "https://30tools.com/disclaimer-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Disclaimer Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Disclaimer Generator online. Fast, secure browser-based utility with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/disclaimer-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LegalTemplateGenerator />
		</ToolLayout>
	);
}

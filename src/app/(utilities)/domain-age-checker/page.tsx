import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Domain Age Checker Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Domain Age Checker online. Fast, secure browser-based utility with no registration. 100% free and secure.",
	keywords: "domain age checker, free online tool, no signup, domain-age-checker, free domain-age-checker, Domain Age Checker online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/domain-age-checker",
	},
	openGraph: {
		title: "Free Domain Age Checker Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Domain Age Checker online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		url: "https://30tools.com/domain-age-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Domain Age Checker Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Domain Age Checker online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/domain-age-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="domain-age-checker" />
		</ToolLayout>
	);
}

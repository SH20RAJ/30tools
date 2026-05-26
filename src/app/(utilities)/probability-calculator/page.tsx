import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Probability Calculator Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Probability Calculator online. Fast, secure browser-based utility with no registration. Try it free now.",
	keywords: "probability calculator, free online tool, no signup, probability-calculator, free probability-calculator, Probability Calculator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/probability-calculator",
	},
	openGraph: {
		title: "Free Probability Calculator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Probability Calculator online. Fast, secure browser-based utility with no registration. Try it free now.",
		url: "https://30tools.com/probability-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Probability Calculator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Probability Calculator online. Fast, secure browser-based utility with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/probability-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="probability-calculator" />
		</ToolLayout>
	);
}

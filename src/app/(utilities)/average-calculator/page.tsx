import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Average Calculator Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Average Calculator online. Fast, secure browser-based utility with no registration. 100% free and secure.",
	keywords: "average calculator, free online tool, no signup, average-calculator, free average-calculator, Average Calculator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/average-calculator",
	},
	openGraph: {
		title: "Free Average Calculator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Average Calculator online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		url: "https://30tools.com/average-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Average Calculator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Average Calculator online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/average-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="average-calculator" />
		</ToolLayout>
	);
}

import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Age Calculator Online - No Signup, All-in-One | 30tools",
	description: "Free age calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "age calculator, calculate age, birthdate calculator, age from date, how old am i, free tool, 30tools, age-calculator, free age-calculator, age calculator online, online utility, free converter",
	alternates: {
		canonical: "https://30tools.com/age-calculator",
	},
	openGraph: {
		title: "Free Age Calculator Online - No Signup, All-in-One | 30tools",
		description: "Free age calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/age-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Age Calculator Online - No Signup, All-in-One | 30tools",
		description: "Free age calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/age-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="age-calculator" />
		</ToolLayout>
	);
}

import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PasswordGeneratorTool from "@/components/tools/utilities/PasswordGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Password Generator Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Password Generator online. Fast, secure browser-based utility with no registration. 100% free and secure.",
	keywords: "password generator, strong password maker, secure password generator, random password, free tool, 30tools, password-generator, free password-generator, password generator online, online utility, free converter, browser tool",
	alternates: {
		canonical: "https://30tools.com/password-generator",
	},
	openGraph: {
		title: "Free Password Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Password Generator online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		url: "https://30tools.com/password-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Password Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Password Generator online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/password-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PasswordGeneratorTool />
		</ToolLayout>
	);
}

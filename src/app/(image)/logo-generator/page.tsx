import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LogoGeneratorTool from "@/components/tools/image/LogoGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Logo Generator Online - No Signup | 30tools",
	description: "Create professional logos with text, fonts, and custom colors",
	keywords: "logo generator, free online tool, no signup, logo-generator, free logo-generator, Logo Generator online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/logo-generator",
	},
	openGraph: {
		title: "Free Logo Generator Online - No Signup | 30tools",
		description: "Create professional logos with text, fonts, and custom colors",
		url: "https://30tools.com/logo-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Logo Generator Online - No Signup | 30tools",
		description: "Create professional logos with text, fonts, and custom colors",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/logo-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LogoGeneratorTool />
		</ToolLayout>
	);
}

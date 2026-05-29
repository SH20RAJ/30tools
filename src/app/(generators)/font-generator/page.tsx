import ToolLayout from "@/components/tools/shared/ToolLayout";
import FontGeneratorTool from "@/components/tools/generators/FontGeneratorTool";

export const metadata = {
	title: "Free Font Generator Online - No Signup | 30tools",
	description: "Professional Font Generator tool for free online use.",
	keywords: "font, generator, free font generator, online font generator, 30tools, font-generator, font generator, free font-generator, font generator online, online generator, free creator, content generator",
	alternates: {
		canonical: "https://30tools.com/font-generator",
	},
	openGraph: {
		title: "Free Font Generator Online - No Signup | 30tools",
		description: "Professional Font Generator tool for free online use.",
		url: "https://30tools.com/font-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Font Generator Online - No Signup | 30tools",
		description: "Professional Font Generator tool for free online use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "font-generator", name: "Font Generator", description: "Transform your text into 15+ fancy Unicode font styles instantly. Copy stylish text for Instagram, Twitter, Discord, and more with our free Font Generator.", route: "/font-generator", category: "generators" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/font-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><FontGeneratorTool /></ToolLayout>
		</>
	);
}

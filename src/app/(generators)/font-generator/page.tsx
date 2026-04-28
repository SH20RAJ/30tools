import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free Font Generator Online - No Signup | 30tools",
	description: "Transform your text into 15+ fancy Unicode font styles instantly. Copy stylish text for Instagram, Twitter, Discord, and more with our free Font Generator.",
	keywords: "font, generator, free font generator, online font generator, 30tools",
	alternates: { canonical: "https://30tools.com/font-generator" },
	openGraph: { title: "Free Font Generator Online - No Signup | 30tools", description: "Transform your text into 15+ fancy Unicode font styles instantly. Copy stylish text for Instagram, Twitter, Discord, and more with our free Font Gener.", url: "https://30tools.com/font-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Font Generator Online - No Signup | 30tools", description: "Transform your text into 15+ fancy Unicode font styles instantly. Copy stylish text for Instagram, Twitter, Discord, and more with our free Font Gener.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "font-generator", name: "Font Generator", description: "Transform your text into 15+ fancy Unicode font styles instantly. Copy stylish text for Instagram, Twitter, Discord, and more with our free Font Generator.", route: "/font-generator", category: "generators" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/font-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

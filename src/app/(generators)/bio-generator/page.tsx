import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free Bio Generator Online - No Signup | 30tools",
	description: "Generate creative, engaging bios for Instagram, Twitter, LinkedIn, and more. Our free Bio Generator creates professional and catchy bios instantly in your browser.",
	keywords: "bio generator, instagram bio generator, twitter bio, free bio maker, social media bio, 30tools",
	alternates: { canonical: "https://30tools.com/bio-generator" },
	openGraph: { title: "Free Bio Generator Online - No Signup | 30tools", description: "Generate creative, engaging bios for Instagram, Twitter, LinkedIn, and more instantly.", url: "https://30tools.com/bio-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Bio Generator Online - No Signup | 30tools", description: "Generate creative, engaging bios for Instagram, Twitter, LinkedIn, and more instantly.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "bio-generator", name: "Bio Generator", description: "Generate creative, engaging bios for Instagram, Twitter, LinkedIn, and more. Our free Bio Generator creates professional and catchy bios instantly in your browser.", route: "/bio-generator", category: "generators" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/bio-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

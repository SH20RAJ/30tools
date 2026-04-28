import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free Business Name Generator Online - No Signup | 30tools",
	description: "Generate unique, creative business name ideas instantly. Our free Business Name Generator helps entrepreneurs find the perfect brand name with AI-powered suggestions.",
	keywords: "business, name, generator, free business name generator, online business name generator, 30tools",
	alternates: { canonical: "https://30tools.com/business-name-generator" },
	openGraph: { title: "Free Business Name Generator Online - No Signup | 30tools", description: "Generate unique, creative business name ideas instantly. Our free Business Name Generator helps entrepreneurs find the perfect brand name with AI-powe.", url: "https://30tools.com/business-name-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Business Name Generator Online - No Signup | 30tools", description: "Generate unique, creative business name ideas instantly. Our free Business Name Generator helps entrepreneurs find the perfect brand name with AI-powe.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "business-name-generator", name: "Business Name Generator", description: "Generate unique, creative business name ideas instantly. Our free Business Name Generator helps entrepreneurs find the perfect brand name with AI-powered suggestions.", route: "/business-name-generator", category: "generators" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/business-name-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

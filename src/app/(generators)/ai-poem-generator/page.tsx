import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free AI Poem Generator Online - No Signup | 30tools",
	description: "Create beautiful, unique poems on any topic instantly. Our free AI Poem Generator crafts rhyming and free-verse poetry for any occasion in seconds.",
	keywords: "ai, poem, generator, free ai poem generator, online ai poem generator, 30tools",
	alternates: { canonical: "https://30tools.com/ai-poem-generator" },
	openGraph: { title: "Free AI Poem Generator Online - No Signup | 30tools", description: "Create beautiful, unique poems on any topic instantly. Our free AI Poem Generator crafts rhyming and free-verse poetry for any occasion in seconds..", url: "https://30tools.com/ai-poem-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free AI Poem Generator Online - No Signup | 30tools", description: "Create beautiful, unique poems on any topic instantly. Our free AI Poem Generator crafts rhyming and free-verse poetry for any occasion in seconds..", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "ai-poem-generator", name: "AI Poem Generator", description: "Create beautiful, unique poems on any topic instantly. Our free AI Poem Generator crafts rhyming and free-verse poetry for any occasion in seconds.", route: "/ai-poem-generator", category: "generators" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/ai-poem-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

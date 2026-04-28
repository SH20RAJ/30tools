import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free Excuse Generator Online - No Signup | 30tools",
	description: "Generate creative, believable excuses instantly. Our free Excuse Generator creates funny and realistic excuses for any situation — work, school, or social events.",
	keywords: "excuse, generator, free excuse generator, online excuse generator, 30tools",
	alternates: { canonical: "https://30tools.com/excuse-generator" },
	openGraph: { title: "Free Excuse Generator Online - No Signup | 30tools", description: "Generate creative, believable excuses instantly. Our free Excuse Generator creates funny and realistic excuses for any situation — work, school, or so.", url: "https://30tools.com/excuse-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Excuse Generator Online - No Signup | 30tools", description: "Generate creative, believable excuses instantly. Our free Excuse Generator creates funny and realistic excuses for any situation — work, school, or so.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "excuse-generator", name: "Excuse Generator", description: "Generate creative, believable excuses instantly. Our free Excuse Generator creates funny and realistic excuses for any situation — work, school, or social events.", route: "/excuse-generator", category: "generators" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/excuse-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

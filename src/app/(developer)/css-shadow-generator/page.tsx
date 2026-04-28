import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free CSS Shadow Generator Online - No Signup | 30tools",
	description: "Design perfect CSS box-shadows with our visual editor. Adjust offset, blur, spread, color, and opacity with live preview. Copy production-ready CSS code instantly.",
	keywords: "css, shadow, generator, free css shadow generator, online css shadow generator, 30tools",
	alternates: { canonical: "https://30tools.com/css-shadow-generator" },
	openGraph: { title: "Free CSS Shadow Generator Online - No Signup | 30tools", description: "Design perfect CSS box-shadows with our visual editor. Adjust offset, blur, spread, color, and opacity with live preview. Copy production-ready CSS co.", url: "https://30tools.com/css-shadow-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free CSS Shadow Generator Online - No Signup | 30tools", description: "Design perfect CSS box-shadows with our visual editor. Adjust offset, blur, spread, color, and opacity with live preview. Copy production-ready CSS co.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "css-shadow-generator", name: "CSS Shadow Generator", description: "Design perfect CSS box-shadows with our visual editor. Adjust offset, blur, spread, color, and opacity with live preview. Copy production-ready CSS code instantly.", route: "/css-shadow-generator", category: "developer" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/css-shadow-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

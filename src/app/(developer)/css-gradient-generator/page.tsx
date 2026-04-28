import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free CSS Gradient Generator Online - No Signup | 30tools",
	description: "Create beautiful CSS gradients with a visual editor. Our free CSS Gradient Generator supports linear, radial, and conic gradients with live preview and copy-paste CSS code.",
	keywords: "css, gradient, generator, free css gradient generator, online css gradient generator, 30tools",
	alternates: { canonical: "https://30tools.com/css-gradient-generator" },
	openGraph: { title: "Free CSS Gradient Generator Online - No Signup | 30tools", description: "Create beautiful CSS gradients with a visual editor. Our free CSS Gradient Generator supports linear, radial, and conic gradients with live preview an.", url: "https://30tools.com/css-gradient-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free CSS Gradient Generator Online - No Signup | 30tools", description: "Create beautiful CSS gradients with a visual editor. Our free CSS Gradient Generator supports linear, radial, and conic gradients with live preview an.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "css-gradient-generator", name: "CSS Gradient Generator", description: "Create beautiful CSS gradients with a visual editor. Our free CSS Gradient Generator supports linear, radial, and conic gradients with live preview and copy-paste CSS code.", route: "/css-gradient-generator", category: "developer" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/css-gradient-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

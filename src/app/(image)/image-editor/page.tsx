import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free Image Editor Online - No Signup | 30tools",
	description: "Edit, resize, crop, and transform images directly in your browser. Our free Image Editor provides professional-grade tools with zero uploads required.",
	keywords: "image, editor, free image editor, online image editor, 30tools",
	alternates: { canonical: "https://30tools.com/image-editor" },
	openGraph: { title: "Free Image Editor Online - No Signup | 30tools", description: "Edit, resize, crop, and transform images directly in your browser. Our free Image Editor provides professional-grade tools with zero uploads required..", url: "https://30tools.com/image-editor", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Image Editor Online - No Signup | 30tools", description: "Edit, resize, crop, and transform images directly in your browser. Our free Image Editor provides professional-grade tools with zero uploads required..", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "image-editor", name: "Image Editor", description: "Edit, resize, crop, and transform images directly in your browser. Our free Image Editor provides professional-grade tools with zero uploads required.", route: "/image-editor", category: "image" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/image-editor", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

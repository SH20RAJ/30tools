import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free Icon Generator Online - No Signup | 30tools",
	description: "Create professional app icons and favicons from any image. Our free Icon Generator outputs multiple sizes for iOS, Android, and web applications.",
	keywords: "icon, generator, free icon generator, online icon generator, 30tools",
	alternates: { canonical: "https://30tools.com/icon-generator" },
	openGraph: { title: "Free Icon Generator Online - No Signup | 30tools", description: "Create professional app icons and favicons from any image. Our free Icon Generator outputs multiple sizes for iOS, Android, and web applications..", url: "https://30tools.com/icon-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Icon Generator Online - No Signup | 30tools", description: "Create professional app icons and favicons from any image. Our free Icon Generator outputs multiple sizes for iOS, Android, and web applications..", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "icon-generator", name: "Icon Generator", description: "Create professional app icons and favicons from any image. Our free Icon Generator outputs multiple sizes for iOS, Android, and web applications.", route: "/icon-generator", category: "image" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/icon-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

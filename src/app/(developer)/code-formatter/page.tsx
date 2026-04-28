import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free Code Formatter Online - No Signup | 30tools",
	description: "Format and beautify JavaScript, HTML, CSS, and other code instantly. Our free Code Formatter improves readability with proper indentation and syntax highlighting.",
	keywords: "code, formatter, free code formatter, online code formatter, 30tools",
	alternates: { canonical: "https://30tools.com/code-formatter" },
	openGraph: { title: "Free Code Formatter Online - No Signup | 30tools", description: "Format and beautify JavaScript, HTML, CSS, and other code instantly. Our free Code Formatter improves readability with proper indentation and syntax h.", url: "https://30tools.com/code-formatter", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Code Formatter Online - No Signup | 30tools", description: "Format and beautify JavaScript, HTML, CSS, and other code instantly. Our free Code Formatter improves readability with proper indentation and syntax h.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "code-formatter", name: "Code Formatter", description: "Format and beautify JavaScript, HTML, CSS, and other code instantly. Our free Code Formatter improves readability with proper indentation and syntax highlighting.", route: "/code-formatter", category: "developer" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/code-formatter", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

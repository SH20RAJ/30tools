import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Free Privacy Policy Online Online – Fast & No Signup | 30tools",
	description: "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work. No signup required.",
	keywords: "free privacy policy online, free free privacy policy online, online free privacy policy online, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/privacy",
	},
	openGraph: {
		title: "Free Free Privacy Policy Online Online – Fast & No Signup | 30tools",
		description: "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work. No signup required.",
		url: "https://30tools.com/privacy",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Free Privacy Policy Online Online – Fast & No Signup | 30tools",
		description: "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "privacy",
        "name": "Free Privacy Policy Online",
        "description": "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work. No signup required.",
        "route": "/privacy",
        "extraSlugs": [],
        "popular": false,
        "category": "company"
};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/privacy",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "company" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}

import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free IndexNow Submitter Online – Fast & No Signup | 30tools",
	description: "Submit URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol. 100% free, fast, and no signup required.",
	keywords: "indexnow submitter, free indexnow submitter, online indexnow submitter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/indexnow",
	},
	openGraph: {
		title: "Free IndexNow Submitter Online – Fast & No Signup | 30tools",
		description: "Submit URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol. 100% free, fast, and no signup required.",
		url: "https://30tools.com/indexnow",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free IndexNow Submitter Online – Fast & No Signup | 30tools",
		description: "Submit URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "indexnow-submitter",
        "name": "IndexNow Submitter",
        "description": "Submit URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol.",
        "route": "/indexnow",
        "extraSlugs": [
                "submit-url-to-bing-instantly",
                "indexnow-api-tool"
        ],
        "popular": false,
        "category": "utilities"
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
						url: "https://30tools.com/indexnow",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}

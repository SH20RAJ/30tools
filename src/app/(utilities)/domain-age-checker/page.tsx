import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Domain Age Checker Online – Fast & No Signup | 30tools",
	description: "Find the exact age of any domain name instantly. Our free online tool helps with SEO research, domain appraisal, and competitive analysis. 100% free, fast, and no signup required.",
	keywords: "domain age checker, free domain age checker, online domain age checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/domain-age-checker",
	},
	openGraph: {
		title: "Free Domain Age Checker Online – Fast & No Signup | 30tools",
		description: "Find the exact age of any domain name instantly. Our free online tool helps with SEO research, domain appraisal, and competitive analysis. 100% free, fast, and no signup required.",
		url: "https://30tools.com/domain-age-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Domain Age Checker Online – Fast & No Signup | 30tools",
		description: "Find the exact age of any domain name instantly. Our free online tool helps with SEO research, domain appraisal, and competitive analysis. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "domain-age-checker",
        "name": "Domain Age Checker",
        "description": "Find the exact age of any domain name instantly. Our free online tool helps with SEO research, domain appraisal, and competitive analysis.",
        "route": "/domain-age-checker",
        "extraSlugs": [
                "free-domain-age-checker-online",
                "domain-age-checker-tool",
                "check-website-creation-date"
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
						url: "https://30tools.com/domain-age-checker",
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

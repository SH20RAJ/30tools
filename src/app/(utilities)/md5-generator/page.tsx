import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free MD5 Generator Online – Fast & No Signup | 30tools",
	description: "Free md5 generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "md5 generator, free md5 generator, online md5 generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/md5-generator",
	},
	openGraph: {
		title: "Free MD5 Generator Online – Fast & No Signup | 30tools",
		description: "Free md5 generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/md5-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free MD5 Generator Online – Fast & No Signup | 30tools",
		description: "Free md5 generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "md5-generator",
        "name": "MD5 Generator",
        "description": "Free md5 generator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/md5-generator",
        "extraSlugs": [
                "free-md5-generator-online",
                "md5-generator-tool",
                "md5-hash-generator"
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
						url: "https://30tools.com/md5-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}

import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Bulk Keyword Rank Checker Online – Fast & No Signup | 30tools",
	description: "Check Google rankings for multiple keywords instantly with our free bulk keyword rank checker. Track keyword positions, monitor competitors, and get accurate SERP data. No signup required.",
	keywords: "bulk keyword rank checker, free bulk keyword rank checker, online bulk keyword rank checker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/bulk-keyword-rank-checker",
	},
	openGraph: {
		title: "Free Bulk Keyword Rank Checker Online – Fast & No Signup | 30tools",
		description: "Check Google rankings for multiple keywords instantly with our free bulk keyword rank checker. Track keyword positions, monitor competitors, and get accurate SERP data. No signup required.",
		url: "https://30tools.com/bulk-keyword-rank-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Bulk Keyword Rank Checker Online – Fast & No Signup | 30tools",
		description: "Check Google rankings for multiple keywords instantly with our free bulk keyword rank checker. Track keyword positions, monitor competitors, and get accurate SERP data. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "bulk-keyword-rank-checker",
        "name": "Bulk Keyword Rank Checker",
        "description": "Check Google rankings for multiple keywords instantly with our free bulk keyword rank checker. Track keyword positions, monitor competitors, and get accurate SERP data. No signup required.",
        "route": "/bulk-keyword-rank-checker",
        "extraSlugs": [
                "bulk keyword rank checker",
                "bulk rank tracking",
                "check keyword position",
                "free rank checker",
                "google rank checker",
                "google-rank-checker",
                "google-rank-checker-bulk",
                "keyword position tracker",
                "keyword rank checker",
                "keyword-potransition-checker",
                "rank-checker-bulk",
                "serp checker",
                "serp-tracker-bulk"
        ],
        "popular": true,
        "category": "seo"
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
						url: "https://30tools.com/bulk-keyword-rank-checker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "seo" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}

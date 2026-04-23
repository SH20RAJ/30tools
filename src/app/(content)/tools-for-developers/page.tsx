import ToolLayout from "@/components/tools/shared/ToolLayout";
import Fragment from "react";


export const metadata = {
	title: "Tools for Developers - Free Online Stack | 30tools Expert Guide",
	description: "A practical collection of free tools for developers: JSON utilities, encoding, text transformers, validators, and conversion helpers.",
	keywords: "tools for developers - free online stack, tools for developers - free online stack guide, 30tools",
	alternates: {
		canonical: "https://30tools.com/tools-for-developers",
	},
	openGraph: {
		title: "Tools for Developers - Free Online Stack | 30tools Expert Guide",
		description: "A practical collection of free tools for developers: JSON utilities, encoding, text transformers, validators, and conversion helpers.",
		url: "https://30tools.com/tools-for-developers",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tools for Developers - Free Online Stack | 30tools Expert Guide",
		description: "A practical collection of free tools for developers: JSON utilities, encoding, text transformers, validators, and conversion helpers.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "tools-for-developers",
        "name": "Tools for Developers - Free Online Stack",
        "description": "A practical collection of free tools for developers: JSON utilities, encoding, text transformers, validators, and conversion helpers.",
        "route": "/tools-for-developers",
        "extraSlugs": [],
        "popular": false,
        "category": "content"
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
						url: "https://30tools.com/tools-for-developers",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "content" }}>
				<div className='min-h-[100px]'  />
			</ToolLayout>
		</>
	);
}

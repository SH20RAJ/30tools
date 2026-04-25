import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Loan Calculator Online – Fast & No Signup | 30tools",
	description: "Free loan calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "loan calculator, free loan calculator, online loan calculator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/loan-calculator",
	},
	openGraph: {
		title: "Free Loan Calculator Online – Fast & No Signup | 30tools",
		description: "Free loan calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/loan-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Loan Calculator Online – Fast & No Signup | 30tools",
		description: "Free loan calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "loan-calculator",
        "name": "Loan Calculator",
        "description": "Free loan calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/loan-calculator",
        "extraSlugs": [
                "free-loan-calculator-online",
                "loan-calculator-tool"
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
						url: "https://30tools.com/loan-calculator",
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

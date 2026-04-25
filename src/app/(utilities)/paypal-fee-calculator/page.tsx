import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Paypal Fee Calculator Online – Fast & No Signup | 30tools",
	description: "Free paypal fee calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "paypal fee calculator, free paypal fee calculator, online paypal fee calculator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/paypal-fee-calculator",
	},
	openGraph: {
		title: "Free Paypal Fee Calculator Online – Fast & No Signup | 30tools",
		description: "Free paypal fee calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/paypal-fee-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Paypal Fee Calculator Online – Fast & No Signup | 30tools",
		description: "Free paypal fee calculator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "paypal-fee-calculator",
        "name": "Paypal Fee Calculator",
        "description": "Free paypal fee calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/paypal-fee-calculator",
        "extraSlugs": [
                "free-paypal-fee-calculator-online",
                "paypal-fee-calculator-tool"
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
						url: "https://30tools.com/paypal-fee-calculator",
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

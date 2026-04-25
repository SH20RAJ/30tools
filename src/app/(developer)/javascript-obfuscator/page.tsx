import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free JavaScript Obfuscator Online – Fast & No Signup | 30tools",
	description: "Protect your JavaScript code by making it difficult to read and reverse-engineer. Our free online Obfuscator helps secure your intellectual property and prevent unauthorized script modification. 100% free, fast, and no signup required.",
	keywords: "javascript obfuscator, free javascript obfuscator, online javascript obfuscator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/javascript-obfuscator",
	},
	openGraph: {
		title: "Free JavaScript Obfuscator Online – Fast & No Signup | 30tools",
		description: "Protect your JavaScript code by making it difficult to read and reverse-engineer. Our free online Obfuscator helps secure your intellectual property and prevent unauthorized script modification. 100% free, fast, and no signup required.",
		url: "https://30tools.com/javascript-obfuscator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JavaScript Obfuscator Online – Fast & No Signup | 30tools",
		description: "Protect your JavaScript code by making it difficult to read and reverse-engineer. Our free online Obfuscator helps secure your intellectual property and prevent unauthorized script modification. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "javascript-obfuscator",
        "name": "JavaScript Obfuscator",
        "description": "Protect your JavaScript code by making it difficult to read and reverse-engineer. Our free online Obfuscator helps secure your intellectual property and prevent unauthorized script modification.",
        "route": "/javascript-obfuscator",
        "extraSlugs": [
                "free-javascript-obfuscator-online",
                "javascript-obfuscator-tool",
                "secure-js-code"
        ],
        "popular": false,
        "category": "developer"
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
						url: "https://30tools.com/javascript-obfuscator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "developer" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}

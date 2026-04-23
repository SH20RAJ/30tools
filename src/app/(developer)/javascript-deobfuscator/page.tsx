import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JavaScript DeObfuscator Online – Fast & No Signup | 30tools",
	description: "Make obfuscated JavaScript code readable again instantly. Our free online DeObfuscator reverses common obfuscation techniques to help with code analysis and debugging. 100% free, fast, and no signup required.",
	keywords: "javascript deobfuscator, free javascript deobfuscator, online javascript deobfuscator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/javascript-deobfuscator",
	},
	openGraph: {
		title: "Free JavaScript DeObfuscator Online – Fast & No Signup | 30tools",
		description: "Make obfuscated JavaScript code readable again instantly. Our free online DeObfuscator reverses common obfuscation techniques to help with code analysis and debugging. 100% free, fast, and no signup required.",
		url: "https://30tools.com/javascript-deobfuscator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JavaScript DeObfuscator Online – Fast & No Signup | 30tools",
		description: "Make obfuscated JavaScript code readable again instantly. Our free online DeObfuscator reverses common obfuscation techniques to help with code analysis and debugging. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "javascript-deobfuscator",
        "name": "JavaScript DeObfuscator",
        "description": "Make obfuscated JavaScript code readable again instantly. Our free online DeObfuscator reverses common obfuscation techniques to help with code analysis and debugging.",
        "route": "/javascript-deobfuscator",
        "extraSlugs": [
                "free-javascript-deobfuscator-online",
                "javascript-deobfuscator-tool",
                "unminify-js-online"
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
						url: "https://30tools.com/javascript-deobfuscator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "developer" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}

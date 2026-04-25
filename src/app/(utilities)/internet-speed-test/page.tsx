import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Internet Speed Test Online – Fast & No Signup | 30tools",
	description: "Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly. 100% free, fast, and no signup required.",
	keywords: "internet speed test, free internet speed test, online internet speed test, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/internet-speed-test",
	},
	openGraph: {
		title: "Free Internet Speed Test Online – Fast & No Signup | 30tools",
		description: "Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/internet-speed-test",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Internet Speed Test Online – Fast & No Signup | 30tools",
		description: "Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "internet-speed-test",
        "name": "Internet Speed Test",
        "description": "Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly.",
        "route": "/internet-speed-test",
        "extraSlugs": [
                "check-internet-speed-for-gaming",
                "check-website-speed",
                "keyboard-speed-test",
                "microphone-test-recorder",
                "mobile-friendly-test",
                "online-bandwidth-test-free",
                "rich-results-test",
                "speed-test-google",
                "typing-racer-test",
                "typing-speed-test",
                "website-performance-test",
                "words-per-minute-test"
        ],
        "popular": true,
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
						url: "https://30tools.com/internet-speed-test",
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

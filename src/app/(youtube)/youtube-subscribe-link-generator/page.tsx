import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free YouTube Subscribe Link Generator Online – Fast & No Signup | 30tools",
	description: "Create a direct YouTube subscribe link for your channel instantly. Our free online tool helps you boost your subscriber count with one-click links for social media and bios. 100% free, fast, and no signup required.",
	keywords: "youtube subscribe link generator, free youtube subscribe link generator, online youtube subscribe link generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-subscribe-link-generator",
	},
	openGraph: {
		title: "Free YouTube Subscribe Link Generator Online – Fast & No Signup | 30tools",
		description: "Create a direct YouTube subscribe link for your channel instantly. Our free online tool helps you boost your subscriber count with one-click links for social media and bios. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-subscribe-link-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Subscribe Link Generator Online – Fast & No Signup | 30tools",
		description: "Create a direct YouTube subscribe link for your channel instantly. Our free online tool helps you boost your subscriber count with one-click links for social media and bios. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-subscribe-link-generator",
        "name": "YouTube Subscribe Link Generator",
        "description": "Create a direct YouTube subscribe link for your channel instantly. Our free online tool helps you boost your subscriber count with one-click links for social media and bios.",
        "route": "/youtube-subscribe-link-generator",
        "extraSlugs": [
                "create-paypal-me-link",
                "create-short-link",
                "create-wa-link",
                "custom-payment-link-generator",
                "direct-paypal-link",
                "free-youtube-subscribe-link-generator-online",
                "link-scraper-online",
                "link-shortener-custom",
                "paypal-donation-link",
                "paypal-link-generator",
                "reduce-link-length",
                "shorten-link-free",
                "wa-me-link-generator",
                "website-link-validator",
                "whatsapp-chat-link",
                "whatsapp-direct-message-link",
                "whatsapp-link-generator",
                "youtube-subscribe-link-generator-tool",
                "make-youtube-auto-subscribe-link"
        ],
        "popular": false,
        "category": "youtube"
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
						url: "https://30tools.com/youtube-subscribe-link-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}

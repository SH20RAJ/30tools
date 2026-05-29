import ToolLayout from "@/components/tools/shared/ToolLayout";
import FakeChatGeneratorTool from "@/components/tools/generators/FakeChatGeneratorTool";

export const metadata = {
	title: "Free Fake Chat Generator Online - No Signup | 30tools",
	description: "Create realistic-looking fake chat screenshots for WhatsApp, Discord, and iMessage.",
	keywords: "fake, chat, generator, free fake chat generator, online fake chat generator, 30tools, fake-chat-generator, fake chat generator, free fake-chat-generator, fake chat generator online, online generator, free creator",
	alternates: {
		canonical: "https://30tools.com/fake-chat-generator",
	},
	openGraph: {
		title: "Free Fake Chat Generator Online - No Signup | 30tools",
		description: "Create realistic-looking fake chat screenshots for WhatsApp, Discord, and iMessage.",
		url: "https://30tools.com/fake-chat-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Fake Chat Generator Online - No Signup | 30tools",
		description: "Create realistic-looking fake chat screenshots for WhatsApp, Discord, and iMessage.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "fake-chat-generator", name: "Fake Chat Generator", description: "Create realistic fake chat screenshots for social media, presentations, or fun. Our free Fake Chat Generator supports multiple messaging app styles.", route: "/fake-chat-generator", category: "generators" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/fake-chat-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><FakeChatGeneratorTool /></ToolLayout>
		</>
	);
}

import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free Random Number Generator Online - No Signup | 30tools",
	description: "Generate random numbers with configurable ranges, counts, and unique options. Our free Random Number Generator is perfect for lotteries, games, and statistics.",
	keywords: "number, generator, free number generator, online number generator, 30tools",
	alternates: { canonical: "https://30tools.com/number-generator" },
	openGraph: { title: "Free Random Number Generator Online - No Signup | 30tools", description: "Generate random numbers with configurable ranges, counts, and unique options. Our free Random Number Generator is perfect for lotteries, games, and st.", url: "https://30tools.com/number-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Random Number Generator Online - No Signup | 30tools", description: "Generate random numbers with configurable ranges, counts, and unique options. Our free Random Number Generator is perfect for lotteries, games, and st.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "number-generator", name: "Random Number Generator", description: "Generate random numbers with configurable ranges, counts, and unique options. Our free Random Number Generator is perfect for lotteries, games, and statistics.", route: "/number-generator", category: "generators" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/number-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

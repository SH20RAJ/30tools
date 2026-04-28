import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free Poetry Generator Online - No Signup | 30tools",
	description: "Create beautiful poems with randomized templates and literary devices. Our free Poetry Generator crafts verse on demand for inspiration and creativity.",
	keywords: "poetry, generator, free poetry generator, online poetry generator, 30tools",
	alternates: { canonical: "https://30tools.com/poetry-generator" },
	openGraph: { title: "Free Poetry Generator Online - No Signup | 30tools", description: "Create beautiful poems with randomized templates and literary devices. Our free Poetry Generator crafts verse on demand for inspiration and creativity.", url: "https://30tools.com/poetry-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Poetry Generator Online - No Signup | 30tools", description: "Create beautiful poems with randomized templates and literary devices. Our free Poetry Generator crafts verse on demand for inspiration and creativity.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = { id: "poetry-generator", name: "Poetry Generator", description: "Create beautiful poems with randomized templates and literary devices. Our free Poetry Generator crafts verse on demand for inspiration and creativity.", route: "/poetry-generator", category: "generators" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: "https://30tools.com/poetry-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

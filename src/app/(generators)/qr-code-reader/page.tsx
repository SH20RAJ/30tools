import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free QR Code Reader Online - Scan & Decode | 30tools",
	description: "Scan and decode QR codes from images or using your camera online for free. Secure, browser-based QR reader with instant results and no data storage.",
	keywords: "qr code reader, scan qr code online, decode qr code, free qr scanner, 30tools",
	alternates: {
		canonical: "https://30tools.com/qr-code-reader",
	},
	openGraph: {
		title: "Free QR Code Reader Online - Scan & Decode | 30tools",
		description: "Scan and decode QR codes from images or using your camera online for free. Secure, browser-based QR reader with instant results and no data storage.",
		url: "https://30tools.com/qr-code-reader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free QR Code Reader Online - Scan & Decode | 30tools",
		description: "Scan and decode QR codes from images or using your camera online for free. Secure, browser-based QR reader with instant results and no data storage.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "qr-code-reader",
		name: "QR Code Reader",
		description: "Scan and decode QR codes from images or using your camera online for free. Secure, browser-based QR reader with instant results and no data storage.",
		route: "/qr-code-reader",
		category: "generators",
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
						url: "https://30tools.com/qr-code-reader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>
			<ToolLayout tool={tool}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}

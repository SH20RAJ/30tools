import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Guitar Tuner Online – Fast & No Signup | 30tools",
	description: "Free online guitar tuner. Uses your microphone to tune your guitar accurately. 100% free, fast, and no signup required.",
	keywords: "guitar tuner, free guitar tuner, online guitar tuner, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/guitar-tuner",
	},
	openGraph: {
		title: "Free Guitar Tuner Online – Fast & No Signup | 30tools",
		description: "Free online guitar tuner. Uses your microphone to tune your guitar accurately. 100% free, fast, and no signup required.",
		url: "https://30tools.com/guitar-tuner",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Guitar Tuner Online – Fast & No Signup | 30tools",
		description: "Free online guitar tuner. Uses your microphone to tune your guitar accurately. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "guitar-tuner",
        "name": "Guitar Tuner",
        "description": "Free online guitar tuner. Uses your microphone to tune your guitar accurately.",
        "route": "/guitar-tuner",
        "extraSlugs": [
                "free-online-guitar-tuner",
                "acoustic-guitar-tuner-online",
                "bass-guitar-tuner",
                "ukulele-tuner-online"
        ],
        "popular": false,
        "category": "audio"
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
						url: "https://30tools.com/guitar-tuner",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "audio" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}

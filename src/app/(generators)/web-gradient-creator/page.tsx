import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Web Gradient Creator Online - No Signup | 30tools",
	description:
		"Free Web Gradient Creator online. Web Gradient Creator allows you to generate random content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"web gradient creator, free online tool, no signup, generators, web gradient creator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/web-gradient-creator",
	},
	openGraph: {
		title: "Free Web Gradient Creator Online - No Signup | 30tools",
		description:
			"Free Web Gradient Creator online. Web Gradient Creator allows you to generate random content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/web-gradient-creator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Web Gradient Creator Online - No Signup | 30tools",
		description:
			"Free Web Gradient Creator online. Web Gradient Creator allows you to generate random content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "web-gradient-creator",
		name: "Web Gradient Creator",
		description:
			"Free Web Gradient Creator online. Web Gradient Creator allows you to generate random content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/web-gradient-creator",
		extraSlugs: ["web-gradient-creator"],
		category: "generators",
	};
	const breadcrumbs = [
		{
			name: "Generators Tools",
			url: "/generators-tools",
		},
		{
			name: "Web Gradient Creator",
			url: "/web-gradient-creator",
		},
	];
	const relatedTools = [
		{
			id: "ai-image-generator",
			name: "AI Image Generator",
			description:
				"Generate stunning AI images from text prompts instantly. Create photorealistic photos, digital art, anime, and illustrations for free. No signup required, unlimited generations, and 100% private browser-based processing.",
			route: "/ai-image-generator",
			extraSlugs: [
				"aesthetic-bio-generator",
				"aesthetic-collage-maker",
				"ai-art-generator-online",
				"ai-business-name-generator",
				"ai-image-generator-for-beginners",
				"ai-photo-enhancer",
				"ai-photo-generator-free",
				"ai-picture-generator",
				"ai-picture-generator-no-signup",
				"ai-poetry-generator",
				"allow-disallow-generator",
				"android-icon-maker",
				"app-icon-generator",
				"background-gradient-creator",
				"best-excuse-generator",
				"box-shadow-generator-online",
				"brand-colors-generator",
				"brand-identity-maker",
				"brand-name-generator",
				"business-name-generator",
				"bypass-ai-detection",
				"change-image-dimensions",
				"check-image-location",
				"check-image-seo",
				"circular-image-crop",
				"color-palette-generator",
				"color-wheel-generator",
				"compress-image-online",
				"crop-image-online",
				"css-gradient-generator",
				"css-gradient-maker",
				"css-shadow-maker",
				"css3-gradient-maker",
				"cut-photo",
				"delete-image-background",
				"enhance-image-quality",
				"excuse-generator",
				"fake-chat-generator",
				"fake-discord-chat-generator",
				"fake-imessage-generator",
				"fake-instagram-dm-generator",
				"fake-whatsapp-chat-generator",
				"favicon-maker-from-image",
				"free-ai-art-generator",
				"free-ai-image-generator",
				"free-photo-grid-maker",
				"free-poetry-maker",
				"generate-qr-image",
				"gradient-color-generator",
				"gradient-generator",
				"haiku-generator",
				"hash-generator",
				"html-head-tags-maker",
				"ico-file-generator",
				"icon-generator",
				"ig-photo-download-hd",
				"ig-profile-picture-viewer",
				"image-color-picker-tool",
				"image-editor",
				"image-format-changer",
				"image-optimization-test",
				"image-seo-analyzer",
				"image-size-analyzer",
				"image-tools",
				"improve-picture-resolution",
				"instagram-bio-generator",
				"instagram-font-generator",
				"instant-ai-image-creator",
				"ios-app-icon-creator",
				"json-ld-generator",
				"linear-gradient-generator",
				"love-poem-generator",
				"lucky-number-generator",
				"online-collage-maker",
				"online-thumbnail-creator",
				"photo-collage-maker",
				"photo-exif-viewer",
				"picture-background-eraser",
				"picture-collage-creator",
				"poem-generator-ai",
				"randomness-generator",
				"reduce-image-size",
				"remove-background-from-image-free",
				"resize-image-for-social-media",
				"resize-image-online",
				"resize-picture-pixels",
				"rhyme-generator",
				"rich-snippets-maker",
				"scale-image",
				"secure-hash-generator",
				"secure-pass-generator",
				"seo-keyword-generator",
				"shrink-image-file-size",
				"simple-ai-image-generator",
				"startup-name-generator",
				"stylish-bio-generator",
				"text-to-image-ai",
				"text-to-image-free",
				"tiktok-bio-generator",
				"upscale-image-online",
				"view-image-metadata",
				"web-app-icon-generator",
				"web-gradient-creator",
				"web-gradient-generator",
				"website-icon-generator",
				"website-map-maker",
				"yt-thumbnail-maker",
				"zip-creator",
			],
			popular: true,
			category: "generators",
		},
		{
			id: "ai-voice-generator",
			name: "AI Voice Generator",
			description:
				"Convert text to natural-sounding speech with AI. Enter your text and download the audio instantly.",
			route: "/ai-voice-generator",
			extraSlugs: [
				"ai-voice-changer",
				"ai-voice-creator-online",
				"ai-voice-reader",
				"celebrity-voice-generator",
				"free-ai-voice-over",
				"realistic-voice-generator",
				"record-voice-online",
				"text-to-speech-robotic-voice-free",
				"voice-recorder",
			],
			popular: true,
			category: "generators",
		},
		{
			id: "generate-icons-for-apps",
			name: "Generate Icons For Apps",
			description:
				"Free Generate Icons For Apps online. Generate Icons For Apps allows you to generate random content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
			route: "/generate-icons-for-apps",
			extraSlugs: ["generate-icons-for-apps"],
			category: "generators",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "Web Gradient Creator",
						description:
							"Free Web Gradient Creator online. Web Gradient Creator allows you to generate random content quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/web-gradient-creator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<ToolInteractivePlaceholder toolName={tool.name} />
			</ToolLayout>
		</>
	);
}

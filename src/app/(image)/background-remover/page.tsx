import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Background Remover Online – Fast & No Signup | 30tools",
	description: "Remove image backgrounds automatically with AI. Create transparent PNGs for product photos, headshots, or graphics instantly. 100% free, browser-based, and no signup needed.",
	keywords: "background remover, free background remover, online background remover, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/background-remover",
	},
	openGraph: {
		title: "Free Background Remover Online – Fast & No Signup | 30tools",
		description: "Remove image backgrounds automatically with AI. Create transparent PNGs for product photos, headshots, or graphics instantly. 100% free, browser-based, and no signup needed.",
		url: "https://30tools.com/background-remover",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Background Remover Online – Fast & No Signup | 30tools",
		description: "Remove image backgrounds automatically with AI. Create transparent PNGs for product photos, headshots, or graphics instantly. 100% free, browser-based, and no signup needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "background-remover",
        "name": "Background Remover",
        "description": "Remove image backgrounds automatically with AI. Create transparent PNGs for product photos, headshots, or graphics instantly. 100% free, browser-based, and no signup needed.",
        "route": "/background-remover",
        "extraSlugs": [
                "remove-background-from-signature-free",
                "transparent-background-maker",
                "picture-background-eraser",
                "duplicate-line-remover",
                "background-gradient-tool",
                "background-gradient-creator",
                "ai-background-eraser-online"
        ],
        "popular": true,
        "category": "image",
		"features": [
			"Automatic AI Subject Detection",
			"Supports People, Products, and Animals",
			"100% Free with No Watermarks",
			"Client-Side Processing via WebGL/WASM",
			"Export as Transparent PNG or with Solid Colors",
			"No Resolution Downgrading (Up to 10MB)"
		],
		"article": `
## Professional Background Removal Without Subscriptions
Editing out a background using the magic wand tool in Photoshop can take minutes per photo. Our AI Background Remover automates the process using advanced neural networks, isolating the main subject perfectly in seconds.

### Client-Side AI Processing
Most background removers require you to upload your photo to a server, which poses privacy risks and can be slow. Our tool downloads a lightweight, optimized AI model directly to your browser. The background removal happens locally using your device's GPU/CPU. Your photos never leave your device.

### E-Commerce & Product Photography
Clean, white, or transparent backgrounds are required for Amazon, eBay, and Shopify listings. With our tool, you can instantly prepare your product shots for listing without paying a per-image API cost or buying expensive editing software.
		`,
		"howTo": {
			"name": "How to Remove an Image Background",
			"steps": [
				{
					"name": "Upload Your Image",
					"text": "Drag and drop your photo (JPG, PNG, WEBP) onto the canvas, or click to browse your files."
				},
				{
					"name": "Wait for AI Processing",
					"text": "The local AI model will detect the primary subject (person, car, product) and mask out the background. This usually takes 2-5 seconds."
				},
				{
					"name": "Refine Edges (Optional)",
					"text": "If needed, use the built-in refinement sliders to adjust the edge feathering or shift the mask."
				},
				{
					"name": "Download Final Image",
					"text": "Download your new image. We save it as a high-quality PNG to preserve the transparent background channel."
				}
			]
		},
		"faqs": [
			{
				"question": "Does this tool downscale my images like other free removers?",
				"answer": "No. While some commercial tools force you to pay to download HD versions, our tool processes and exports your image at its original resolution (up to browser memory limits, typically 10MB)."
			},
			{
				"question": "What file formats do you support?",
				"answer": "You can upload JPG, JPEG, PNG, or WEBP images. The final output is always a PNG if you choose a transparent background."
			},
			{
				"question": "Is the background removal really processed locally?",
				"answer": "Yes. Upon first load, your browser fetches a small WebAssembly/ONNX model. All pixel processing occurs on your hardware. We never see your photos."
			},
			{
				"question": "Why did the AI miss a spot in my photo?",
				"answer": "AI models work best when there is strong contrast between the subject and the background. Images with extreme blur, complex mesh (like fences), or identical subject/background colors may occasionally confuse the model."
			}
		]
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
						url: "https://30tools.com/background-remover",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}

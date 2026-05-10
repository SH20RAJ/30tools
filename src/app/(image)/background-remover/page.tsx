import ToolLayout from "@/components/tools/shared/ToolLayout";
import BackgroundRemoverTool from "@/components/tools/image/BackgroundRemoverTool";


export const metadata = {
	title: "Background Remover – Remove Solid Backgrounds from Images Online Free",
	description: "Remove solid and white backgrounds from images automatically. Create transparent PNGs for product photos, headshots, and graphics. 100% free, browser-based processing, no signup needed.",
	alternates: {
		canonical: "https://30tools.com/background-remover",
	},
	openGraph: {
		title: "Background Remover – Remove Solid Backgrounds Online Free",
		description: "Remove white and solid color backgrounds from photos instantly. Export transparent PNGs for e-commerce, social media, or design projects. No signup required.",
		url: "https://30tools.com/background-remover",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Background Remover – Remove Solid Backgrounds Online Free",
		description: "Instantly remove white and solid color backgrounds from photos. Export transparent PNGs for e-commerce, social media, or design.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "background-remover",
        "name": "Background Remover",
        "description": "Remove solid and white backgrounds from images instantly. Create transparent PNGs for product photos, headshots, and graphics. 100% free, browser-based, no signup needed.",
        "route": "/background-remover",
        "extraSlugs": [
                "remove-background-from-signature-free",
                "transparent-background-maker",
                "picture-background-eraser",
                "remove-white-background-free",
                "solid-color-background-remover",
                "background-eraser-online"
        ],
        "popular": true,
        "category": "image",
		"features": [
			"Detects and Removes Solid Color Backgrounds",
			"Works Best with Clear Subject-Background Contrast",
			"100% Free with No Watermarks",
			"Client-Side Processing – No Server Uploads",
			"Export as Transparent PNG",
			"Preserves Image Quality and Resolution"
		],
		"article": `
## Remove Solid Backgrounds from Images Instantly
If you have photos with simple solid backgrounds or white studio backgrounds, our Background Remover automatically detects edges and makes the background transparent. This works great for product photos, headshots, and other images with clear subject separation from a uniform background.

### Best For:
- Product photography with studio backgrounds
- Headshots and portrait photos with plain white/colored walls
- Flat design mockups and overlays
- Creating transparent PNG assets for web design

### How It Works
The tool analyzes the image to detect edges between your subject and the background. Solid, uniform backgrounds (especially very bright or very dark) are converted to transparency, creating a clear PNG file you can use anywhere.

### Client-Side Processing
Your photos are processed entirely in your browser using JavaScript and Canvas APIs. No data is uploaded to our servers—everything stays on your device.

### When This Tool Works Best
- Clear contrast between subject and background
- Solid color backgrounds
- Well-lit studio-style photos

### When You Might Need More
- Complex backgrounds with patterns
- Blended or semi-transparent backgrounds
- Detailed hair, fur, or edge work
- For advanced cases, consider professional tools like Photoshop or Pixlr
		`,
		"howTo": {
			"name": "How to Remove a Background",
			"steps": [
				{
					"name": "Upload Your Image",
					"text": "Drag and drop your photo (JPG, PNG, WEBP) or click to browse your files."
				},
				{
					"name": "Process the Image",
					"text": "Click the 'Remove Background' button. Processing usually takes a few seconds on images up to 10MB."
				},
				{
					"name": "Review the Result",
					"text": "See a side-by-side comparison of your original and processed image with the transparent background."
				},
				{
					"name": "Download",
					"text": "Download the result as a PNG file with transparent background. Use it in design, email, social media, or websites."
				}
			]
		},
		"faqs": [
			{
				"question": "Does this tool preserve image quality?",
				"answer": "Yes. The tool exports your image at its original resolution. The PNG format preserves all quality while adding the transparent background."
			},
			{
				"question": "What types of backgrounds work best?",
				"answer": "This tool works best with solid color backgrounds like white, studio backdrops, or plain colored walls. It uses edge detection to identify where your subject ends and the background begins."
			},
			{
				"question": "Can I undo or refine the removal?",
				"answer": "In this version, the background removal is automatic. If you need more control, you can use your original image with other tools or professional software like Photoshop."
			},
			{
				"question": "Is the image processed locally?",
				"answer": "Yes, 100% locally in your browser. Your photos never leave your device."
			}
		]
	};

	return (
		<ToolLayout tool={{ ...tool, category: "image" }}>
			<BackgroundRemoverTool />
		</ToolLayout>
	);
}

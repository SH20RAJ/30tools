import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free JPG Converter Online – Fast & No Signup | 30tools",
	description: "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use. Privacy-focused and works entirely in your browser. 100% free, fast, and no signup required.",
	keywords: "jpg converter, free jpg converter, online jpg converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-converter",
	},
	openGraph: {
		title: "Free JPG Converter Online – Fast & No Signup | 30tools",
		description: "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use. Privacy-focused and works entirely in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/jpg-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG Converter Online – Fast & No Signup | 30tools",
		description: "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use. Privacy-focused and works entirely in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "jpg-converter",
        "name": "JPG Converter",
        "description": "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use. Privacy-focused and works entirely in your browser.",
        "route": "/jpg-converter",
        "extraSlugs": [
                "free-jpg-converter-online",
                "jpg-converter-tool",
                "convert-to-jpeg-online"
        ],
        "popular": true,
        "category": "image",
        "features": [
        "Convert HEIC, PNG, WEBP, and BMP to Standard JPG",
        "Convert JPG to Modern Formats like WEBP or AVIF",
        "Customizable Image Quality Slider",
        "Batch Processing Support (Up to 50 Images)",
        "100% Client-Side Processing for Total Privacy",
        "Automatic Flattening of Transparent Backgrounds"
        ],
        "article": `
        ## The Ultimate JPG Converter for Maximum Compatibility
        The JPEG (JPG) format remains the undisputed standard for digital photography, web publishing, and document scanning. Whether you need to convert an iPhone HEIC photo for a Windows PC, change a transparent PNG into a solid JPG, or upgrade your JPGs to modern WebP files for faster web loading, our JPG Converter handles it all directly in your browser.

        ### Handling Transparency and Quality
        Unlike PNG or WEBP, the JPG format does not support transparency (alpha channels). When you convert a transparent image to JPG using our tool, it automatically applies a clean, solid white background to prevent visual artifacts. Additionally, our quality slider allows you to find the perfect balance between high visual fidelity and low file size.

        ### Secure, Fast, Local Conversions
        Uploading personal photos or sensitive documents to a server-based converter exposes your privacy. Our converter is built on modern WebAssembly and HTML5 Canvas technologies. The entire conversion process happens locally on your device's CPU, ensuring your images are never uploaded to the internet.
        `,
        "howTo": {
        "name": "How to Convert to or from JPG",
        "steps": [
        {
        "name": "Select Your Images",
        "text": "Drag and drop the files you want to convert into the drop zone. You can select multiple files of different formats simultaneously."
        },
        {
        "name": "Choose Output Format",
        "text": "Select JPG if you are converting *to* JPG, or choose another format (like PNG or WEBP) if you are converting *from* a JPG."
        },
        {
        "name": "Adjust Quality Settings",
        "text": "Use the quality slider to set the compression level. 80-90% is ideal for web use; 100% provides maximum fidelity."
        },
        {
        "name": "Convert and Download",
        "text": "Click convert. The files will process instantly in your browser and will be available for download as a ZIP file."
        }
        ]
        },
        "faqs": [
        {
        "question": "What happens to transparent backgrounds when converting to JPG?",
        "answer": "Because JPG does not support transparency, any transparent areas in your original PNG or WEBP will automatically be filled with a solid white background."
        },
        {
        "question": "Can I convert Apple's HEIC photos to JPG?",
        "answer": "Yes! Our tool supports HEIC (High-Efficiency Image Container) conversion, making it easy to view iPhone photos on older Windows PCs or upload them to unsupported websites."
        },
        {
        "question": "Is there a limit to how many images I can convert at once?",
        "answer": "There is no hard limit, but because processing happens locally, we recommend converting no more than 50 high-resolution images at a time to prevent browser freezing."
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
						url: "https://30tools.com/jpg-converter",
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

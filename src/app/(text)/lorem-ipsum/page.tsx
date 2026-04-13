import type { Metadata } from "next";
import LoremIpsumGenerator from "@/components/tools/text/LoremIpsumGenerator";

export const metadata: Metadata = {
	title: {
		absolute: "Lorem Ipsum Generator for Figma & Designers | Placeholder Text Free",
	},
	description:
		"Generate specialized Lorem Ipsum placeholder text instantly. Perfect for Figma, Photoshop, and web design. Create paragraphs, sentences, or words for free.",
	keywords: [
		"lorem ipsum generator for figma",
		"placeholder text generator",
		"generate dummy text free",
		"filler text online",
		"lorem ipsum for designers",
		"copy paste placeholder text",
		"specialized dummy text tool",
	],
};

export const metadata = {
  title: "Free Lorem Ipsum Generator Online - No Signup | 30tools",
  description: "Free text tools: Lorem Ipsum Generator. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your ",
  keywords: ["lorem ipsum generator","lorem ipsum generator free","lorem ipsum generator online","lorem ipsum generator tool"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function LoremIpsumPage({
	searchParams,
}: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
	const _params = await searchParams;
	return (
		<div className="container mx-auto px-4 py-8 md:py-12">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Lorem Ipsum Generator for Figma & Design
				</h1>
				<p className="text-muted-foreground">
					Quickly generate filler text for your specialized projects.
				</p>
			</div>
			<LoremIpsumGenerator />
		</div>
	);
}

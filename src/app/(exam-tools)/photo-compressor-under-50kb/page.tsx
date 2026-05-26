import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import PhotoCompressor50kb from "@/components/tools/exam/PhotoCompressor50kb";

export const metadata = {
	title: "Free Photo Compressor Under 50KB Online - No Signup | 30tools",
	description: "Resize and compress files with our free Photo Compressor Under 50KB online. Safe and private browser utility for government exam portal applications. 100% free.",
	keywords: "photo-compressor-under-50kb, Photo Compressor Under 50KB, compress photo to 50kb, resize image to 50kb online, photo 50kb limit, 30tools",
	alternates: {
		canonical: "https://30tools.com/photo-compressor-under-50kb",
	},
	openGraph: {
		title: "Free Photo Compressor Under 50KB Online - No Signup | 30tools",
		description: "Resize and compress files with our free Photo Compressor Under 50KB online. Safe and private browser utility for government exam portal applications. 100% free.",
		url: "https://30tools.com/photo-compressor-under-50kb",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Photo Compressor Under 50KB Online - No Signup | 30tools",
		description: "Resize and compress files with our free Photo Compressor Under 50KB online. Safe and private browser utility for government exam portal applications. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/photo-compressor-under-50kb");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PhotoCompressor50kb />
		</ToolLayout>
	);
}

import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import SignatureResizer from "@/components/tools/exam/SignatureResizer";

export const metadata = {
	title: "Free Signature Resizer Under 20KB Online - No Signup | 30tools",
	description: "Resize and compress files with our free Signature Resizer Under 20KB online. Safe and private browser utility for government exam portal applications.",
	keywords: "signature-resizer-under-20kb, Signature Resizer Under 20KB, signature compressor 20kb, signature crop 20kb, exam signature size, 30tools",
	alternates: {
		canonical: "https://30tools.com/signature-resizer-under-20kb",
	},
	openGraph: {
		title: "Free Signature Resizer Under 20KB Online - No Signup | 30tools",
		description: "Resize and compress files with our free Signature Resizer Under 20KB online. Safe and private browser utility for government exam portal applications.",
		url: "https://30tools.com/signature-resizer-under-20kb",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Signature Resizer Under 20KB Online - No Signup | 30tools",
		description: "Resize and compress files with our free Signature Resizer Under 20KB online. Safe and private browser utility for government exam portal applications.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/signature-resizer-under-20kb");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SignatureResizer />
		</ToolLayout>
	);
}

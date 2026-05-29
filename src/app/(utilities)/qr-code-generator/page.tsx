import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import QrGeneratorPremium from "@/components/tools/utilities/QrGeneratorPremium";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free QR Code Generator Online - No Signup | 30tools",
	description: "Free qr code generator tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "qr code generator, create qr code, custom qr code, qr code maker, free qr generator, 30tools, qr-code-generator, free qr-code-generator, qr code generator online, online utility, free converter, browser tool",
	alternates: {
		canonical: "https://30tools.com/qr-code-generator",
	},
	openGraph: {
		title: "Free QR Code Generator Online - No Signup | 30tools",
		description: "Free qr code generator tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/qr-code-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free QR Code Generator Online - No Signup | 30tools",
		description: "Free qr code generator tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/qr-code-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<QrGeneratorPremium />
		</ToolLayout>
	);
}

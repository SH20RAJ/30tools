import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import QrGeneratorPremium from "@/components/tools/utilities/QrGeneratorPremium";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free QR Code Decoder Online - No Signup | 30tools",
	description: "Free qr code decoder tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "qr code decoder, free online tool, no signup, qr-code-decoder, free qr-code-decoder, Qr Code Decoder online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/qr-code-decoder",
	},
	openGraph: {
		title: "Free QR Code Decoder Online - No Signup | 30tools",
		description: "Free qr code decoder tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/qr-code-decoder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free QR Code Decoder Online - No Signup | 30tools",
		description: "Free qr code decoder tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/qr-code-decoder");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<QrGeneratorPremium />
		</ToolLayout>
	);
}

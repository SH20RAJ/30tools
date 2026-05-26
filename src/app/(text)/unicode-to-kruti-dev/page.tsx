import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import KrutiDevConverter from "@/components/tools/text/KrutiDevConverter";

export const metadata = {
	title: "Free Unicode to Kruti Dev Converter Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Unicode to Kruti Dev Converter online. Fast and private browser utility with no signup.",
	keywords: "unicode-to-kruti-dev, Unicode to Kruti Dev Converter",
	alternates: {
		canonical: "https://30tools.com/unicode-to-kruti-dev",
	},
	openGraph: {
		title: "Free Unicode to Kruti Dev Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Unicode to Kruti Dev Converter online. Fast and private browser utility with no signup.",
		url: "https://30tools.com/unicode-to-kruti-dev",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Unicode to Kruti Dev Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Unicode to Kruti Dev Converter online. Fast and private browser utility with no signup.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/unicode-to-kruti-dev");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<KrutiDevConverter defaultMode="uni-to-kruti" />
		</ToolLayout>
	);
}

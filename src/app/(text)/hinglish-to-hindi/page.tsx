import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import KrutiDevConverter from "@/components/tools/text/KrutiDevConverter";

export const metadata = {
	title: "Free Hinglish to Hindi Converter Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Hinglish to Hindi Converter online. Fast and private browser utility with no signup.",
	keywords: "hinglish-to-hindi, Hinglish to Hindi Converter",
	alternates: {
		canonical: "https://30tools.com/hinglish-to-hindi",
	},
	openGraph: {
		title: "Free Hinglish to Hindi Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Hinglish to Hindi Converter online. Fast and private browser utility with no signup.",
		url: "https://30tools.com/hinglish-to-hindi",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Hinglish to Hindi Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Hinglish to Hindi Converter online. Fast and private browser utility with no signup.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/hinglish-to-hindi");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<KrutiDevConverter defaultMode="hinglish-to-hindi" />
		</ToolLayout>
	);
}

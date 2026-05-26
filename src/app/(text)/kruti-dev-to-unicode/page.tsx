import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import KrutiDevConverter from "@/components/tools/text/KrutiDevConverter";

export const metadata = {
	title: "Free Kruti Dev to Unicode Converter Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Kruti Dev to Unicode Converter online. Fast and private browser utility with no signup.",
	keywords: "kruti-dev-to-unicode, Kruti Dev to Unicode, kruti dev to unicode hindi, unicode to kruti dev, hinglish to hindi transliterate, 30tools",
	alternates: {
		canonical: "https://30tools.com/kruti-dev-to-unicode",
	},
	openGraph: {
		title: "Free Kruti Dev to Unicode Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Kruti Dev to Unicode Converter online. Fast and private browser utility with no signup.",
		url: "https://30tools.com/kruti-dev-to-unicode",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Kruti Dev to Unicode Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Kruti Dev to Unicode Converter online. Fast and private browser utility with no signup.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/kruti-dev-to-unicode");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<KrutiDevConverter />
		</ToolLayout>
	);
}

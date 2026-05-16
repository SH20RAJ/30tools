import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FaviconGeneratorTool from "@/components/tools/image/FaviconGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Icon Generator Online - No Signup | 30tools",
	description: "Create professional app icons and favicons from any image. Our free Icon Generator outputs multiple sizes for iOS, Android, and web applications.",
	keywords: "icon, generator, free icon generator, online icon generator, 30tools",
	alternates: { canonical: "https://30tools.com/icon-generator" },
	openGraph: { title: "Free Icon Generator Online - No Signup | 30tools", description: "Create professional app icons and favicons from any image. Our free Icon Generator outputs multiple sizes for iOS, Android, and web applications.", url: "https://30tools.com/icon-generator", siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
	twitter: { card: "summary_large_image", title: "Free Icon Generator Online - No Signup | 30tools", description: "Create professional app icons and favicons from any image. Our free Icon Generator outputs multiple sizes for iOS, Android, and web applications.", images: ["/og-image.jpg"] },
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/icon-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FaviconGeneratorTool />
		</ToolLayout>
	);
}

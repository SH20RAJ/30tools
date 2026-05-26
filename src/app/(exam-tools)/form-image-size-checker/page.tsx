import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import FormImageSizeChecker from "@/components/tools/exam/FormImageSizeChecker";

export const metadata = {
	title: "Free Form Image Size Checker Online - No Signup | 30tools",
	description: "Resize and compress files with our free Form Image Size Checker online. Safe and private browser utility for government exam portal applications. Free & secure.",
	keywords: "form-image-size-checker, Form Image Size Checker, check image size online, photo dimension checker, exam photo validator, 30tools",
	alternates: {
		canonical: "https://30tools.com/form-image-size-checker",
	},
	openGraph: {
		title: "Free Form Image Size Checker Online - No Signup | 30tools",
		description: "Resize and compress files with our free Form Image Size Checker online. Safe and private browser utility for government exam portal applications. Free & secure.",
		url: "https://30tools.com/form-image-size-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Form Image Size Checker Online - No Signup | 30tools",
		description: "Resize and compress files with our free Form Image Size Checker online. Safe and private browser utility for government exam portal applications. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/form-image-size-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FormImageSizeChecker />
		</ToolLayout>
	);
}

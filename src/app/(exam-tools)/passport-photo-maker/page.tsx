import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import PassportPhotoMaker from "@/components/tools/exam/PassportPhotoMaker";

export const metadata = {
	title: "Free Passport Photo Maker Online - No Signup | 30tools",
	description: "Resize and compress files with our free Passport Photo Maker online. Safe and private browser utility for government exam portal applications. Try it free now.",
	keywords: "passport-photo-maker, Passport Photo Maker, free passport photo maker, passport size photo maker online, print passport photos, 30tools",
	alternates: {
		canonical: "https://30tools.com/passport-photo-maker",
	},
	openGraph: {
		title: "Free Passport Photo Maker Online - No Signup | 30tools",
		description: "Resize and compress files with our free Passport Photo Maker online. Safe and private browser utility for government exam portal applications. Try it free now.",
		url: "https://30tools.com/passport-photo-maker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Passport Photo Maker Online - No Signup | 30tools",
		description: "Resize and compress files with our free Passport Photo Maker online. Safe and private browser utility for government exam portal applications. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/passport-photo-maker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PassportPhotoMaker />
		</ToolLayout>
	);
}

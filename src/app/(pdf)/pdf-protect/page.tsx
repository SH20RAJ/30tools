import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free PDF Password Protect Online – Fast & No Signup | 30tools",
	description: "Secure your PDF files with strong password encryption online for free. Privacy-first local processing ensures your sensitive documents never leave your browser.",
	keywords: "pdf protect, password protect pdf, encrypt pdf, secure pdf, online pdf protection, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-protect",
	},
	openGraph: {
		title: "Free PDF Password Protect Online – Fast & No Signup | 30tools",
		description: "Secure your PDF files with strong password encryption online for free. Privacy-first local processing ensures your sensitive documents never leave your browser.",
		url: "https://30tools.com/pdf-protect",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Password Protect Online – Fast & No Signup | 30tools",
		description: "Secure your PDF files with strong password encryption online for free. Privacy-first local processing ensures your sensitive documents never leave your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolById("pdf-protect");

	if (!tool) {
		return notFound();
	}

	return (
		<>
			<ToolSEOLayout toolId={tool.id}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolSEOLayout>
		</>
	);
}

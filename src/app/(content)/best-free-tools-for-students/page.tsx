import ToolLayout from "@/components/tools/shared/ToolLayout";
import Fragment from "react";


export const metadata = {
	title: "Free Best Free Tools for Students (2026) Online - No Signup | 30tools",
	description: "Discover the best free tools for students in 2026. Improve writing, formatting, assignments, and study productivity with no-signup online tools.",
	keywords: "best free tools for students (2026), best free tools for students (2026) guide, 30tools, best-free-tools-for-students, best free tools for students, free best-free-tools-for-students, best free tools for students online, 30tools guide, online tool guide, free tool category, tool directory, tool overview",
	alternates: {
		canonical: "https://30tools.com/best-free-tools-for-students",
	},
	openGraph: {
		title: "Free Best Free Tools for Students (2026) Online - No Signup | 30tools",
		description: "Discover the best free tools for students in 2026. Improve writing, formatting, assignments, and study productivity with no-signup online tools.",
		url: "https://30tools.com/best-free-tools-for-students",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Best Free Tools for Students (2026) Online - No Signup | 30tools",
		description: "Discover the best free tools for students in 2026. Improve writing, formatting, assignments, and study productivity with no-signup online tools.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "best-free-tools-for-students",
        "name": "Best Free Tools for Students (2026)",
        "description": "Discover the best free tools for students in 2026. Improve writing, formatting, assignments, and study productivity with no-signup online tools.",
        "route": "/best-free-tools-for-students",
        "extraSlugs": [],
        "popular": false,
        "category": "content"
};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/best-free-tools-for-students",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "content" }}>
				<div className='min-h-[100px]'  />
			</ToolLayout>
		</>
	);
}

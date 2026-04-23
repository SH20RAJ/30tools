import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free PDF Password Protect Online – Fast & No Signup | 30tools",
	description: "Add password protection to PDF files 100% free, fast, and no signup required.",
	keywords: "pdf password protect, free pdf password protect, online pdf password protect, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-protect",
	},
	openGraph: {
		title: "Free PDF Password Protect Online – Fast & No Signup | 30tools",
		description: "Add password protection to PDF files 100% free, fast, and no signup required.",
		url: "https://30tools.com/pdf-protect",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Password Protect Online – Fast & No Signup | 30tools",
		description: "Add password protection to PDF files 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pdf-protect",
        "name": "PDF Password Protect",
        "description": "Add password protection to PDF files",
        "route": "/pdf-protect",
        "extraSlugs": [
                "check-password-security",
                "check-pwned-password",
                "configurable-password-tool",
                "create-strong-password",
                "custom-password-maker",
                "data-breach-password-search",
                "generate-secure-password",
                "have-i-been-pwned-password",
                "lock-pdf-from-editing-free",
                "password-breach-checker",
                "password-generator2",
                "password-leak-check",
                "password-protect-pdf",
                "password-protect-pdf-online",
                "password-safety-checker",
                "password-strength-checker",
                "password-tester-online",
                "pdf-password-remover",
                "remove-pdf-password",
                "secure-password-creator",
                "test-password-strength",
                "verify-password-safety"
        ],
        "popular": false,
        "category": "pdf"
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
						url: "https://30tools.com/pdf-protect",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "pdf" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}

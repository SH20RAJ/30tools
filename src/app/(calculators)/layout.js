export const metadata = {
	title: "Free Online Calculators - Smart Financial & Math Tools | 30tools",
	description:
		"Free online calculators for finance, health, math, and daily life. BMI calculator, loan calculator, percentage calculator, and more. No signup, instant results, 100% free.",
	keywords:
		"online calculators, bmi calculator, loan calculator, percentage calculator, math tools, free calculators, 30tools",
	openGraph: {
		title: "Free Online Calculators - Smart Financial & Math Tools | 30tools",
		description:
			"Free online calculators for finance, health, math, and daily life. BMI calculator, loan calculator, percentage calculator, and more. No signup, instant results.",
		url: "https://30tools.com/calculators",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Free Online Calculators Collection",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Online Calculators - Smart Financial & Math Tools | 30tools",
		description:
			"Free online calculators for finance, health, math, and daily life. No signup, instant results.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

const jsonLdSchemas = {
	collectionPage: {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Free Online Calculators Collection",
		description:
			"A comprehensive collection of free online calculators for finance, health, math, and everyday needs.",
		url: "https://30tools.com/calculators",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					url: "https://30tools.com/percentage-calculator",
					name: "Percentage Calculator",
				},
				{
					"@type": "ListItem",
					position: 2,
					url: "https://30tools.com/loan-calculator",
					name: "Loan Calculator",
				},
				{
					"@type": "ListItem",
					position: 3,
					url: "https://30tools.com/age-calculator",
					name: "Age Calculator",
				},
				{
					"@type": "ListItem",
					position: 4,
					url: "https://30tools.com/discount-calculator",
					name: "Discount Calculator",
				},
				{
					"@type": "ListItem",
					position: 5,
					url: "https://30tools.com/sales-tax-calculator",
					name: "Sales Tax Calculator",
				},
			],
		},
	},
};

export default function CalculatorsLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.collectionPage),
				}}
			/>
			<main className="flex-1">{children}</main>
		</div>
	);
}

import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import { notFound } from "next/navigation";

const PROVIDERS = [
	{ slug: "amazon-ses", name: "Amazon SES" },
	{ slug: "anthropic", name: "Anthropic" },
	{ slug: "attio", name: "Attio" },
	{ slug: "brevo", name: "Brevo" },
	{ slug: "clearbit", name: "Clearbit" },
	{ slug: "cohere", name: "Cohere" },
	{ slug: "coresignal", name: "Coresignal" },
	{ slug: "crunchbase", name: "Crunchbase" },
	{ slug: "data-axle", name: "Data Axle" },
	{ slug: "datanyze", name: "Datanyze" },
	{ slug: "deepseek", name: "DeepSeek" },
	{ slug: "demandbase", name: "Demandbase" },
	{ slug: "enrich", name: "Enrich" },
	{ slug: "freshdesk", name: "Freshdesk" },
	{ slug: "fullcontact", name: "FullContact" },
	{ slug: "google-gemini", name: "Google Gemini" },
	{ slug: "groq", name: "Groq" },
	{ slug: "hg-insights", name: "HG Insights" },
	{ slug: "hubspot", name: "HubSpot" },
	{ slug: "intercom", name: "Intercom" },
	{ slug: "leadgenius", name: "LeadGenius" },
	{ slug: "leadspace", name: "Leadspace" },
	{ slug: "loops", name: "Loops" },
	{ slug: "lusha", name: "Lusha" },
	{ slug: "mailgun", name: "Mailgun" },
	{ slug: "mattermark", name: "Mattermark" },
	{ slug: "melissa", name: "Melissa" },
	{ slug: "openai", name: "OpenAI" },
	{ slug: "people-data-labs", name: "People Data Labs" },
	{ slug: "pipedrive", name: "Pipedrive" },
	{ slug: "pipl", name: "Pipl" },
	{ slug: "postmark", name: "Postmark" },
	{ slug: "resend", name: "Resend" },
	{ slug: "sendgrid", name: "SendGrid" },
	{ slug: "snov-io", name: "Snov.io" },
	{ slug: "sparkpost", name: "SparkPost" },
	{ slug: "stripe", name: "Stripe" },
	{ slug: "twilio", name: "Twilio" },
	{ slug: "zendesk", name: "Zendesk" },
	{ slug: "zoominfo", name: "ZoomInfo" },
];

const providerMap = new Map(PROVIDERS.map((p) => [p.slug, p]));

export function generateStaticParams() {
	return PROVIDERS.map((p) => ({ provider: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ provider: string }> }) {
	const { provider } = await params;
	const p = providerMap.get(provider);
	if (!p) return {};
	return {
		title: `Free ${p.name} API Key Tester Online - No Signup | 30tools`,
		description: `Test and validate your ${p.name} API key instantly. Check key format, permissions, and connectivity with our free online API Key Tester. No data stored.`,
		alternates: { canonical: `https://30tools.com/api-key-tester/${p.slug}` },
		openGraph: { title: `Free ${p.name} API Key Tester Online | 30tools`, description: `Validate your ${p.name} API key format and permissions instantly.`, url: `https://30tools.com/api-key-tester/${p.slug}`, siteName: "30tools", images: [{ url: "/og-image.jpg" }], type: "website" },
		robots: { index: true, follow: true },
	};
}

export default async function ToolPage({ params }: { params: Promise<{ provider: string }> }) {
	const { provider } = await params;
	const p = providerMap.get(provider);
	if (!p) notFound();
	const tool = { id: `${p.slug}-api-key-tester`, name: `${p.name} API Key Tester`, description: `Test and validate your ${p.name} API key instantly. Check format, permissions, and connectivity.`, route: `/api-key-tester/${p.slug}`, category: "developer" };
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, description: tool.description, url: `https://30tools.com/api-key-tester/${p.slug}`, applicationCategory: "DeveloperApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
			<ToolLayout tool={tool}><RegisteredToolMount toolId={tool.id} /></ToolLayout>
		</>
	);
}

import { Globe } from "lucide-react";
import IndexNowClient from "@/components/tools/general/IndexNowClient";

export const metadata = {
  title: "Free IndexNow Submitter Online - No Signup | 30tools",
  description: "Free utility tools: IndexNow Submitter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your bro",
  keywords: ["indexnow submitter","indexnow submitter free","indexnow submitter online","indexnow submitter tool"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebApplication",
	name: "IndexNow Tool",
	description:
		"Submit URLs to search engines instantly using IndexNow protocol.",
	url: "https://30tools.com/indexnow",
	applicationCategory: "UtilityApplication",
	operatingSystem: "Any",
	permissions: "internet",
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD",
	},
	author: {
		"@type": "Organization",
		name: "30tools",
		url: "https://30tools.com",
	},
};

export default async function IndexNowPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	return (
		<div className="min-h-screen bg-background py-12">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="container mx-auto px-4 max-w-4xl">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
						<Globe className="w-10 h-10 text-primary" />
						IndexNow Integration
					</h1>
					<p className="text-xl text-muted-foreground">
						Submit URLs to search engines instantly using IndexNow protocol
					</p>
				</div>
				<IndexNowClient />
			</div>
		</div>
	);
}

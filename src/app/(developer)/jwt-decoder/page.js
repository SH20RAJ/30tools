import { Eye, FileJson, Key, Lock } from "lucide-react";
import JWTDecoder from "@/components/tools/developer/JWTDecoderTool";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
	title: "Free JWT Decoder Online - No Signup | 30tools",
	description:
		"Developer tools: JWT Decoder. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser for",
	keywords: [
		"jwt decoder",
		"jwt decoder free",
		"jwt decoder online",
		"jwt decoder tool",
	],
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

const jsonLdSchemas = {
	webApp: {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "JWT Decoder",
		applicationCategory: "DeveloperApplication",
		operatingSystem: "Any",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		featureList: [
			"Decode JWT tokens instantly",
			"Inspect Header and Payload",
			"Verify token structure",
			"Client-side processing only",
			"No secret key required for decoding",
		],
	},
	faq: {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What is a JWT?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.",
				},
			},
			{
				"@type": "Question",
				name: "Do you store my tokens?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Absolutely not. All decoding is performed locally in your browser using JavaScript. Your tokens are never sent to our servers.",
				},
			},
			{
				"@type": "Question",
				name: "Can I verify the signature here?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "This tool is primarily for decoding and inspecting the token's contents (Header and Payload). To verify the signature, you would need the private key or secret, which we recommend handling in a secure backend environment.",
				},
			},
		],
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Decode a JWT",
		description: "Step-by-step guide to inspect a JSON Web Token.",
		step: [
			{
				"@type": "HowToStep",
				name: "Paste Token",
				text: "Paste your JWT string into the input area.",
				image: "https://30tools.com/og-images/jwt-decoder.jpg",
				url: "https://30tools.com/jwt-decoder#step1",
			},
			{
				"@type": "HowToStep",
				name: "Decode",
				text: "The tool will automatically decode the Header and Payload sections.",
				url: "https://30tools.com/jwt-decoder#step2",
			},
			{
				"@type": "HowToStep",
				name: "Inspect",
				text: "Read the claims, expiration times, and other data contained in the token.",
				url: "https://30tools.com/jwt-decoder#step3",
			},
		],
	},
};

export default async function JWTDecoderPage({ searchParams }) {
	const _params = await searchParams;
	const features = [
		{
			icon: <Eye className="w-5 h-5 text-amber-500" />,
			title: "Deep Inspection",
			description:
				"See exactly what's inside your token: algorithm, claims, issuer, and expiration.",
		},
		{
			icon: <Lock className="w-5 h-5 text-emerald-500" />,
			title: "100% Secure",
			description:
				"Your tokens are sensitive. We decode them locally in your browser—zero server transmission.",
		},
		{
			icon: <FileJson className="w-5 h-5 text-blue-500" />,
			title: "Format Validation",
			description:
				"Instantly check if your string is a valid JWT format before debugging further.",
		},
		{
			icon: <Key className="w-5 h-5 text-violet-500" />,
			title: "No Key Needed",
			description:
				"Decode the readable parts (Header & Payload) without needing the signing secret.",
		},
	];

	const steps = [
		{ title: "Paste Token", desc: "Paste your JWT code." },
		{ title: "Auto-Decode", desc: "View decoded data instantly." },
		{ title: "Debug", desc: "Verify claims & dates." },
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.webApp),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.howTo),
				}}
			/>

			<div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
				<div className="text-center space-y-4 mb-12">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
						Decode <span className="text-primary">JWT</span> Without Secret
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						The fastest JWT token decoder and debugger. Inspect your JSON Web
						Tokens instantly and securely without sending data to a server.
					</p>
				</div>

				<div className="mb-20">
					<JWTDecoder />
				</div>

				{/* Features */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
					{features.map((f, i) => (
						<div
							key={i}
							className="bg-card/50 hover:bg-card p-6 rounded-2xl border border-border/50 transition-all duration-200"
						>
							<div className="bg-background w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-4 border border-border/50">
								{f.icon}
							</div>
							<h3 className="font-bold text-lg mb-2">{f.title}</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{f.description}
							</p>
						</div>
					))}
				</div>

				{/* How To */}
				<section className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20 border border-border/50">
					<h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
					<div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
						<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-1/2" />
						{steps.map((s, i) => (
							<div
								key={i}
								className="flex flex-col items-center text-center bg-background p-6 rounded-2xl border border-border/50 shadow-sm w-full md:w-1/3 z-10 transition-transform hover:scale-105 duration-300"
							>
								<div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
									{i + 1}
								</div>
								<h3 className="font-semibold text-lg mb-1">{s.title}</h3>
								<p className="text-sm text-muted-foreground">{s.desc}</p>
							</div>
						))}
					</div>
				</section>

				{/* FAQ */}
				<section className="max-w-3xl mx-auto mb-20">
					<h2 className="text-3xl font-bold text-center mb-8">
						Frequently Asked Questions
					</h2>
					<Accordion type="single" collapsible className="w-full">
						{jsonLdSchemas.faq.mainEntity.map((faq, i) => (
							<AccordionItem
								key={i}
								value={`item-${i}`}
								className="border-b-border/50"
							>
								<AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">
									{faq.name}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed">
									{faq.acceptedAnswer.text}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</section>

				{/* Content Block for SEO */}
				<article className="prose dark:prose-invert max-w-none mb-20">
					<h2 className="text-3xl font-bold text-center mb-6">
						Why Use an Online JWT Decoder?
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-xl font-semibold mb-3">
								Debug Auth Issues Quickly
							</h3>
							<p className="text-muted-foreground">
								When implementing authentication, knowing exactly what's in your
								token is crucial. Check for typos in claims, verify correct role
								assignments, and ensure the token hasn't expired—all in seconds.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-3">
								Understand Token Structure
							</h3>
							<p className="text-muted-foreground">
								A JWT consists of three parts: Header, Payload, and Signature.
								Our tool visually separates these components, helping you
								understand how data is encoded and signed in modern web
								applications.
							</p>
						</div>
					</div>
				</article>
			</div>
		</>
	);
}

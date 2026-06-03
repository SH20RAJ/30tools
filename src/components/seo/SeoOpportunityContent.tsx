import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	affiliateRecommendations,
	getMonetizationDecision,
} from "@/data/monetization";
import {
	getRelatedSeoOpportunities,
	type SeoOpportunity,
} from "@/data/seo-opportunities";

function getPrivacyNote(opportunity: SeoOpportunity) {
	if (opportunity.toolPreset.type === "api-key") {
		return "Your API key is used only for this test flow and is not stored by 30tools. Use restricted or test keys whenever possible.";
	}
	if (opportunity.toolPreset.type === "exam-image") {
		return "Your image is processed in your browser when possible. We do not store your original file or compressed output.";
	}
	if (opportunity.toolPreset.type === "qr") {
		return "QR content is generated in your browser. Avoid printing private credentials unless you are using a guest or limited-access setup.";
	}
	return "Inputs are used only for the current tool session. Avoid pasting private data into public or shared devices.";
}

function AffiliateBlock({ opportunity }: { opportunity: SeoOpportunity }) {
	const slot = opportunity.monetization.affiliateSlot;
	if (!slot || !opportunity.monetization.affiliateAllowed) return null;

	const recommendation = affiliateRecommendations[slot];

	return (
		<Card className="rounded-md border-border/60 bg-muted/20">
			<CardHeader className="pb-3">
				<div className="flex items-center gap-2">
					<Badge variant="secondary" className="rounded-md">{recommendation.label}</Badge>
				</div>
				<CardTitle className="text-xl">{recommendation.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-sm leading-relaxed text-muted-foreground">
					{recommendation.description}
				</p>
			</CardContent>
		</Card>
	);
}

export default function SeoOpportunityContent({
	opportunity,
}: {
	opportunity: SeoOpportunity;
}) {
	const related = getRelatedSeoOpportunities(opportunity, 8);
	const monetization = getMonetizationDecision({
		slug: opportunity.slug,
		category: opportunity.category,
		overrideSafety: opportunity.monetizationSafety,
	});

	return (
		<section className="space-y-10">
			<div className="grid gap-4 md:grid-cols-3">
				<Card className="rounded-md border-border/60 bg-card/40">
					<CardHeader className="pb-2">
						<CardTitle className="flex items-center gap-2 text-base">
							<CheckCircle2 className="h-4 w-4 text-primary" />
							Best For
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2 text-sm text-muted-foreground">
							{opportunity.useCases.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</CardContent>
				</Card>

				<Card className="rounded-md border-border/60 bg-card/40">
					<CardHeader className="pb-2">
						<CardTitle className="flex items-center gap-2 text-base">
							<ShieldCheck className="h-4 w-4 text-primary" />
							Privacy Note
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm leading-relaxed text-muted-foreground">
							{getPrivacyNote(opportunity)}
						</p>
					</CardContent>
				</Card>

				<Card className="rounded-md border-border/60 bg-card/40">
					<CardHeader className="pb-2">
						<CardTitle className="flex items-center gap-2 text-base">
							<Sparkles className="h-4 w-4 text-primary" />
							Upgrade Path
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm leading-relaxed text-muted-foreground">
							{opportunity.monetization.proUpsell}
						</p>
						<Button asChild size="sm" variant="outline" className="mt-4 rounded-md">
							<Link href="/pro">View Pro</Link>
						</Button>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
				<div className="space-y-6">
					<div>
						<h2 className="text-3xl font-bold tracking-tight">How To Use This Page</h2>
						<ol className="mt-4 space-y-3 text-muted-foreground">
							{opportunity.steps.map((step, index) => (
								<li key={step} className="flex gap-3">
									<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
										{index + 1}
									</span>
									<span>{step}</span>
								</li>
							))}
						</ol>
					</div>

					<div>
						<h2 className="text-3xl font-bold tracking-tight">Common Problems</h2>
						<div className="mt-4 grid gap-3">
							{opportunity.commonProblems.map((problem) => (
								<div
									key={problem}
									className="rounded-md border border-border/60 bg-muted/20 p-4 text-sm text-muted-foreground"
								>
									{problem}
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="space-y-4">
					{opportunity.monetization.serviceCTA && (
						<Card className="rounded-md border-primary/20 bg-primary/5">
							<CardHeader className="pb-3">
								<CardTitle className="flex items-center gap-2 text-xl">
									<BriefcaseBusiness className="h-5 w-5 text-primary" />
									Need Help?
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-sm leading-relaxed text-muted-foreground">
									{opportunity.recommendedCTA}
								</p>
								<Button asChild className="rounded-md">
									<Link href="/services">View Services</Link>
								</Button>
							</CardContent>
						</Card>
					)}

					<AffiliateBlock opportunity={opportunity} />

					<Card className="rounded-md border-border/60 bg-card/40">
						<CardHeader className="pb-3">
							<CardTitle className="text-xl">Monetization Safety</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2 text-sm text-muted-foreground">
							<p>{monetization.reason}</p>
							<p>Ads on this page: {opportunity.monetization.adsAllowed && monetization.adsAllowed ? "enabled" : "disabled"}.</p>
						</CardContent>
					</Card>
				</div>
			</div>

			{related.length > 0 && (
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Related Exact-Use Tools</h2>
					<div className="mt-5 grid gap-3 md:grid-cols-2">
						{related.map((item) => (
							<Link
								key={item.slug}
								href={item.route}
								className="group rounded-md border border-border/60 bg-card/40 p-4 transition-colors hover:border-primary/30"
							>
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="font-semibold group-hover:text-primary">{item.h1}</h3>
										<p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
											{item.metaDescription}
										</p>
									</div>
									<ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
								</div>
							</Link>
						))}
					</div>
				</div>
			)}
		</section>
	);
}

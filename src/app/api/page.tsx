import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "30tools API - Image, PDF, QR and SEO Utility APIs",
	description: "30tools API is a planned product for image compression, PDF processing, QR generation, screenshots, SEO metadata, and Open Graph previews.",
	alternates: { canonical: "https://30tools.com/api" },
};

const products = [
	"Image Compression API",
	"PDF Compression API",
	"QR Code API",
	"Screenshot API",
	"SEO Metadata API",
	"Open Graph Preview API",
];

export default function ApiPage() {
	return (
		<main className="container mx-auto max-w-6xl px-4 py-16 space-y-12">
			<section className="max-w-3xl space-y-5">
				<p className="text-sm font-semibold uppercase tracking-wide text-primary">Developer Product</p>
				<h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">30tools API</h1>
				<p className="text-lg leading-relaxed text-muted-foreground">
					Planned APIs for teams that need reliable utility workflows inside their own apps, dashboards, and automations.
				</p>
				<Button asChild><Link href="/contact">Request API Access</Link></Button>
			</section>

			<section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{products.map((product) => (
					<div key={product} className="rounded-md border border-border/60 bg-card/40 p-5">
						<h2 className="text-xl font-bold">{product}</h2>
						<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
							Designed for predictable limits, clean JSON responses, and workflow-friendly billing when launched.
						</p>
					</div>
				))}
			</section>
		</main>
	);
}

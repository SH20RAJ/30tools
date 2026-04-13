import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service | 30Tools",
	description:
		"Please read these terms of service carefully before using 30Tools.",
};

export default function TermsPage() {
	return (
		<div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl prose prose-slate dark:prose-invert">
			<h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
				<p>
					By accessing and using 30Tools, you agree to be bound by these Terms
					of Service and all applicable laws and regulations.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
				<p>
					We provide these tools for personal and professional use. You may not
					use our services for any illegal activities or to infringe upon the
					rights of others.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
				<p>
					The materials on 30Tools are provided on an 'as is' basis. 30Tools
					makes no warranties, expressed or implied, and hereby disclaims all
					other warranties including, without limitation, implied warranties or
					conditions of merchantability or fitness for a particular purpose.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
				<p>
					In no event shall 30Tools or its suppliers be liable for any damages
					arising out of the use or inability to use the materials on our
					website.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
				<p>
					These terms and conditions are governed by and construed in accordance
					with the laws, and you irrevocably submit to the exclusive
					jurisdiction of the courts in that location.
				</p>
			</section>

			<footer className="text-sm text-muted-foreground mt-12">
				Last updated: January 2025
			</footer>
		</div>
	);
}

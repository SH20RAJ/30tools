import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | 30Tools",
	description: "Learn how we collect, use, and protect your data at 30Tools.",
};

export default function PrivacyPage() {
	return (
		<div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl prose prose-slate dark:prose-invert">
			<h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
				<p>
					At 30Tools, we take your privacy seriously. This Privacy Policy
					outlines how we collect, use, and protect your information when you
					use our website and online tools.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					2. Data Collection & Processing
				</h2>
				<p>
					<strong>Local Processing:</strong> Most of our tools process your
					files directly in your browser. In these cases, your files never leave
					your device and are not uploaded to our servers.
				</p>
				<p>
					<strong>Server-side Processing:</strong> Some tools may require
					server-side processing. In these cases, your files are processed
					temporarily and deleted immediately after the operation is complete.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">3. Cookies & Analytics</h2>
				<p>
					We use cookies to improve your user experience and analyze website
					traffic via tools like Google Analytics. These cookies help us
					understand how you interact with our site and identify areas for
					improvement.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">4. Third-party Links</h2>
				<p>
					Our website may contain links to other sites. We are not responsible
					for the privacy practices or content of these third-party websites.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
				<p>
					If you have any questions about our Privacy Policy, please contact us
					at support@30tools.com.
				</p>
			</section>

			<footer className="text-sm text-muted-foreground mt-12">
				Last updated: January 2025
			</footer>
		</div>
	);
}

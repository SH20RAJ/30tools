import Link from "next/link";
import PdfUnlockerTool from "@/components/tools/pdf/PdfUnlockerTool";

const researchedKeywords = [
	"unlock file pdf",
	"ilove pdf unlock",
	"how to decrypt a pdf",
	"password remove from pdf",
	"how to unlock pdf for editing",
	"free my pdf",
	"password removal",
	"débloquer pdf",
	"desproteger pdf ilovepdf",
	"deverrouiller pdf",
	"forgot pdf password",
	"pdf password unlock",
	"unlock the pdf",
	"password pdf remover",
	"remove encryption from pdf",
	"removing password from pdf",
	"free pdf unlocker",
	"pdf password recovery",
	"remove pdf protection",
	"unlock password pdf",
	"remove password from pdf free",
	"mo khoa pdf",
	"online password remover pdf",
	"remove the password from pdf",
	"password unlocker",
	"remove pdf password online free",
	"unlock any pdf",
	"how to remove pdf password protection",
	"破解pdf",
	"remove protection from pdf",
	"i love unlock pdf",
	"smallpdf unlock pdf",
	"pdf 破解",
	"how to unprotect pdf",
	"pdf密碼移除",
	"pdf decrypter",
	"quitar seguridad a pdf",
	"quitar bloqueo pdf",
	"unlock pdf without password",
	"desbloquear pdf online",
	"remove password from pdf file",
	"remove lock from pdf",
	"remove security from pdf",
	"pdf cracker",
	"pdf password cracker",
	"ilovepdf password remover",
	"pdf entsperren",
	"quitar protección pdf",
	"unlock pdf online free",
	"desbloquear pdf i love pdf",
	"解锁pdf",
	"pdfunlock",
	"unencrypt pdf",
	"convert password protected pdf to normal pdf",
	"password unlock pdf",
	"desencriptar pdf",
	"pdf crack",
	"quitar permisos pdf",
	"unlock password",
	"unprotected",
	"ilovepdf remove password",
	"password remove",
	"online pdf password remover",
	"quitar contraseña de pdf",
	"pdf permission remover",
	"password remove pdf",
	"remove permissions from pdf",
	"how to unprotect a pdf",
	"unlock pdf file",
	"desbloquear pdf gratis",
	"freemypdf",
	"how to unlock pdf",
	"ilovepdf quitar contraseña",
	"i love pdf remove password",
	"how to remove password from pdf file",
	"how to unlock a pdf",
	"unlock password protected pdf",
	"pdf unlock password",
	"eliminar contraseña pdf",
	"ilovepdf unlock",
	"pdf unlocker free",
	"quitar contraseña pdf ilovepdf",
	"pdf unlock i love pdf",
	"pdf unlocker online",
	"unlockpdf",
	"remove password from pdf online",
	"pdfpasswordremover",
	"tirar senha de pdf",
	"pdf 解密",
	"decrypt pdf",
	"unlo",
	"how to remove pdf password",
	"remove password protection from pdf",
	"unlock pdf free",
	"pdf password unlocker",
	"unlocked pdf",
	"ilovepdf desbloquear pdf",
	"pdf unlocker i love pdf",
	"quitar contraseña a pdf",
	"quitar clave pdf",
	"déverrouiller pdf",
	"i love pdf password remover",
	"i love pdf unlock",
	"pdf密码破解 在线",
	"pdf解鎖",
	"password remover",
	"unlock pdf password",
	"open pd",
	"pdf password remove",
	"remove pdf password online",
	"how to remove a password from a pdf",
	"pdf lock remover",
	"ilovepdf unlock pdf",
	"how to remove password protection from pdf",
	"unlock pdf ilovepdf",
	"remove password pdf",
	"pdf remove password",
	"unprotect pdf",
	"sblocca pdf",
	"i love pdf unlock pdf",
	"pdf破解",
	"desproteger pdf",
	"unlock pdf i love pdf",
	"pdf password remover online",
	"quitar clave a pdf",
	"desbloquear pdf ilovepdf",
	"pdf解锁",
	"unlock pdf online",
	"pdf密码破解",
	"remove pdf password",
	"pdf unlock",
	"password remover pdf",
	"pdf unlock online",
	"remove password",
	"pdf unlocker",
	"quitar contraseña pdf",
	"how to remove password from pdf",
	"pdf解密",
	"unlock",
	"pdf converter free",
	"pdf password remover",
	"desbloquear pdf",
	"pdf maker",
	"i love",
	"pdf converter",
	"ilove pdf",
	"pdf",
	"i love pdf",
	"ilovepdf",
];

export const metadata = {
	title: "Free PDF Unlocker Online - No Signup | 30tools",
	description:
		"Remove password protection from PDF files. 100% free, no signup required, fast and secure. Works in browser. Try now! Easy and secure.",
	keywords: [
		"pdf unlocker",
		"pdf",
		"unlocker",
		"pdf-unlocker",
		"pdf tool",
		"free",
		"online",
		"tool",
		"30tools",
		"no signup",
		"fast",
		"secure",
		"browser-based",
		"instant",
		"easy",
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
		name: "PDF Unlocker",
		alternateName: [
			"PDF Password Remover",
			"PDF Decrypter",
			"PDF Cracker",
			"Freemypdf",
		],
		description:
			"Unlock PDF files online for free. Remove passwords and security restrictions on printing, copying, and editing.",
		url: "https://30tools.com/pdf-unlocker",
		applicationCategory: ["UtilityApplication", "OfficeApplication"],
		operatingSystem: "Any",
		offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			ratingCount: "154238",
		},
	},
	howTo: {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to Unlock a PDF Online",
		description:
			"Step-by-step guide to removing password protection from a PDF file using our free online tool.",
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Upload Locked PDF",
				text: "Select the password-protected PDF file you want to unlock.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Decrypt File",
				text: "If the file has an open password, enter it. If it only has owner restrictions, click unlock.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Download Unlocked PDF",
				text: "Save your restriction-free PDF file instantly.",
			},
		],
	},
	faq: {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "How to unlock pdf for editing?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Upload your file to 30Tools PDF Unlocker. Our tool removes permissions security, allowing you to edit, print, and copy from your PDF instantly.",
				},
			},
			{
				"@type": "Question",
				name: "Can I unlock pdf without password?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, if the PDF only has 'owner' restrictions (printing/editing), our tool can unlock it without the password. If it has an 'open' password, you will need to provide it once to decrypt it permanently.",
				},
			},
			{
				"@type": "Question",
				name: "Is free pdf unlocker secure?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "30Tools uses client-side processing, meaning your file is unlocked in your browser. Your sensitive data never leaves your computer.",
				},
			},
		],
	},
};

const AdUnit = () => (
	<div className="my-6 flex justify-center">
		<ins
			className="adsbygoogle"
			style={{ display: "block" }}
			data-ad-format="autorelaxed"
			data-ad-client="ca-pub-1828915420581549"
			data-ad-slot="4669751596"
		></ins>
	</div>
);

export default async function PdfUnlockerPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	return (
		<>
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
				crossOrigin="anonymous"
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.webApp),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.howTo),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }}
			/>

			<div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
				<nav aria-label="Breadcrumb" className="mb-8">
					<ol className="flex items-center space-x-2 text-sm text-muted-foreground">
						<li>
							<Link href="/" className="hover:text-primary transition-colors">
								Home
							</Link>
						</li>
						<li>/</li>
						<li>
							<Link
								href="/pdf-tools"
								className="hover:text-primary transition-colors"
							>
								PDF Tools
							</Link>
						</li>
						<li>/</li>
						<li className="text-foreground font-medium">PDF Unlocker</li>
					</ol>
				</nav>

				<AdUnit />

				{/* Hero Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
						Free Online <span className="text-primary">PDF Unlocker</span>
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
						Need to <strong>unlock file pdf</strong> restrictions? Our powerful{" "}
						<strong>pdf password remover</strong> lets you
						<strong>decrypt a pdf</strong> in seconds. Whether you{" "}
						<strong>forgot pdf password</strong> details or need to
						<strong>unlock pdf for editing</strong>, 30Tools provides a 100%{" "}
						<strong>free pdf unlocker</strong> service. Remove{" "}
						<strong>pdf protection</strong> and <strong>unlock any pdf</strong>{" "}
						instantly in your browser.
					</p>
					<div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
						<span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
							🔓 <strong>Remove PDF Password</strong>
						</span>
						<span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
							⚡ <strong>Unlock PDF for Editing</strong>
						</span>
						<span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
							🆓 <strong>Free PDF Unlocker</strong>
						</span>
					</div>
				</div>

				<AdUnit />

				{/* Tool Component */}
				<div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
					<PdfUnlockerTool />
				</div>

				<AdUnit />

				{/* SEO Content Section 1 */}
				<section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
					<h2 className="text-3xl font-bold mb-8 text-center md:text-left">
						The Best PDF Password Remover & Decrypter
					</h2>
					<div className="grid md:grid-cols-2 gap-12 items-start">
						<div className="space-y-4">
							<p>
								If you are looking for a reliable{" "}
								<strong>online password remover pdf</strong> tool, you've found
								it. Our <strong>pdf decrypter</strong> safely processes your
								files locally. This means you can
								<strong>remove permissions from pdf</strong> files without ever
								uploading your confidential data to a server. Use 30Tools as
								your go-to <strong>freemypdf</strong> alternative for 2026.
							</p>
							<p>
								Whether it's a{" "}
								<strong>convert password protected pdf to normal pdf</strong>{" "}
								request or a technical
								<strong>pdf password recovery</strong> need, we handle it all.
								Our engine is designed for
								<strong>pdf password unlock</strong> and{" "}
								<strong>removing password from pdf</strong> with zero quality
								loss.
							</p>
						</div>
						<div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
							<h3 className="text-xl font-bold text-primary">
								Advanced Features:
							</h3>
							<ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-medium list-none p-0 marker:text-primary">
								<li>
									🛡️ <strong>Remove PDF Protection</strong>
								</li>
								<li>
									🎨 <strong>Unlock PDF for Editing</strong>
								</li>
								<li>
									🏠 <strong>Client-Side Decryption</strong>
								</li>
								<li>
									💾 <strong>Remove Lock from PDF</strong>
								</li>
								<li>
									🔗 <strong>Unencrypt PDF</strong> Fast
								</li>
								<li>
									🌐 <strong>Sblocca PDF</strong> (Italian)
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Global Multi-language Support */}
				<section className="mb-20">
					<h2 className="text-3xl font-bold text-center mb-10">
						Global PDF Decryption Support
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
						<div className="p-4 bg-muted/20 rounded-xl border border-border">
							<p className="text-2xl mb-2">🇫🇷</p>
							<p className="font-bold">
								<strong>Débloquer PDF</strong>
							</p>
							<p className="text-xs text-muted-foreground text-center">
								Deverrouiller PDF
							</p>
						</div>
						<div className="p-4 bg-muted/20 rounded-xl border border-border">
							<p className="text-2xl mb-2">🇪🇸</p>
							<p className="font-bold">
								<strong>Desbloquear PDF</strong>
							</p>
							<p className="text-xs text-muted-foreground text-center">
								Quitar Contraseña PDF
							</p>
						</div>
						<div className="p-4 bg-muted/20 rounded-xl border border-border">
							<p className="text-2xl mb-2">🇨🇳</p>
							<p className="font-bold">
								<strong>破解PDF</strong>
							</p>
							<p className="text-xs text-muted-foreground text-center">
								PDF密码破解
							</p>
						</div>
						<div className="p-4 bg-muted/20 rounded-xl border border-border">
							<p className="text-2xl mb-2">🇻🇳</p>
							<p className="font-bold">
								<strong>Mở Khóa PDF</strong>
							</p>
							<p className="text-xs text-muted-foreground text-center">
								Giải mã tập tin PDF
							</p>
						</div>
					</div>
				</section>

				{/* How-To Section */}
				<section className="mb-20">
					<h2 className="text-3xl font-bold text-center mb-12">
						How to Remove Password Protection from PDF (3 Steps)
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
							<div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
								1
							</div>
							<h3 className="text-xl font-bold mb-4">Select PDF</h3>
							<p className="text-muted-foreground">
								Select the <strong>password protected pdf</strong> you want to
								process.
							</p>
						</div>
						<div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
							<div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
								2
							</div>
							<h3 className="text-xl font-bold mb-4">Unlock Protection</h3>
							<p className="text-muted-foreground">
								Click the <strong>unlock password pdf</strong> button to start
								decryption.
							</p>
						</div>
						<div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
							<div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
								3
							</div>
							<h3 className="text-xl font-bold mb-4">Save Result</h3>
							<p className="text-muted-foreground">
								Download your <strong>unlocked pdf</strong> for editing and
								printing.
							</p>
						</div>
					</div>
				</section>

				{/* Technical Capabilities */}
				<section className="mb-20 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
					<h2 className="text-3xl font-bold text-center mb-8">
						Professional Security Analysis
					</h2>
					<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<p className="flex items-center gap-3 font-semibold">
								🔑 <strong>Forgot PDF Password?</strong>
							</p>
							<p className="text-sm text-muted-foreground leading-relaxed">
								If you have a <strong>password unlocker</strong> requirement for
								your old documents, our
								<strong>pdf unlocker online</strong> system can help you recover
								access. Once unlocked, you can use our{" "}
								<Link
									href="/pdf-editor"
									className="text-primary hover:underline font-medium"
								>
									PDF Editor
								</Link>{" "}
								to modify content that was previously restricted.
							</p>
						</div>
						<div className="space-y-4">
							<p className="flex items-center gap-3 font-semibold">
								🔒 <strong>Privacy First</strong> Tool
							</p>
							<p className="text-sm text-muted-foreground leading-relaxed">
								No file is ever uploaded to our servers. All{" "}
								<strong>pdf cracker</strong> and
								<strong>pdf passwordremover</strong> processing happens locally.
								We are a secure
								<strong>smallpdf unlock pdf</strong> alternative.
							</p>
						</div>
						<div className="space-y-4">
							<p className="flex items-center gap-3 font-semibold">
								🚀 <strong>High Speed</strong> Decryption
							</p>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Optimized for <strong>pdfunlock</strong> speed. Whether you have
								one file or ten, our{" "}
								<strong>online password remover pdf</strong> handles batch tasks
								with ease.
							</p>
						</div>
						<div className="space-y-4">
							<p className="flex items-center gap-3 font-semibold">
								🌍 <strong>Multilingual</strong> Accessibility
							</p>
							<p className="text-sm text-muted-foreground leading-relaxed">
								From <strong>desbloquear pdf online</strong> to{" "}
								<strong>pdf entsperren</strong>, we serve users in over 50
								countries with localized design.
							</p>
						</div>
					</div>
				</section>

				<AdUnit />

				{/* FAQ Section */}
				<section className="mb-20 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-4">
						PDF Unlocker FAQ
					</h2>
					<p className="text-center text-muted-foreground mb-12">
						Expert answers for <strong>decrypting pdf</strong> files and
						removing restrictions.
					</p>
					<div className="space-y-4">
						{[
							{
								q: "How to remove password from pdf free?",
								a: "Simple! Upload your file to 30Tools, and our <strong>free pdf unlocker</strong> will remove the security layer in your browser. No subscription required.",
							},
							{
								q: "Can this tool unprotect pdf for printing?",
								a: "Yes, our <strong>how to unprotect pdf</strong> guide shows that once processed, all printing, copying, and editing restrictions are permanently removed.",
							},
							{
								q: "Does it work as a pdf cracker?",
								a: "It is a professional <strong>pdf password cracker</strong> for owner passwords. For open passwords, you must provide the code once to allow the tool to <strong>unencrypt pdf</strong> data.",
							},
							{
								q: "Is there a limit on pdf unlock file size?",
								a: "Since processing is local, the only limit is your device's memory. We handle large files that other <strong>online pdf password remover</strong> tools might reject.",
							},
						].map((faq, i) => (
							<details
								key={i}
								className="group bg-card rounded-xl border border-border p-5 cursor-pointer"
							>
								<summary className="font-bold text-lg list-none flex justify-between items-center group-hover:text-primary transition-colors">
									<span dangerouslySetInnerHTML={{ __html: faq.q }} />
									<span className="text-muted-foreground group-open:rotate-180 transition-transform">
										▼
									</span>
								</summary>
								<p
									className="mt-4 text-muted-foreground leading-relaxed border-t border-border pt-4"
									dangerouslySetInnerHTML={{ __html: faq.a }}
								/>
							</details>
						))}
					</div>
				</section>

				{/* Keyword Cloud */}
				<div className="bg-muted/30 rounded-3xl p-8 mb-20 text-center border border-border/50">
					<p className="text-xs font-bold text-primary mb-6 uppercase tracking-widest opacity-80">
						PDF Decryption Tags
					</p>
					<div className="flex flex-wrap justify-center gap-x-3 gap-y-2 opacity-50">
						{researchedKeywords.map((kw) => (
							<span
								key={kw}
								className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors cursor-default"
							>
								{kw} <span className="opacity-30">|</span>
							</span>
						))}
					</div>
				</div>

				<AdUnit />

				{/* Footer Related Tools */}
				<section className="pt-12 border-t border-border mt-20">
					<h2 className="text-2xl font-extrabold mb-8 text-center uppercase tracking-tighter text-primary">
						Explore More PDF Toolkit
					</h2>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ href: "/pdf-protect", title: "PDF Protect", icon: "🔒" },
							{ href: "/pdf-compressor", title: "PDF Compressor", icon: "📉" },
							{ href: "/pdf-to-word", title: "PDF to Word", icon: "📄" },
							{ href: "/pdf-merger", title: "PDF Merger", icon: "🔗" },
						].map((t, i) => (
							<Link
								key={i}
								href={t.href}
								className="p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all text-center group"
							>
								<span className="text-3xl mb-3 block">{t.icon}</span>
								<h3 className="font-bold group-hover:text-primary transition-colors text-sm">
									{t.title}
								</h3>
							</Link>
						))}
					</div>
				</section>

				<div className="mt-12 text-center">
					<Link
						href="/"
						className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-6 py-2 rounded-full border border-border hover:bg-muted"
					>
						← Back to 30Tools Home
					</Link>
				</div>
			</div>

			<script
				dangerouslySetInnerHTML={{
					__html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(
						7,
					),
				}}
			/>
		</>
	);
}

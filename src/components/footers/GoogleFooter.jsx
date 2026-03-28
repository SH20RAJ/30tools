import React from "react";
import Link from "next/link";
import { GoogleLogo } from "@/components/shared/GoogleLogo";
import { 
  GithubIcon, 
  TwitterIcon, 
  LinkedinIcon,
  GlobeIcon
} from "lucide-react";

export function GoogleFooter() {
	return (
		<footer className="bg-[#f8f9fa] dark:bg-muted/10 border-t border-border mt-auto">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
					<div className="col-span-2 lg:col-span-2 space-y-6">
						<GoogleLogo />
						<p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
							Free, fast, and private online tools for everyone. 
							Built with privacy by design, your data stays in your browser.
						</p>
						<div className="flex items-center gap-4">
							<a href="https://github.com/sh20raj/30tools" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
								<GithubIcon className="h-5 w-5" />
							</a>
							<a href="https://twitter.com/sh20raj" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
								<TwitterIcon className="h-5 w-5" />
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-sm font-bold text-[#3c4043] dark:text-foreground mb-4 uppercase tracking-wider">Product</h4>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li><Link href="/search" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Browse Tools</Link></li>
							<li><Link href="/blog" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Blog</Link></li>
							<li><Link href="/about" className="hover:text-primary transition-colors underline-offset-4 hover:underline">About Us</Link></li>
							<li><Link href="/changelog" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Changelog</Link></li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-bold text-[#3c4043] dark:text-foreground mb-4 uppercase tracking-wider">Support</h4>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li><Link href="/contact" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Contact</Link></li>
							<li><Link href="/faq" className="hover:text-primary transition-colors underline-offset-4 hover:underline">FAQ</Link></li>
							<li><a href="https://payments.cashfree.com/forms/30tools" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors underline-offset-4 hover:underline font-medium text-blue-600 dark:text-blue-400">Donate</a></li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-bold text-[#3c4043] dark:text-foreground mb-4 uppercase tracking-wider">Legal</h4>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li><Link href="/privacy" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Privacy Policy</Link></li>
							<li><Link href="/terms" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Terms of Service</Link></li>
							<li><Link href="/cookie-policy" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Cookie Policy</Link></li>
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex items-center gap-6 text-[13px] text-muted-foreground">
						<span>&copy; 2026 30tools.com</span>
						<Link href="/privacy" className="hover:text-[#3c4043] dark:hover:text-foreground transition-colors">Privacy</Link>
						<Link href="/terms" className="hover:text-[#3c4043] dark:hover:text-foreground transition-colors">Terms</Link>
					</div>
					
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-2 text-xs text-muted-foreground border rounded-full px-3 py-1 bg-background hover:bg-secondary cursor-pointer transition-colors">
							<GlobeIcon className="h-3 w-3" />
							<span>Language: English</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

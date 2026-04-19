import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function HomeFAQ() {
	const faqs = [
		{
			question: "Is 30tools really free to use?",
			answer: "Yes, 30tools is 100% free. We provide over 600 professional-grade tools with no subscription fees, registration, or paywalls. Our mission is to democratize access to high-quality productivity software."
		},
		{
			question: "Do I need to create an account or sign up?",
			answer: "No account is required. You can use any tool on our platform anonymously. We don't collect emails or personal information for basic tool usage."
		},
		{
			question: "Are my files safe when using your online tools?",
			answer: "Privacy is our top priority. Most of our tools (like image compressors, PDF editors, and generators) process files directly in your browser using Client-Side JS. This means your files never leave your computer. For tools that require server-side processing, files are deleted automatically after use."
		},
		{
			question: "Does 30tools work on mobile devices?",
			answer: "Absolutely. 30tools is built with a responsive, mobile-first design. All tools are fully functional on smartphones and tablets, providing a seamless experience across all your devices."
		},
		{
			question: "How many tools are available on the platform?",
			answer: "We currently offer 600+ tools across categories like Image, PDF, Video, Audio, SEO, and Developer Utilities. We are constantly adding new tools based on user feedback."
		}
	];

	return (
		<section className="py-24 border-t border-border/40">
			<div className="max-w-3xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
					<p className="text-lg text-muted-foreground">Everything you need to know about our toolkit and privacy.</p>
				</div>
				
				<Accordion type="single" collapsible className="w-full space-y-4">
					{faqs.map((faq, i) => (
						<AccordionItem key={i} value={`item-${i}`} className="border border-border/60 bg-card/50 px-6 rounded-none">
							<AccordionTrigger className="text-lg font-semibold py-6 hover:no-underline rounded-none">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}

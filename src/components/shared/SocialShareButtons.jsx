"use client";

import {
	CheckCircle2,
	Copy,
	Facebook,
	Heart,
	Linkedin,
	Mail,
	MessageCircle,
	Share2,
	Twitter,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SocialShareButtons = ({
	toolName,
	toolDescription,
	toolUrl,
	category = "tool",
	customMessage = null,
}) => {
	const [copied, setCopied] = useState(false);

	// Generate attractive share messages
	const generateShareText = (platform) => {
		if (customMessage) return customMessage;

		const messages = {
			twitter: `🚀 Just discovered ${toolName} on 30tools! ${toolDescription} Perfect for ${category} work. Try it free: ${toolUrl} #${category}tools #webtools #free`,
			facebook: `Amazing free tool alert! 🎉 ${toolName} - ${toolDescription}. This saved me so much time! Check it out at ${toolUrl}`,
			linkedin: `Productivity boost: ${toolName} 📈 ${toolDescription} Great tool for professionals. Available free at ${toolUrl}`,
			whatsapp: `Hey! Found this amazing free tool: ${toolName} - ${toolDescription} Check it out: ${toolUrl}`,
			email: `Subject: Great Free Tool - ${toolName}\n\nHi!\n\nI found this amazing free tool that might interest you:\n\n${toolName}\n${toolDescription}\n\nYou can try it here: ${toolUrl}\n\nBest regards!`,
			copy: `${toolName} - ${toolDescription} Try it free: ${toolUrl}`,
		};

		return messages[platform] || messages.copy;
	};

	const shareUrls = {
		twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(generateShareText("twitter"))}`,
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(toolUrl)}&quote=${encodeURIComponent(generateShareText("facebook"))}`,
		linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(toolUrl)}&title=${encodeURIComponent(toolName)}&summary=${encodeURIComponent(generateShareText("linkedin"))}`,
		whatsapp: `https://wa.me/?text=${encodeURIComponent(generateShareText("whatsapp"))}`,
		email: `mailto:?${generateShareText("email").replace("Subject: ", "subject=").replace("\n\n", "&body=").replace(/\n/g, "%0D%0A")}`,
	};

	const handleShare = (platform) => {
		if (platform === "copy") {
			navigator.clipboard.writeText(generateShareText("copy"));
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} else {
			window.open(shareUrls[platform], "_blank", "width=600,height=400");
		}
	};

	return (
		<div className="bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 rounded-xl p-8 md:p-12 animate-in">
			<div className="text-center mb-10">
				<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
					Love this tool? Share it.
				</h3>
				<p className="text-lg opacity-60">
					Help others discover the best free toolkit on the web.
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
				<Button
					variant="secondary"
					size="lg"
					onClick={() => handleShare("twitter")}
					className="w-full"
				>
					<Twitter className="h-4 w-4 mr-2" />
					Twitter
				</Button>

				<Button
					variant="secondary"
					size="lg"
					onClick={() => handleShare("facebook")}
					className="w-full"
				>
					<Facebook className="h-4 w-4 mr-2" />
					Facebook
				</Button>

				<Button
					variant="secondary"
					size="lg"
					onClick={() => handleShare("linkedin")}
					className="w-full"
				>
					<Linkedin className="h-4 w-4 mr-2" />
					LinkedIn
				</Button>

				<Button
					variant="secondary"
					size="lg"
					onClick={() => handleShare("whatsapp")}
					className="w-full"
				>
					<MessageCircle className="h-4 w-4 mr-2" />
					WhatsApp
				</Button>

				<Button
					variant="secondary"
					size="lg"
					onClick={() => handleShare("email")}
					className="w-full"
				>
					<Mail className="h-4 w-4 mr-2" />
					Email
				</Button>

				<Button
					variant="secondary"
					size="lg"
					onClick={() => handleShare("copy")}
					className="w-full"
				>
					{copied ? (
						<CheckCircle2 className="h-4 w-4 mr-2 text-[#0071e3]" />
					) : (
						<Copy className="h-4 w-4 mr-2" />
					)}
					{copied ? "Copied" : "Copy"}
				</Button>
			</div>

			<div className="mt-12 text-center opacity-40">
				<p className="text-sm font-medium tracking-tight">
					Free forever. No registration required. Privacy focused.
				</p>
			</div>
		</div>
	);
};

export default SocialShareButtons;

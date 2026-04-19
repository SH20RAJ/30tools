"use client";

import { Sparkles } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function GeneratorToolsNavbar() {
	const tools = [
		{ name: "Password Generator", href: "/password-generator", icon: Sparkles },
		{ name: "QR Code Generator", href: "/qr-code-generator", icon: Sparkles },
		{ name: "Lorem Ipsum", href: "/lorem-ipsum-generator", icon: Sparkles },
	];

	return (
		<ToolCategoryNavbar
			title="Generators"
			tools={tools}
			categoryIcon={Sparkles}
		/>
	);
}

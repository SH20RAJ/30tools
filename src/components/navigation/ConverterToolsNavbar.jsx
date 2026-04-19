"use client";

import { RefreshCw } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function ConverterToolsNavbar() {
	const tools = [
		{ name: "Image Converter", href: "/image-converter", icon: RefreshCw },
		{ name: "PDF to Word", href: "/pdf-to-word", icon: RefreshCw },
		{ name: "JPG to PNG", href: "/jpg-to-png-converter", icon: RefreshCw },
	];

	return (
		<ToolCategoryNavbar
			title="Converters"
			tools={tools}
			categoryIcon={RefreshCw}
		/>
	);
}

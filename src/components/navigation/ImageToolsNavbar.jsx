"use client";

import { ImageIcon } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function ImageToolsNavbar() {
	const tools = [
		{
			name: "Image Compressor",
			href: "/image-compressor",
			popular: true,
			icon: ImageIcon,
		},
		{
			name: "Image Converter",
			href: "/image-converter",
			popular: true,
			icon: ImageIcon,
		},
		{ name: "Image Resizer", href: "/image-resizer", icon: ImageIcon },
		{
			name: "Background Remover",
			href: "/background-remover",
			icon: ImageIcon,
		},
	];

	return (
		<ToolCategoryNavbar
			title="Image Tools"
			tools={tools}
			categoryIcon={ImageIcon}
		/>
	);
}

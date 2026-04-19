"use client";

import { Video } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function VideoToolsNavbar() {
	const tools = [
		{ name: "Video Compressor", href: "/image-compressor", icon: Video },
		{ name: "Video to GIF", href: "/jpg-to-gif-converter", icon: Video },
	];

	return (
		<ToolCategoryNavbar title="Video" tools={tools} categoryIcon={Video} />
	);
}

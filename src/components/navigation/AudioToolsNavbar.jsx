"use client";

import { Headphones } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function AudioToolsNavbar() {
	const tools = [
		{ name: "Text to Speech", href: "/text-to-speech", icon: Headphones },
	];

	return (
		<ToolCategoryNavbar title="Audio" tools={tools} categoryIcon={Headphones} />
	);
}

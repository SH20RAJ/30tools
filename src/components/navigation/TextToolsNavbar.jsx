"use client";

import { Type } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function TextToolsNavbar() {
	const tools = [
		{ name: "Word Counter", href: "/word-counter", icon: Type },
		{ name: "Case Converter", href: "/case-converter", icon: Type },
		{ name: "Text Compare", href: "/text-compare", icon: Type },
	];

	return <ToolCategoryNavbar title="Text" tools={tools} categoryIcon={Type} />;
}

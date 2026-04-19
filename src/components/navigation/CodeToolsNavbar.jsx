"use client";

import { Braces } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function CodeToolsNavbar() {
	const tools = [
		{ name: "JSON Formatter", href: "/json-formatter", icon: Braces },
		{ name: "Beautify Code", href: "/beautify-code-online", icon: Braces },
		{ name: "SQL Formatter", href: "/sql-code-formatter", icon: Braces },
	];

	return (
		<ToolCategoryNavbar title="Code" tools={tools} categoryIcon={Braces} />
	);
}

"use client";

import { Settings } from "lucide-react";
import ToolCategoryNavbar from "./ToolCategoryNavbar";

export default function UtilityToolsNavbar() {
	const tools = [
		{ name: "Unit Converter", href: "/all-in-one-unit-converter", icon: Settings },
		{ name: "Currency Converter", href: "/currency-calculator-live", icon: Settings },
		{ name: "Time Converter", href: "/world-clock-converter", icon: Settings },
	];

	return (
		<ToolCategoryNavbar
			title="Utilities"
			tools={tools}
			categoryIcon={Settings}
		/>
	);
}

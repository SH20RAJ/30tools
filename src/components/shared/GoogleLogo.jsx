import React from "react";
import Link from "next/link";

export function GoogleLogo({ className = "" }) {
	return (
		<Link href="/" className={`flex items-center group ${className}`}>
			<div className="flex items-center text-2xl font-semibold tracking-tight">
				<span className="text-[#4285F4]">3</span>
				<span className="text-[#EA4335]">0</span>
				<span className="text-[#FBBC05]">t</span>
				<span className="text-[#4285F4]">o</span>
				<span className="text-[#34A853]">o</span>
				<span className="text-[#EA4335]">l</span>
				<span className="text-[#FBBC05]">s</span>
			</div>
		</Link>
	);
}

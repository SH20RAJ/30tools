"use client";

import React from "react";

/**
 * A minimal, high-fidelity Apple-style spinner (iOS/Safari style).
 * It uses 12 spokes with a stepped rotation for a clean, professional feel.
 */
export default function Loading() {
	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in duration-500">
			<div className="relative w-8 h-8">
				{[...Array(12)].map((_, i) => (
					<div
						key={i}
						className="absolute left-[47%] top-0 w-[6%] h-[28%] bg-foreground/60 rounded-full origin-[center_180%]"
						style={{
							transform: `rotate(${i * 30}deg)`,
							animation: `apple-spinner 1.2s linear infinite`,
							animationDelay: `${-1.1 + i * 0.1}s`,
						}}
					/>
				))}
			</div>

			<style jsx>{`
				@keyframes apple-spinner {
					0% { opacity: 1; }
					100% { opacity: 0.15; }
				}
			`}</style>
		</div>
	);
}

"use client";

import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

interface ToolPlaceholderPageProps {
	toolId: string;
}

/**
 * Legacy name: historically “placeholder” pages. Now resolves to real in-browser tools
 * via {@link RegisteredToolMount} whenever a wiring exists for the given `toolId`.
 */
export default function ToolPlaceholderPage({ toolId }: ToolPlaceholderPageProps) {
	return <RegisteredToolMount toolId={toolId} />;
}

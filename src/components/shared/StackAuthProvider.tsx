"use client";

import { StackProvider } from "@stackframe/stack";
import { stackClientApp } from "@/stack/client";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

export default function StackAuthProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	if (stackClientApp) {
		// If StackProvider fails to initialize (e.g. cookies/storage blocked in a
		// cross-origin iframe like the AdSense preview), render the app without
		// auth rather than crashing the whole page to the global error screen.
		return (
			<ErrorBoundary fallback={<>{children}</>}>
				<StackProvider app={stackClientApp as any}>{children}</StackProvider>
			</ErrorBoundary>
		);
	}

	return <>{children}</>;
}

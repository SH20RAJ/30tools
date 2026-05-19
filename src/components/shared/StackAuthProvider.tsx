"use client";

import { StackProvider } from "@stackframe/stack";
import { stackClientApp } from "@/stack/client";

export default function StackAuthProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	if (stackClientApp) {
		return <StackProvider app={stackClientApp as any}>{children}</StackProvider>;
	}

	return <>{children}</>;
}

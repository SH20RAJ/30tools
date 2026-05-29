"use client";

import { useUser } from "@stackframe/stack";
import { UserButton } from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

function LoginLink() {
	return (
		<Button
			variant="outline"
			size="sm"
			className="gap-1.5 text-xs font-medium rounded-none"
			asChild
		>
			<a href="/handler/sign-in">
				<LogIn className="h-3.5 w-3.5" />
				Login
			</a>
		</Button>
	);
}

function AuthedButton() {
	const user = useUser({ or: "return-null" });

	if (user) {
		return (
			<div className="flex items-center gap-2">
				<UserButton />
			</div>
		);
	}

	return <LoginLink />;
}

export function AuthButton() {
	const stackProjectId = process.env.NEXT_PUBLIC_STACK_PROJECT_ID;
	const stackPublishableKey = process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY;

	// If Stack is not configured, show a plain login link.
	if (!stackProjectId || !stackPublishableKey) {
		return <LoginLink />;
	}

	// useUser throws if no StackProvider is above it (e.g. when the provider
	// fell back to no-auth). Degrade to a plain login link instead of crashing.
	return (
		<ErrorBoundary fallback={<LoginLink />}>
			<AuthedButton />
		</ErrorBoundary>
	);
}

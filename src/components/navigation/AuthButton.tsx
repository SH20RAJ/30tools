"use client";

import { useUser } from "@stackframe/stack";
import { UserButton } from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export function AuthButton() {
	const user = useUser();

	if (user) {
		return (
			<div className="flex items-center gap-2">
				<UserButton />
			</div>
		);
	}

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

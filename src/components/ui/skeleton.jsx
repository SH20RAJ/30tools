import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
	return (
		<div
			data-slot="skeleton"
			className={cn("bg-accent animate-pulse ", className)}
			{...props}
		/>
	);
}

export { Skeleton };

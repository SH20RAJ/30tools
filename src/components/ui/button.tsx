import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"bg-[#0071e3] text-white hover:bg-[#0077ed] rounded-[8px]",
				destructive:
					"bg-destructive text-white hover:bg-destructive/90 rounded-[8px]",
				outline:
					"border border-[#0066cc] text-[#0066cc] bg-transparent hover:bg-[#0066cc] hover:text-white rounded-[980px]",
				secondary:
					"bg-[#1d1d1f] text-white hover:bg-[#1d1d1f]/90 rounded-[8px] dark:bg-[#f5f5f7] dark:text-[#1d1d1f]",
				ghost:
					"hover:bg-accent hover:text-accent-foreground rounded-[8px]",
				link: "text-[#0066cc] hover:underline underline-offset-4 p-0 h-auto font-normal",
				pill: "bg-[#0071e3] text-white hover:bg-[#0077ed] rounded-[980px] px-6",
			},
			size: {
				default: "h-10 px-5 py-2",
				sm: "h-8 px-3 text-xs",
				lg: "h-12 px-8 text-base",
				icon: "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				data-slot="button"
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };

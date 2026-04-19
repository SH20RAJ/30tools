import { cn } from "@/lib/utils";
import { Upload, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GlassCard = ({ children, className }) => (
	<div className={cn(
		"relative overflow-hidden rounded-[2.5rem] bg-card/30 backdrop-blur-3xl border border-border/40 shadow-2xl transition-all duration-500 hover:border-primary/20",
		className
	)}>
		<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 group-hover:opacity-100 transition-opacity" />
		<div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] -z-10 group-hover:opacity-100 transition-opacity" />
		<div className="relative z-10">{children}</div>
	</div>
);

export const PremiumDropZone = ({ onDrop, onDragOver, onDragLeave, onClick, dragActive, title, subtitle, icon: Icon = Upload }) => (
	<div
		onDrop={onDrop}
		onDragOver={onDragOver}
		onDragLeave={onDragLeave}
		className={cn(
			"group relative flex flex-col items-center justify-center py-20 px-8 rounded-[2rem] border-2 border-dashed transition-all duration-500",
			dragActive
				? "border-primary bg-primary/5 scale-[0.99] shadow-inner"
				: "border-border/60 hover:border-primary/40 hover:bg-primary/[0.02]"
		)}
	>
		<div className={cn(
			"w-20 h-20 rounded-3xl-off bg-primary/10 flex items-center justify-center mb-6 text-primary scale-110 shadow-lg shadow-primary/10 group-hover:scale-125 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700",
			dragActive && "animate-pulse"
		)}>
			<Icon className="w-10 h-10" />
		</div>

		<h3 className="text-2xl font-bold mb-3 tracking-tight text-center">
			{title || "Click or drop files here"}
		</h3>
		<p className="text-muted-foreground mb-10 max-w-sm text-center leading-relaxed">
			{subtitle || "Secure browser-side processing. No files are uploaded to our servers."}
		</p>

		<Button
			onClick={onClick}
			size="lg"
			className="h-14 px-10 rounded-2xl font-bold bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
		>
			<Folder className="w-5 h-5 mr-3" />
			Choose Files
		</Button>

		{/* Decorative background pulse */}
		{dragActive && (
			<div className="absolute inset-0 bg-primary/5 animate-pulse rounded-[2rem]" />
		)}
	</div>
);

export const WorkspaceTitle = ({ title, subtitle, icon: Icon }) => (
	<div className="flex flex-col items-center text-center space-y-4 mb-12">
		{Icon && (
			<div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-2">
				<Icon className="w-6 h-6" />
			</div>
		)}
		<h2 className="text-4xl md:text-5xl font-black tracking-tight">{title}</h2>
		<p className="text-xl text-muted-foreground max-w-2xl">{subtitle}</p>
	</div>
);

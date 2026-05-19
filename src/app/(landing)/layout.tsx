// Landing page uses generateMetadata() in page.tsx for dynamic metadata.
// No static metadata here to avoid conflicts with the page-level metadata export.

export default function LandingGroupLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<main className="flex-1">{children}</main>
		</div>
	);
}

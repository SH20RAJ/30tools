"use client";

import {
	CalendarIcon,
	DownloadIcon,
	LinkIcon,
	MapIcon,
	PlusIcon,
	XIcon,
	Zap,
	Copy,
	Globe,
	Settings
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "../shared/WorkspaceComponents";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function SitemapGeneratorTool() {
	const [urls, setUrls] = useState([
		{ url: "", changefreq: "weekly", priority: "0.8" },
	]);
	const [baseUrl, setBaseUrl] = useState("");
	const [generatedXml, setGeneratedXml] = useState("");

	const addUrl = () => {
		setUrls([...urls, { url: "", changefreq: "weekly", priority: "0.8" }]);
	};

	const removeUrl = (index) => {
		if (urls.length > 1) {
			setUrls(urls.filter((_, i) => i !== index));
		}
	};

	const updateUrl = (index, field, value) => {
		const newUrls = [...urls];
		newUrls[index][field] = value;
		setUrls(newUrls);
	};

	const generateSitemap = () => {
		const validUrls = urls.filter((item) => item.url.trim() !== "");

		if (validUrls.length === 0) {
			toast.error("Please add at least one URL");
			return;
		}

		const currentDate = new Date().toISOString().split("T")[0];

		let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
		xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

		validUrls.forEach((item) => {
			const fullUrl = item.url.startsWith("http")
				? item.url
				: `${baseUrl.replace(/\/$/, "")}/${item.url.replace(/^\//, "")}`;
			xml += ` <url>\n`;
			xml += ` <loc>${fullUrl}</loc>\n`;
			xml += ` <lastmod>${currentDate}</lastmod>\n`;
			xml += ` <changefreq>${item.changefreq}</changefreq>\n`;
			xml += ` <priority>${item.priority}</priority>\n`;
			xml += ` </url>\n`;
		});

		xml += `</urlset>`;

		setGeneratedXml(xml);
		toast.success("Sitemap generated successfully!");
	};

	const downloadSitemap = () => {
		if (!generatedXml) return;
		const blob = new Blob([generatedXml], { type: "application/xml" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "sitemap.xml";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(generatedXml);
		toast.success("Sitemap copied to clipboard!");
	};

	return (
		<div className="w-full max-w-5xl mx-auto space-y-12 animate-in pb-24">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
				{/* Configuration Panel */}
				<div className="lg:col-span-12">
					<GlassCard className="p-8">
						<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/5">
									<Globe className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-2xl font-black">Base Domain</h3>
									<p className="text-muted-foreground font-bold text-sm uppercase tracking-tight">Specify your website root</p>
								</div>
							</div>
							<div className="flex-1 max-w-md">
								<Input
									value={baseUrl}
									onChange={(e) => setBaseUrl(e.target.value)}
									placeholder="https://yourwebsite.com"
									className="h-14 rounded-2xl bg-muted/20 border-border/40 px-6 font-bold text-lg focus-visible:ring-primary/20"
								/>
							</div>
						</div>
					</GlassCard>
				</div>

				{/* URL Workspace */}
				<div className="lg:col-span-7 space-y-8">
					<GlassCard className="p-8">
						<div className="flex items-center justify-between mb-8">
							<div className="flex items-center gap-3">
								<LinkIcon className="text-primary w-6 h-6" />
								<h3 className="text-2xl font-bold">Priority URLs</h3>
							</div>
							<Badge variant="secondary" className="rounded-full px-4 py-1.5 font-bold">
								{urls.length} Page(s)
							</Badge>
						</div>

						<div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
							{urls.map((item, index) => (
								<div key={index} className="p-6 rounded-[2.5rem] border border-border/40 bg-muted/5 group hover:bg-primary/[0.02] transition-all space-y-4 relative overflow-hidden">
									<div className="flex items-center justify-between">
										<span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground/60">Node {index + 1}</span>
										{urls.length > 1 && (
											<Button variant="ghost" size="icon" onClick={() => removeUrl(index)} className="rounded-xl hover:bg-destructive/10 hover:text-destructive transition-colors">
												<XIcon className="h-4 w-4" />
											</Button>
										)}
									</div>

									<Input
										value={item.url}
										onChange={(e) => updateUrl(index, "url", e.target.value)}
										placeholder="/services or contact-us"
										className="h-12 border-0 bg-transparent p-0 text-xl font-black focus-visible:ring-0 placeholder:text-muted-foreground/30"
									/>

									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-1">
											<Label className="text-[10px] font-black uppercase text-muted-foreground/80 ml-1">Frequency</Label>
											<select
												value={item.changefreq}
												onChange={(e) => updateUrl(index, "changefreq", e.target.value)}
												className="w-full h-11 bg-muted/20 rounded-xl border border-border/40 px-3 font-bold text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 appearance-none"
											>
												{["always", "hourly", "daily", "weekly", "monthly", "yearly"].map(o => (
													<option key={o} value={o}>{o.charAt(0).toUpperCase() + o.slice(1)}</option>
												))}
											</select>
										</div>
										<div className="space-y-1">
											<Label className="text-[10px] font-black uppercase text-muted-foreground/80 ml-1">SEO Priority</Label>
											<select
												value={item.priority}
												onChange={(e) => updateUrl(index, "priority", e.target.value)}
												className="w-full h-11 bg-muted/20 rounded-xl border border-border/40 px-3 font-bold text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 appearance-none text-primary"
											>
												{["1.0", "0.9", "0.8", "0.6", "0.4", "0.1"].map(p => (
													<option key={p} value={p}>{p} {p === "1.0" ? "(Main)" : ""}</option>
												))}
											</select>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
							<Button onClick={addUrl} variant="outline" className="h-16 rounded-[2rem] border-border/40 hover:bg-primary/5 font-black text-lg gap-3">
								<PlusIcon className="w-5 h-5" />
								ADD NODE
							</Button>
							<Button onClick={generateSitemap} className="h-16 rounded-[2rem] font-black text-lg shadow-2xl shadow-primary/20 gap-3 group">
								<Zap className="w-5 h-5 fill-current group-hover:animate-pulse" />
								GENERATE XML
							</Button>
						</div>
					</GlassCard>
				</div>

				{/* Output Panel */}
				<div className="lg:col-span-5 space-y-8">
					<GlassCard className="p-8 h-full flex flex-col">
						<div className="flex items-center gap-3 mb-8">
							<Settings className="text-primary w-6 h-6" />
							<h3 className="text-2xl font-bold">XML Output</h3>
						</div>

						<div className="flex-1 flex flex-col gap-6">
							{generatedXml ? (
								<div className="flex-1 flex flex-col animate-in slide-in-from-right-4 duration-500 gap-6">
									<Textarea
										value={generatedXml}
										readOnly
										className="flex-1 min-h-[400px] font-mono text-sm rounded-3xl-off bg-primary/[0.03] border-primary/20 p-6 focus-visible:ring-0 text-primary"
									/>
									<div className="grid grid-cols-1 gap-3">
										<Button onClick={downloadSitemap} className="h-16 rounded-2xl font-black text-lg shadow-xl gap-3">
											<DownloadIcon className="w-6 h-6" />
											DOWNLOAD XML
										</Button>
										<Button onClick={copyToClipboard} variant="outline" className="h-14 rounded-2xl font-bold border-border/40 gap-3">
											<Copy className="w-5 h-5" />
											COPY TO CLIPBOARD
										</Button>
									</div>
								</div>
							) : (
								<div className="flex-1 flex flex-col items-center justify-center p-12 text-center rounded-[2.5rem] border-2 border-dashed border-border/30 bg-muted/5">
									<MapIcon className="w-20 h-20 text-muted-foreground/10 mb-6" />
									<p className="text-muted-foreground/40 font-bold italic leading-tight">Your search engine map will appear here...</p>
								</div>
							)}

							<div className="p-6 rounded-3xl-off bg-primary/5 border border-primary/10">
								<h4 className="text-xs font-black uppercase text-primary mb-3 flex items-center gap-2">
									<CalendarIcon className="w-4 h-4" />
									Post-Generation Tips
								</h4>
								<ul className="text-xs space-y-2 text-muted-foreground font-medium list-disc ml-4">
									<li>Upload to your domain's root directory</li>
									<li>Submit URL to Google Search Console</li>
									<li>Reference in your robots.txt file</li>
								</ul>
							</div>
						</div>
					</GlassCard>
				</div>
			</div>
		</div>
	);
}

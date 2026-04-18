"use client";

import {
	Clock,
	Coffee,
	Copy,
	Flame,
	RefreshCw,
	Share2,
	Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SocialShareButtons from "@/components/shared/SocialShareButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const ProductivityRoastGeneratorTool = () => {
	const [roast, setRoast] = useState("");
	const [habits, setHabits] = useState("");
	const [workStyle, setWorkStyle] = useState("");
	const [roastIntensity, setRoastIntensity] = useState("medium");
	const [isGenerating, setIsGenerating] = useState(false);
	const [generatedRoasts, setGeneratedRoasts] = useState([]);
	const [useAI, setUseAI] = useState(true);

	const workStyles = [
		{
			id: "procrastinator",
			name: "Procrastinator",
			icon: "⏰",
			description: "Last-minute everything",
		},
		{
			id: "perfectionist",
			name: "Perfectionist",
			icon: "✨",
			description: "Never good enough",
		},
		{
			id: "multitasker",
			name: "Multitasker",
			icon: "🤹",
			description: "Doing everything at once",
		},
		{
			id: "workaholic",
			name: "Workaholic",
			icon: "💻",
			description: "Work is life",
		},
		{
			id: "minimalist",
			name: "Minimalist",
			icon: "🧘",
			description: "Less is more (sometimes too less)",
		},
		{
			id: "chaotic",
			name: "Chaotic Creative",
			icon: "🌪️",
			description: "Organized chaos",
		},
		{
			id: "planner",
			name: "Over-Planner",
			icon: "📋",
			description: "Plans to plan the planning",
		},
		{
			id: "reactive",
			name: "Reactive Worker",
			icon: "🚨",
			description: "Everything is urgent",
		},
	];

	const roastIntensities = [
		{
			id: "gentle",
			name: "Gentle Roast",
			emoji: "😊",
			description: "Friendly teasing",
		},
		{
			id: "medium",
			name: "Medium Roast",
			emoji: "😏",
			description: "Sarcastic but caring",
		},
		{
			id: "savage",
			name: "Savage Roast",
			emoji: "🔥",
			description: "Brutally honest",
		},
		{
			id: "motivational",
			name: "Motivational Roast",
			emoji: "💪",
			description: "Tough love approach",
		},
	];

	const generateAIRoast = async () => {
		try {
			const selectedWorkStyleData = workStyles.find(
				(style) => style.id === workStyle,
			);
			const selectedIntensityData = roastIntensities.find(
				(intensity) => intensity.id === roastIntensity,
			);

			const prompt = `Create a ${selectedIntensityData?.description || "humorous"} productivity roast for someone who is a ${selectedWorkStyleData?.name || "typical worker"} with these habits: "${habits}". 

Requirements:
- Make it ${roastIntensity === "gentle" ? "playful and encouraging" : roastIntensity === "savage" ? "brutally honest but constructive" : "witty with helpful insights"}
- Include specific references to their work style and habits
- End with a motivational twist or actionable advice
- Keep it under 200 characters
- Make it shareable and relatable
- Use appropriate emojis

Style: ${roastIntensity === "motivational" ? "Tough love coach" : roastIntensity === "savage" ? "Honest friend" : "Supportive but sarcastic colleague"}`;

			const response = await fetch(
				`https://text.pollinations.ai/${encodeURIComponent(prompt)}`,
			);
			const aiRoast = await response.text();

			// Clean up the response
			const cleanRoast = aiRoast
				.trim()
				.replace(/^["']|["']$/g, "") // Remove quotes
				.replace(/^Roast:\s*/i, "") // Remove "Roast:" prefix
				.replace(/^\d+\.\s*/, ""); // Remove numbering

			return cleanRoast || generateTemplateRoast();
		} catch (error) {
			console.error("AI generation failed:", error);
			return generateTemplateRoast();
		}
	};

	const generateTemplateRoast = () => {
		const templates = {
			procrastinator: [
				"Oh look, another person who thinks 'I work better under pressure' is a personality trait! 😂 Your browser history is probably 90% YouTube videos and 10% panic-googling. Time to break the cycle! 🎯",
				"You've turned procrastination into an art form! Your deadline anxiety could power a small city. Maybe try starting tasks when you get them instead of when they're due? Revolutionary concept! ⚡",
			],
			perfectionist: [
				"Ah yes, the perfectionist who spends 3 hours perfecting the font choice for a 5-minute presentation! 🎨 News flash: 'Good enough' is actually good enough sometimes! Your future self is begging you to just hit send! 📧✨",
				"You've rewritten that email 47 times and it's still in drafts. Meanwhile, your colleagues have moved on to the next project. Progress over perfection, my friend! 🚀",
			],
			multitasker: [
				"Multitasking master with 47 browser tabs open, 12 unfinished projects, and the attention span of a caffeinated squirrel! 🐿️ Maybe try finishing ONE thing before starting the next? Wild idea! 🎯",
				"You're like a browser with too many tabs - everything's running but nothing's really working efficiently. Time to close some tabs and focus! 💻✨",
			],
		};

		const styleTemplates = templates[workStyle] || [
			"Your productivity style is... unique! 😅 But hey, at least you're consistent in your chaos! Time to level up those habits! 🚀",
		];

		return styleTemplates[Math.floor(Math.random() * styleTemplates.length)];
	};

	const handleGenerate = async () => {
		if (!workStyle) {
			toast.error("Please select a work style first!");
			return;
		}

		setIsGenerating(true);

		try {
			let generatedRoast;
			if (useAI && habits.trim()) {
				generatedRoast = await generateAIRoast();
			} else {
				generatedRoast = generateTemplateRoast();
			}

			setRoast(generatedRoast);
			setGeneratedRoasts((prev) => [
				{
					text: generatedRoast,
					style: workStyle,
					intensity: roastIntensity,
					timestamp: Date.now(),
				},
				...prev.slice(0, 4),
			]);
		} catch (error) {
			toast.error("Failed to generate roast. Please try again.");
		} finally {
			setIsGenerating(false);
		}
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(roast);
			toast.success("Roast copied to clipboard! 🔥");
		} catch (error) {
			toast.error("Failed to copy to clipboard");
		}
	};

	const shareToSocial = () => {
		const text = `My productivity roast: "${roast}" 😅 Get yours at 30tools.com!`;
		const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
		window.open(url, "_blank");
	};

	return (
		<div className="min-h-screen bg-muted/20 dark:from-gray-900 dark:via-orange-900 dark:to-red-900">
			<div className="container mx-auto px-4 py-8">
				{/* Header */}
				<div className="text-center mb-8">
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="p-3 bg-primary/10 ">
							<Flame className="h-8 w-8 text-primary" />
						</div>
						<div>
							<h2 className="text-4xl font-bold text-foreground">
								Productivity Roast Generator
							</h2>
							<p className="text-muted-foreground mt-2 font-medium">
								Get the honest feedback about your work habits you need to hear!
								🔥
							</p>
						</div>
					</div>

					<div className="flex flex-wrap gap-2 justify-center">
						<Badge variant="secondary" className="bg-muted text-primary">
							🔥 Tough Love
						</Badge>
						<Badge
							variant="secondary"
							className="bg-destructive/20 text-destructive"
						>
							💪 Motivational
						</Badge>
						<Badge variant="secondary" className="bg-muted text-primary">
							🤖 AI-Powered
						</Badge>
						<Badge variant="secondary" className="bg-muted text-foreground">
							📱 Shareable
						</Badge>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Input Section */}
					<div className="space-y-6">
						<Card className="border-2 border-border shadow-lg">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-xl">
									<Coffee className="h-6 w-6 text-primary" />
									Roast Configuration
								</CardTitle>
								<CardDescription>
									Tell us about your work style and habits for a personalized
									roast
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								{/* Work Style Selection */}
								<div>
									<Label className="text-base font-semibold mb-4 block">
										Your Work Style
									</Label>
									<div className="grid grid-cols-1 gap-3">
										{workStyles.map((style) => (
											<Button
												key={style.id}
												variant={workStyle === style.id ? "default" : "outline"}
												onClick={() => setWorkStyle(style.id)}
												className="justify-start h-auto p-4 text-left"
											>
												<div className="flex items-center gap-3">
													<span className="text-2xl">{style.icon}</span>
													<div>
														<div className="font-semibold">{style.name}</div>
														<div className="text-sm text-muted-foreground">
															{style.description}
														</div>
													</div>
												</div>
											</Button>
										))}
									</div>
								</div>

								{/* Roast Intensity */}
								<div>
									<Label className="text-base font-semibold mb-3 block">
										Roast Intensity
									</Label>
									<Select
										value={roastIntensity}
										onValueChange={setRoastIntensity}
									>
										<SelectTrigger className="h-12">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											{roastIntensities.map((intensity) => (
												<SelectItem key={intensity.id} value={intensity.id}>
													<div className="flex items-center gap-2">
														<span className="text-lg">{intensity.emoji}</span>
														<div>
															<div className="font-medium">
																{intensity.name}
															</div>
															<div className="text-xs text-muted-foreground">
																{intensity.description}
															</div>
														</div>
													</div>
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								{/* Habits Input */}
								<div>
									<Label
										htmlFor="habits"
										className="text-base font-semibold mb-2 block"
									>
										Describe Your Habits (Optional)
									</Label>
									<Textarea
										id="habits"
										placeholder="e.g., I check social media every 5 minutes, have 50 browser tabs open, start projects but never finish them..."
										value={habits}
										onChange={(e) => setHabits(e.target.value)}
										className="min-h-[100px] resize-none"
									/>
									<p className="text-sm text-muted-foreground mt-2">
										More details = more personalized roast! 🎯
									</p>
								</div>

								{/* AI Toggle */}
								<div className="flex items-center justify-between p-4 bg-background/20 dark:to-blue-900/20 ">
									<div className="flex items-center space-x-3">
										<Switch
											id="useAI"
											checked={useAI}
											onCheckedChange={setUseAI}
										/>
										<Label htmlFor="useAI" className="text-base font-semibold">
											🤖 AI-Enhanced Roasts
										</Label>
									</div>
									<Badge
										variant={useAI ? "default" : "secondary"}
										className="text-sm"
									>
										{useAI ? "🚀 Enhanced" : "📝 Template"}
									</Badge>
								</div>

								{/* Generate Button */}
								<Button
									onClick={handleGenerate}
									className="w-full h-12 text-lg bg-background"
									disabled={isGenerating || !workStyle}
								>
									{isGenerating ? (
										<>
											<RefreshCw className="mr-2 h-5 w-5 animate-spin" />
											Roasting...
										</>
									) : (
										<>
											<Flame className="mr-2 h-5 w-5" />
											Roast My Productivity! 🔥
										</>
									)}
								</Button>
							</CardContent>
						</Card>
					</div>

					{/* Output Section */}
					<div className="space-y-6">
						<Card className="border-2 border-destructive/50 shadow-lg">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-xl">
									<Flame className="h-6 w-6 text-destructive" />
									Your Productivity Roast
								</CardTitle>
								<CardDescription>
									The truth hurts, but it helps! 💪
								</CardDescription>
							</CardHeader>
							<CardContent>
								{roast ? (
									<div className="space-y-6">
										<div className="p-6 bg-secondary/50 ">
											<div className="text-lg leading-relaxed mb-4 text-foreground font-medium">
												{roast}
											</div>
											<div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
												<Badge
													variant="outline"
													className="bg-background border-border shadow-sm"
												>
													{workStyles.find((s) => s.id === workStyle)?.icon}{" "}
													{workStyles.find((s) => s.id === workStyle)?.name}
												</Badge>
												<Badge
													variant="outline"
													className="bg-background border-border shadow-sm"
												>
													{
														roastIntensities.find(
															(i) => i.id === roastIntensity,
														)?.emoji
													}{" "}
													{
														roastIntensities.find(
															(i) => i.id === roastIntensity,
														)?.name
													}
												</Badge>
												{useAI && (
													<Badge
														variant="outline"
														className="bg-primary/10 text-primary border-primary/20 shadow-sm"
													>
														🤖 AI-Enhanced
													</Badge>
												)}
											</div>
										</div>

										<div className="flex gap-3">
											<Button
												onClick={copyToClipboard}
												variant="outline"
												className="flex-1 h-11"
											>
												<Copy className="mr-2 h-4 w-4" />
												Copy Roast
											</Button>
											<Button
												onClick={shareToSocial}
												variant="outline"
												className="h-11"
											>
												<Share2 className="h-4 w-4" />
											</Button>
											<Button
												onClick={handleGenerate}
												variant="outline"
												disabled={isGenerating}
												className="h-11"
											>
												<RefreshCw className="h-4 w-4" />
											</Button>
										</div>
									</div>
								) : (
									<div className="text-center py-12 text-muted-foreground">
										<Flame className="h-16 w-16 mx-auto mb-4 opacity-30" />
										<p className="text-lg mb-2">Ready for your roast?</p>
										<p className="text-sm">
											Select your work style and hit the button to get roasted!
											🔥
										</p>
									</div>
								)}
							</CardContent>
						</Card>

						{/* Recent Roasts */}
						{generatedRoasts.length > 0 && (
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Clock className="h-5 w-5" />
										Recent Roasts
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										{generatedRoasts.map((item, index) => (
											<div
												key={index}
												className="p-3 bg-muted sm"
											>
												<p className="mb-2">{item.text}</p>
												<div className="flex gap-1">
													<Badge variant="outline" size="sm">
														{workStyles.find((s) => s.id === item.style)?.name}
													</Badge>
													<Badge variant="outline" size="sm">
														{
															roastIntensities.find(
																(i) => i.id === item.intensity,
															)?.name
														}
													</Badge>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						)}
					</div>
				</div>

				{/* Features Section */}
				<div className="grid md:grid-cols-3 gap-6 mt-12">
					<Card className="text-center">
						<CardHeader>
							<CardTitle className="flex items-center justify-center gap-2 text-lg">
								<Flame className="w-6 h-6 text-primary" />
								Tough Love Approach
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Get the honest feedback about your habits that you need to hear,
								delivered with humor and care.
							</p>
						</CardContent>
					</Card>

					<Card className="text-center">
						<CardHeader>
							<CardTitle className="flex items-center justify-center gap-2 text-lg">
								<Sparkles className="w-6 h-6 text-primary" />
								AI-Powered Insights
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Advanced AI analyzes your habits and creates personalized roasts
								with actionable insights.
							</p>
						</CardContent>
					</Card>

					<Card className="text-center">
						<CardHeader>
							<CardTitle className="flex items-center justify-center gap-2 text-lg">
								<Share2 className="w-6 h-6 text-primary" />
								Shareable Fun
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Perfect for sharing with friends, colleagues, or on social media
								for some self-deprecating humor.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Social Share */}
				<div className="mt-12">
					<SocialShareButtons
						toolName="Productivity Roast Generator"
						toolDescription="Get the honest feedback about your work habits you need to hear! 🔥"
						toolUrl="https://30tools.com/productivity-roast-generator"
						category="generators"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductivityRoastGeneratorTool;

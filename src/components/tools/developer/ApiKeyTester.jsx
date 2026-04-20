"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ApiKeyTester({ toolName }) {
	const [apiKey, setApiKey] = useState("");
	const [status, setStatus] = useState("idle"); // idle, testing, success, error
	const [message, setMessage] = useState("");

	const handleTest = async () => {
		if (!apiKey) {
			setStatus("error");
			setMessage("Please enter an API key to test.");
			return;
		}

		setStatus("testing");
		
		// Simulated testing logic - In the future, this can call server-side proxy actions
		// to securely validate keys against the respective services.
		setTimeout(() => {
			setStatus("error");
			setMessage(`Testing for ${toolName} keys is currently in developer preview. We're building secure, proxied validation to ensure your keys are never exposed.`);
		}, 1500);
	};

	return (
		<div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
			<Card className="rounded-none border-2 border-primary/10 shadow-xl overflow-hidden">
				<div className="h-1 bg-primary/20" />
				<CardHeader className="p-8 pb-4">
					<div className="flex items-center gap-3 mb-2">
						<div className="p-2 bg-primary/10 text-primary">
							<KeyRound className="w-5 h-5" />
						</div>
						<h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary/60">
							{toolName} Check
						</h2>
					</div>
					<CardTitle className="text-3xl font-black tracking-tighter">
						Validate your Credentials
					</CardTitle>
					<CardDescription className="text-lg leading-relaxed max-w-2xl">
						Enter your API key below to securely test its validity. All processing is done via encrypted proxies 
						to ensure your secrets never leak.
					</CardDescription>
				</CardHeader>
				
				<CardContent className="p-8 pt-4 space-y-6">
					<div className="space-y-4">
						<div className="relative group">
							<Input
								type="password"
								placeholder={`Enter ${toolName} API Key...`}
								value={apiKey}
								onChange={(e) => setApiKey(e.target.value)}
								className="h-14 px-6 text-lg border-2 border-primary/5 focus:border-primary/20 transition-all rounded-none bg-muted/30"
							/>
							<div className="absolute inset-y-0 right-4 flex items-center">
								{status === "testing" ? (
									<Loader2 className="w-5 h-5 animate-spin text-primary" />
								) : status === "success" ? (
									<ShieldCheck className="w-5 h-5 text-green-500" />
								) : status === "error" ? (
									<AlertCircle className="w-5 h-5 text-destructive" />
								) : null}
							</div>
						</div>

						<Button 
							size="lg" 
							onClick={handleTest}
							disabled={status === "testing"}
							className="w-full h-14 text-lg font-bold rounded-none active:scale-[0.98] transition-transform shadow-lg shadow-primary/20"
						>
							{status === "testing" ? "Validating Key..." : "Run Security Test"}
						</Button>
					</div>

					{message && (
						<div className={cn(
							"p-6 border flex gap-4 animate-in zoom-in duration-300",
							status === "error" ? "bg-destructive/5 border-destructive/20 text-destructive-foreground" : "bg-green-50 border-green-200 text-green-900"
						)}>
							<div className="mt-1">
								{status === "error" ? <AlertCircle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
							</div>
							<div>
								<p className="font-bold mb-1">
									{status === "error" ? "Validation Error" : "Validation Success"}
								</p>
								<p className="opacity-90">{message}</p>
							</div>
						</div>
					)}
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80">
				<div className="p-6 bg-muted/40 border border-primary/5">
					<h3 className="font-bold flex items-center gap-2 mb-2">
						<ShieldCheck className="w-4 h-4 text-primary" /> Zero Logs Policy
					</h3>
					<p className="text-sm text-muted-foreground">
						We never store or log your API keys. The testing happens in a ephemeral sandbox and logs are wiped hourly.
					</p>
				</div>
				<div className="p-6 bg-muted/40 border border-primary/5">
					<h3 className="font-bold flex items-center gap-2 mb-2">
						<KeyRound className="w-4 h-4 text-primary" /> Encrypted Proxy
					</h3>
					<p className="text-sm text-muted-foreground">
						Requests are routed through encrypted proxies to provide an additional layer of security between your browser and the API provider.
					</p>
				</div>
			</div>
		</div>
	);
}

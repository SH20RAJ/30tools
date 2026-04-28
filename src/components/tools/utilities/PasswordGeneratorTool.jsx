"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Copy, RefreshCw, Shield } from "lucide-react";

export default function PasswordGeneratorTool() {
	const [length, setLength] = useState(16);
	const [upper, setUpper] = useState(true);
	const [lower, setLower] = useState(true);
	const [digits, setDigits] = useState(true);
	const [symbols, setSymbols] = useState(true);
	const [password, setPassword] = useState("");

	const generate = () => {
		let charset = "";
		if (upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (lower) charset += "abcdefghijklmnopqrstuvwxyz";
		if (digits) charset += "0123456789";
		if (symbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
		if (!charset) { toast.error("Select at least one character type"); return; }
		const arr = new Uint32Array(length);
		crypto.getRandomValues(arr);
		const pw = Array.from(arr, (n) => charset[n % charset.length]).join("");
		setPassword(pw);
		toast.success("Generated!");
	};

	const strength = useMemo(() => {
		if (!password) return { label: "", color: "", pct: 0 };
		let score = 0;
		if (password.length >= 12) score += 25;
		if (password.length >= 16) score += 10;
		if (/[A-Z]/.test(password)) score += 20;
		if (/[a-z]/.test(password)) score += 15;
		if (/[0-9]/.test(password)) score += 15;
		if (/[^A-Za-z0-9]/.test(password)) score += 15;
		const pct = Math.min(100, score);
		if (pct >= 80) return { label: "Strong", color: "bg-emerald-500", pct };
		if (pct >= 50) return { label: "Moderate", color: "bg-amber-500", pct };
		return { label: "Weak", color: "bg-rose-500", pct };
	}, [password]);

	const options = [
		{ label: "Uppercase (A-Z)", checked: upper, set: setUpper },
		{ label: "Lowercase (a-z)", checked: lower, set: setLower },
		{ label: "Digits (0-9)", checked: digits, set: setDigits },
		{ label: "Symbols (!@#$%)", checked: symbols, set: setSymbols },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg flex items-center gap-2">
					<Shield className="h-5 w-5 text-primary" />
					Secure Password Generator
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-1">
					<div className="flex justify-between text-xs">
						<span className="font-medium text-muted-foreground">Length</span>
						<span className="font-mono">{length}</span>
					</div>
					<input type="range" min="4" max="128" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full" />
				</div>
				<div className="grid grid-cols-2 gap-2">
					{options.map((opt) => (
						<label key={opt.label} className="flex items-center gap-2 text-sm cursor-pointer p-2 rounded-lg hover:bg-muted/40">
							<input type="checkbox" checked={opt.checked} onChange={(e) => opt.set(e.target.checked)} className="rounded" />
							{opt.label}
						</label>
					))}
				</div>
				<Button onClick={generate} className="w-full gap-2">
					<RefreshCw className="h-4 w-4" />
					Generate Password
				</Button>
				{password && (
					<>
						<div className="relative">
							<Input readOnly value={password} className="font-mono text-sm pr-12 bg-muted/30" />
							<Button variant="ghost" size="sm" className="absolute top-1 right-1 h-8"
								onClick={() => { navigator.clipboard.writeText(password); toast.success("Copied!"); }}>
								<Copy className="h-3.5 w-3.5" />
							</Button>
						</div>
						<div className="space-y-1">
							<div className="flex justify-between text-xs">
								<span className="text-muted-foreground">Strength</span>
								<span className="font-medium">{strength.label}</span>
							</div>
							<div className="h-2 rounded-full bg-muted overflow-hidden">
								<div className={`h-full rounded-full transition-all duration-500 ${strength.color}`} style={{ width: `${strength.pct}%` }} />
							</div>
						</div>
					</>
				)}
				<p className="text-xs text-muted-foreground text-center">
					Uses <code>window.crypto</code> for cryptographically secure randomness. Nothing is stored or transmitted.
				</p>
			</CardContent>
		</Card>
	);
}

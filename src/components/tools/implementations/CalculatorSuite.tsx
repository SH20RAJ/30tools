"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type Props = { toolId: string };

function num(s: string, fallback = 0) {
	const v = Number.parseFloat(String(s).replace(/,/g, ""));
	return Number.isFinite(v) ? v : fallback;
}

export default function CalculatorSuite({ toolId }: Props) {
	const [a, setA] = useState("");
	const [b, setB] = useState("");
	const [c, setC] = useState("");

	const result = useMemo(() => {
		try {
			if (toolId === "discount-calculator") {
				const price = num(a);
				const pct = num(b);
				return `Sale price: ${(price * (1 - pct / 100)).toFixed(2)}\nYou save: ${((price * pct) / 100).toFixed(2)}`;
			}
			if (toolId === "sales-tax-calculator") {
				const price = num(a);
				const rate = num(b);
				return `Total with tax: ${(price * (1 + rate / 100)).toFixed(2)}`;
			}
			if (toolId === "gst-calculator") {
				const base = num(a);
				const rate = num(b) || 18;
				const gst = (base * rate) / 100;
				return `GST amount: ${gst.toFixed(2)}\nInclusive total: ${(base + gst).toFixed(2)}`;
			}
			if (toolId === "paypal-fee-calculator") {
				const amount = num(a);
				const fee = amount * 0.029 + 0.3;
				return `Approx. fee (2.9% + $0.30): ${fee.toFixed(2)}\nNet: ${(amount - fee).toFixed(2)}`;
			}
			if (toolId === "cpm-calculator") {
				const cost = num(a);
				const imp = num(b) || 1;
				return `CPM: ${((cost / imp) * 1000).toFixed(4)}`;
			}
			if (toolId === "adsense-calculator") {
				const rpm = num(a);
				const pageviews = num(b);
				return `Est. earnings: $${((rpm * pageviews) / 1000).toFixed(2)} (RPM model)`;
			}
			if (toolId === "margin-calculator") {
				const sell = num(a);
				const cost = num(b);
				if (!sell) return "";
				return `Margin: ${(((sell - cost) / sell) * 100).toFixed(2)}%`;
			}
			if (toolId === "percentage-calculator") {
				const x = num(a);
				const y = num(b) || 1;
				return `${x}% of ${y} = ${((x / 100) * y).toFixed(4)}`;
			}
			if (toolId === "probability-calculator") {
				const n = Math.floor(num(a));
				const k = Math.floor(num(b));
				const p = num(c, 0.5);
				if (n < 0 || k < 0 || k > n) return "";
				let coef = 1;
				for (let i = 1; i <= k; i++) coef = (coef * (n - k + i)) / i;
				const prob = coef * p ** k * (1 - p) ** (n - k);
				return `P(X=${k}) ≈ ${prob.toExponential(4)} (binomial, p=${p})`;
			}
			if (toolId === "confidence-interval-calculator") {
				const mean = num(a);
				const sd = num(b);
				const n = Math.floor(num(c)) || 30;
				const se = sd / Math.sqrt(n);
				const lo = mean - 1.96 * se;
				const hi = mean + 1.96 * se;
				return `95% CI (normal approx.): [${lo.toFixed(4)}, ${hi.toFixed(4)}]`;
			}
			if (toolId === "average-calculator") {
				const parts = a.split(/[\s,;]+/).filter(Boolean).map(Number);
				if (!parts.length) return "";
				const sum = parts.reduce((s, v) => s + v, 0);
				return `Mean: ${(sum / parts.length).toFixed(6)} (n=${parts.length})`;
			}
			if (toolId === "loan-calculator") {
				const principal = num(a);
				const years = num(b) || 30;
				const apr = num(c) || 6;
				const r = apr / 100 / 12;
				const n = years * 12;
				const pay =
					r === 0 ? principal / n : (principal * r) / (1 - (1 + r) ** -n);
				return `Monthly payment ≈ ${pay.toFixed(2)} (${n} months @ ${apr}% APR)`;
			}
			if (toolId === "age-calculator") {
				const d = new Date(a);
				if (Number.isNaN(d.getTime())) return "";
				const diff = Date.now() - d.getTime();
				const age = diff / (365.25 * 24 * 3600 * 1000);
				return `Approx. age: ${age.toFixed(2)} years`;
			}
			if (toolId === "youtube-money-calculator") {
				const views = num(a);
				const rpm = num(b) || 2;
				return `Rough revenue @ $${rpm} RPM: $${((views * rpm) / 1000).toFixed(2)}`;
			}
			if (toolId === "youtube-views-ratio-calculator") {
				const v1 = num(a);
				const v2 = num(b) || 1;
				return `Ratio (A:B): ${(v1 / v2).toFixed(4)}`;
			}
		} catch {
			return "";
		}
		return "";
	}, [toolId, a, b, c]);

	const labels = (): [string, string, string] => {
		if (toolId === "discount-calculator") return ["Price", "Discount %", ""];
		if (toolId === "sales-tax-calculator") return ["Price", "Tax %", ""];
		if (toolId === "gst-calculator") return ["Base amount", "GST %", ""];
		if (toolId === "paypal-fee-calculator") return ["Gross amount (USD)", "", ""];
		if (toolId === "cpm-calculator") return ["Ad cost", "Impressions", ""];
		if (toolId === "adsense-calculator") return ["RPM ($)", "Pageviews", ""];
		if (toolId === "margin-calculator") return ["Sell price", "Cost", ""];
		if (toolId === "percentage-calculator") return ["Percent X", "Of value Y", ""];
		if (toolId === "probability-calculator") return ["n trials", "k successes", "p (0-1)"];
		if (toolId === "confidence-interval-calculator")
			return ["Sample mean", "Sample SD", "Sample size n"];
		if (toolId === "average-calculator") return ["Numbers (space/comma separated)", "", ""];
		if (toolId === "loan-calculator") return ["Principal", "Years", "APR %"];
		if (toolId === "age-calculator") return ["Birth date (YYYY-MM-DD)", "", ""];
		if (toolId === "youtube-money-calculator") return ["Monthly views", "RPM ($)", ""];
		if (toolId === "youtube-views-ratio-calculator") return ["Views A", "Views B", ""];
		return ["A", "B", "C"];
	};

	const [la, lb, lc] = labels();

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">Calculator</CardTitle>
				<CardDescription>
					Quick estimates in your browser — verify financial figures with your accountant or
					platform dashboards.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4 max-w-xl">
				<div className="space-y-2">
					<Label>{la}</Label>
					<Input value={a} onChange={(e) => setA(e.target.value)} />
				</div>
				{lb ? (
					<div className="space-y-2">
						<Label>{lb}</Label>
						<Input value={b} onChange={(e) => setB(e.target.value)} />
					</div>
				) : null}
				{lc ? (
					<div className="space-y-2">
						<Label>{lc}</Label>
						<Input value={c} onChange={(e) => setC(e.target.value)} />
					</div>
				) : null}
				<Button
					type="button"
					variant="secondary"
					onClick={() => {
						if (result) toast.success("Updated");
						else toast.message("Enter values");
					}}
				>
					Recalculate
				</Button>
				<pre className="sm whitespace-pre-wrap">{result || "—"}</pre>
			</CardContent>
		</Card>
	);
}

export const CALCULATOR_TOOL_IDS = new Set([
	"discount-calculator",
	"sales-tax-calculator",
	"gst-calculator",
	"paypal-fee-calculator",
	"cpm-calculator",
	"adsense-calculator",
	"margin-calculator",
	"percentage-calculator",
	"probability-calculator",
	"confidence-interval-calculator",
	"average-calculator",
	"loan-calculator",
	"age-calculator",
	"youtube-money-calculator",
	"youtube-views-ratio-calculator",
]);

"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

function pmt(principal: number, annualRate: number, years: number) {
	const n = years * 12;
	const r = annualRate / 100 / 12;
	if (n <= 0 || principal <= 0) return 0;
	if (r === 0) return principal / n;
	return (principal * r) / (1 - (1 + r) ** -n);
}

export function FinancialCalculatorsTool({ toolId }: { toolId: string }) {
	const [a, setA] = useState("100000");
	const [b, setB] = useState("6.5");
	const [c, setC] = useState("30");
	const [d, setD] = useState("");

	const result = useMemo(() => {
		try {
			if (toolId === "loan-calculator") {
				const principal = Number.parseFloat(a);
				const rate = Number.parseFloat(b);
				const years = Number.parseFloat(c);
				if ([principal, rate, years].some((x) => Number.isNaN(x))) return "";
				return `Monthly payment: $${pmt(principal, rate, years).toFixed(2)}`;
			}
			if (toolId === "margin-calculator") {
				const cost = Number.parseFloat(a);
				const marginPct = Number.parseFloat(b);
				if (Number.isNaN(cost) || Number.isNaN(marginPct)) return "";
				const price = cost / (1 - marginPct / 100);
				return `Sell price: $${price.toFixed(2)} (markup $${(price - cost).toFixed(2)})`;
			}
			if (toolId === "cpm-calculator") {
				const spend = Number.parseFloat(a);
				const impressions = Number.parseFloat(b);
				if (Number.isNaN(spend) || Number.isNaN(impressions) || impressions === 0) return "";
				return `CPM: $${((spend / impressions) * 1000).toFixed(2)}`;
			}
			if (toolId === "adsense-calculator") {
				const rpm = Number.parseFloat(a);
				const pageviews = Number.parseFloat(b);
				if (Number.isNaN(rpm) || Number.isNaN(pageviews)) return "";
				return `Estimated earnings: $${((rpm / 1000) * pageviews).toFixed(2)}`;
			}
			if (toolId === "discount-calculator") {
				const price = Number.parseFloat(a);
				const off = Number.parseFloat(b);
				if (Number.isNaN(price) || Number.isNaN(off)) return "";
				return `Sale price: $${(price * (1 - off / 100)).toFixed(2)}`;
			}
			if (toolId === "gst-calculator" || toolId === "sales-tax-calculator") {
				const price = Number.parseFloat(a);
				const rate = Number.parseFloat(b);
				if (Number.isNaN(price) || Number.isNaN(rate)) return "";
				const tax = price * (rate / 100);
				return `Tax: $${tax.toFixed(2)} | Total: $${(price + tax).toFixed(2)}`;
			}
			if (toolId === "paypal-fee-calculator") {
				const amt = Number.parseFloat(a);
				if (Number.isNaN(amt)) return "";
				const fee = amt * 0.029 + 0.3;
				return `Approx. PayPal fee: $${fee.toFixed(2)} | You receive ~$${(amt - fee).toFixed(2)}`;
			}
			if (toolId === "percentage-calculator") {
				const part = Number.parseFloat(a);
				const whole = Number.parseFloat(b);
				if (Number.isNaN(part) || Number.isNaN(whole) || whole === 0) return "";
				return `${((part / whole) * 100).toFixed(2)}%`;
			}
			if (toolId === "average-calculator") {
				const nums = a
					.split(/[\s,]+/)
					.map(Number.parseFloat)
					.filter((x) => !Number.isNaN(x));
				if (!nums.length) return "";
				return `Average: ${(nums.reduce((s, n) => s + n, 0) / nums.length).toFixed(4)}`;
			}
			if (toolId === "probability-calculator") {
				const fav = Number.parseFloat(a);
				const tot = Number.parseFloat(b);
				if (Number.isNaN(fav) || Number.isNaN(tot) || tot <= 0) return "";
				return `P = ${((fav / tot) * 100).toFixed(2)}%`;
			}
			if (toolId === "confidence-interval-calculator") {
				const mean = Number.parseFloat(a);
				const sd = Number.parseFloat(b);
				const n = Number.parseFloat(c);
				if ([mean, sd, n].some((x) => Number.isNaN(x)) || n <= 0) return "";
				const se = sd / Math.sqrt(n);
				const margin = 1.96 * se;
				return `95% CI ≈ [${(mean - margin).toFixed(3)}, ${(mean + margin).toFixed(3)}]`;
			}
			if (toolId === "youtube-money-calculator") {
				const views = Number.parseFloat(a);
				const rpm = Number.parseFloat(b);
				if (Number.isNaN(views) || Number.isNaN(rpm)) return "";
				return `Est. revenue: $${((views / 1000) * rpm).toFixed(2)}`;
			}
			if (toolId === "youtube-views-ratio-calculator") {
				const v1 = Number.parseFloat(a);
				const v2 = Number.parseFloat(b);
				if (Number.isNaN(v1) || Number.isNaN(v2) || v2 === 0) return "";
				return `Ratio: ${(v1 / v2).toFixed(3)}:1`;
			}
			if (toolId === "age-calculator") {
				const birth = new Date(a);
				if (Number.isNaN(birth.getTime())) return "";
				const now = new Date();
				let years = now.getFullYear() - birth.getFullYear();
				const m = now.getMonth() - birth.getMonth();
				if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) years--;
				return `Approximate age: ${years} years`;
			}
		} catch {
			return "";
		}
		return d;
	}, [toolId, a, b, c, d]);

	const labels = () => {
		switch (toolId) {
			case "loan-calculator":
				return ["Principal ($)", "APR (%)", "Years", ""];
			case "margin-calculator":
				return ["Cost ($)", "Margin %", "", ""];
			case "cpm-calculator":
				return ["Spend ($)", "Impressions", "", ""];
			case "adsense-calculator":
				return ["RPM ($)", "Pageviews", "", ""];
			case "discount-calculator":
				return ["Price ($)", "Discount %", "", ""];
			case "gst-calculator":
			case "sales-tax-calculator":
				return ["Amount ($)", "Tax rate %", "", ""];
			case "paypal-fee-calculator":
				return ["Amount received ($)", "", "", ""];
			case "percentage-calculator":
				return ["Part", "Whole", "", ""];
			case "average-calculator":
				return ["Numbers (space separated)", "", "", ""];
			case "probability-calculator":
				return ["Favorable outcomes", "Total outcomes", "", ""];
			case "confidence-interval-calculator":
				return ["Sample mean", "Std dev", "Sample size n", ""];
			case "youtube-money-calculator":
				return ["Views", "RPM ($)", "", ""];
			case "youtube-views-ratio-calculator":
				return ["Views A", "Views B", "", ""];
			case "age-calculator":
				return ["Birth date (YYYY-MM-DD)", "", "", ""];
			default:
				return ["A", "B", "C", "D"];
		}
	};

	const [l1, l2, l3] = labels();

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Calculator className="h-5 w-5" />
					Calculator
				</CardTitle>
				<CardDescription>All math runs in your browser.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4 max-w-xl">
				{l1 && (
					<div className="space-y-2">
						<Label>{l1}</Label>
						<Input value={a} onChange={(e) => setA(e.target.value)} className="font-mono" />
					</div>
				)}
				{l2 && (
					<div className="space-y-2">
						<Label>{l2}</Label>
						<Input value={b} onChange={(e) => setB(e.target.value)} className="font-mono" />
					</div>
				)}
				{l3 && (
					<div className="space-y-2">
						<Label>{l3}</Label>
						<Input value={c} onChange={(e) => setC(e.target.value)} className="font-mono" />
					</div>
				)}
				<Button
					type="button"
					onClick={() => {
						if (result) toast.success("Updated");
					}}
				>
					Calculate
				</Button>
				<div className="">{result || "—"}</div>
			</CardContent>
		</Card>
	);
}

export const FINANCE_TOOL_IDS = new Set([
	"loan-calculator",
	"margin-calculator",
	"cpm-calculator",
	"adsense-calculator",
	"discount-calculator",
	"gst-calculator",
	"sales-tax-calculator",
	"paypal-fee-calculator",
	"percentage-calculator",
	"average-calculator",
	"probability-calculator",
	"confidence-interval-calculator",
	"youtube-money-calculator",
	"youtube-views-ratio-calculator",
	"age-calculator",
]);

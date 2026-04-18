"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export type CalcKind =
	| "percentage-calculator"
	| "gst-calculator"
	| "discount-calculator"
	| "margin-calculator"
	| "loan-calculator"
	| "age-calculator"
	| "sales-tax-calculator"
	| "average-calculator"
	| "cpm-calculator"
	| "adsense-calculator"
	| "paypal-fee-calculator"
	| "probability-calculator"
	| "confidence-interval-calculator"
	| "currency-converter";

export default function BuiltInCalculators({ kind }: { kind: CalcKind }) {
	if (kind === "currency-converter") return <CurrencyConverter />;
	if (kind === "percentage-calculator") return <PctCalc />;
	if (kind === "gst-calculator") return <GstCalc />;
	if (kind === "discount-calculator") return <DiscountCalc />;
	if (kind === "margin-calculator") return <MarginCalc />;
	if (kind === "loan-calculator") return <LoanCalc />;
	if (kind === "age-calculator") return <AgeCalc />;
	if (kind === "sales-tax-calculator") return <SalesTaxCalc />;
	if (kind === "average-calculator") return <AverageCalc />;
	if (kind === "cpm-calculator") return <CpmCalc />;
	if (kind === "adsense-calculator") return <AdsenseCalc />;
	if (kind === "paypal-fee-calculator") return <PaypalCalc />;
	if (kind === "probability-calculator") return <ProbCalc />;
	if (kind === "confidence-interval-calculator") return <CiCalc />;
	return null;
}

function Field({
	id,
	label,
	value,
	onChange,
	type = "text",
}: {
	id: string;
	label: string;
	value: string;
	onChange: (v: string) => void;
	type?: string;
}) {
	return (
		<div className="space-y-1.5">
			<Label htmlFor={id}>{label}</Label>
			<Input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
		</div>
	);
}

function PctCalc() {
	const [part, setPart] = useState("");
	const [whole, setWhole] = useState("");
	const out = useMemo(() => {
		const p = Number(part);
		const w = Number(whole);
		if (!Number.isFinite(p) || !Number.isFinite(w) || w === 0) return "";
		return `${((p / w) * 100).toFixed(4)}%`;
	}, [part, whole]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Percentage
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="p" label="Part" value={part} onChange={setPart} />
				<Field id="w" label="Whole" value={whole} onChange={setWhole} />
				<div className="md:col-span-2 space-y-1">
					<Label>Result</Label>
					<Input readOnly className="font-mono bg-muted/40" value={out} />
				</div>
			</CardContent>
		</Card>
	);
}

function GstCalc() {
	const [amount, setAmount] = useState("100");
	const [rate, setRate] = useState("18");
	const { base, tax, total } = useMemo(() => {
		const a = Number(amount);
		const r = Number(rate) / 100;
		if (!Number.isFinite(a) || !Number.isFinite(r)) return { base: "", tax: "", total: "" };
		const t = a * r;
		return { base: a.toFixed(2), tax: t.toFixed(2), total: (a + t).toFixed(2) };
	}, [amount, rate]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">GST breakdown</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="a" label="Exclusive base amount" value={amount} onChange={setAmount} />
				<Field id="r" label="GST rate (%)" value={rate} onChange={setRate} />
				<Input readOnly className="bg-muted/40" value={`Base: ${base}`} />
				<Input readOnly className="bg-muted/40" value={`Tax: ${tax}`} />
				<div className="md:col-span-2">
					<Input readOnly className="bg-muted/40" value={`Total: ${total}`} />
				</div>
				<p className="text-xs text-muted-foreground md:col-span-2">
					Exclusive amount plus GST. Confirm rounding rules on real invoices.
				</p>
			</CardContent>
		</Card>
	);
}

function DiscountCalc() {
	const [price, setPrice] = useState("100");
	const [off, setOff] = useState("20");
	const { pay, save } = useMemo(() => {
		const p = Number(price);
		const d = Number(off);
		if (!Number.isFinite(p) || !Number.isFinite(d)) return { pay: "", save: "" };
		const s = (p * d) / 100;
		return { pay: (p - s).toFixed(2), save: s.toFixed(2) };
	}, [price, off]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">Discount</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="pr" label="Original price" value={price} onChange={setPrice} />
				<Field id="of" label="Discount %" value={off} onChange={setOff} />
				<Field id="sv" label="You save" value={save} onChange={() => {}} />
				<Field id="py" label="You pay" value={pay} onChange={() => {}} />
			</CardContent>
		</Card>
	);
}

function MarginCalc() {
	const [cost, setCost] = useState("40");
	const [sell, setSell] = useState("100");
	const margin = useMemo(() => {
		const c = Number(cost);
		const s = Number(sell);
		if (!Number.isFinite(c) || !Number.isFinite(s) || s === 0) return "";
		return `${(((s - c) / s) * 100).toFixed(2)}%`;
	}, [cost, sell]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">Margin %</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="c" label="Cost" value={cost} onChange={setCost} />
				<Field id="s" label="Sell price" value={sell} onChange={setSell} />
				<div className="md:col-span-2">
					<Field id="m" label="Gross margin" value={margin} onChange={() => {}} />
				</div>
			</CardContent>
		</Card>
	);
}

function LoanCalc() {
	const [p, setP] = useState("200000");
	const [apr, setApr] = useState("6.5");
	const [years, setYears] = useState("30");
	const pay = useMemo(() => {
		const principal = Number(p);
		const r = Number(apr) / 100 / 12;
		const n = Number(years) * 12;
		if (!Number.isFinite(principal) || !Number.isFinite(r) || !Number.isFinite(n) || n <= 0)
			return "";
		if (r === 0) return (principal / n).toFixed(2);
		const pow = (1 + r) ** n;
		const m = (principal * r * pow) / (pow - 1);
		return Number.isFinite(m) ? m.toFixed(2) : "";
	}, [p, apr, years]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">Mortgage payment (monthly)</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-3">
				<Field id="prin" label="Principal" value={p} onChange={setP} />
				<Field id="apr" label="APR %" value={apr} onChange={setApr} />
				<Field id="y" label="Years" value={years} onChange={setYears} />
				<div className="md:col-span-3">
					<Field id="mp" label="Monthly payment" value={pay} onChange={() => {}} />
				</div>
			</CardContent>
		</Card>
	);
}

function AgeCalc() {
	const [dob, setDob] = useState("2000-01-01");
	const age = useMemo(() => {
		const t = Date.parse(dob);
		if (Number.isNaN(t)) return "";
		const diff = Date.now() - t;
		if (diff < 0) return "";
		return `${Math.floor(diff / (365.25 * 24 * 3600 * 1000))} years (approx.)`;
	}, [dob]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">Age from birthday</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<Field id="dob" label="Date of birth" value={dob} onChange={setDob} type="date" />
				<Field id="ag" label="Approximate age" value={age} onChange={() => {}} />
			</CardContent>
		</Card>
	);
}

function SalesTaxCalc() {
	const [net, setNet] = useState("100");
	const [rate, setRate] = useState("8");
	const { tax, gross } = useMemo(() => {
		const n = Number(net);
		const r = Number(rate) / 100;
		if (!Number.isFinite(n) || !Number.isFinite(r)) return { tax: "", gross: "" };
		const t = n * r;
		return { tax: t.toFixed(2), gross: (n + t).toFixed(2) };
	}, [net, rate]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">Sales tax</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="n" label="Net amount" value={net} onChange={setNet} />
				<Field id="rt" label="Tax rate %" value={rate} onChange={setRate} />
				<Field id="tx" label="Tax" value={tax} onChange={() => {}} />
				<Field id="gr" label="Gross" value={gross} onChange={() => {}} />
			</CardContent>
		</Card>
	);
}

function AverageCalc() {
	const [txt, setTxt] = useState("1, 2, 3, 4");
	const avg = useMemo(() => {
		const nums = txt
			.split(/[\s,]+/)
			.map(Number)
			.filter((n) => Number.isFinite(n));
		if (!nums.length) return "";
		return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(6);
	}, [txt]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">Average</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				<Field id="nums" label="Numbers (comma or space separated)" value={txt} onChange={setTxt} />
				<Field id="av" label="Mean" value={avg} onChange={() => {}} />
			</CardContent>
		</Card>
	);
}

function CpmCalc() {
	const [imp, setImp] = useState("100000");
	const [cost, setCost] = useState("500");
	const cpm = useMemo(() => {
		const i = Number(imp);
		const c = Number(cost);
		if (!Number.isFinite(i) || i <= 0 || !Number.isFinite(c)) return "";
		return ((c / i) * 1000).toFixed(4);
	}, [imp, cost]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">CPM</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="im" label="Impressions" value={imp} onChange={setImp} />
				<Field id="co" label="Campaign cost" value={cost} onChange={setCost} />
				<div className="md:col-span-2">
					<Field id="cp" label="CPM" value={cpm} onChange={() => {}} />
				</div>
			</CardContent>
		</Card>
	);
}

function AdsenseCalc() {
	const [rpm, setRpm] = useState("4");
	const [pv, setPv] = useState("50000");
	const earn = useMemo(() => {
		const r = Number(rpm);
		const p = Number(pv);
		if (!Number.isFinite(r) || !Number.isFinite(p)) return "";
		return ((r * p) / 1000).toFixed(2);
	}, [rpm, pv]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">AdSense estimate</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="rpm" label="RPM (USD)" value={rpm} onChange={setRpm} />
				<Field id="pv" label="Pageviews" value={pv} onChange={setPv} />
				<div className="md:col-span-2">
					<Field id="er" label="Estimated earnings (USD)" value={earn} onChange={() => {}} />
				</div>
				<p className="text-xs text-muted-foreground md:col-span-2">
					Rough RPM × pageviews model — real AdSense revenue varies by niche, GEO, and seasonality.
				</p>
			</CardContent>
		</Card>
	);
}

function PaypalCalc() {
	const [amt, setAmt] = useState("100");
	const [feePct, setFeePct] = useState("2.9");
	const [fixed, setFixed] = useState("0.30");
	const net = useMemo(() => {
		const a = Number(amt);
		const f = Number(feePct) / 100;
		const fx = Number(fixed);
		if (!Number.isFinite(a) || !Number.isFinite(f) || !Number.isFinite(fx)) return "";
		return (a - a * f - fx).toFixed(2);
	}, [amt, feePct, fixed]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">PayPal fee (simple)</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-3">
				<Field id="am" label="Gross received" value={amt} onChange={setAmt} />
				<Field id="fp" label="Percent fee" value={feePct} onChange={setFeePct} />
				<Field id="fx" label="Fixed fee" value={fixed} onChange={setFixed} />
				<div className="md:col-span-3">
					<Field id="nt" label="Net (approx.)" value={net} onChange={() => {}} />
				</div>
			</CardContent>
		</Card>
	);
}

function ProbCalc() {
	const [p, setP] = useState("0.5");
	const [n, setN] = useState("10");
	const [k, setK] = useState("5");
	const pmf = useMemo(() => {
		const prob = Number(p);
		const trials = Math.round(Number(n));
		const kk = Math.round(Number(k));
		if (!Number.isFinite(prob) || trials < 0 || kk < 0 || kk > trials) return "";
		function binom(ni: number, ki: number): number {
			if (ki < 0 || ki > ni) return 0;
			let c = 1;
			for (let i = 0; i < ki; i++) c = (c * (ni - i)) / (i + 1);
			return c;
		}
		const b = binom(trials, kk);
		const val = b * prob ** kk * (1 - prob) ** (trials - kk);
		return Number.isFinite(val) ? val.toExponential(4) : "";
	}, [p, n, k]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">Binomial P(X = k)</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-3">
				<Field id="pp" label="p (success)" value={p} onChange={setP} />
				<Field id="nn" label="n trials" value={n} onChange={setN} />
				<Field id="kk" label="k successes" value={k} onChange={setK} />
				<div className="md:col-span-3">
					<Field id="pm" label="Probability mass" value={pmf} onChange={() => {}} />
				</div>
			</CardContent>
		</Card>
	);
}

function CiCalc() {
	const [mean, setMean] = useState("50");
	const [sd, setSd] = useState("5");
	const [n, setN] = useState("30");
	const [z, setZ] = useState("1.96");
	const { lo, hi } = useMemo(() => {
		const m = Number(mean);
		const s = Number(sd);
		const nn = Number(n);
		const zz = Number(z);
		if (!Number.isFinite(m) || !Number.isFinite(s) || !Number.isFinite(nn) || nn <= 1 || !Number.isFinite(zz))
			return { lo: "", hi: "" };
		const se = s / Math.sqrt(nn);
		return { lo: (m - zz * se).toFixed(4), hi: (m + zz * se).toFixed(4) };
	}, [mean, sd, n, z]);
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">95% style CI (normal approx.)</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="mn" label="Sample mean" value={mean} onChange={setMean} />
				<Field id="sd" label="Sample SD" value={sd} onChange={setSd} />
				<Field id="nn" label="Sample size" value={n} onChange={setN} />
				<Field id="zz" label="z" value={z} onChange={setZ} />
				<Field id="lo" label="Lower" value={lo} onChange={() => {}} />
				<Field id="hi" label="Upper" value={hi} onChange={() => {}} />
			</CardContent>
		</Card>
	);
}

function CurrencyConverter() {
	const [amount, setAmount] = useState("1");
	const [from, setFrom] = useState("USD");
	const [to, setTo] = useState("EUR");
	const [rates, setRates] = useState<Record<string, number> | null>(null);
	const [out, setOut] = useState("");

	const load = async () => {
		try {
			const res = await fetch(
				`https://api.frankfurter.app/latest?from=${encodeURIComponent(from)}`,
			);
			if (!res.ok) throw new Error("rate fetch failed");
			const data = (await res.json()) as { rates: Record<string, number> };
			setRates(data.rates);
			const r = data.rates[to];
			const a = Number(amount);
			if (!Number.isFinite(a) || r === undefined) {
				setOut("");
				return;
			}
			setOut((a * r).toFixed(4));
			toast.success("Rates updated");
		} catch {
			toast.error("Could not load exchange rates");
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-lg">Currency converter</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="grid gap-4 md:grid-cols-3">
					<Field id="am" label="Amount" value={amount} onChange={setAmount} />
					<Field id="fr" label="From (ISO)" value={from} onChange={setFrom} />
					<Field id="tt" label="To (ISO)" value={to} onChange={setTo} />
				</div>
				<Button type="button" onClick={load}>
					Convert
				</Button>
				<Field id="ou" label="Result" value={out} onChange={() => {}} />
				<p className="text-xs text-muted-foreground">
					Live rates via Frankfurter (ECB). For a new pair, press Convert again after editing ISO
					codes.
				</p>
				{rates && (
					<p className="text-xs text-muted-foreground">
						Loaded {Object.keys(rates).length} cross-rates from {from}.
					</p>
				)}
			</CardContent>
		</Card>
	);
}

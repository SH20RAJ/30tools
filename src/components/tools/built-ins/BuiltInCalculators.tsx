"use client";

import { useMemo, useState, type ChangeEvent } from "react";
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
	| "currency-converter"
	| "compound-interest-calculator"
	| "mortgage-calculator"
	| "car-loan-calculator"
	| "roi-calculator"
	| "savings-goal-calculator"
	| "tip-calculator"
	| "bmi-calculator"
	| "fuel-cost-calculator"
	| "inflation-calculator"
	| "break-even-calculator";

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
	if (kind === "compound-interest-calculator") return <CompoundInterestCalc />;
	if (kind === "mortgage-calculator") return <MortgageCalc />;
	if (kind === "car-loan-calculator") return <CarLoanCalc />;
	if (kind === "roi-calculator") return <RoiCalc />;
	if (kind === "savings-goal-calculator") return <SavingsGoalCalc />;
	if (kind === "tip-calculator") return <TipCalc />;
	if (kind === "bmi-calculator") return <BmiCalc />;
	if (kind === "fuel-cost-calculator") return <FuelCostCalc />;
	if (kind === "inflation-calculator") return <InflationCalc />;
	if (kind === "break-even-calculator") return <BreakEvenCalc />;
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
			<Label className="" htmlFor={id}>
				{label}
			</Label>
			<Input
				className=""
				id={id}
				type={type}
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
			/>
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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
	const [pv, setPv] = useState("50000");
	const [ctr, setCtr] = useState("1.5");
	const [cpc, setCpc] = useState("0.25");
	const [slots, setSlots] = useState("3");
	const [fill, setFill] = useState("90");

	const { monthly, daily, yearly, rpm, p1, p5, p10, p100 } = useMemo(() => {
		const p = Number(pv) || 0;
		const c = Number(ctr) / 100 || 0;
		const cp = Number(cpc) || 0;
		const s = Number(slots) || 0;
		const f = Number(fill) / 100 || 0;

		const totalAdImpressions = p * s * f;
		const totalClicks = totalAdImpressions * c;
		const monthlyEarn = totalClicks * cp;

		const dailyEarn = monthlyEarn / 30;
		const yearlyEarn = monthlyEarn * 12;
		const pageRpm = p > 0 ? (monthlyEarn / p) * 1000 : 0;

		const reqPvForEarn = (targetDaily: number) => {
			if (pageRpm === 0) return 0;
			return Math.ceil((targetDaily * 1000) / pageRpm);
		};

		return {
			monthly: monthlyEarn.toFixed(2),
			daily: dailyEarn.toFixed(2),
			yearly: yearlyEarn.toFixed(2),
			rpm: pageRpm.toFixed(2),
			p1: reqPvForEarn(1).toLocaleString(),
			p5: reqPvForEarn(5).toLocaleString(),
			p10: reqPvForEarn(10).toLocaleString(),
			p100: reqPvForEarn(100).toLocaleString(),
		};
	}, [pv, ctr, cpc, slots, fill]);

	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="text-lg">Advanced AdSense Estimator</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="grid gap-4 md:grid-cols-3">
					<Field id="pv" label="Monthly Pageviews" value={pv} onChange={setPv} type="number" />
					<Field id="slots" label="Ad Slots per Page" value={slots} onChange={setSlots} type="number" />
					<Field id="fill" label="Fill Rate (%)" value={fill} onChange={setFill} type="number" />
					<Field id="ctr" label="Ad CTR (%)" value={ctr} onChange={setCtr} type="number" />
					<Field id="cpc" label="Average CPC ($)" value={cpc} onChange={setCpc} type="number" />
					<Field id="rpm_out" label="Calculated Page RPM ($)" value={rpm} onChange={() => {}} type="text" />
				</div>
				
				<div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
					<h3 className="text-sm font-semibold mb-3">Estimated Earnings</h3>
					<div className="grid gap-4 grid-cols-3 text-center">
						<div>
							<p className="text-2xl font-bold">${daily}</p>
							<p className="text-xs text-muted-foreground uppercase">Daily</p>
						</div>
						<div>
							<p className="text-2xl font-bold text-primary">${monthly}</p>
							<p className="text-xs text-muted-foreground uppercase">Monthly</p>
						</div>
						<div>
							<p className="text-2xl font-bold">${yearly}</p>
							<p className="text-xs text-muted-foreground uppercase">Yearly</p>
						</div>
					</div>
				</div>

				<div>
					<h3 className="text-sm font-semibold mb-3">Pageviews Required to Hit Goals</h3>
					<div className="grid gap-2 grid-cols-2 md:grid-cols-4">
						<div className="p-2 border rounded text-center">
							<p className="font-mono text-sm">{p1}</p>
							<p className="text-[10px] text-muted-foreground">for $1/day</p>
						</div>
						<div className="p-2 border rounded text-center">
							<p className="font-mono text-sm">{p5}</p>
							<p className="text-[10px] text-muted-foreground">for $5/day</p>
						</div>
						<div className="p-2 border rounded text-center">
							<p className="font-mono text-sm">{p10}</p>
							<p className="text-[10px] text-muted-foreground">for $10/day</p>
						</div>
						<div className="p-2 border rounded text-center">
							<p className="font-mono text-sm">{p100}</p>
							<p className="text-[10px] text-muted-foreground">for $100/day</p>
						</div>
					</div>
				</div>

				<p className="text-xs text-muted-foreground">
					Note: This calculates estimated Page RPM based on impression volume, fill rate, CTR, and CPC. Real AdSense revenue varies by niche, geography, seasonality, and ad visibility.
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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
		<Card className="">
			<CardHeader className="">
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

function CompoundInterestCalc() {
	const [principal, setPrincipal] = useState("10000");
	const [rate, setRate] = useState("7");
	const [years, setYears] = useState("10");
	const [freq, setFreq] = useState("12");
	const [contrib, setContrib] = useState("0");
	const { future, interest, contributed } = useMemo(() => {
		const p = Number(principal);
		const r = Number(rate) / 100;
		const t = Number(years);
		const n = Number(freq);
		const c = Number(contrib);
		if (![p, r, t, n, c].every(Number.isFinite) || n <= 0 || t < 0) {
			return { future: "", interest: "", contributed: "" };
		}
		const periodRate = r / n;
		const periods = n * t;
		const growth = (1 + periodRate) ** periods;
		const fromPrincipal = p * growth;
		const fromContrib = periodRate === 0 ? c * periods : c * ((growth - 1) / periodRate);
		const fv = fromPrincipal + fromContrib;
		const totalIn = p + c * periods;
		return {
			future: fv.toFixed(2),
			interest: (fv - totalIn).toFixed(2),
			contributed: totalIn.toFixed(2),
		};
	}, [principal, rate, years, freq, contrib]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Compound interest
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="ci-p" label="Initial amount" value={principal} onChange={setPrincipal} type="number" />
				<Field id="ci-r" label="Annual rate (%)" value={rate} onChange={setRate} type="number" />
				<Field id="ci-y" label="Years" value={years} onChange={setYears} type="number" />
				<Field id="ci-n" label="Compounds / year" value={freq} onChange={setFreq} type="number" />
				<Field id="ci-c" label="Added each period" value={contrib} onChange={setContrib} type="number" />
				<Input readOnly className="bg-muted/40" value={`Contributed: ${contributed}`} />
				<Input readOnly className="bg-muted/40" value={`Interest earned: ${interest}`} />
				<div className="md:col-span-2">
					<Field id="ci-fv" label="Future value" value={future} onChange={() => {}} />
				</div>
			</CardContent>
		</Card>
	);
}

function amortizedPayment(principal: number, annualRatePct: number, months: number) {
	const r = annualRatePct / 100 / 12;
	if (!Number.isFinite(principal) || !Number.isFinite(r) || !Number.isFinite(months) || months <= 0) return null;
	if (r === 0) return principal / months;
	const pow = (1 + r) ** months;
	const m = (principal * r * pow) / (pow - 1);
	return Number.isFinite(m) ? m : null;
}

function MortgageCalc() {
	const [price, setPrice] = useState("300000");
	const [down, setDown] = useState("60000");
	const [rate, setRate] = useState("6.5");
	const [years, setYears] = useState("30");
	const { monthly, principal, totalInterest, totalPaid } = useMemo(() => {
		const p = Number(price) - Number(down);
		const m = amortizedPayment(p, Number(rate), Number(years) * 12);
		if (m == null || p < 0) return { monthly: "", principal: "", totalInterest: "", totalPaid: "" };
		const paid = m * Number(years) * 12;
		return {
			monthly: m.toFixed(2),
			principal: p.toFixed(2),
			totalInterest: (paid - p).toFixed(2),
			totalPaid: paid.toFixed(2),
		};
	}, [price, down, rate, years]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Mortgage payment
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="mg-pr" label="Home price" value={price} onChange={setPrice} type="number" />
				<Field id="mg-dp" label="Down payment" value={down} onChange={setDown} type="number" />
				<Field id="mg-rt" label="Interest rate (%)" value={rate} onChange={setRate} type="number" />
				<Field id="mg-yr" label="Term (years)" value={years} onChange={setYears} type="number" />
				<Input readOnly className="bg-muted/40" value={`Loan amount: ${principal}`} />
				<Input readOnly className="bg-muted/40" value={`Total interest: ${totalInterest}`} />
				<Input readOnly className="bg-muted/40" value={`Total paid: ${totalPaid}`} />
				<div className="md:col-span-2">
					<Field id="mg-mo" label="Monthly payment (principal + interest)" value={monthly} onChange={() => {}} />
				</div>
				<p className="text-xs text-muted-foreground md:col-span-2">
					Principal and interest only. Add property tax, insurance, and HOA for full housing cost.
				</p>
			</CardContent>
		</Card>
	);
}

function CarLoanCalc() {
	const [price, setPrice] = useState("30000");
	const [down, setDown] = useState("3000");
	const [trade, setTrade] = useState("0");
	const [rate, setRate] = useState("8");
	const [months, setMonths] = useState("60");
	const { monthly, financed, totalInterest } = useMemo(() => {
		const p = Number(price) - Number(down) - Number(trade);
		const m = amortizedPayment(p, Number(rate), Number(months));
		if (m == null || p < 0) return { monthly: "", financed: "", totalInterest: "" };
		const paid = m * Number(months);
		return { monthly: m.toFixed(2), financed: p.toFixed(2), totalInterest: (paid - p).toFixed(2) };
	}, [price, down, trade, rate, months]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Car loan
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="cl-pr" label="Vehicle price" value={price} onChange={setPrice} type="number" />
				<Field id="cl-dp" label="Down payment" value={down} onChange={setDown} type="number" />
				<Field id="cl-tr" label="Trade-in value" value={trade} onChange={setTrade} type="number" />
				<Field id="cl-rt" label="APR (%)" value={rate} onChange={setRate} type="number" />
				<Field id="cl-mo" label="Term (months)" value={months} onChange={setMonths} type="number" />
				<Input readOnly className="bg-muted/40" value={`Amount financed: ${financed}`} />
				<Input readOnly className="bg-muted/40" value={`Total interest: ${totalInterest}`} />
				<div className="md:col-span-2">
					<Field id="cl-pay" label="Monthly payment" value={monthly} onChange={() => {}} />
				</div>
			</CardContent>
		</Card>
	);
}

function RoiCalc() {
	const [initial, setInitial] = useState("1000");
	const [finalV, setFinalV] = useState("1500");
	const [years, setYears] = useState("3");
	const { roi, gain, annualized } = useMemo(() => {
		const i = Number(initial);
		const f = Number(finalV);
		const y = Number(years);
		if (!Number.isFinite(i) || !Number.isFinite(f) || i === 0) return { roi: "", gain: "", annualized: "" };
		const netGain = f - i;
		const roiPct = (netGain / i) * 100;
		let ann = "";
		if (Number.isFinite(y) && y > 0 && f > 0) {
			ann = `${(((f / i) ** (1 / y) - 1) * 100).toFixed(2)}%`;
		}
		return { roi: `${roiPct.toFixed(2)}%`, gain: netGain.toFixed(2), annualized: ann };
	}, [initial, finalV, years]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Return on investment
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="roi-i" label="Initial investment" value={initial} onChange={setInitial} type="number" />
				<Field id="roi-f" label="Final value" value={finalV} onChange={setFinalV} type="number" />
				<Field id="roi-y" label="Holding period (years)" value={years} onChange={setYears} type="number" />
				<Input readOnly className="bg-muted/40" value={`Net gain: ${gain}`} />
				<Field id="roi-r" label="Total ROI" value={roi} onChange={() => {}} />
				<Field id="roi-a" label="Annualized ROI" value={annualized} onChange={() => {}} />
			</CardContent>
		</Card>
	);
}

function SavingsGoalCalc() {
	const [goal, setGoal] = useState("20000");
	const [current, setCurrent] = useState("2000");
	const [rate, setRate] = useState("4");
	const [months, setMonths] = useState("24");
	const monthly = useMemo(() => {
		const fv = Number(goal) - Number(current) * (1 + Number(rate) / 100 / 12) ** Number(months);
		const r = Number(rate) / 100 / 12;
		const n = Number(months);
		if (!Number.isFinite(fv) || !Number.isFinite(r) || !Number.isFinite(n) || n <= 0) return "";
		if (fv <= 0) return "0.00 (goal already reached)";
		const pmt = r === 0 ? fv / n : (fv * r) / ((1 + r) ** n - 1);
		return Number.isFinite(pmt) ? pmt.toFixed(2) : "";
	}, [goal, current, rate, months]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Savings goal
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="sg-g" label="Savings goal" value={goal} onChange={setGoal} type="number" />
				<Field id="sg-c" label="Current savings" value={current} onChange={setCurrent} type="number" />
				<Field id="sg-r" label="Annual interest (%)" value={rate} onChange={setRate} type="number" />
				<Field id="sg-m" label="Months to goal" value={months} onChange={setMonths} type="number" />
				<div className="md:col-span-2">
					<Field id="sg-pmt" label="Required monthly deposit" value={monthly} onChange={() => {}} />
				</div>
			</CardContent>
		</Card>
	);
}

function TipCalc() {
	const [bill, setBill] = useState("50");
	const [pct, setPct] = useState("18");
	const [people, setPeople] = useState("2");
	const { tip, total, perPerson } = useMemo(() => {
		const b = Number(bill);
		const p = Number(pct) / 100;
		const n = Number(people);
		if (!Number.isFinite(b) || !Number.isFinite(p)) return { tip: "", total: "", perPerson: "" };
		const t = b * p;
		const tot = b + t;
		const per = Number.isFinite(n) && n > 0 ? (tot / n).toFixed(2) : "";
		return { tip: t.toFixed(2), total: tot.toFixed(2), perPerson: per };
	}, [bill, pct, people]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Tip
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="tp-b" label="Bill amount" value={bill} onChange={setBill} type="number" />
				<Field id="tp-p" label="Tip (%)" value={pct} onChange={setPct} type="number" />
				<Field id="tp-n" label="Split between people" value={people} onChange={setPeople} type="number" />
				<Input readOnly className="bg-muted/40" value={`Tip: ${tip}`} />
				<Input readOnly className="bg-muted/40" value={`Total: ${total}`} />
				<div className="md:col-span-2">
					<Field id="tp-per" label="Each person pays" value={perPerson} onChange={() => {}} />
				</div>
			</CardContent>
		</Card>
	);
}

function BmiCalc() {
	const [weight, setWeight] = useState("70");
	const [height, setHeight] = useState("175");
	const { bmi, category } = useMemo(() => {
		const w = Number(weight);
		const hCm = Number(height);
		if (!Number.isFinite(w) || !Number.isFinite(hCm) || hCm <= 0) return { bmi: "", category: "" };
		const h = hCm / 100;
		const value = w / (h * h);
		if (!Number.isFinite(value)) return { bmi: "", category: "" };
		let cat = "Normal weight";
		if (value < 18.5) cat = "Underweight";
		else if (value >= 25 && value < 30) cat = "Overweight";
		else if (value >= 30) cat = "Obese";
		return { bmi: value.toFixed(1), category: cat };
	}, [weight, height]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Body Mass Index
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="bmi-w" label="Weight (kg)" value={weight} onChange={setWeight} type="number" />
				<Field id="bmi-h" label="Height (cm)" value={height} onChange={setHeight} type="number" />
				<Field id="bmi-v" label="BMI" value={bmi} onChange={() => {}} />
				<Field id="bmi-c" label="Category" value={category} onChange={() => {}} />
				<p className="text-xs text-muted-foreground md:col-span-2">
					BMI is a general screening metric and does not account for muscle mass or body composition.
				</p>
			</CardContent>
		</Card>
	);
}

function FuelCostCalc() {
	const [distance, setDistance] = useState("500");
	const [economy, setEconomy] = useState("15");
	const [price, setPrice] = useState("1.5");
	const { fuel, cost } = useMemo(() => {
		const d = Number(distance);
		const e = Number(economy);
		const p = Number(price);
		if (!Number.isFinite(d) || !Number.isFinite(e) || !Number.isFinite(p) || e <= 0) return { fuel: "", cost: "" };
		const used = d / e;
		return { fuel: used.toFixed(2), cost: (used * p).toFixed(2) };
	}, [distance, economy, price]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Trip fuel cost
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="fc-d" label="Distance (km)" value={distance} onChange={setDistance} type="number" />
				<Field id="fc-e" label="Fuel economy (km per litre)" value={economy} onChange={setEconomy} type="number" />
				<Field id="fc-p" label="Fuel price (per litre)" value={price} onChange={setPrice} type="number" />
				<Input readOnly className="bg-muted/40" value={`Fuel needed: ${fuel} L`} />
				<div className="md:col-span-2">
					<Field id="fc-c" label="Estimated trip cost" value={cost} onChange={() => {}} />
				</div>
			</CardContent>
		</Card>
	);
}

function InflationCalc() {
	const [amount, setAmount] = useState("1000");
	const [rate, setRate] = useState("3");
	const [years, setYears] = useState("10");
	const { future, power } = useMemo(() => {
		const a = Number(amount);
		const r = Number(rate) / 100;
		const y = Number(years);
		if (![a, r, y].every(Number.isFinite)) return { future: "", power: "" };
		const factor = (1 + r) ** y;
		return { future: (a * factor).toFixed(2), power: (a / factor).toFixed(2) };
	}, [amount, rate, years]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Inflation impact
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="in-a" label="Amount today" value={amount} onChange={setAmount} type="number" />
				<Field id="in-r" label="Annual inflation (%)" value={rate} onChange={setRate} type="number" />
				<Field id="in-y" label="Years" value={years} onChange={setYears} type="number" />
				<Input readOnly className="bg-muted/40" value={`Nominal value needed: ${future}`} />
				<div className="md:col-span-2">
					<Field id="in-p" label="Future buying power of that amount" value={power} onChange={() => {}} />
				</div>
				<p className="text-xs text-muted-foreground md:col-span-2">
					Shows both the amount you would need to keep pace, and what today's money would be worth later.
				</p>
			</CardContent>
		</Card>
	);
}

function BreakEvenCalc() {
	const [fixed, setFixed] = useState("10000");
	const [variable, setVariable] = useState("8");
	const [price, setPrice] = useState("20");
	const { units, revenue } = useMemo(() => {
		const f = Number(fixed);
		const v = Number(variable);
		const p = Number(price);
		const contribution = p - v;
		if (![f, v, p].every(Number.isFinite) || contribution <= 0) return { units: "", revenue: "" };
		const u = f / contribution;
		return { units: Math.ceil(u).toString(), revenue: (u * p).toFixed(2) };
	}, [fixed, variable, price]);
	return (
		<Card className="">
			<CardHeader className="">
				<CardTitle className="flex items-center gap-2 text-lg">
					<Calculator className="h-5 w-5" />
					Break-even point
				</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 md:grid-cols-2">
				<Field id="be-f" label="Total fixed costs" value={fixed} onChange={setFixed} type="number" />
				<Field id="be-v" label="Variable cost per unit" value={variable} onChange={setVariable} type="number" />
				<Field id="be-p" label="Selling price per unit" value={price} onChange={setPrice} type="number" />
				<Input readOnly className="bg-muted/40" value={`Break-even revenue: ${revenue}`} />
				<div className="md:col-span-2">
					<Field id="be-u" label="Units to break even" value={units} onChange={() => {}} />
				</div>
				<p className="text-xs text-muted-foreground md:col-span-2">
					Requires selling price above variable cost. Each unit beyond break-even is profit.
				</p>
			</CardContent>
		</Card>
	);
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, DollarSign, RefreshCw } from "lucide-react";

export default function CPMCalculator() {
    const [metric, setMetric] = useState("cpm"); // 'cpm', 'cost', 'impressions'
    const [cost, setCost] = useState("");
    const [impressions, setImpressions] = useState("");
    const [cpm, setCpm] = useState("");
    const [result, setResult] = useState(null);

    const calculate = () => {
        const c = parseFloat(cost);
        const i = parseFloat(impressions);
        const cp = parseFloat(cpm);

        if (metric === "cpm") {
            if (c && i) {
                setResult({
                    value: ((c / i) * 1000).toFixed(2),
                    label: "CPM Cost",
                    unit: "$"
                });
            }
        } else if (metric === "cost") {
            if (cp && i) {
                setResult({
                    value: ((cp * i) / 1000).toFixed(2),
                    label: "Total Cost",
                    unit: "$"
                });
            }
        } else if (metric === "impressions") {
            if (c && cp) {
                setResult({
                    value: Math.round((c / cp) * 1000).toLocaleString(),
                    label: "Impressions",
                    unit: ""
                });
            }
        }
    };

    const clear = () => {
        setCost("");
        setImpressions("");
        setCpm("");
        setResult(null);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Calculator */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-primary" />
                            Ad Cost Calculator
                        </CardTitle>
                        <CardDescription>Calculate CPM, Total Cost, or Impressions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">

                        <div className="space-y-2">
                            <Label>What do you want to calculate?</Label>
                            <Select value={metric} onValueChange={(val) => { setMetric(val); setResult(null); }}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cpm">Calculate CPM (Cost Per Mille)</SelectItem>
                                    <SelectItem value="cost">Calculate Total Cost</SelectItem>
                                    <SelectItem value="impressions">Calculate Impressions (Views)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Inputs based on selection */}
                        {metric === "cpm" && (
                            <>
                                <div className="space-y-2">
                                    <Label>Total Cost ($)</Label>
                                    <Input type="number" placeholder="e.g. 500" value={cost} onChange={(e) => setCost(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label>Impressions (Views)</Label>
                                    <Input type="number" placeholder="e.g. 100000" value={impressions} onChange={(e) => setImpressions(e.target.value)} />
                                </div>
                            </>
                        )}

                        {metric === "cost" && (
                            <>
                                <div className="space-y-2">
                                    <Label>CPM ($)</Label>
                                    <Input type="number" placeholder="e.g. 5.00" value={cpm} onChange={(e) => setCpm(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label>Impressions (Views)</Label>
                                    <Input type="number" placeholder="e.g. 100000" value={impressions} onChange={(e) => setImpressions(e.target.value)} />
                                </div>
                            </>
                        )}

                        {metric === "impressions" && (
                            <>
                                <div className="space-y-2">
                                    <Label>Total Cost ($)</Label>
                                    <Input type="number" placeholder="e.g. 500" value={cost} onChange={(e) => setCost(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label>CPM ($)</Label>
                                    <Input type="number" placeholder="e.g. 5.00" value={cpm} onChange={(e) => setCpm(e.target.value)} />
                                </div>
                            </>
                        )}

                        <div className="flex gap-4 pt-2">
                            <Button onClick={calculate} className="flex-1">Calculate</Button>
                            <Button onClick={clear} variant="outline" size="icon">
                                <RefreshCw className="w-4 h-4" />
                            </Button>
                        </div>

                    </CardContent>
                </Card>

                {/* Results & Info */}
                <div className="space-y-6">

                    {result && (
                        <Card className="bg-primary/5 border-primary/20">
                            <CardContent className="p-8 text-center space-y-2">
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{result.label}</p>
                                <div className="text-5xl font-extrabold text-primary break-all">
                                    {result.unit}{result.value}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <Card className="bg-muted/30">
                        <CardContent className="p-6 text-sm text-muted-foreground space-y-4">
                            <h3 className="font-semibold text-foreground">Formula Used</h3>
                            <p>
                                <strong>CPM (Cost Per Mille)</strong> = (Cost / Impressions) × 1000
                            </p>
                            <p>
                                <strong>Mille</strong> comes from Latin, meaning 1,000. CPM represents the cost for every 1,000 views or impressions of an advertisement.
                            </p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Used by advertisers to budget campaigns.</li>
                                <li>Used by publishers (YouTubers, bloggers) to estimate earnings.</li>
                            </ul>
                        </CardContent>
                    </Card>

                </div>

            </div>
        </div>
    );
}

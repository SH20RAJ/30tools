"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FractionCalculatorTool() {
    const [num1, setNum1] = useState("");
    const [den1, setDen1] = useState("");
    const [num2, setNum2] = useState("");
    const [den2, setDen2] = useState("");
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState(null);

    const gcd = (a, b) => {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    };

    const simplifyFraction = (numerator, denominator) => {
        if (denominator === 0) return { num: 0, den: 0, error: "Division by zero" };

        const divisor = gcd(numerator, denominator);
        let num = numerator / divisor;
        let den = denominator / divisor;

        // Make denominator positive
        if (den < 0) {
            num = -num;
            den = -den;
        }

        return { num, den };
    };

    const calculate = () => {
        const n1 = parseInt(num1) || 0;
        const d1 = parseInt(den1) || 1;
        const n2 = parseInt(num2) || 0;
        const d2 = parseInt(den2) || 1;

        if (d1 === 0 || d2 === 0) {
            setResult({ error: "Denominator cannot be zero" });
            return;
        }

        let resultNum, resultDen;

        switch (operation) {
            case "+":
                resultNum = n1 * d2 + n2 * d1;
                resultDen = d1 * d2;
                break;
            case "-":
                resultNum = n1 * d2 - n2 * d1;
                resultDen = d1 * d2;
                break;
            case "×":
                resultNum = n1 * n2;
                resultDen = d1 * d2;
                break;
            case "÷":
                resultNum = n1 * d2;
                resultDen = d1 * n2;
                break;
            default:
                resultNum = 0;
                resultDen = 1;
        }

        const simplified = simplifyFraction(resultNum, resultDen);

        if (simplified.error) {
            setResult({ error: simplified.error });
        } else {
            setResult({
                original: `${resultNum}/${resultDen}`,
                simplified: `${simplified.num}/${simplified.den}`,
                decimal: (simplified.num / simplified.den).toFixed(4),
                mixed: toMixedNumber(simplified.num, simplified.den),
            });
        }
    };

    const toMixedNumber = (num, den) => {
        const whole = Math.floor(Math.abs(num) / den);
        const remainder = Math.abs(num) % den;
        const sign = num < 0 ? "-" : "";

        if (whole === 0) {
            return `${sign}${remainder}/${den}`;
        } else if (remainder === 0) {
            return `${sign}${whole}`;
        } else {
            return `${sign}${whole} ${remainder}/${den}`;
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Fraction Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Fraction Inputs */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <Label>First Fraction</Label>
                        <div className="flex items-center gap-2">
                            <div className="flex-1">
                                <Input
                                    type="number"
                                    placeholder="Numerator"
                                    value={num1}
                                    onChange={(e) => setNum1(e.target.value)}
                                    className="text-center"
                                />
                            </div>
                            <span className="text-2xl text-muted-foreground">/</span>
                            <div className="flex-1">
                                <Input
                                    type="number"
                                    placeholder="Denominator"
                                    value={den1}
                                    onChange={(e) => setDen1(e.target.value)}
                                    className="text-center"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Label>Second Fraction</Label>
                        <div className="flex items-center gap-2">
                            <div className="flex-1">
                                <Input
                                    type="number"
                                    placeholder="Numerator"
                                    value={num2}
                                    onChange={(e) => setNum2(e.target.value)}
                                    className="text-center"
                                />
                            </div>
                            <span className="text-2xl text-muted-foreground">/</span>
                            <div className="flex-1">
                                <Input
                                    type="number"
                                    placeholder="Denominator"
                                    value={den2}
                                    onChange={(e) => setDen2(e.target.value)}
                                    className="text-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operation Selection */}
                <div className="space-y-2">
                    <Label>Operation</Label>
                    <div className="grid grid-cols-4 gap-2">
                        <Button
                            variant={operation === "+" ? "default" : "outline"}
                            onClick={() => setOperation("+")}
                            className="h-12"
                        >
                            Add (+)
                        </Button>
                        <Button
                            variant={operation === "-" ? "default" : "outline"}
                            onClick={() => setOperation("-")}
                            className="h-12"
                        >
                            Subtract (−)
                        </Button>
                        <Button
                            variant={operation === "×" ? "default" : "outline"}
                            onClick={() => setOperation("×")}
                            className="h-12"
                        >
                            Multiply (×)
                        </Button>
                        <Button
                            variant={operation === "÷" ? "default" : "outline"}
                            onClick={() => setOperation("÷")}
                            className="h-12"
                        >
                            Divide (÷)
                        </Button>
                    </div>
                </div>

                {/* Calculate Button */}
                <Button onClick={calculate} className="w-full h-12" size="lg">
                    Calculate
                </Button>

                {/* Result Display */}
                {result && (
                    <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                        <h3 className="font-semibold text-lg">Result:</h3>
                        {result.error ? (
                            <p className="text-destructive">{result.error}</p>
                        ) : (
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Simplified:</span>
                                    <span className="font-mono text-xl font-bold">
                                        {result.simplified}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Mixed Number:</span>
                                    <span className="font-mono text-lg">{result.mixed}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Decimal:</span>
                                    <span className="font-mono text-lg">{result.decimal}</span>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Quick Examples */}
                <div className="text-center text-sm text-muted-foreground">
                    <p>Example: 1/2 + 1/4 = 3/4</p>
                </div>
            </CardContent>
        </Card>
    );
}

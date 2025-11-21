"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function AlgebraCalculatorTool() {
    const [equationType, setEquationType] = useState("linear");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [result, setResult] = useState(null);

    const solveLinear = () => {
        // ax + b = 0
        const coeffA = parseFloat(a) || 0;
        const coeffB = parseFloat(b) || 0;

        if (coeffA === 0) {
            if (coeffB === 0) {
                return { solution: "Infinite solutions", steps: ["0 = 0 is always true"] };
            } else {
                return { solution: "No solution", steps: [`${coeffB} = 0 is false`] };
            }
        }

        const x = -coeffB / coeffA;
        return {
            solution: `x = ${x.toFixed(4)}`,
            steps: [
                `${coeffA}x + ${coeffB} = 0`,
                `${coeffA}x = ${-coeffB}`,
                `x = ${x.toFixed(4)}`,
            ],
        };
    };

    const solveQuadratic = () => {
        // ax² + bx + c = 0
        const coeffA = parseFloat(a) || 0;
        const coeffB = parseFloat(b) || 0;
        const coeffC = parseFloat(c) || 0;

        if (coeffA === 0) {
            return { solution: "Not a quadratic equation (a cannot be 0)", steps: [] };
        }

        const discriminant = coeffB * coeffB - 4 * coeffA * coeffC;

        const steps = [
            `${coeffA}x² + ${coeffB}x + ${coeffC} = 0`,
            `Discriminant: b² - 4ac = ${coeffB}² - 4(${coeffA})(${coeffC}) = ${discriminant.toFixed(2)}`,
        ];

        if (discriminant > 0) {
            const x1 = (-coeffB + Math.sqrt(discriminant)) / (2 * coeffA);
            const x2 = (-coeffB - Math.sqrt(discriminant)) / (2 * coeffA);
            steps.push(`x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`);
            return {
                solution: `Two real solutions`,
                x1: x1.toFixed(4),
                x2: x2.toFixed(4),
                steps,
            };
        } else if (discriminant === 0) {
            const x = -coeffB / (2 * coeffA);
            steps.push(`x = ${x.toFixed(4)} (repeated root)`);
            return {
                solution: `One real solution (repeated)`,
                x1: x.toFixed(4),
                steps,
            };
        } else {
            const realPart = -coeffB / (2 * coeffA);
            const imagPart = Math.sqrt(-discriminant) / (2 * coeffA);
            steps.push(`x = ${realPart.toFixed(4)} ± ${imagPart.toFixed(4)}i`);
            return {
                solution: `Two complex solutions`,
                complex: `${realPart.toFixed(4)} ± ${imagPart.toFixed(4)}i`,
                steps,
            };
        }
    };

    const calculate = () => {
        if (equationType === "linear") {
            setResult(solveLinear());
        } else {
            setResult(solveQuadratic());
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Algebra Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Equation Type Selection */}
                <div className="space-y-2">
                    <Label>Equation Type</Label>
                    <Select value={equationType} onValueChange={setEquationType}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="linear">Linear Equation (ax + b = 0)</SelectItem>
                            <SelectItem value="quadratic">Quadratic Equation (ax² + bx + c = 0)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Coefficient Inputs */}
                <div className="space-y-4">
                    {equationType === "quadratic" && (
                        <div className="space-y-2">
                            <Label htmlFor="a">Coefficient a (x²)</Label>
                            <Input
                                id="a"
                                type="number"
                                step="any"
                                placeholder="Enter coefficient a"
                                value={a}
                                onChange={(e) => setA(e.target.value)}
                            />
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="b">
                            Coefficient {equationType === "linear" ? "a (x)" : "b (x)"}
                        </Label>
                        <Input
                            id="b"
                            type="number"
                            step="any"
                            placeholder={`Enter coefficient ${equationType === "linear" ? "a" : "b"}`}
                            value={equationType === "linear" ? a : b}
                            onChange={(e) => equationType === "linear" ? setA(e.target.value) : setB(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="c">
                            Coefficient {equationType === "linear" ? "b (constant)" : "c (constant)"}
                        </Label>
                        <Input
                            id="c"
                            type="number"
                            step="any"
                            placeholder={`Enter coefficient ${equationType === "linear" ? "b" : "c"}`}
                            value={equationType === "linear" ? b : c}
                            onChange={(e) => equationType === "linear" ? setB(e.target.value) : setC(e.target.value)}
                        />
                    </div>
                </div>

                {/* Calculate Button */}
                <Button onClick={calculate} className="w-full h-12" size="lg">
                    Solve Equation
                </Button>

                {/* Result Display */}
                {result && (
                    <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                        <h3 className="font-semibold text-lg">Solution:</h3>
                        <div className="bg-card p-4 rounded-lg border-2 border-primary">
                            <p className="text-xl font-bold text-center">{result.solution}</p>
                            {result.x1 && (
                                <div className="text-center mt-2 space-y-1">
                                    <p className="font-mono text-lg">x₁ = {result.x1}</p>
                                    {result.x2 && <p className="font-mono text-lg">x₂ = {result.x2}</p>}
                                    {result.complex && <p className="font-mono text-lg">{result.complex}</p>}
                                </div>
                            )}
                        </div>
                        {result.steps && result.steps.length > 0 && (
                            <div>
                                <h4 className="font-medium mb-2">Steps:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                                    {result.steps.map((step, index) => (
                                        <li key={index} className="font-mono">{step}</li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                )}

                {/* Examples */}
                <div className="bg-card rounded-lg p-4 border">
                    <h3 className="font-medium mb-2 text-sm">Examples:</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                        <p>• Linear: 2x + 4 = 0 → x = -2</p>
                        <p>• Quadratic: x² - 5x + 6 = 0 → x = 2 or x = 3</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

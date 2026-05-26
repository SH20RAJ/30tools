"use client";

import React, { useState } from "react";
import { Calculator, Check, AlertCircle, HelpCircle, RefreshCw, Bookmark, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AttendanceCalculator() {
    // Basic calculator states
    const [attended, setAttended] = useState("30");
    const [total, setTotal] = useState("40");
    const [target, setTarget] = useState("75");

    const attNum = parseInt(attended) || 0;
    const totNum = parseInt(total) || 0;
    const targetPct = parseFloat(target) || 75;

    // Calculations
    const currentPct = totNum > 0 ? (attNum / totNum) * 100 : 0;
    
    // Calculate skip/attend counts
    let resultText = "";
    let status = "neutral"; // "pass", "fail", "neutral"
    let statusText = "";

    if (totNum > 0 && targetPct > 0) {
        if (currentPct >= targetPct) {
            status = "pass";
            statusText = `Current Attendance: ${currentPct.toFixed(1)}% (Compliant)`;
            
            // Calculate how many classes they can skip
            // (attended) / (total + x) >= targetPct / 100
            // attended * 100 >= targetPct * total + targetPct * x
            // x <= (attended * 100 - targetPct * total) / targetPct
            const skipLimit = Math.floor((attNum * 100 - targetPct * totNum) / targetPct);
            if (skipLimit > 0) {
                resultText = `You can safely skip the next ${skipLimit} class(es). Your attendance will remain at or above ${targetPct}%.`;
            } else if (skipLimit === 0) {
                resultText = `You are exactly on the margin. You cannot skip any classes, or your attendance will fall below ${targetPct}%.`;
            } else {
                resultText = `You are on the margin. Do not skip any classes.`;
            }
        } else {
            status = "fail";
            statusText = `Current Attendance: ${currentPct.toFixed(1)}% (Shortage)`;
            
            // Calculate how many consecutive classes they must attend
            // (attended + x) / (total + x) >= targetPct / 100
            // (attended + x) * 100 >= targetPct * (total + x)
            // 100 * attended + 100 * x >= targetPct * total + targetPct * x
            // x * (100 - targetPct) >= targetPct * total - 100 * attended
            // x >= (targetPct * total - 100 * attended) / (100 - targetPct)
            if (targetPct >= 100) {
                resultText = `It is mathematically impossible to reach 100% attendance if you have already missed a class.`;
            } else {
                const classesNeeded = Math.ceil((targetPct * totNum - 100 * attNum) / (100 - targetPct));
                resultText = `You must attend the next ${classesNeeded} class(es) consecutively to reach your target of ${targetPct}%.`;
            }
        }
    }

    const handleClear = () => {
        setAttended("30");
        setTotal("40");
        setTarget("75");
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Inputs Panel */}
                <div className="md:col-span-6 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-primary uppercase tracking-wider">
                                <Calculator className="h-5 w-5" />
                                <span>Attendance Calculator</span>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="attended-input">Number of Classes Attended</Label>
                                    <Input
                                        id="attended-input"
                                        type="number"
                                        min="0"
                                        value={attended}
                                        onChange={(e) => setAttended(e.target.value)}
                                        className="h-10 text-base"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="total-input">Total Classes Conducted</Label>
                                    <Input
                                        id="total-input"
                                        type="number"
                                        min="0"
                                        value={total}
                                        onChange={(e) => setTotal(e.target.value)}
                                        className="h-10 text-base"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="target-input">Target Attendance Percentage (%)</Label>
                                    <Input
                                        id="target-input"
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={target}
                                        onChange={(e) => setTarget(e.target.value)}
                                        className="h-10 text-base"
                                    />
                                </div>

                                <Button
                                    variant="outline"
                                    onClick={handleClear}
                                    className="w-full gap-2 mt-2"
                                >
                                    <RefreshCw className="h-4 w-5" />
                                    Reset Values
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Output Panel */}
                <div className="md:col-span-6 space-y-6">
                    <Card className="border-2 border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl min-h-[300px] flex flex-col justify-between">
                        <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold border-b border-border/20 pb-2 text-center flex items-center justify-center gap-2">
                                    <Bookmark className="h-5 w-5 text-primary" />
                                    <span>Calculated Analysis</span>
                                </h3>

                                {totNum <= 0 && (
                                    <div className="h-40 flex flex-col items-center justify-center border border-dashed border-border/40 rounded-md p-6 bg-muted/5 text-center">
                                        <HelpCircle className="h-10 w-10 text-muted-foreground/40 mb-2" />
                                        <p className="text-xs text-muted-foreground">Input class details to see skip or attendance targets.</p>
                                    </div>
                                )}

                                {totNum > 0 && attNum > totNum && (
                                    <div className="flex items-center gap-1.5 justify-center text-xs text-red-500 bg-red-500/10 p-3 border border-red-500/20 rounded">
                                        <AlertCircle className="h-5 w-5 shrink-0" />
                                        <span>Error: Attended classes cannot exceed total classes conducted.</span>
                                    </div>
                                )}

                                {totNum > 0 && attNum <= totNum && (
                                    <div className="space-y-4">
                                        {/* Current Stat Box */}
                                        <div className={`p-4 rounded-md border text-center ${
                                            status === "pass"
                                                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                                                : "bg-red-500/10 border-red-500/20 text-red-500"
                                        }`}>
                                            <div className="text-[10px] uppercase font-bold tracking-wider opacity-75">Your Current Attendance</div>
                                            <div className="text-3xl font-black font-mono my-1">{currentPct.toFixed(1)}%</div>
                                            <div className="text-xs font-semibold">{statusText}</div>
                                        </div>

                                        {/* Actionable Guideline Box */}
                                        <div className="bg-primary/5 border border-primary/10 rounded p-4 text-sm font-medium leading-relaxed flex items-start gap-2.5">
                                            {status === "pass" ? (
                                                <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                                            ) : (
                                                <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                            )}
                                            <span>{resultText}</span>
                                        </div>

                                        {/* Summary details */}
                                        <div className="bg-muted/30 border border-border/10 p-3 rounded text-xs space-y-1">
                                            <div className="flex justify-between">
                                                <span>Total Classes:</span>
                                                <span className="font-semibold font-mono">{totNum}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Attended Classes:</span>
                                                <span className="font-semibold font-mono">{attNum}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Missed Classes:</span>
                                                <span className="font-semibold font-mono">{totNum - attNum}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="pt-4 border-t border-border/20 text-[10px] text-muted-foreground flex items-center justify-between">
                                <span className="flex items-center gap-1">
                                    <Shield className="h-3.5 w-3.5 text-emerald-500" />
                                    Instant calculation
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

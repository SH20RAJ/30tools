"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Award, ArrowRightLeft, Target, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AcademicGradesCalculator({ defaultTab = "sgpa" }) {
    const [activeTab, setActiveTab] = useState(defaultTab); // "sgpa", "cgpa", "cgpa-pct", "req-marks"

    // SGPA States
    const [sgpaCourses, setSgpaCourses] = useState([
        { id: 1, credits: 4, grade: 10 },
        { id: 2, credits: 4, grade: 9 },
        { id: 3, credits: 3, grade: 8 },
        { id: 4, credits: 3, grade: 7 },
        { id: 5, credits: 2, grade: 9 },
    ]);
    
    // CGPA States
    const [cgpaSemesters, setCgpaSemesters] = useState([
        { id: 1, sgpa: "8.5" },
        { id: 2, sgpa: "8.8" },
        { id: 3, sgpa: "9.0" },
        { id: 4, sgpa: "" },
    ]);

    // CGPA to Pct States
    const [cgpaInput, setCgpaInput] = useState("8.8");
    const [factor, setFactor] = useState("9.5");

    // Required Marks States
    const [internalMarks, setInternalMarks] = useState("20");
    const [internalMax, setInternalMax] = useState("30");
    const [targetPct, setTargetPct] = useState("75");
    const [examMax, setExamMax] = useState("70");

    // --- SGPA CALCULATIONS ---
    const addSgpaCourse = () => {
        const nextId = sgpaCourses.length > 0 ? Math.max(...sgpaCourses.map(c => c.id)) + 1 : 1;
        setSgpaCourses(prev => [...prev, { id: nextId, credits: 3, grade: 8 }]);
    };
    
    const removeSgpaCourse = (id) => {
        setSgpaCourses(prev => prev.filter(c => c.id !== id));
    };

    const updateSgpaCourse = (id, field, val) => {
        setSgpaCourses(prev => prev.map(c => c.id === id ? { ...c, [field]: parseFloat(val) || 0 } : c));
    };

    const sgpaResult = useMemo(() => {
        let totalCredits = 0;
        let weightedPoints = 0;
        sgpaCourses.forEach(c => {
            totalCredits += c.credits;
            weightedPoints += (c.credits * c.grade);
        });
        return totalCredits > 0 ? (weightedPoints / totalCredits).toFixed(2) : "0.00";
    }, [sgpaCourses]);

    // --- CGPA CALCULATIONS ---
    const addCgpaSem = () => {
        const nextId = cgpaSemesters.length > 0 ? Math.max(...cgpaSemesters.map(s => s.id)) + 1 : 1;
        setCgpaSemesters(prev => [...prev, { id: nextId, sgpa: "" }]);
    };

    const removeCgpaSem = (id) => {
        setCgpaSemesters(prev => prev.filter(s => s.id !== id));
    };

    const updateCgpaSem = (id, val) => {
        setCgpaSemesters(prev => prev.map(s => s.id === id ? { ...s, sgpa: val } : s));
    };

    const cgpaResult = useMemo(() => {
        const activeSgpas = cgpaSemesters.map(s => parseFloat(s.sgpa)).filter(n => !isNaN(n) && n > 0);
        if (activeSgpas.length === 0) return "0.00";
        const sum = activeSgpas.reduce((a, b) => a + b, 0);
        return (sum / activeSgpas.length).toFixed(2);
    }, [cgpaSemesters]);

    // --- CGPA TO PERCENTAGE ---
    const percentageResult = useMemo(() => {
        const cgpa = parseFloat(cgpaInput) || 0;
        const fac = parseFloat(factor) || 9.5;
        return (cgpa * fac).toFixed(1);
    }, [cgpaInput, factor]);

    // --- REQUIRED MARKS CALCULATIONS ---
    const requiredMarksResult = useMemo(() => {
        const intObt = parseFloat(internalMarks) || 0;
        const intTot = parseFloat(internalMax) || 30;
        const tar = parseFloat(targetPct) || 75;
        const exTot = parseFloat(examMax) || 70;

        // Formula: (intObt + x) / (intTot + exTot) >= tar / 100
        // (intObt + x) >= (tar * (intTot + exTot)) / 100
        // x >= (tar * (intTot + exTot) / 100) - intObt
        const required = ((tar * (intTot + exTot)) / 100) - intObt;
        return {
            marks: Math.max(0, Math.ceil(required)),
            percent: exTot > 0 ? ((Math.max(0, required) / exTot) * 100).toFixed(1) : 0
        };
    }, [internalMarks, internalMax, targetPct, examMax]);

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            {/* Navigation Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1 bg-muted/40 border border-border/20 rounded-lg">
                <button
                    onClick={() => setActiveTab("sgpa")}
                    className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                        activeTab === "sgpa"
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <Calculator className="h-4 w-4" />
                    SGPA Calculator
                </button>
                <button
                    onClick={() => setActiveTab("cgpa")}
                    className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                        activeTab === "cgpa"
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <Award className="h-4 w-4" />
                    CGPA Calculator
                </button>
                <button
                    onClick={() => setActiveTab("cgpa-pct")}
                    className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                        activeTab === "cgpa-pct"
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <ArrowRightLeft className="h-4 w-4" />
                    CGPA to %
                </button>
                <button
                    onClick={() => setActiveTab("req-marks")}
                    className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                        activeTab === "req-marks"
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <Target className="h-4 w-4" />
                    Required Marks
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Inputs area */}
                <div className="lg:col-span-7 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            
                            {/* SGPA Tab View */}
                            {activeTab === "sgpa" && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-sm text-primary uppercase">Semester Courses</h3>
                                        <Button size="sm" onClick={addSgpaCourse}>+ Add Course</Button>
                                    </div>
                                    <div className="space-y-3">
                                        {sgpaCourses.map((c, idx) => (
                                            <div key={c.id} className="grid grid-cols-12 gap-2 items-center bg-muted/20 p-2.5 rounded border border-border/5">
                                                <div className="col-span-5 text-xs font-semibold">Course #{idx + 1}</div>
                                                <div className="col-span-3">
                                                    <Select value={c.credits.toString()} onValueChange={(v) => updateSgpaCourse(c.id, "credits", v)}>
                                                        <SelectTrigger className="h-9 text-xs">
                                                            <SelectValue placeholder="Credits" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {[1, 2, 3, 4, 5, 6].map(num => (
                                                                <SelectItem key={num} value={num.toString()}>{num} Credits</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="col-span-3">
                                                    <Select value={c.grade.toString()} onValueChange={(v) => updateSgpaCourse(c.id, "grade", v)}>
                                                        <SelectTrigger className="h-9 text-xs">
                                                            <SelectValue placeholder="Grade" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="10">O / Grade A+ (10)</SelectItem>
                                                            <SelectItem value="9">A (9)</SelectItem>
                                                            <SelectItem value="8">B (8)</SelectItem>
                                                            <SelectItem value="7">C (7)</SelectItem>
                                                            <SelectItem value="6">D (6)</SelectItem>
                                                            <SelectItem value="5">E (5)</SelectItem>
                                                            <SelectItem value="4">P (4)</SelectItem>
                                                            <SelectItem value="0">F / Fail (0)</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="col-span-1 flex justify-end">
                                                    <button onClick={() => removeSgpaCourse(c.id)} className="text-red-500 hover:text-red-400 p-1">
                                                        <RefreshCw className="h-4.5 w-4.5 rotate-45" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CGPA Tab View */}
                            {activeTab === "cgpa" && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-sm text-primary uppercase">Semester SGPA Inputs</h3>
                                        <Button size="sm" onClick={addCgpaSem}>+ Add Semester</Button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        {cgpaSemesters.map((s, idx) => (
                                            <div key={s.id} className="flex items-center gap-2 bg-muted/20 p-2.5 border border-border/5 rounded">
                                                <div className="text-xs font-semibold shrink-0">Sem {idx + 1}:</div>
                                                <Input
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    max="10"
                                                    placeholder="SGPA"
                                                    value={s.sgpa}
                                                    onChange={(e) => updateCgpaSem(s.id, e.target.value)}
                                                    className="h-8 text-xs font-semibold font-mono"
                                                />
                                                <button onClick={() => removeCgpaSem(s.id)} className="text-red-500 hover:text-red-400">
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CGPA to Percentage View */}
                            {activeTab === "cgpa-pct" && (
                                <div className="space-y-4">
                                    <h3 className="font-bold text-sm text-primary uppercase">CGPA Conversion settings</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="cgpa-pct-input">Your Cumulative CGPA</Label>
                                            <Input
                                                id="cgpa-pct-input"
                                                type="number"
                                                step="0.01"
                                                value={cgpaInput}
                                                onChange={(e) => setCgpaInput(e.target.value)}
                                                className="h-10 text-base"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="factor-select">Conversion Factor Formula</Label>
                                            <Select value={factor} onValueChange={setFactor}>
                                                <SelectTrigger id="factor-select" className="h-10">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="9.5">CBSE / Standard (9.5x)</SelectItem>
                                                    <SelectItem value="10">Direct Ratio (10.0x)</SelectItem>
                                                    <SelectItem value="9.0">Custom University (9.0x)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Required Marks Tab View */}
                            {activeTab === "req-marks" && (
                                <div className="space-y-4">
                                    <h3 className="font-bold text-sm text-primary uppercase">Target Marks Settings</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="int-marks">Internals Scored</Label>
                                            <Input
                                                id="int-marks"
                                                type="number"
                                                value={internalMarks}
                                                onChange={(e) => setInternalMarks(e.target.value)}
                                                className="h-10 text-base"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="int-max">Max Internals Weight</Label>
                                            <Input
                                                id="int-max"
                                                type="number"
                                                value={internalMax}
                                                onChange={(e) => setInternalMax(e.target.value)}
                                                className="h-10 text-base"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="exam-max">Final Exam Max Marks</Label>
                                            <Input
                                                id="exam-max"
                                                type="number"
                                                value={examMax}
                                                onChange={(e) => setExamMax(e.target.value)}
                                                className="h-10 text-base"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="target-pct">Target Class Percentage (%)</Label>
                                            <Input
                                                id="target-pct"
                                                type="number"
                                                value={targetPct}
                                                onChange={(e) => setTargetPct(e.target.value)}
                                                className="h-10 text-base"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                        </CardContent>
                    </Card>
                </div>

                {/* Output Panel */}
                <div className="lg:col-span-5 space-y-6">
                    <Card className="border-2 border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl min-h-[300px] flex flex-col justify-between">
                        <CardContent className="p-6 flex-1 flex flex-col justify-center space-y-6">
                            
                            {/* SGPA Result View */}
                            {activeTab === "sgpa" && (
                                <div className="text-center space-y-4">
                                    <h4 className="text-sm uppercase font-bold text-muted-foreground">Calculated Semester SGPA</h4>
                                    <div className="text-5xl font-black font-mono text-primary">{sgpaResult}</div>
                                    <p className="text-xs text-muted-foreground">Weighted average score based on course credit weight.</p>
                                </div>
                            )}

                            {/* CGPA Result View */}
                            {activeTab === "cgpa" && (
                                <div className="text-center space-y-4">
                                    <h4 className="text-sm uppercase font-bold text-muted-foreground">Calculated Cumulative CGPA</h4>
                                    <div className="text-5xl font-black font-mono text-primary">{cgpaResult}</div>
                                    <p className="text-xs text-muted-foreground">Simple average calculated across active semesters.</p>
                                </div>
                            )}

                            {/* CGPA to Percentage Result */}
                            {activeTab === "cgpa-pct" && (
                                <div className="text-center space-y-4">
                                    <h4 className="text-sm uppercase font-bold text-muted-foreground">Equivalent Percentage Marks</h4>
                                    <div className="text-5xl font-black font-mono text-emerald-500">{percentageResult}%</div>
                                    <p className="text-xs text-muted-foreground">Formula: CGPA ({cgpaInput}) × Factor ({factor})</p>
                                </div>
                            )}

                            {/* Required Marks Result */}
                            {activeTab === "req-marks" && (
                                <div className="text-center space-y-4">
                                    <h4 className="text-sm uppercase font-bold text-muted-foreground">Marks Needed In Final Exam</h4>
                                    <div className="text-5xl font-black font-mono text-amber-500">
                                        {requiredMarksResult.marks} <span className="text-lg text-muted-foreground">/ {examMax}</span>
                                    </div>
                                    <div className="text-xs font-semibold bg-amber-500/10 py-1.5 border border-amber-500/20 text-amber-600 rounded">
                                        You need to score at least <strong>{requiredMarksResult.percent}%</strong> in the exam.
                                    </div>
                                </div>
                            )}

                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

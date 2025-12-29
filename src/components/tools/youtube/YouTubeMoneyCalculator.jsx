"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, TrendingUp, Users, PlayCircle, Info } from "lucide-react";

export default function YouTubeMoneyCalculator() {
    const [views, setViews] = useState(10000);
    const [rpm, setRpm] = useState(2.50); // Revenue per 1000 views
    const [category, setCategory] = useState("entertainment");

    // RPM ranges by category (approximate)
    const categories = {
        entertainment: { name: "Entertainment / Vlogs", min: 1.5, max: 4 },
        tech: { name: "Tech & Gadgets", min: 4, max: 12 },
        finance: { name: "Finance & Investing", min: 12, max: 35 },
        gaming: { name: "Gaming", min: 1, max: 2.5 },
        education: { name: "Education / Tutorials", min: 3, max: 8 },
        lifestyle: { name: "Lifestyle / Fashion", min: 2, max: 5 },
    };

    const calculateEarnings = (views, rpm) => {
        return (views / 1000) * rpm;
    };

    const dailyEarnings = calculateEarnings(views, rpm);
    const monthlyEarnings = dailyEarnings * 30;
    const yearlyEarnings = dailyEarnings * 365;

    const handleCategoryChange = (val) => {
        setCategory(val);
        const avgRpm = (categories[val].min + categories[val].max) / 2;
        setRpm(avgRpm);
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-4 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Input Section */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>Calculator Settings</CardTitle>
                        <CardDescription>Adjust views and category to estimate earnings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">

                        <div className="space-y-4">
                            <Label>Video Category (Niche)</Label>
                            <Select value={category} onValueChange={handleCategoryChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.entries(categories).map(([key, data]) => (
                                        <SelectItem key={key} value={key}>{data.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <p className="text-xs text-muted-foreground">
                                Different niches have different RPM aka CPM (Revenue Per Mille). Finance typically pays the most, while Gaming pays less.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label>Daily Views</Label>
                                <Input
                                    type="number"
                                    value={views}
                                    onChange={(e) => setViews(Number(e.target.value))}
                                    className="w-32 text-right"
                                />
                            </div>
                            <Slider
                                value={[views]}
                                min={100}
                                max={1000000}
                                step={100}
                                onValueChange={([v]) => setViews(v)}
                                className="py-4"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>100</span>
                                <span>1,000,000+</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label>Estimated RPM ($)</Label>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-foreground">Range: ${categories[category].min} - ${categories[category].max}</span>
                                    <Input
                                        type="number"
                                        value={rpm}
                                        onChange={(e) => setRpm(Number(e.target.value))}
                                        step={0.1}
                                        className="w-24 text-right"
                                    />
                                </div>
                            </div>
                            <Slider
                                value={[rpm]}
                                min={0.5}
                                max={50}
                                step={0.1}
                                onValueChange={([v]) => setRpm(v)}
                                className="py-4"
                            />
                        </div>

                    </CardContent>
                </Card>

                {/* Results Section */}
                <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/10 border-green-200 dark:border-green-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                                <DollarSign className="w-6 h-6" />
                                Estimated Revenue
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Daily Earnings</p>
                                    <p className="text-2xl font-bold text-foreground">${dailyEarnings.toFixed(2)}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Monthly Earnings</p>
                                    <p className="text-2xl font-bold text-foreground">${monthlyEarnings.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-green-200 dark:border-green-800/50">
                                <p className="text-sm font-medium text-muted-foreground mb-1">Yearly Earnings</p>
                                <p className="text-4xl font-extrabold text-green-700 dark:text-green-400">
                                    ${yearlyEarnings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card>
                            <CardContent className="p-6 flex items-center space-x-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full">
                                    <PlayCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Yearly Views</p>
                                    <p className="text-xl font-bold">{(views * 365).toLocaleString()}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 flex items-center space-x-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-full">
                                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Avg CPM/RPM</p>
                                    <p className="text-xl font-bold">${rpm.toFixed(2)}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="bg-muted/50 border-none shadow-none">
                        <CardContent className="p-4">
                            <div className="flex gap-2">
                                <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-muted-foreground">
                                    <strong>Note:</strong> Earnings vary significantly based on viewer location, ad engagement, video length, and time of year. This tool provides an estimate based on average industry rates.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}

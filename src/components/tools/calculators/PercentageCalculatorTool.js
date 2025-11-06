'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PercentageCalculatorTool() {
    const [basicCalc, setBasicCalc] = useState({ value: '', percentage: '', result: '' });
    const [increaseCalc, setIncreaseCalc] = useState({ oldValue: '', newValue: '', result: '' });
    const [findPercentCalc, setFindPercentCalc] = useState({ part: '', whole: '', result: '' });

    const calculateBasicPercentage = () => {
        const value = parseFloat(basicCalc.value);
        const percentage = parseFloat(basicCalc.percentage);

        if (!isNaN(value) && !isNaN(percentage)) {
            const result = (value * percentage) / 100;
            setBasicCalc(prev => ({ ...prev, result: result.toFixed(2) }));
        }
    };

    const calculatePercentageChange = () => {
        const oldValue = parseFloat(increaseCalc.oldValue);
        const newValue = parseFloat(increaseCalc.newValue);

        if (!isNaN(oldValue) && !isNaN(newValue) && oldValue !== 0) {
            const change = ((newValue - oldValue) / oldValue) * 100;
            const changeType = change >= 0 ? 'increase' : 'decrease';
            setIncreaseCalc(prev => ({
                ...prev,
                result: `${Math.abs(change).toFixed(2)}% ${changeType}`
            }));
        }
    };

    const calculateWhatPercent = () => {
        const part = parseFloat(findPercentCalc.part);
        const whole = parseFloat(findPercentCalc.whole);

        if (!isNaN(part) && !isNaN(whole) && whole !== 0) {
            const percentage = (part / whole) * 100;
            setFindPercentCalc(prev => ({ ...prev, result: `${percentage.toFixed(2)}%` }));
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basic">What is X% of Y?</TabsTrigger>
                    <TabsTrigger value="change">Percentage Change</TabsTrigger>
                    <TabsTrigger value="find">What % is X of Y?</TabsTrigger>
                </TabsList>

                <TabsContent value="basic">
                    <Card>
                        <CardHeader>
                            <CardTitle>Calculate X% of Y</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                                <div>
                                    <Label htmlFor="percentage">Percentage (%)</Label>
                                    <Input
                                        id="percentage"
                                        type="number"
                                        placeholder="25"
                                        value={basicCalc.percentage}
                                        onChange={(e) => setBasicCalc(prev => ({ ...prev, percentage: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="value">Of Value</Label>
                                    <Input
                                        id="value"
                                        type="number"
                                        placeholder="200"
                                        value={basicCalc.value}
                                        onChange={(e) => setBasicCalc(prev => ({ ...prev, value: e.target.value }))}
                                    />
                                </div>
                                <Button onClick={calculateBasicPercentage} className="w-full">
                                    Calculate
                                </Button>
                            </div>

                            {basicCalc.result && (
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Result:</p>
                                            <p className="text-2xl font-bold text-primary">{basicCalc.result}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {basicCalc.percentage}% of {basicCalc.value} = {basicCalc.result}
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => copyToClipboard(basicCalc.result)}
                                        >
                                            Copy
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="change">
                    <Card>
                        <CardHeader>
                            <CardTitle>Percentage Increase/Decrease</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                                <div>
                                    <Label htmlFor="oldValue">Original Value</Label>
                                    <Input
                                        id="oldValue"
                                        type="number"
                                        placeholder="100"
                                        value={increaseCalc.oldValue}
                                        onChange={(e) => setIncreaseCalc(prev => ({ ...prev, oldValue: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="newValue">New Value</Label>
                                    <Input
                                        id="newValue"
                                        type="number"
                                        placeholder="120"
                                        value={increaseCalc.newValue}
                                        onChange={(e) => setIncreaseCalc(prev => ({ ...prev, newValue: e.target.value }))}
                                    />
                                </div>
                                <Button onClick={calculatePercentageChange} className="w-full">
                                    Calculate
                                </Button>
                            </div>

                            {increaseCalc.result && (
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Result:</p>
                                            <p className="text-2xl font-bold text-primary">{increaseCalc.result}</p>
                                            <p className="text-sm text-muted-foreground">
                                                From {increaseCalc.oldValue} to {increaseCalc.newValue}
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => copyToClipboard(increaseCalc.result)}
                                        >
                                            Copy
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="find">
                    <Card>
                        <CardHeader>
                            <CardTitle>What Percentage is X of Y?</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                                <div>
                                    <Label htmlFor="part">Part (X)</Label>
                                    <Input
                                        id="part"
                                        type="number"
                                        placeholder="25"
                                        value={findPercentCalc.part}
                                        onChange={(e) => setFindPercentCalc(prev => ({ ...prev, part: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="whole">Whole (Y)</Label>
                                    <Input
                                        id="whole"
                                        type="number"
                                        placeholder="100"
                                        value={findPercentCalc.whole}
                                        onChange={(e) => setFindPercentCalc(prev => ({ ...prev, whole: e.target.value }))}
                                    />
                                </div>
                                <Button onClick={calculateWhatPercent} className="w-full">
                                    Calculate
                                </Button>
                            </div>

                            {findPercentCalc.result && (
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Result:</p>
                                            <p className="text-2xl font-bold text-primary">{findPercentCalc.result}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {findPercentCalc.part} is {findPercentCalc.result} of {findPercentCalc.whole}
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => copyToClipboard(findPercentCalc.result)}
                                        >
                                            Copy
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Quick Examples */}
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Quick Examples</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="p-3 bg-gray-50 rounded">
                            <p className="font-medium">25% of 200</p>
                            <p className="text-muted-foreground">= 50</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                            <p className="font-medium">From 100 to 120</p>
                            <p className="text-muted-foreground">= 20% increase</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                            <p className="font-medium">25 of 100</p>
                            <p className="text-muted-foreground">= 25%</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
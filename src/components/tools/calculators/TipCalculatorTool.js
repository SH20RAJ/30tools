'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export default function TipCalculatorTool() {
    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState([18]);
    const [numberOfPeople, setNumberOfPeople] = useState('1');
    const [result, setResult] = useState(null);

    const calculateTip = () => {
        const bill = parseFloat(billAmount);
        const tip = tipPercentage[0];
        const people = parseInt(numberOfPeople) || 1;

        if (bill > 0) {
            const tipAmount = (bill * tip) / 100;
            const totalAmount = bill + tipAmount;
            const perPerson = totalAmount / people;
            const tipPerPerson = tipAmount / people;

            setResult({
                tipAmount: tipAmount.toFixed(2),
                totalAmount: totalAmount.toFixed(2),
                perPerson: perPerson.toFixed(2),
                tipPerPerson: tipPerPerson.toFixed(2),
                billPerPerson: (bill / people).toFixed(2)
            });
        }
    };

    const setQuickTip = (percentage) => {
        setTipPercentage([percentage]);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Tip Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Bill Amount */}
                    <div>
                        <Label htmlFor="billAmount">Bill Amount ($)</Label>
                        <Input
                            id="billAmount"
                            type="number"
                            step="0.01"
                            placeholder="50.00"
                            value={billAmount}
                            onChange={(e) => setBillAmount(e.target.value)}
                            className="text-lg"
                        />
                    </div>

                    {/* Tip Percentage */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <Label>Tip Percentage</Label>
                            <span className="text-lg font-semibold">{tipPercentage[0]}%</span>
                        </div>
                        <Slider
                            value={tipPercentage}
                            onValueChange={setTipPercentage}
                            max={30}
                            min={0}
                            step={1}
                            className="mb-4"
                        />

                        {/* Quick Tip Buttons */}
                        <div className="flex gap-2 flex-wrap">
                            {[10, 15, 18, 20, 25].map((percent) => (
                                <Button
                                    key={percent}
                                    variant={tipPercentage[0] === percent ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setQuickTip(percent)}
                                >
                                    {percent}%
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Number of People */}
                    <div>
                        <Label htmlFor="numberOfPeople">Number of People</Label>
                        <Input
                            id="numberOfPeople"
                            type="number"
                            min="1"
                            placeholder="1"
                            value={numberOfPeople}
                            onChange={(e) => setNumberOfPeople(e.target.value)}
                        />
                    </div>

                    <Button onClick={calculateTip} className="w-full" size="lg">
                        Calculate Tip
                    </Button>

                    {result && (
                        <div className="space-y-4">
                            {/* Main Results */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-muted/50 rounded-lg text-center">
                                    <p className="text-sm text-muted-foreground">Tip Amount</p>
                                    <p className="text-2xl font-bold text-primary">${result.tipAmount}</p>
                                </div>
                                <div className="p-4 bg-muted/50 rounded-lg text-center">
                                    <p className="text-sm text-muted-foreground">Total Amount</p>
                                    <p className="text-2xl font-bold text-primary">${result.totalAmount}</p>
                                </div>
                            </div>

                            {/* Per Person Breakdown */}
                            {parseInt(numberOfPeople) > 1 && (
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <h3 className="font-medium mb-3 text-center">Per Person ({numberOfPeople} people)</h3>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <p className="text-xs text-muted-foreground">Bill</p>
                                            <p className="font-semibold">${result.billPerPerson}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Tip</p>
                                            <p className="font-semibold">${result.tipPerPerson}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Total</p>
                                            <p className="font-bold text-lg">${result.perPerson}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Summary */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-medium mb-2">Summary</h3>
                                <div className="space-y-1 text-sm">
                                    <div className="flex justify-between">
                                        <span>Bill Amount:</span>
                                        <span>${billAmount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tip ({tipPercentage[0]}%):</span>
                                        <span>${result.tipAmount}</span>
                                    </div>
                                    <div className="flex justify-between font-semibold border-t pt-1">
                                        <span>Total:</span>
                                        <span>${result.totalAmount}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Copy Button */}
                            <div className="text-center">
                                <Button
                                    variant="outline"
                                    onClick={() => navigator.clipboard.writeText(`Bill: $${billAmount}, Tip: $${result.tipAmount} (${tipPercentage[0]}%), Total: $${result.totalAmount}`)}
                                >
                                    Copy Summary
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Service Quality Guide */}
                    <div className="p-4 bg-muted/50 rounded-lg">
                        <h3 className="font-medium mb-2">💡 Service Quality Guide</h3>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>
                                <span className="font-medium">Excellent (20-25%):</span>
                                <p className="text-muted-foreground">Outstanding service, went above and beyond</p>
                            </div>
                            <div>
                                <span className="font-medium">Good (18-20%):</span>
                                <p className="text-muted-foreground">Attentive, friendly, professional service</p>
                            </div>
                            <div>
                                <span className="font-medium">Average (15-18%):</span>
                                <p className="text-muted-foreground">Standard service, no major issues</p>
                            </div>
                            <div>
                                <span className="font-medium">Poor (10-15%):</span>
                                <p className="text-muted-foreground">Below expectations, service issues</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
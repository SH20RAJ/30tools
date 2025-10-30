'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function MortgageCalculatorTool() {
    const [homePrice, setHomePrice] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [loanTerm, setLoanTerm] = useState('30');
    const [interestRate, setInterestRate] = useState('');
    const [propertyTax, setPropertyTax] = useState('');
    const [insurance, setInsurance] = useState('');
    const [pmi, setPmi] = useState('');
    const [result, setResult] = useState(null);

    const calculateMortgage = () => {
        const price = parseFloat(homePrice);
        const down = parseFloat(downPayment) || 0;
        const rate = parseFloat(interestRate) / 100 / 12;
        const months = parseFloat(loanTerm) * 12;
        const loanAmount = price - down;

        if (price > 0 && rate > 0 && months > 0) {
            const monthlyPayment = (loanAmount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
            const totalInterest = (monthlyPayment * months) - loanAmount;
            const monthlyTax = parseFloat(propertyTax) / 12 || 0;
            const monthlyInsurance = parseFloat(insurance) / 12 || 0;
            const monthlyPMI = parseFloat(pmi) / 12 || 0;
            const totalMonthly = monthlyPayment + monthlyTax + monthlyInsurance + monthlyPMI;

            setResult({
                monthlyPayment: monthlyPayment.toFixed(2),
                totalMonthly: totalMonthly.toFixed(2),
                totalInterest: totalInterest.toFixed(2),
                loanAmount: loanAmount.toFixed(2),
                downPaymentPercent: ((down / price) * 100).toFixed(1)
            });
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Mortgage Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column - Basic Info */}
                        <div className="space-y-4">
                            <h3 className="font-medium text-lg">Loan Details</h3>

                            <div>
                                <Label htmlFor="homePrice">Home Price ($)</Label>
                                <Input
                                    id="homePrice"
                                    type="number"
                                    placeholder="400000"
                                    value={homePrice}
                                    onChange={(e) => setHomePrice(e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="downPayment">Down Payment ($)</Label>
                                <Input
                                    id="downPayment"
                                    type="number"
                                    placeholder="80000"
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="loanTerm">Loan Term (years)</Label>
                                <Input
                                    id="loanTerm"
                                    type="number"
                                    placeholder="30"
                                    value={loanTerm}
                                    onChange={(e) => setLoanTerm(e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                                <Input
                                    id="interestRate"
                                    type="number"
                                    step="0.01"
                                    placeholder="6.5"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Right Column - Additional Costs */}
                        <div className="space-y-4">
                            <h3 className="font-medium text-lg">Additional Costs (Annual)</h3>

                            <div>
                                <Label htmlFor="propertyTax">Property Tax ($)</Label>
                                <Input
                                    id="propertyTax"
                                    type="number"
                                    placeholder="5000"
                                    value={propertyTax}
                                    onChange={(e) => setPropertyTax(e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="insurance">Home Insurance ($)</Label>
                                <Input
                                    id="insurance"
                                    type="number"
                                    placeholder="1200"
                                    value={insurance}
                                    onChange={(e) => setInsurance(e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="pmi">PMI ($)</Label>
                                <Input
                                    id="pmi"
                                    type="number"
                                    placeholder="200"
                                    value={pmi}
                                    onChange={(e) => setPmi(e.target.value)}
                                />
                                <p className="text-xs text-muted-foreground mt-1">
                                    Required if down payment is less than 20%
                                </p>
                            </div>
                        </div>
                    </div>

                    <Button onClick={calculateMortgage} className="w-full" size="lg">
                        Calculate Monthly Payment
                    </Button>

                    {result && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h3 className="font-medium mb-2">Monthly Payment Breakdown</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Principal & Interest:</span>
                                        <span className="font-medium">${result.monthlyPayment}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Total Monthly Payment:</span>
                                        <span className="font-bold text-lg">${result.totalMonthly}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg">
                                <h3 className="font-medium mb-2">Loan Summary</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Loan Amount:</span>
                                        <span className="font-medium">${result.loanAmount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Total Interest:</span>
                                        <span className="font-medium">${result.totalInterest}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Down Payment:</span>
                                        <span className="font-medium">{result.downPaymentPercent}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
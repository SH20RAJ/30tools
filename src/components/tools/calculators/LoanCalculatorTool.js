'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function LoanCalculatorTool() {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [loanType, setLoanType] = useState('personal');
    const [result, setResult] = useState(null);

    const calculateLoan = () => {
        const principal = parseFloat(loanAmount);
        const rate = parseFloat(interestRate) / 100 / 12;
        const months = parseFloat(loanTerm) * 12;

        if (principal > 0 && rate > 0 && months > 0) {
            const monthlyPayment = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
            const totalPayment = monthlyPayment * months;
            const totalInterest = totalPayment - principal;

            setResult({
                monthlyPayment: monthlyPayment.toFixed(2),
                totalPayment: totalPayment.toFixed(2),
                totalInterest: totalInterest.toFixed(2),
                principal: principal.toFixed(2)
            });
        }
    };

    const getLoanTypeInfo = (type) => {
        const info = {
            personal: {
                name: 'Personal Loan',
                description: 'Unsecured loan for personal expenses',
                typicalRate: '6% - 36%'
            },
            auto: {
                name: 'Auto Loan',
                description: 'Secured loan for vehicle purchase',
                typicalRate: '3% - 12%'
            },
            business: {
                name: 'Business Loan',
                description: 'Loan for business purposes',
                typicalRate: '4% - 25%'
            }
        };
        return info[type] || info.personal;
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Loan Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Loan Type Selection */}
                    <div>
                        <Label htmlFor="loanType">Loan Type</Label>
                        <Select value={loanType} onValueChange={setLoanType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select loan type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="personal">Personal Loan</SelectItem>
                                <SelectItem value="auto">Auto Loan</SelectItem>
                                <SelectItem value="business">Business Loan</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm font-medium">{getLoanTypeInfo(loanType).name}</p>
                            <p className="text-xs text-muted-foreground">{getLoanTypeInfo(loanType).description}</p>
                            <p className="text-xs text-muted-foreground">Typical rates: {getLoanTypeInfo(loanType).typicalRate}</p>
                        </div>
                    </div>

                    {/* Loan Details */}
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <Label htmlFor="loanAmount">Loan Amount ($)</Label>
                            <Input
                                id="loanAmount"
                                type="number"
                                placeholder="25000"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                            />
                        </div>

                        <div>
                            <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
                            <Input
                                id="interestRate"
                                type="number"
                                step="0.01"
                                placeholder="8.5"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                            />
                        </div>

                        <div>
                            <Label htmlFor="loanTerm">Loan Term (years)</Label>
                            <Input
                                id="loanTerm"
                                type="number"
                                placeholder="5"
                                value={loanTerm}
                                onChange={(e) => setLoanTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <Button onClick={calculateLoan} className="w-full" size="lg">
                        Calculate Loan Payment
                    </Button>

                    {result && (
                        <div className="space-y-4">
                            {/* Main Result */}
                            <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg text-center">
                                <p className="text-sm text-muted-foreground">Monthly Payment</p>
                                <p className="text-4xl font-bold text-gray-800">${result.monthlyPayment}</p>
                            </div>

                            {/* Detailed Breakdown */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="font-medium mb-3">Payment Summary</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Loan Amount:</span>
                                            <span className="font-medium">${result.principal}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Interest:</span>
                                            <span className="font-medium">${result.totalInterest}</span>
                                        </div>
                                        <div className="flex justify-between border-t pt-2">
                                            <span>Total Payment:</span>
                                            <span className="font-bold">${result.totalPayment}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h3 className="font-medium mb-3">Loan Details</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Loan Type:</span>
                                            <span className="font-medium">{getLoanTypeInfo(loanType).name}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Interest Rate:</span>
                                            <span className="font-medium">{interestRate}%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Loan Term:</span>
                                            <span className="font-medium">{loanTerm} years</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Copy Button */}
                            <div className="text-center">
                                <Button
                                    variant="outline"
                                    onClick={() => navigator.clipboard.writeText(`Monthly Payment: $${result.monthlyPayment}`)}
                                >
                                    Copy Result
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Tips */}
                    <div className="p-4 bg-yellow-50 rounded-lg">
                        <h3 className="font-medium mb-2">💡 Loan Tips</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Shop around with multiple lenders for the best rates</li>
                            <li>• Consider shorter terms to save on total interest</li>
                            <li>• Make extra payments toward principal when possible</li>
                            <li>• Check for prepayment penalties before paying early</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
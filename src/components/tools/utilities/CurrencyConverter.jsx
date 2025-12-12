"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowRightLeft, RefreshCw, Coins } from "lucide-react";

export default function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [result, setResult] = useState(null);

    // Mock rates (In a real app, these would come from an API)
    const rates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 151.5,
        AUD: 1.52,
        CAD: 1.36,
        CHF: 0.90,
        CNY: 7.23,
        INR: 83.4,
    };

    const currencies = Object.keys(rates);

    const calculate = () => {
        const rate = rates[toCurrency] / rates[fromCurrency];
        setResult((amount * rate).toFixed(2));
    };

    useEffect(() => {
        calculate();
    }, [amount, fromCurrency, toCurrency]);

    const swap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Coins className="w-6 h-6 text-primary" />
                        Converter
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <label className="text-sm font-medium mb-1.5 block">Amount</label>
                        <Input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="text-lg h-12"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="w-full">
                            <label className="text-sm font-medium mb-1.5 block">From</label>
                            <Select value={fromCurrency} onValueChange={setFromCurrency}>
                                <SelectTrigger className="h-12">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {currencies.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button size="icon" variant="ghost" className="rounded-full mt-6" onClick={swap}>
                            <ArrowRightLeft className="w-5 h-5" />
                        </Button>

                        <div className="w-full">
                            <label className="text-sm font-medium mb-1.5 block">To</label>
                            <Select value={toCurrency} onValueChange={setToCurrency}>
                                <SelectTrigger className="h-12">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {currencies.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="pt-6 border-t text-center">
                        <div className="text-sm text-muted-foreground mb-1">
                            {amount} {fromCurrency} =
                        </div>
                        <div className="text-4xl font-bold text-primary">
                            {result} {toCurrency}
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                            * Rates are simulated for demo purposes.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

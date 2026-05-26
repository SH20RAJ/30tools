"use client";

import React, { useState, useMemo } from "react";
import { FileText, Printer, Shield, Trash2, Plus, RefreshCw, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function RentReceiptGenerator() {
    const [tenantName, setTenantName] = useState("John Doe");
    const [landlordName, setLandlordName] = useState("Jane Smith");
    const [monthlyRent, setMonthlyRent] = useState("15000");
    const [propertyAddress, setPropertyAddress] = useState("Flat 101, Green Heights, Sector 62");
    const [city, setCity] = useState("Noida, Uttar Pradesh");
    const [landlordPan, setLandlordPan] = useState("ABCDE1234F");
    
    // Receipt Period
    const [startDate, setStartDate] = useState("2025-04-01");
    const [endDate, setEndDate] = useState("2026-03-31");
    const [frequency, setFrequency] = useState("monthly"); // "monthly", "quarterly", "yearly"

    // Helper: Number to Words (Indian Format)
    const numberToWords = (num) => {
        const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
        const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        
        let n = parseInt(num) || 0;
        if (n === 0) return 'Zero';
        
        const g = (n) => {
            let str = '';
            if (n > 99) {
                str += a[Math.floor(n / 100)] + 'Hundred ';
                n %= 100;
            }
            if (n > 19) {
                str += b[Math.floor(n / 10)] + ' ' + a[n % 10];
            } else {
                str += a[n];
            }
            return str;
        };

        let str = '';
        if (n > 9999999) {
            str += g(Math.floor(n / 10000000)) + 'Crore ';
            n %= 10000000;
        }
        if (n > 99999) {
            str += g(Math.floor(n / 100000)) + 'Lakh ';
            n %= 100000;
        }
        if (n > 999) {
            str += g(Math.floor(n / 1000)) + 'Thousand ';
            n %= 1000;
        }
        str += g(n);
        return str.trim() + ' Only';
    };

    // Generate list of receipts based on start/end date and frequency
    const receiptsList = useMemo(() => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const rent = parseFloat(monthlyRent) || 0;
        
        if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
            return [];
        }

        const list = [];
        let current = new Date(start);
        let receiptCounter = 1;

        const monthNames = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];

        while (current <= end) {
            let periodText = "";
            let amount = rent;
            
            if (frequency === "monthly") {
                const month = current.toLocaleString('default', { month: 'long' });
                const year = current.getFullYear();
                periodText = `${month} ${year}`;
                
                // Add receipt item
                list.push({
                    id: receiptCounter++,
                    period: periodText,
                    amount: amount,
                    amountWords: numberToWords(amount),
                    date: new Date(current.getFullYear(), current.getMonth() + 1, 0).toISOString().split('T')[0] // Last day of month
                });
                
                // Advance 1 month
                current.setMonth(current.getMonth() + 1);
            } else if (frequency === "quarterly") {
                const monthStart = current.toLocaleString('default', { month: 'short' });
                const yearStart = current.getFullYear();
                
                // Advance 3 months
                current.setMonth(current.getMonth() + 3);
                
                let nextMonthIndex = current.getMonth() - 1;
                if (nextMonthIndex < 0) nextMonthIndex = 11;
                const tempDate = new Date(current);
                tempDate.setDate(0); // Last day of previous month
                
                const monthEnd = tempDate.toLocaleString('default', { month: 'short' });
                const yearEnd = tempDate.getFullYear();
                
                periodText = `${monthStart} ${yearStart} to ${monthEnd} ${yearEnd}`;
                amount = rent * 3;
                
                list.push({
                    id: receiptCounter++,
                    period: periodText,
                    amount: amount,
                    amountWords: numberToWords(amount),
                    date: tempDate.toISOString().split('T')[0]
                });
            } else {
                // Yearly
                periodText = `FY ${current.getFullYear()}-${(current.getFullYear() + 1).toString().slice(-2)}`;
                amount = rent * 12;
                
                list.push({
                    id: receiptCounter++,
                    period: periodText,
                    amount: amount,
                    amountWords: numberToWords(amount),
                    date: new Date(current.getFullYear() + 1, 2, 31).toISOString().split('T')[0] // 31st March next year
                });
                
                current.setFullYear(current.getFullYear() + 1);
            }
        }

        return list;
    }, [tenantName, landlordName, monthlyRent, startDate, endDate, frequency]);

    const handlePrint = () => {
        if (receiptsList.length === 0) {
            toast.error("Please fill in valid dates first.");
            return;
        }
        window.print();
    };

    const handleClear = () => {
        setTenantName("");
        setLandlordName("");
        setMonthlyRent("");
        setPropertyAddress("");
        setCity("");
        setLandlordPan("");
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
            {/* Printable Styling Override */}
            <style dangerouslySetInnerHTML={{__html: `
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .print-area, .print-area * {
                        visibility: visible;
                    }
                    .print-area {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                    }
                    .no-print {
                        display: none !important;
                    }
                    .receipt-card {
                        page-break-inside: avoid;
                        margin-bottom: 2rem;
                        border: 1px solid #000 !important;
                        box-shadow: none !important;
                        background: #fff !important;
                        color: #000 !important;
                    }
                }
            `}} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 no-print">
                
                {/* Control Panel */}
                <div className="lg:col-span-6 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            <div className="flex items-center gap-2 mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                                <Sparkles className="h-5 w-5" />
                                <span>Receipt Information</span>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="tenant">Tenant Name</Label>
                                        <Input id="tenant" value={tenantName} onChange={e => setTenantName(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="landlord">Landlord Name</Label>
                                        <Input id="landlord" value={landlordName} onChange={e => setLandlordName(e.target.value)} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="rent">Monthly Rent (₹)</Label>
                                        <Input id="rent" type="number" value={monthlyRent} onChange={e => setMonthlyRent(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="landlord-pan">Landlord PAN (Optional)</Label>
                                        <Input id="landlord-pan" placeholder="E.g. ABCDE1234F" value={landlordPan} onChange={e => setLandlordPan(e.target.value.toUpperCase())} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address">Property Address</Label>
                                    <Input id="address" placeholder="E.g. Flat No, Building Name" value={propertyAddress} onChange={e => setPropertyAddress(e.target.value)} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="city">City & State</Label>
                                    <Input id="city" placeholder="E.g. New Delhi, Delhi" value={city} onChange={e => setCity(e.target.value)} />
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="start-date">Start Date</Label>
                                        <Input id="start-date" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="end-date">End Date</Label>
                                        <Input id="end-date" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="freq">Frequency</Label>
                                        <Select value={frequency} onValueChange={setFrequency}>
                                            <SelectTrigger id="freq">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="monthly">Monthly</SelectItem>
                                                <SelectItem value="quarterly">Quarterly</SelectItem>
                                                <SelectItem value="yearly">Yearly</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <Button variant="outline" className="w-1/2" onClick={handleClear}>
                                        <Trash2 className="h-4 w-4 mr-2" /> Reset Form
                                    </Button>
                                    <Button className="w-1/2" onClick={handlePrint}>
                                        <Printer className="h-4 w-4 mr-2" /> Print Receipts
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Live Preview Panel */}
                <div className="lg:col-span-6 space-y-6">
                    <Card className="border-2 border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl min-h-[300px] flex flex-col">
                        <CardContent className="p-6 flex-1 flex flex-col justify-between">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold border-b border-border/20 pb-2 text-center flex items-center justify-center gap-2">
                                    <FileText className="h-5 w-5 text-primary" />
                                    <span>Interactive Preview</span>
                                </h3>
                                <p className="text-xs text-muted-foreground text-center">
                                    Preview is showing the first generated receipt. Press "Print Receipts" to trigger print dialog for all {receiptsList.length} receipts.
                                </p>
                                
                                {receiptsList.length === 0 ? (
                                    <div className="h-64 flex flex-col items-center justify-center border border-dashed border-border/40 rounded bg-muted/5">
                                        <FileText className="h-10 w-10 text-muted-foreground/40 mb-2" />
                                        <p className="text-xs text-muted-foreground">Fill in the fields to generate preview.</p>
                                    </div>
                                ) : (
                                    <div className="border border-primary/20 p-6 rounded bg-white text-black shadow-inner font-serif text-[11px] space-y-4 relative overflow-hidden max-h-[350px]">
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <div className="font-bold text-sm uppercase tracking-wider">Rent Receipt</div>
                                            <div className="text-[10px] font-mono">Receipt No: #{receiptsList[0].id}</div>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div>Date: <strong>{receiptsList[0].date}</strong></div>
                                            <div>Amount: <strong>₹ {receiptsList[0].amount}</strong></div>
                                        </div>

                                        <p className="leading-relaxed">
                                            Received sum of <strong>₹ {receiptsList[0].amount}</strong> ({receiptsList[0].amountWords}) 
                                            from Mr./Ms. <strong>{tenantName}</strong> towards the rent of residential property at 
                                            <strong> {propertyAddress}, {city}</strong> for the period of <strong>{receiptsList[0].period}</strong>.
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 pt-4">
                                            <div className="space-y-1">
                                                {landlordPan && <div>Landlord PAN: <strong>{landlordPan}</strong></div>}
                                                <div>Landlord: <strong>{landlordName}</strong></div>
                                            </div>
                                            
                                            <div className="flex justify-end items-end relative h-16">
                                                {/* Revenue stamp mock */}
                                                <div className="border-2 border-dashed border-red-400 bg-red-50 text-[8px] text-red-500 font-sans p-2 text-center absolute right-32 bottom-0 w-14 h-14 flex items-center justify-center rotate-6 select-none leading-none">
                                                    Revenue Stamp
                                                </div>
                                                <div className="border-t border-black text-center pt-1 w-28 text-[9px]">
                                                    Authorized Signature
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="pt-4 border-t border-border/20 text-[10px] text-muted-foreground flex items-center justify-between no-print mt-4">
                                <span className="flex items-center gap-1">
                                    <Shield className="h-3.5 w-3.5 text-emerald-500" />
                                    HRA-compliant format
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>

            {/* Print Output Zone (Hidden on Web Screen via @media print) */}
            <div className="print-area hidden space-y-8 p-4">
                {receiptsList.map((r) => (
                    <div key={r.id} className="receipt-card border border-black p-6 bg-white text-black font-serif text-xs space-y-4 max-w-3xl mx-auto rounded shadow-sm">
                        <div className="flex justify-between items-center border-b pb-2">
                            <div className="font-bold text-sm uppercase tracking-wider">Rent Receipt</div>
                            <div className="text-[10px] font-mono">Receipt No: #{r.id}</div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>Date: <strong>{r.date}</strong></div>
                            <div>Amount: <strong>₹ {r.amount}</strong></div>
                        </div>

                        <p className="leading-relaxed">
                            Received sum of <strong>₹ {r.amount}</strong> ({r.amountWords}) 
                            from Mr./Ms. <strong>{tenantName}</strong> towards the rent of residential property at 
                            <strong> {propertyAddress}, {city}</strong> for the period of <strong>{r.period}</strong>.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="space-y-1">
                                {landlordPan && <div>Landlord PAN: <strong>{landlordPan}</strong></div>}
                                <div>Landlord: <strong>{landlordName}</strong></div>
                            </div>
                            
                            <div className="flex justify-end items-end relative h-16">
                                {/* Revenue Stamp */}
                                {r.amount >= 5000 && (
                                    <div className="border-2 border-dashed border-red-400 bg-red-50 text-[8px] text-red-500 font-sans p-2 text-center absolute right-36 bottom-0 w-14 h-14 flex items-center justify-center rotate-6 select-none leading-none">
                                        Revenue Stamp
                                    </div>
                                )}
                                <div className="border-t border-black text-center pt-1 w-32 text-[10px]">
                                    Authorized Signature
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

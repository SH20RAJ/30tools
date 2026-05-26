"use client";

import React, { useState, useMemo, useRef } from "react";
import { FileText, Printer, Plus, Trash2, Shield, RefreshCw, Upload, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function InvoiceGenerator() {
    const [businessName, setBusinessName] = useState("Your Business Name");
    const [businessAddress, setBusinessAddress] = useState("123 Business Road, Suite 100\nCity, State, ZIP");
    const [businessEmail, setBusinessEmail] = useState("contact@business.com");
    const [businessPhone, setBusinessPhone] = useState("+1 (555) 019-2834");
    
    const [clientName, setClientName] = useState("Client Company Name");
    const [clientAddress, setClientAddress] = useState("456 Client Avenue\nCity, State, ZIP");
    const [clientEmail, setClientEmail] = useState("billing@client.com");
    
    const [invoiceNumber, setInvoiceNumber] = useState("INV-2026-001");
    const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
    const [dueDate, setDueDate] = useState(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
    
    const [items, setItems] = useState([
        { id: 1, description: "Consulting Services", quantity: 10, rate: 150, taxRate: 18 },
        { id: 2, description: "Web Development Support", quantity: 1, rate: 1200, taxRate: 18 }
    ]);
    
    const [discount, setDiscount] = useState("100"); // Flat discount in currency
    const [taxEnabled, setTaxEnabled] = useState(true);
    const [currency, setCurrency] = useState("INR"); // INR, USD, EUR, etc.
    const [notes, setNotes] = useState("Thank you for your business!");
    const [bankDetails, setBankDetails] = useState("Bank Name: State Bank\nAccount: 1234567890\nIFSC: SBIN0001234");
    
    const logoInputRef = useRef(null);
    const [logoUrl, setLogoUrl] = useState("");

    const currencySymbol = useMemo(() => {
        switch(currency) {
            case "USD": return "$";
            case "EUR": return "€";
            case "GBP": return "£";
            default: return "₹";
        }
    }, [currency]);

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setLogoUrl(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeLogo = () => {
        setLogoUrl("");
        if (logoInputRef.current) {
            logoInputRef.current.value = "";
        }
    };

    const addItem = () => {
        const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
        setItems([...items, { id: newId, description: "New Item", quantity: 1, rate: 0, taxRate: 18 }]);
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const updateItem = (id, field, value) => {
        setItems(items.map(item => {
            if (item.id === id) {
                return { ...item, [field]: value };
            }
            return item;
        }));
    };

    const calculations = useMemo(() => {
        let subtotal = 0;
        let taxTotal = 0;

        items.forEach(item => {
            const qty = parseFloat(item.quantity) || 0;
            const rate = parseFloat(item.rate) || 0;
            const itemTotal = qty * rate;
            subtotal += itemTotal;

            if (taxEnabled) {
                const taxRate = parseFloat(item.taxRate) || 0;
                taxTotal += (itemTotal * taxRate) / 100;
            }
        });

        const flatDiscount = parseFloat(discount) || 0;
        const total = Math.max(0, subtotal + taxTotal - flatDiscount);

        return {
            subtotal: subtotal.toFixed(2),
            taxTotal: taxTotal.toFixed(2),
            discount: flatDiscount.toFixed(2),
            total: total.toFixed(2)
        };
    }, [items, discount, taxEnabled]);

    const handlePrint = () => {
        window.print();
    };

    const resetInvoice = () => {
        setItems([{ id: 1, description: "Consulting Services", quantity: 10, rate: 150, taxRate: 18 }]);
        setDiscount("0");
        setNotes("Thank you for your business!");
        toast.success("Invoice builder reset.");
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto font-sans">
            {/* Top Command Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/20 pb-4 no-print">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <FileText className="h-5 w-5 text-emerald-500" />
                        Professional Invoice Generator
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">
                        Build invoice layouts dynamically, configure calculations, and print or save as PDF.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={resetInvoice}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Reset
                    </Button>
                    <Button variant="default" size="sm" onClick={handlePrint} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Printer className="h-4 w-4 mr-2" />
                        Print / Save as PDF
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Editor Panel */}
                <div className="lg:col-span-5 space-y-6 no-print">
                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-emerald-500">Business Details</h3>
                            
                            <div className="space-y-2">
                                <Label htmlFor="biz-name">Business Name</Label>
                                <Input id="biz-name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="biz-email">Email</Label>
                                    <Input id="biz-email" type="email" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="biz-phone">Phone</Label>
                                    <Input id="biz-phone" value={businessPhone} onChange={(e) => setBusinessPhone(e.target.value)} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="biz-address">Address</Label>
                                <textarea
                                    id="biz-address"
                                    className="w-full h-20 p-2.5 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
                                    value={businessAddress}
                                    onChange={(e) => setBusinessAddress(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Business Logo</Label>
                                <div className="flex items-center gap-3">
                                    <input
                                        ref={logoInputRef}
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleLogoUpload}
                                    />
                                    <Button variant="outline" size="sm" onClick={() => logoInputRef.current.click()}>
                                        <Upload className="h-4 w-4 mr-2" />
                                        Upload Logo
                                    </Button>
                                    {logoUrl && (
                                        <Button variant="ghost" size="sm" className="text-red-400" onClick={removeLogo}>
                                            Remove
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-emerald-500">Client Details</h3>
                            
                            <div className="space-y-2">
                                <Label htmlFor="client-name">Client Company / Name</Label>
                                <Input id="client-name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="client-email">Client Email</Label>
                                <Input id="client-email" type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="client-address">Address</Label>
                                <textarea
                                    id="client-address"
                                    className="w-full h-20 p-2.5 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
                                    value={clientAddress}
                                    onChange={(e) => setClientAddress(e.target.value)}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-emerald-500">Invoice Settings</h3>
                            
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="inv-no">Invoice Number</Label>
                                    <Input id="inv-no" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label>Currency</Label>
                                    <select
                                        className="w-full p-2 rounded-lg border border-border/40 bg-background text-sm"
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                    >
                                        <option value="INR">INR (₹)</option>
                                        <option value="USD">USD ($)</option>
                                        <option value="EUR">EUR (€)</option>
                                        <option value="GBP">GBP (£)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="inv-date">Invoice Date</Label>
                                    <Input id="inv-date" type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="due-date">Due Date</Label>
                                    <Input id="due-date" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="flat-discount">Discount ({currencySymbol})</Label>
                                    <Input id="flat-discount" type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                                </div>
                                <div className="space-y-2 flex items-center justify-between pt-6">
                                    <Label htmlFor="tax-toggle" className="cursor-pointer">Enable Tax/GST</Label>
                                    <input
                                        id="tax-toggle"
                                        type="checkbox"
                                        checked={taxEnabled}
                                        onChange={(e) => setTaxEnabled(e.target.checked)}
                                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Preview and Interactive Work Zone */}
                <div className="lg:col-span-7 space-y-6">
                    <Card className="border-border/30 bg-white text-black font-sans shadow-2xl relative min-h-[842px] overflow-hidden p-8 print-style-invoice">
                        {/* Interactive items edit box overlaid for desktop visual workspace */}
                        <div className="no-print mb-8 p-4 bg-secondary/10 border border-border/20 rounded-xl space-y-4">
                            <div className="flex justify-between items-center border-b border-border/20 pb-2">
                                <span className="font-semibold text-sm text-foreground">Invoice Items Builder</span>
                                <Button size="sm" onClick={addItem} className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs">
                                    <Plus className="h-3 w-3 mr-1" /> Add Line Item
                                </Button>
                            </div>
                            
                            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                                {items.map((item) => (
                                    <div key={item.id} className="grid grid-cols-12 gap-2 items-center bg-background/50 p-2.5 rounded-lg border border-border/10">
                                        <div className="col-span-5 space-y-1">
                                            <Input
                                                placeholder="Description"
                                                value={item.description}
                                                onChange={(e) => updateItem(item.id, "description", e.target.value)}
                                                className="h-8 text-xs text-foreground bg-background"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <Input
                                                type="number"
                                                placeholder="Qty"
                                                value={item.quantity}
                                                onChange={(e) => updateItem(item.id, "quantity", e.target.value)}
                                                className="h-8 text-xs text-foreground bg-background"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <Input
                                                type="number"
                                                placeholder="Rate"
                                                value={item.rate}
                                                onChange={(e) => updateItem(item.id, "rate", e.target.value)}
                                                className="h-8 text-xs text-foreground bg-background"
                                            />
                                        </div>
                                        {taxEnabled && (
                                            <div className="col-span-2">
                                                <Input
                                                    type="number"
                                                    placeholder="GST %"
                                                    value={item.taxRate}
                                                    onChange={(e) => updateItem(item.id, "taxRate", e.target.value)}
                                                    className="h-8 text-xs text-foreground bg-background"
                                                />
                                            </div>
                                        )}
                                        <div className="col-span-1 flex justify-end">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-500/10 p-0"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* actual printable layout invoice */}
                        <div className="space-y-6 text-xs text-slate-800 printable-invoice">
                            {/* Invoice Header */}
                            <div className="flex justify-between items-start border-b border-gray-200 pb-6">
                                <div className="space-y-2">
                                    {logoUrl ? (
                                        <img src={logoUrl} alt="Logo" className="max-h-14 max-w-[150px] object-contain" />
                                    ) : (
                                        <div className="w-12 h-12 rounded bg-emerald-600 text-white font-bold text-lg flex items-center justify-center select-none no-print">
                                            B
                                        </div>
                                    )}
                                    <div className="font-bold text-lg text-slate-900">{businessName}</div>
                                    <div className="whitespace-pre-line text-slate-500 leading-normal">{businessAddress}</div>
                                    <div className="text-slate-500">{businessEmail} | {businessPhone}</div>
                                </div>

                                <div className="text-right space-y-1">
                                    <div className="text-xl font-bold uppercase tracking-wider text-slate-900">INVOICE</div>
                                    <div className="text-slate-500">Invoice #: <strong>{invoiceNumber}</strong></div>
                                    <div className="text-slate-500">Date: <strong>{invoiceDate}</strong></div>
                                    <div className="text-slate-500">Due Date: <strong>{dueDate}</strong></div>
                                </div>
                            </div>

                            {/* Client & Billing Info */}
                            <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-6">
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Billed To</div>
                                    <div className="font-bold text-slate-900">{clientName}</div>
                                    <div className="whitespace-pre-line text-slate-500 leading-normal">{clientAddress}</div>
                                    <div className="text-slate-500">{clientEmail}</div>
                                </div>
                                <div className="space-y-1 text-right">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Payment Due</div>
                                    <div className="text-lg font-bold text-emerald-600">{currencySymbol} {calculations.total}</div>
                                </div>
                            </div>

                            {/* Line Items Table */}
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50">
                                        <th className="py-2.5 pl-2">Description</th>
                                        <th className="py-2.5 text-right w-16">Qty</th>
                                        <th className="py-2.5 text-right w-24">Rate</th>
                                        {taxEnabled && <th className="py-2.5 text-right w-16">GST</th>}
                                        <th className="py-2.5 text-right pr-2 w-28">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {items.map((item) => {
                                        const qty = parseFloat(item.quantity) || 0;
                                        const rate = parseFloat(item.rate) || 0;
                                        const amt = qty * rate;
                                        return (
                                            <tr key={item.id} className="text-slate-700">
                                                <td className="py-3 pl-2 font-medium text-slate-900">{item.description}</td>
                                                <td className="py-3 text-right">{qty}</td>
                                                <td className="py-3 text-right">{currencySymbol} {rate.toFixed(2)}</td>
                                                {taxEnabled && <td className="py-3 text-right">{item.taxRate}%</td>}
                                                <td className="py-3 text-right pr-2 font-semibold text-slate-900">
                                                    {currencySymbol} {amt.toFixed(2)}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            {/* Calculations & Totals */}
                            <div className="grid grid-cols-12 gap-4 pt-4 border-t border-slate-100">
                                <div className="col-span-7 space-y-4">
                                    {bankDetails && (
                                        <div className="bg-slate-50 p-3 rounded space-y-1">
                                            <div className="font-bold text-[9px] text-slate-400 uppercase tracking-wider">Payment Details</div>
                                            <div className="whitespace-pre-line text-[10px] text-slate-600 font-mono leading-normal">{bankDetails}</div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-span-5 space-y-2 text-right text-slate-600 font-medium">
                                    <div className="flex justify-between">
                                        <span>Subtotal:</span>
                                        <span className="text-slate-900">{currencySymbol} {calculations.subtotal}</span>
                                    </div>
                                    {taxEnabled && (
                                        <div className="flex justify-between">
                                            <span>Tax Total:</span>
                                            <span className="text-slate-900">{currencySymbol} {calculations.taxTotal}</span>
                                        </div>
                                    )}
                                    {parseFloat(discount) > 0 && (
                                        <div className="flex justify-between text-red-500">
                                            <span>Discount:</span>
                                            <span>-{currencySymbol} {calculations.discount}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between border-t border-slate-200 pt-2 text-sm font-bold text-slate-900">
                                        <span>Total:</span>
                                        <span className="text-emerald-600">{currencySymbol} {calculations.total}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Terms / Notes */}
                            <div className="border-t border-slate-200 pt-6 mt-6 grid grid-cols-12 gap-4 items-end">
                                <div className="col-span-8 space-y-1.5">
                                    <div className="font-bold text-[9px] text-slate-400 uppercase tracking-wider">Notes &amp; Terms</div>
                                    <div className="text-slate-500 whitespace-pre-line leading-normal">{notes}</div>
                                </div>
                                <div className="col-span-4 flex flex-col items-end space-y-2">
                                    <div className="h-12 w-28 border-b border-slate-300 flex items-end justify-center text-[10px] text-slate-400 italic">
                                        Signature
                                    </div>
                                    <div className="text-[9px] text-slate-400 uppercase font-bold text-right tracking-wider">
                                        Authorized Signatory
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Card>

                    {/* Security Badge */}
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-start gap-3 no-print">
                        <Shield className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1 text-foreground">
                            <h4 className="text-sm font-medium">100% Client-Side Invoice Engine</h4>
                            <p className="text-xs text-muted-foreground">
                                This tool runs fully locally in your web browser. No invoice details, company information, logo images, or financial calculations are uploaded or transmitted to any remote servers.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Custom Print CSS specifically scoped to invoice print-media */}
            <style jsx global>{`
                @media print {
                    body {
                        background: white !important;
                        color: black !important;
                    }
                    .no-print, header, footer, nav, aside {
                        display: none !important;
                    }
                    .print-style-invoice {
                        border: none !important;
                        box-shadow: none !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        width: 100% !important;
                        min-height: auto !important;
                        background: transparent !important;
                        color: black !important;
                    }
                    .printable-invoice {
                        font-family: Arial, Helvetica, sans-serif !important;
                        color: #1e293b !important;
                        font-size: 11px !important;
                    }
                    .printable-invoice .text-slate-900 {
                        color: #0f172a !important;
                    }
                    .printable-invoice .text-slate-500 {
                        color: #64748b !important;
                    }
                }
            `}</style>
        </div>
    );
}

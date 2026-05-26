"use client";

import React, { useState, useMemo } from "react";
import { FileText, Printer, Copy, Shield, RefreshCw, Briefcase, Check, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function ResignationLetterGenerator() {
    const [senderName, setSenderName] = useState("John Doe");
    const [senderDesignation, setSenderDesignation] = useState("Senior Frontend Engineer");
    const [senderAddress, setSenderAddress] = useState("123 Home Street, Apt 4B\nCity, State");
    const [senderEmail, setSenderEmail] = useState("johndoe@email.com");
    
    const [companyName, setCompanyName] = useState("TechCorp Solutions Pvt Ltd");
    const [companyAddress, setCompanyAddress] = useState("100 Innovation Way\nSilicon Valley, CA");
    
    const [managerName, setManagerName] = useState("Jane Smith");
    const [managerDesignation, setManagerDesignation] = useState("Engineering Manager");
    
    const [lastWorkingDay, setLastWorkingDay] = useState(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
    const [noticePeriod, setNoticePeriod] = useState("30 Days");
    const [reason, setReason] = useState("to pursue another career opportunity that aligns closely with my long-term professional goals.");
    const [templateType, setTemplateType] = useState("formal"); // "formal", "polite", "short-notice"
    
    const [copied, setCopied] = useState(false);

    const letterBody = useMemo(() => {
        const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const lastDayStr = new Date(lastWorkingDay).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        
        let subject = `Subject: Resignation from the position of ${senderDesignation}`;
        let salutation = `Dear ${managerName || managerDesignation},`;
        
        let intro = "";
        let body = "";
        let transition = "";
        let outro = "";

        if (templateType === "formal") {
            intro = `Please accept this letter as formal notification that I am resigning from my position as ${senderDesignation} at ${companyName}. My last working day with the company will be ${lastDayStr}, in accordance with my ${noticePeriod} notice period.`;
            body = `I have decided to resign ${reason}. I want to express my appreciation for the opportunities I've had during my time with the company.`;
            transition = `During my remaining time here, I am fully committed to ensuring a smooth transition of my responsibilities. I will complete all pending assignments and assist in handovers to other team members.`;
            outro = `I wish ${companyName} and the team continued success in the future. I hope to keep in touch.`;
        } else if (templateType === "polite") {
            intro = `I am writing to inform you that I have made the difficult decision to leave my role as ${senderDesignation} at ${companyName}. My final day of employment will be ${lastDayStr}.`;
            body = `This decision was not easy, but I have chosen ${reason}. I am deeply grateful for the mentorship, support, and friendship I have received during my tenure here. Working with you and the team has been a highlight of my career.`;
            transition = `Please let me know how I can best assist with training or preparing team members to take over my current workload. I want to make this transition as seamless as possible.`;
            outro = `Thank you once again for the wonderful experience. I wish you and the company all the very best.`;
        } else {
            // Short Notice
            intro = `Please accept this letter as notification that I will be resigning from my position as ${senderDesignation} at ${companyName}. Due to unexpected personal circumstances, I am requesting that my last working day be shortened to ${lastDayStr}.`;
            body = `I understand that this is less than the standard notice period of ${noticePeriod}, and I sincerely apologize for any inconvenience this may cause the company.`;
            transition = `To mitigate the impact of my sudden departure, I have organized all current files and drafted notes detailing the status of all my ongoing projects. I will work diligently to hand over as much as possible before my departure.`;
            outro = `Thank you for your understanding and support during this transition. I wish you and the team all the best.`;
        }

        return `${senderName}
${senderAddress}
${senderEmail}

Date: ${dateStr}

To,
${managerName ? managerName + '\n' : ''}${managerDesignation}
${companyName}
${companyAddress}

${subject}

${salutation}

${intro}

${body}

${transition}

${outro}

Sincerely,

(Signature)

${senderName}
${senderDesignation}`;
    }, [senderName, senderDesignation, senderAddress, senderEmail, companyName, companyAddress, managerName, managerDesignation, lastWorkingDay, noticePeriod, reason, templateType]);

    const handleCopy = () => {
        navigator.clipboard.writeText(letterBody);
        setCopied(true);
        toast.success("Resignation letter copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownloadTxt = () => {
        const blob = new Blob([letterBody], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `resignation-letter-${senderName.replace(/\s+/g, '-').toLowerCase()}.txt`;
        link.click();
        URL.revokeObjectURL(url);
        toast.success("Letter downloaded as text file.");
    };

    const handlePrint = () => {
        window.print();
    };

    const resetFields = () => {
        setSenderName("John Doe");
        setSenderDesignation("Senior Frontend Engineer");
        setCompanyName("TechCorp Solutions Pvt Ltd");
        setManagerName("Jane Smith");
        setManagerDesignation("Engineering Manager");
        setNoticePeriod("30 Days");
        setReason("to pursue another career opportunity that aligns closely with my long-term professional goals.");
        toast.success("Form reset.");
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto font-sans">
            {/* Command Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/20 pb-4 no-print">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-indigo-500" />
                        Professional Resignation Letter Generator
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">
                        Draft structured, polite resignation letters, choose formats, and print or export as PDF.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={resetFields}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Reset
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleDownloadTxt}>
                        <Download className="h-4 w-4 mr-2" />
                        Download TXT
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleCopy}>
                        {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                        Copy Letter
                    </Button>
                    <Button variant="default" size="sm" onClick={handlePrint} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        <Printer className="h-4 w-4 mr-2" />
                        Print / Save PDF
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Inputs */}
                <div className="lg:col-span-5 space-y-6 no-print">
                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Personal Contact</h3>
                            
                            <div className="space-y-2">
                                <Label htmlFor="sender-name">Your Full Name</Label>
                                <Input id="sender-name" value={senderName} onChange={(e) => setSenderName(e.target.value)} />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="sender-desig">Designation</Label>
                                    <Input id="sender-desig" value={senderDesignation} onChange={(e) => setSenderDesignation(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="sender-email">Email Address</Label>
                                    <Input id="sender-email" type="email" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="sender-address">Personal Address</Label>
                                <textarea
                                    id="sender-address"
                                    className="w-full h-20 p-2.5 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                                    value={senderAddress}
                                    onChange={(e) => setSenderAddress(e.target.value)}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Company &amp; Manager Info</h3>
                            
                            <div className="space-y-2">
                                <Label htmlFor="comp-name">Company Name</Label>
                                <Input id="comp-name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="comp-addr">Company Address</Label>
                                <textarea
                                    id="comp-addr"
                                    className="w-full h-16 p-2.5 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                                    value={companyAddress}
                                    onChange={(e) => setCompanyAddress(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="man-name">Manager Name</Label>
                                    <Input id="man-name" value={managerName} onChange={(e) => setManagerName(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="man-desig">Manager Designation</Label>
                                    <Input id="man-desig" value={managerDesignation} onChange={(e) => setManagerDesignation(e.target.value)} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Exit Information</h3>
                            
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label>Notice Tone</Label>
                                    <select
                                        className="w-full p-2.5 rounded-lg border border-border/40 bg-background text-sm"
                                        value={templateType}
                                        onChange={(e) => setTemplateType(e.target.value)}
                                    >
                                        <option value="formal">Standard Formal</option>
                                        <option value="polite">Polite &amp; Grateful</option>
                                        <option value="short-notice">Short Notice Request</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="notice-period">Required Notice</Label>
                                    <Input id="notice-period" value={noticePeriod} onChange={(e) => setNoticePeriod(e.target.value)} placeholder="e.g. 30 Days, 2 Weeks" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="last-day">Last Working Day</Label>
                                <Input id="last-day" type="date" value={lastWorkingDay} onChange={(e) => setLastWorkingDay(e.target.value)} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="reason-input">Reason for Resignation</Label>
                                <textarea
                                    id="reason-input"
                                    className="w-full h-20 p-2.5 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    placeholder="e.g. to pursue another career opportunity..."
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Printable sheet paper */}
                <div className="lg:col-span-7">
                    <Card className="border-border/30 bg-white text-black font-sans shadow-2xl relative min-h-[800px] p-12 print-style-letter">
                        <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800 font-serif resignation-sheet">
                            {letterBody}
                        </div>
                    </Card>

                    <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-3 no-print mt-6 text-foreground">
                        <Shield className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                            <h4 className="text-sm font-medium">Your Privacy Matters</h4>
                            <p className="text-xs text-muted-foreground">
                                This resignation generator works 100% locally. No contact data, manager names, salaries, or resignation reasons are sent to any remote server or analytics tracker.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx global>{`
                @media print {
                    body {
                        background: white !important;
                        color: black !important;
                    }
                    .no-print, header, footer, nav, aside {
                        display: none !important;
                    }
                    .print-style-letter {
                        border: none !important;
                        box-shadow: none !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        width: 100% !important;
                        background: transparent !important;
                        color: black !important;
                    }
                    .resignation-sheet {
                        font-family: 'Times New Roman', Times, serif !important;
                        color: black !important;
                        font-size: 14px !important;
                        line-height: 1.6 !important;
                    }
                }
            `}</style>
        </div>
    );
}

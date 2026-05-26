"use client";

import React, { useState, useMemo } from "react";
import { FileText, Printer, Copy, Shield, RefreshCw, FileSignature, Check, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function LeaveLetterGenerator() {
    const [senderName, setSenderName] = useState("John Doe");
    const [senderDesignation, setSenderDesignation] = useState("Software Engineer");
    const [senderDepartment, setSenderDepartment] = useState("Engineering");
    const [organizationName, setOrganizationName] = useState("TechCorp Solutions Pvt Ltd");
    
    const [recipientName, setRecipientName] = useState("Jane Smith");
    const [recipientDesignation, setRecipientDesignation] = useState("HR Manager");
    
    const [leaveType, setLeaveType] = useState("Sick Leave"); // "Sick Leave", "Casual Leave", "Maternity/Paternity", "Emergency"
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
    const [reason, setReason] = useState("I am suffering from a severe viral fever and the doctor has advised me to take bed rest.");
    const [templateType, setTemplateType] = useState("formal"); // "formal", "casual", "urgent"
    
    const [copied, setCopied] = useState(false);

    // Calculate total days
    const totalDays = useMemo(() => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) return 0;
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // inclusive
        return diffDays;
    }, [startDate, endDate]);

    // Build letter body based on selections
    const letterBody = useMemo(() => {
        const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const fromStr = new Date(startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const toStr = new Date(endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        
        let salutation = `Dear ${recipientName || recipientDesignation},`;
        
        let subject = `Subject: Application for ${leaveType} - ${totalDays} ${totalDays === 1 ? 'Day' : 'Days'}`;
        
        let intro = "";
        let body = "";
        let outro = "";

        if (templateType === "formal") {
            intro = `I am writing to formally request leave of absence from my duties. I would like to request ${leaveType.toLowerCase()} starting from ${fromStr} to ${toStr} (inclusive of both dates).`;
            body = `The reason for my leave is that ${reason.charAt(0).toLowerCase() + reason.slice(1)}`;
            outro = `During my absence, I will make sure all my urgent tasks are delegated to my colleagues so that the ongoing projects are not affected. I will also be reachable via email for urgent matters. Thank you for your understanding and support.`;
        } else if (templateType === "casual") {
            intro = `Please accept this letter as notification that I need to request leave for ${totalDays} ${totalDays === 1 ? 'day' : 'days'}, specifically from ${fromStr} to ${toStr}.`;
            body = `I am requesting this leave because ${reason.charAt(0).toLowerCase() + reason.slice(1)}`;
            outro = `I have updated my team members about this upcoming leave and have aligned my work accordingly. I look forward to your approval.`;
        } else {
            // Urgent
            intro = `I am writing to request urgent leave starting immediately from ${fromStr} to ${toStr} due to unexpected personal circumstances.`;
            body = `Specifically, ${reason}`;
            outro = `Given the sudden nature of this situation, I apologize for the short notice. I will do my best to check my emails intermittently if urgent issues arise. Thank you for your prompt consideration.`;
        }

        return `Date: ${dateStr}

To,
${recipientName ? recipientName + '\n' : ''}${recipientDesignation}
${organizationName}

${subject}

${salutation}

${intro}

${body}

${outro}

Yours sincerely,

(Signature)

${senderName}
${senderDesignation}${senderDepartment ? `, ${senderDepartment}` : ''}
${organizationName}`;
    }, [senderName, senderDesignation, senderDepartment, organizationName, recipientName, recipientDesignation, leaveType, startDate, endDate, reason, templateType, totalDays]);

    const handleCopy = () => {
        navigator.clipboard.writeText(letterBody);
        setCopied(true);
        toast.success("Leave letter copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownloadTxt = () => {
        const blob = new Blob([letterBody], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `leave-letter-${senderName.replace(/\s+/g, '-').toLowerCase()}.txt`;
        link.click();
        URL.revokeObjectURL(url);
        toast.success("Letter downloaded as text file.");
    };

    const handlePrint = () => {
        window.print();
    };

    const resetFields = () => {
        setSenderName("John Doe");
        setSenderDesignation("Software Engineer");
        setSenderDepartment("Engineering");
        setOrganizationName("TechCorp Solutions Pvt Ltd");
        setRecipientName("Jane Smith");
        setRecipientDesignation("HR Manager");
        setLeaveType("Sick Leave");
        setReason("I am suffering from a severe viral fever and the doctor has advised me to take bed rest.");
        toast.success("Form reset.");
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto font-sans">
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/20 pb-4 no-print">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <FileSignature className="h-5 w-5 text-indigo-500" />
                        Professional Leave Application Generator
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">
                        Select a leave type, enter reason dates, choose letter templates, and export or print.
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
                        Copy Content
                    </Button>
                    <Button variant="default" size="sm" onClick={handlePrint} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        <Printer className="h-4 w-4 mr-2" />
                        Print / Save PDF
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Form fields */}
                <div className="lg:col-span-5 space-y-6 no-print">
                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Sender Details</h3>
                            
                            <div className="space-y-2">
                                <Label htmlFor="sender-name">Your Name</Label>
                                <Input id="sender-name" value={senderName} onChange={(e) => setSenderName(e.target.value)} />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="sender-desig">Designation</Label>
                                    <Input id="sender-desig" value={senderDesignation} onChange={(e) => setSenderDesignation(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="sender-dept">Department/Class</Label>
                                    <Input id="sender-dept" value={senderDepartment} onChange={(e) => setSenderDepartment(e.target.value)} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="org-name">Company/School Name</Label>
                                <Input id="org-name" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Recipient Details</h3>
                            
                            <div className="space-y-2">
                                <Label htmlFor="rec-name">Recipient Name (Optional)</Label>
                                <Input id="rec-name" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="rec-desig">Recipient Designation</Label>
                                <Input id="rec-desig" value={recipientDesignation} onChange={(e) => setRecipientDesignation(e.target.value)} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Leave Parameters</h3>
                            
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label>Leave Type</Label>
                                    <select
                                        className="w-full p-2.5 rounded-lg border border-border/40 bg-background text-sm"
                                        value={leaveType}
                                        onChange={(e) => setLeaveType(e.target.value)}
                                    >
                                        <option value="Sick Leave">Sick Leave</option>
                                        <option value="Casual Leave">Casual Leave</option>
                                        <option value="Annual Leave">Annual Leave</option>
                                        <option value="Maternity Leave">Maternity Leave</option>
                                        <option value="Paternity Leave">Paternity Leave</option>
                                        <option value="Emergency Leave">Emergency Leave</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Tone / Style</Label>
                                    <select
                                        className="w-full p-2.5 rounded-lg border border-border/40 bg-background text-sm"
                                        value={templateType}
                                        onChange={(e) => setTemplateType(e.target.value)}
                                    >
                                        <option value="formal">Formal &amp; Polite</option>
                                        <option value="casual">Casual / Direct</option>
                                        <option value="urgent">Urgent / Short Notice</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="start-date">From Date</Label>
                                    <Input id="start-date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="end-date">To Date</Label>
                                    <Input id="end-date" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="reason-input">Reason for Leave</Label>
                                <textarea
                                    id="reason-input"
                                    className="w-full h-24 p-2.5 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    placeholder="Brief reason for your leave of absence..."
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Preview and printable letter sheet */}
                <div className="lg:col-span-7">
                    <Card className="border-border/30 bg-white text-black font-sans shadow-2xl relative min-h-[700px] p-12 print-style-letter">
                        <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800 font-serif letter-sheet">
                            {letterBody}
                        </div>
                    </Card>

                    {/* Shield details */}
                    <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-3 no-print mt-6 text-foreground">
                        <Shield className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                            <h4 className="text-sm font-medium">100% Client-Side Generator</h4>
                            <p className="text-xs text-muted-foreground">
                                Your personal, career, and scheduling details are kept entirely private. The letter is rendered inside your browser and is never processed on any remote server.
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
                    .letter-sheet {
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

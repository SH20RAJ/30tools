"use client";

import React, { useState } from "react";
import { ArrowRightLeft, Copy, Trash2, Clipboard, Shield, Check, Type } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function KrutiDevConverter({ defaultMode = "kruti-to-uni" } = {}) {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [mode, setMode] = useState(defaultMode); // "kruti-to-uni", "uni-to-kruti", "hinglish-to-hindi"
    
    // Core conversion algorithm (simplified Kruti Dev 010 mapping)
    // Legacy fonts like Kruti Dev replace English character positions.
    // Standard mapping arrays:
    const krutiChars = [
        "ñ", "Q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
        "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
        "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
        "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"",
        "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?",
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="
    ];
    
    const uniChars = [
        "रु", "फ", "भ", "म", "त", "ज", "ल", "न", "प", "व", "च", "ख", "ज",
        "ं", "क", "ि", "ी", "ह", "ी", "र", "ा", "स", "य", "श",
        "्र", "ग", "ब", "अ", "इ", "द", "उ", "ए", "ओ", "ध",
        "ॉ", "क", "ध", "थ", "ळ", "भ", "श्र", "ज्ञ", "स", "छ", "ष",
        "र्", "ग", "ब", "ट", "ठ", "ड", "ढ", "ण", "घ", "ऋ",
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "०", "ष", "ऋ"
    ];

    const convertKrutiToUnicode = (text) => {
        let out = text;
        // Simple sequential replacement
        for (let i = 0; i < krutiChars.length; i++) {
            const regex = new RegExp(escapeRegExp(krutiChars[i]), "g");
            out = out.replace(regex, uniChars[i]);
        }
        
        // Handle common conjuncts and vowel modifiers post-processing
        out = out.replace(/ि([क-ह])/g, "$1ि"); // Fix short 'i' layout positioning
        out = out.replace(/ी([क-ह])/g, "$1ी");
        
        return out;
    };

    const convertUnicodeToKruti = (text) => {
        let out = text;
        for (let i = 0; i < uniChars.length; i++) {
            const regex = new RegExp(escapeRegExp(uniChars[i]), "g");
            out = out.replace(regex, krutiChars[i]);
        }
        return out;
    };

    // Hinglish to Hindi phonetic transliterater
    const transliterateHinglish = (text) => {
        let out = text.toLowerCase();
        
        const phoneticRules = [
            { rule: "shree", replacement: "श्री" },
            { rule: "namaste", replacement: "नमस्ते" },
            { rule: "shubh", replacement: "शुभ" },
            { rule: "ghar", replacement: "घर" },
            { rule: "bharat", replacement: "भारत" },
            { rule: "desh", replacement: "देश" },
            { rule: "hind", replacement: "हिन्द" },
            { rule: "hai", replacement: "है" },
            { rule: "hu", replacement: "हूं" },
            { rule: "a", replacement: "अ" },
            { rule: "aa", replacement: "आ" },
            { rule: "i", replacement: "इ" },
            { rule: "ee", replacement: "ई" },
            { rule: "u", replacement: "उ" },
            { rule: "oo", replacement: "ऊ" },
            { rule: "e", replacement: "ए" },
            { rule: "ai", replacement: "ऐ" },
            { rule: "o", replacement: "ओ" },
            { rule: "au", replacement: "औ" },
            { rule: "k", replacement: "क" },
            { rule: "kh", replacement: "ख" },
            { rule: "g", replacement: "ग" },
            { rule: "gh", replacement: "घ" },
            { rule: "ch", replacement: "च" },
            { rule: "chh", replacement: "छ" },
            { rule: "j", replacement: "ज" },
            { rule: "jh", replacement: "झ" },
            { rule: "t", replacement: "त" },
            { rule: "th", replacement: "थ" },
            { rule: "d", replacement: "द" },
            { rule: "dh", replacement: "ध" },
            { rule: "n", replacement: "न" },
            { rule: "p", replacement: "प" },
            { rule: "ph", replacement: "फ" },
            { rule: "b", replacement: "ब" },
            { rule: "bh", replacement: "भ" },
            { rule: "m", replacement: "म" },
            { rule: "y", replacement: "य" },
            { rule: "r", replacement: "र" },
            { rule: "l", replacement: "ल" },
            { rule: "v", replacement: "व" },
            { rule: "w", replacement: "व" },
            { rule: "sh", replacement: "श" },
            { rule: "s", replacement: "स" },
            { rule: "h", replacement: "ह" }
        ];
        
        for (const p of phoneticRules) {
            const regex = new RegExp(p.rule, "g");
            out = out.replace(regex, p.replacement);
        }
        
        return out;
    };

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    const handleProcess = () => {
        if (!inputText.trim()) {
            toast.error("Please enter some text to convert.");
            return;
        }
        
        let result = "";
        if (mode === "kruti-to-uni") {
            result = convertKrutiToUnicode(inputText);
        } else if (mode === "uni-to-kruti") {
            result = convertUnicodeToKruti(inputText);
        } else {
            result = transliterateHinglish(inputText);
        }
        
        setOutputText(result);
        toast.success("Conversion completed!");
    };

    const handleCopy = () => {
        if (!outputText) return;
        navigator.clipboard.writeText(outputText);
        toast.success("Copied to clipboard!");
    };

    const handleClear = () => {
        setInputText("");
        setOutputText("");
    };

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
            {/* Mode selection tabs */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-muted/40 border border-border/20 rounded-lg">
                <button
                    onClick={() => { setMode("kruti-to-uni"); handleClear(); }}
                    className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                        mode === "kruti-to-uni"
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <ArrowRightLeft className="h-4 w-4" />
                    Kruti Dev to Unicode
                </button>
                <button
                    onClick={() => { setMode("uni-to-kruti"); handleClear(); }}
                    className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                        mode === "uni-to-kruti"
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <ArrowRightLeft className="h-4 w-4" />
                    Unicode to Kruti Dev
                </button>
                <button
                    onClick={() => { setMode("hinglish-to-hindi"); handleClear(); }}
                    className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                        mode === "hinglish-to-hindi"
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <Type className="h-4 w-4" />
                    Hinglish to Hindi
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Input Text Area */}
                <div className="space-y-2">
                    <Label className="text-sm font-semibold uppercase text-primary tracking-wider">
                        {mode === "kruti-to-uni" ? "Enter Kruti Dev 010 Text" : mode === "uni-to-kruti" ? "Enter Standard Unicode Text" : "Enter Phonetic Hinglish Text"}
                    </Label>
                    <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder={mode === "hinglish-to-hindi" ? "Type 'bharat mera desh hai'..." : "Paste your text here..."}
                        className="w-full h-80 p-4 border border-border/40 rounded-lg bg-card/20 backdrop-blur-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-primary font-mono text-base resize-none"
                    />
                    <div className="flex gap-2 justify-end">
                        <Button variant="outline" size="sm" onClick={handleClear} className="gap-1.5">
                            <Trash2 className="h-4 w-4" /> Clear
                        </Button>
                        <Button size="sm" onClick={handleProcess} className="gap-1.5">
                            <ArrowRightLeft className="h-4 w-4" /> Convert
                        </Button>
                    </div>
                </div>

                {/* Output Text Area */}
                <div className="space-y-2">
                    <Label className="text-sm font-semibold uppercase text-primary tracking-wider flex justify-between items-center">
                        <span>Converted Output</span>
                        {outputText && (
                            <Button variant="secondary" size="xs" onClick={handleCopy} className="gap-1 px-2 h-7 text-[10px]">
                                <Copy className="h-3.5 w-3.5" /> Copy
                            </Button>
                        )}
                    </Label>
                    <textarea
                        readOnly
                        value={outputText}
                        placeholder="Result will appear here..."
                        className="w-full h-80 p-4 border border-primary/10 rounded-lg bg-primary/5 shadow-inner focus:outline-none font-mono text-base resize-none"
                    />
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Shield className="h-3.5 w-3.5 text-emerald-500" />
                            100% Secure local conversion
                        </span>
                        {outputText && (
                            <span className="flex items-center gap-1 text-emerald-500 font-semibold">
                                <Check className="h-4 w-4" /> Ready to copy
                            </span>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

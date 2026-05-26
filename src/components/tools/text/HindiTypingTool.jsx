"use client";

import React, { useState, useEffect, useRef } from "react";
import { Copy, Trash2, Download, Shield, Sparkles, Check, Type, Info, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function HindiTypingTool() {
    const [inputText, setInputText] = useState("");
    const [convertedText, setConvertedText] = useState("");
    const [copied, setCopied] = useState(false);
    const textareaRef = useRef(null);

    // Phonetic transliteration helper
    const transliterateWord = (word) => {
        if (!word) return "";
        let w = word.toLowerCase().trim();
        
        // Direct common word overrides
        const wordMap = {
            "namaste": "नमस्ते", "namaskar": "नमस्कार", "mera": "मेरा", "meri": "मेरी", "mere": "मेरे",
            "bharat": "भारत", "hindi": "हिंदी", "aap": "आप", "tum": "तुम",
            "hum": "हम", "hai": "है", "hain": "हैं", "ho": "हो", "hun": "हूँ", "hoon": "हूँ",
            "ko": "को", "se": "से", "me": "में", "mein": "में", "ne": "ने", "ki": "की",
            "ka": "का", "ke": "के", "jo": "जो", "hi": "ही", "bhi": "भी",
            "toh": "तो", "to": "तो", "tha": "था", "thi": "थी", "the": "थे", "kya": "क्या",
            "kyun": "क्यों", "kyon": "क्यों", "haan": "हाँ", "nahi": "नहीं", "nahin": "नहीं",
            "shree": "श्री", "shri": "श्री", "swagat": "स्वागत", "dhanyawad": "धन्यवाद",
            "achha": "अच्छा", "achhe": "अच्छे", "achhi": "अच्छी", "aur": "और", "ek": "एक",
            "karta": "करता", "karti": "करती", "karte": "करते", "hoga": "होगा", "hogi": "होगी",
            "hoge": "होंगे", "raha": "रहा", "rahi": "रही", "rahe": "रहे", "aaj": "आज",
            "kal": "कल", "parso": "परसों", "din": "दिन", "raat": "रात", "subah": "सुबह",
            "shaam": "शाम", "samay": "समय", "saal": "साल", "log": "लोग", "kaam": "काम",
            "naam": "नाम", "desh": "देश", "duniya": "दुनिया", "bahut": "बहुत", "sabse": "सबसे"
        };

        if (wordMap[w]) return wordMap[w];

        const vowels = {
            'aa': 'ा', 'a': '', 'ee': 'ी', 'e': 'े', 'oo': 'ू', 'o': 'ो',
            'u': 'ु', 'i': 'ि', 'ai': 'ै', 'au': 'ौ', 'ou': 'ौ', 'an': 'ं'
        };
        const standaloneVowels = {
            'aa': 'आ', 'a': 'अ', 'ee': 'ई', 'e': 'ए', 'oo': 'ऊ', 'o': 'ओ',
            'u': 'उ', 'i': 'इ', 'ai': 'ऐ', 'au': 'औ', 'ou': 'औ'
        };
        const consonants = {
            'kh': 'ख', 'gh': 'घ', 'ch': 'च', 'chh': 'छ', 'jh': 'झ', 'th': 'थ',
            'dh': 'ध', 'ph': 'फ', 'bh': 'भ', 'sh': 'श', 'shh': 'ष', 'gy': 'ज्ञ',
            'tr': 'त्र', 'pr': 'प्र', 'kr': 'क्र', 'hr': 'ह्र', 'mr': 'म्र', 'dr': 'द्र',
            'k': 'क', 'g': 'ग', 'j': 'ज', 't': 'त', 'd': 'द', 'n': 'न',
            'p': 'प', 'b': 'ब', 'm': 'म', 'y': 'य', 'r': 'र', 'l': 'ल',
            'v': 'व', 'w': 'व', 's': 'स', 'h': 'ह', 'z': 'ज़', 'f': 'फ़', 'q': 'क़'
        };

        let result = "";
        let i = 0;
        while (i < w.length) {
            let matched = false;

            // Check 3-char consonants
            if (i + 3 <= w.length) {
                const sub = w.substring(i, i + 3);
                if (sub === "chh") {
                    result += "छ";
                    i += 3;
                    matched = true;
                    continue;
                }
            }

            // Check 2-char consonants or vowels
            if (i + 2 <= w.length) {
                const sub = w.substring(i, i + 2);
                if (consonants[sub]) {
                    result += consonants[sub];
                    i += 2;
                    matched = true;
                    // check next char for vowel
                    if (i < w.length) {
                        let nextV = "";
                        if (i + 2 <= w.length && vowels[w.substring(i, i + 2)]) {
                            nextV = w.substring(i, i + 2);
                            i += 2;
                        } else if (vowels[w.charAt(i)]) {
                            nextV = w.charAt(i);
                            i += 1;
                        }
                        if (nextV) {
                            result += vowels[nextV];
                        } else {
                            if (i < w.length) result += "्";
                        }
                    }
                    continue;
                } else if (vowels[sub]) {
                    result += result === "" ? standaloneVowels[sub] : vowels[sub];
                    i += 2;
                    matched = true;
                    continue;
                }
            }

            // Check 1-char
            const char = w.charAt(i);
            if (consonants[char]) {
                result += consonants[char];
                i += 1;
                matched = true;
                if (i < w.length) {
                    let nextV = "";
                    if (i + 2 <= w.length && vowels[w.substring(i, i + 2)]) {
                        nextV = w.substring(i, i + 2);
                        i += 2;
                    } else if (vowels[w.charAt(i)]) {
                        nextV = w.charAt(i);
                        i += 1;
                    }
                    if (nextV) {
                        result += vowels[nextV];
                    } else {
                        if (i < w.length && char !== 'r' && char !== 'n') {
                            result += "्";
                        }
                    }
                }
                continue;
            } else if (vowels[char]) {
                result += result === "" ? standaloneVowels[char] : vowels[char];
                i += 1;
                matched = true;
                continue;
            }

            if (!matched) {
                result += char;
                i++;
            }
        }
        return result;
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputText(val);

        // Standard dynamic transliteration rule
        // Split input by space or newline and map english words to hindi
        const parts = val.split(/(\s+)/);
        const transliteratedParts = parts.map(part => {
            if (/^\s+$/.test(part)) return part;
            // Transliterate only alphanumeric words
            if (/^[a-zA-Z]+$/.test(part)) {
                return transliterateWord(part);
            }
            return part;
        });

        setConvertedText(transliteratedParts.join(""));
    };

    const handleCopy = () => {
        if (!convertedText) return;
        navigator.clipboard.writeText(convertedText);
        setCopied(true);
        toast.success("Text copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        if (!convertedText) return;
        const blob = new Blob([convertedText], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `hindi-typing-${Date.now()}.txt`;
        link.click();
        URL.revokeObjectURL(url);
        toast.success("Text downloaded successfully!");
    };

    const handleClear = () => {
        setInputText("");
        setConvertedText("");
        toast.success("Text cleared.");
    };

    const insertCharacter = (char) => {
        setInputText(prev => prev + char);
        setConvertedText(prev => prev + char);
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };

    const hindiCommonChars = [
        "अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ",
        "क", "ख", "ग", "घ", "च", "छ", "ज", "झ", "ट", "ठ",
        "ड", "ढ", "त", "थ", "द", "ध", "न", "प", "फ", "ब",
        "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह",
        "ा", "ि", "ी", "ु", "ू", "े", "ै", "ो", "ौ", "ं", "ः", "्"
    ];

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            {/* Header section with styling */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/20 pb-4">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Type className="h-5 w-5 text-indigo-500" />
                        English to Hindi Typing Tool
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">
                        Type in Hinglish (Roman English) and press Space or Enter to automatically convert to Devanagari Hindi.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleClear} disabled={!inputText}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Clear
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleDownload} disabled={!convertedText}>
                        <Download className="h-4 w-4 mr-2" />
                        Download TXT
                    </Button>
                    <Button variant="default" size="sm" onClick={handleCopy} disabled={!convertedText} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                        Copy Hindi Text
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left pane: Hinglish Input */}
                <div className="space-y-2">
                    <Label htmlFor="hinglish-input" className="text-sm font-semibold flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-indigo-500" />
                        Type in Roman English (e.g. namaste)
                    </Label>
                    <textarea
                        id="hinglish-input"
                        ref={textareaRef}
                        className="w-full h-80 p-4 rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base leading-relaxed resize-none font-sans"
                        placeholder="Type here in Hinglish... (e.g., 'mera bharat mahan' will automatically convert to 'मेरा भारत महान')"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Right pane: Devanagari output */}
                <div className="space-y-2">
                    <Label htmlFor="hindi-output" className="text-sm font-semibold flex items-center gap-1.5 text-indigo-400">
                        <Type className="h-4 w-4" />
                        Transliterated Hindi Text (Unicode)
                    </Label>
                    <div
                        id="hindi-output"
                        className="w-full h-80 p-4 rounded-xl border border-border/40 bg-indigo-950/20 backdrop-blur-sm text-base leading-relaxed overflow-y-auto whitespace-pre-wrap select-all font-sans"
                        placeholder="Hindi translation will appear here..."
                    >
                        {convertedText || <span className="text-muted-foreground italic">हिंदी अनुवाद यहाँ दिखाई देगा...</span>}
                    </div>
                </div>
            </div>

            {/* Virtual character tray for custom inserts */}
            <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                <CardContent className="p-4 space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Info className="h-3.5 w-3.5" />
                        Quick Insert Hindi Characters
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                        {hindiCommonChars.map((char) => (
                            <button
                                key={char}
                                onClick={() => insertCharacter(char)}
                                className="px-2.5 py-1 text-sm bg-secondary/80 hover:bg-indigo-600 hover:text-white rounded-md transition-colors font-sans border border-border/10"
                            >
                                {char}
                            </button>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Bottom info banner */}
            <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-3">
                <Shield className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                    <h4 className="text-sm font-medium">100% Secure &amp; Private</h4>
                    <p className="text-xs text-muted-foreground">
                        All typing and transliteration occur locally in your web browser. No text or private details are ever sent to external servers.
                    </p>
                </div>
            </div>
        </div>
    );
}

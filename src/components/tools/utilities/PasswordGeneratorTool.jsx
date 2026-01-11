"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Copy, RefreshCw, KeyRound, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

export default function PasswordGeneratorTool() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(16);
    const [useUppercase, setUseUppercase] = useState(true);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);
    const [strength, setStrength] = useState(0);

    useEffect(() => {
        generatePassword();
    }, [length, useUppercase, useLowercase, useNumbers, useSymbols]);

    const generatePassword = () => {
        let charset = "";
        if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (useNumbers) charset += "0123456789";
        if (useSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        if (charset === "") {
            setPassword("");
            setStrength(0);
            return;
        }

        let generatedPassword = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            generatedPassword += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassword(generatedPassword);
        calculateStrength(generatedPassword);
    };

    const calculateStrength = (pass) => {
        let score = 0;
        if (pass.length > 8) score += 10;
        if (pass.length > 12) score += 20;
        if (pass.length >= 16) score += 20;
        if (/[A-Z]/.test(pass)) score += 10;
        if (/[a-z]/.test(pass)) score += 10;
        if (/[0-9]/.test(pass)) score += 10;
        if (/[^A-Za-z0-9]/.test(pass)) score += 20;
        setStrength(Math.min(100, score));
    };

    const copyToClipboard = () => {
        if (!password) return;
        navigator.clipboard.writeText(password);
        toast.success("Password copied to clipboard!");
    };

    const strengthColor = () => {
        if (strength < 40) return "bg-destructive";
        if (strength < 70) return "bg-yellow-500";
        return "bg-green-500";
    };

    const strengthText = () => {
        if (strength === 0) return "";
        if (strength < 40) return "Weak";
        if (strength < 70) return "Good";
        return "Strong";
    };

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-lg">
            <CardHeader className="bg-muted/30">
                <CardTitle className="flex items-center gap-2">
                    <KeyRound className="h-6 w-6 text-primary" />
                    Strong Password Generator
                </CardTitle>
                <CardDescription>
                    Generate secure, random passwords instantly to protect your accounts.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-8">
                {/* Password Display */}
                <div className="relative">
                    <div className="p-6 bg-secondary/50 rounded-lg text-center font-mono text-3xl tracking-wider break-all min-h-[5rem] flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                        {password || "Select options..."}
                    </div>
                    <Button
                        size="icon"
                        className="absolute right-2 top-2"
                        onClick={copyToClipboard}
                        disabled={!password}
                        variant="ghost"
                    >
                        <Copy className="h-5 w-5" />
                    </Button>
                    <Button
                        size="icon"
                        className="absolute right-2 bottom-2"
                        onClick={generatePassword}
                        variant="ghost"
                    >
                        <RefreshCw className="h-5 w-5" />
                    </Button>
                </div>

                {/* Strength Meter */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                        <span>Security Strength:</span>
                        <span className={strength === 100 ? "text-green-600" : ""}>{strengthText()}</span>
                    </div>
                    <Progress value={strength} className={`h-2 ${strengthColor()}`} />
                </div>

                {/* Controls */}
                <div className="space-y-6 pt-4">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base">Password Length: {length}</Label>
                        </div>
                        <Slider
                            value={[length]}
                            onValueChange={(val) => setLength(val[0])}
                            min={6}
                            max={64}
                            step={1}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => setUseUppercase(!useUppercase)}>
                            <Checkbox id="uppercase" checked={useUppercase} onCheckedChange={setUseUppercase} />
                            <Label htmlFor="uppercase" className="cursor-pointer">ABC Uppercase</Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => setUseLowercase(!useLowercase)}>
                            <Checkbox id="lowercase" checked={useLowercase} onCheckedChange={setUseLowercase} />
                            <Label htmlFor="lowercase" className="cursor-pointer">abc Lowercase</Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => setUseNumbers(!useNumbers)}>
                            <Checkbox id="numbers" checked={useNumbers} onCheckedChange={setUseNumbers} />
                            <Label htmlFor="numbers" className="cursor-pointer">123 Numbers</Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => setUseSymbols(!useSymbols)}>
                            <Checkbox id="symbols" checked={useSymbols} onCheckedChange={setUseSymbols} />
                            <Label htmlFor="symbols" className="cursor-pointer">!@# Symbols</Label>
                        </div>
                    </div>

                    <Button className="w-full text-lg h-12" onClick={generatePassword}>
                        <ShieldCheck className="mr-2 h-5 w-5" /> Generate New Password
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

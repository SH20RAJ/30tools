"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, RefreshCw, Check, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function GradientGenerator() {
    const [color1, setColor1] = useState("#4f46e5");
    const [color2, setColor2] = useState("#ec4899");
    const [direction, setDirection] = useState("to right");
    const [isCopied, setIsCopied] = useState(false);

    const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
    const cssCode = `background: ${gradient};`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(cssCode);
        setIsCopied(true);
        toast.success("CSS copied to clipboard!");
        setTimeout(() => setIsCopied(false), 2000);
    };

    const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    const generateRandom = () => {
        setColor1(randomColor());
        setColor2(randomColor());
    };

    const directions = [
        { value: "to right", label: "→" },
        { value: "to left", label: "←" },
        { value: "to bottom", label: "↓" },
        { value: "to top", label: "↑" },
        { value: "to bottom right", label: "↘" },
        { value: "to bottom left", label: "↙" },
        { value: "to top right", label: "↗" },
        { value: "to top left", label: "↖" },
    ];

    return (
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Color 1</Label>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded border" style={{ backgroundColor: color1 }} />
                                <Input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-full h-10 p-1" />
                            </div>
                            <Input value={color1} onChange={(e) => setColor1(e.target.value)} className="font-mono uppercase" />
                        </div>
                        <div className="space-y-2">
                            <Label>Color 2</Label>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded border" style={{ backgroundColor: color2 }} />
                                <Input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-full h-10 p-1" />
                            </div>
                            <Input value={color2} onChange={(e) => setColor2(e.target.value)} className="font-mono uppercase" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Direction</Label>
                        <div className="grid grid-cols-4 gap-2">
                            {directions.map((dir) => (
                                <Button
                                    key={dir.value}
                                    variant={direction === dir.value ? "default" : "outline"}
                                    onClick={() => setDirection(dir.value)}
                                    title={dir.value}
                                >
                                    {dir.label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Button variant="outline" onClick={generateRandom} className="w-full">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Randomize Colors
                    </Button>

                    <div className="bg-muted p-4 rounded-lg relative font-mono text-sm break-all">
                        {cssCode}
                        <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-8 w-8" onClick={copyToClipboard}>
                            {isCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="overflow-hidden min-h-[400px]">
                <div className="w-full h-full" style={{ background: gradient }} />
            </Card>
        </div>
    );
}

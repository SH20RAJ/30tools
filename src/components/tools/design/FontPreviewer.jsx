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
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Type } from "lucide-react";

export default function FontPreviewer() {
    const [text, setText] = useState("The quick brown fox jumps over the lazy dog");
    const [fontFamily, setFontFamily] = useState("Inter");
    const [fontSize, setFontSize] = useState([32]);
    const [fontWeight, setFontWeight] = useState("400");
    const [letterSpacing, setLetterSpacing] = useState([0]);

    const fonts = [
        "Inter", "Roboto", "Open Sans", "Lato", "Montserrat", "Playfair Display", "Merriweather", "Courier Prime"
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Font Family</label>
                            <Select value={fontFamily} onValueChange={setFontFamily}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {fonts.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                                </SelectContent>
                            </Select>
                            {/* Note: In a real app, we'd dynamically load these fonts from Google Fonts */}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Font Weight</label>
                            <Select value={fontWeight} onValueChange={setFontWeight}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="100">Thin (100)</SelectItem>
                                    <SelectItem value="400">Regular (400)</SelectItem>
                                    <SelectItem value="700">Bold (700)</SelectItem>
                                    <SelectItem value="900">Black (900)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Size ({fontSize[0]}px)</label>
                            <Slider min={12} max={120} step={1} value={fontSize} onValueChange={setFontSize} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Letter Spacing ({letterSpacing[0]}px)</label>
                            <Slider min={-5} max={20} step={1} value={letterSpacing} onValueChange={setLetterSpacing} />
                        </div>
                    </div>

                    <Input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type something to preview..."
                        className="text-lg"
                    />
                </CardContent>
            </Card>

            <Card className="min-h-[300px] flex items-center justify-center overflow-hidden">
                <CardContent className="w-full text-center p-8 break-words">
                    <p
                        style={{
                            fontFamily: fontFamily,
                            fontSize: `${fontSize[0]}px`,
                            fontWeight: fontWeight,
                            letterSpacing: `${letterSpacing[0]}px`
                        }}
                    >
                        {text || "Type something..."}
                    </p>
                </CardContent>
            </Card>

            <p className="text-center text-sm text-muted-foreground">
                <Type className="w-4 h-4 inline mr-1" />
                Note: This is a preview. Font rendering depends on your system or loaded web fonts.
            </p>
        </div>
    );
}

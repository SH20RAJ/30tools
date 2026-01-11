"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Copy, RefreshCw, Type, FileText } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

export default function LoremIpsumGeneratorTool() {
    const [count, setCount] = useState(3);
    const [type, setType] = useState("paragraphs"); // paragraphs, sentences, words
    const [startWithLorem, setStartWithLorem] = useState(true);
    const [generatedText, setGeneratedText] = useState("");

    const loremWords = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
        "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
        "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
        "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
        "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
        "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
        "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
        "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id",
        "est", "laborum"
    ];

    const generate = () => {
        let result = [];

        if (type === "words") {
            for (let i = 0; i < count; i++) {
                result.push(loremWords[i % loremWords.length]);
            }
            let text = result.join(" ");
            if (startWithLorem && !text.toLowerCase().startsWith("lorem ipsum")) {
                text = "Lorem ipsum " + text;
            }
            setGeneratedText(capitalize(text) + ".");
            return;
        }

        const sentencesPerPara = 5;
        const numSentences = type === "sentences" ? count : count * sentencesPerPara;

        let sentences = [];
        for (let i = 0; i < numSentences; i++) {
            let sentenceLength = Math.floor(Math.random() * 10) + 5;
            let sentenceWords = [];
            for (let j = 0; j < sentenceLength; j++) {
                let word = loremWords[Math.floor(Math.random() * loremWords.length)];
                sentenceWords.push(word);
            }
            let sentenceStr = capitalize(sentenceWords.join(" ")) + ".";
            sentences.push(sentenceStr);
        }

        if (type === "sentences") {
            let text = sentences.join(" ");
            if (startWithLorem && !text.toLowerCase().startsWith("lorem ipsum")) {
                // Force replace first two words
                text = "Lorem ipsum " + text.split(" ").slice(2).join(" ");
            }
            setGeneratedText(text);
        } else {
            // Paragraphs
            let paras = [];
            for (let i = 0; i < sentences.length; i += sentencesPerPara) {
                paras.push(sentences.slice(i, i + sentencesPerPara).join(" "));
            }
            let text = paras.join("\n\n");
            if (startWithLorem && !text.toLowerCase().startsWith("lorem ipsum")) {
                text = "Lorem ipsum " + text.split(" ").slice(2).join(" ");
            }
            setGeneratedText(text);
        }
    };

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    React.useEffect(() => {
        generate();
    }, [count, type, startWithLorem]);

    const copyToClipboard = () => {
        if (!generatedText) return;
        navigator.clipboard.writeText(generatedText);
        toast.success("Text copied to clipboard!");
    };

    return (
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
            <CardHeader className="bg-muted/30">
                <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Lorem Ipsum Generator
                </CardTitle>
                <CardDescription>
                    Generate placeholder text for your designs and layouts.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <Label className="text-base font-semibold">Generate</Label>
                        <RadioGroup defaultValue="paragraphs" value={type} onValueChange={setType} className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="paragraphs" id="paragraphs" />
                                <Label htmlFor="paragraphs">Paragraphs</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="sentences" id="sentences" />
                                <Label htmlFor="sentences">Sentences</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="words" id="words" />
                                <Label htmlFor="words">Words</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Label className="text-base font-semibold">Count: {count}</Label>
                            <Slider
                                value={[count]}
                                onValueChange={(val) => setCount(val[0])}
                                min={1}
                                max={type === "words" ? 100 : 20}
                                step={1}
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="startLorem" checked={startWithLorem} onCheckedChange={setStartWithLorem} />
                            <Label htmlFor="startLorem">Start with "Lorem ipsum..."</Label>
                        </div>
                    </div>
                </div>

                {/* Output */}
                <div className="space-y-3 pt-6 border-t">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Generated Text</h3>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={generate}>
                                <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
                            </Button>
                            <Button onClick={copyToClipboard} size="sm">
                                <Copy className="mr-2 h-4 w-4" /> Copy Text
                            </Button>
                        </div>
                    </div>

                    <Textarea
                        value={generatedText}
                        readOnly
                        className="min-h-[300px] font-serif text-lg leading-relaxed resize-none bg-secondary/20"
                    />
                </div>
            </CardContent>
        </Card>
    );
}

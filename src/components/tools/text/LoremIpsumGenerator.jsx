"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, RefreshCw } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const LOREM_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function LoremIpsumGenerator() {
  const [count, setCount] = useState(3);
  const [type, setType] = useState("paragraphs"); // paragraphs, sentences, words
  const [output, setOutput] = useState("");

  const generateLorem = () => {
    let result = [];
    const sentences = LOREM_TEXT.split(". ");
    const words = LOREM_TEXT.split(" ");

    if (type === "paragraphs") {
      for (let i = 0; i < count; i++) {
        // Shuffle sentences to make random paragraphs
        const shuffled = [...sentences].sort(() => 0.5 - Math.random());
        result.push(shuffled.slice(0, 5).join(". ") + ".");
      }
      setOutput(result.join("\n\n"));
    } else if (type === "sentences") {
       for (let i = 0; i < count; i++) {
        result.push(sentences[i % sentences.length] + ".");
      }
      setOutput(result.join(" "));
    } else if (type === "words") {
      result = words.slice(0, count);
      setOutput(result.join(" "));
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="p-6 bg-muted/20 rounded-xl border border-border space-y-6">
        <div className="space-y-4">
             <Label className="text-base">Generate What?</Label>
             <RadioGroup defaultValue="paragraphs" onValueChange={setType} className="flex gap-6">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paragraphs" id="r1" />
                    <Label htmlFor="r1">Paragraphs</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sentences" id="r2" />
                    <Label htmlFor="r2">Sentences</Label>
                </div>
                 <div className="flex items-center space-x-2">
                    <RadioGroupItem value="words" id="r3" />
                    <Label htmlFor="r3">Words</Label>
                </div>
            </RadioGroup>
        </div>

        <div className="space-y-4">
            <div className="flex justify-between">
                <Label className="text-base">Count: {count}</Label>
            </div>
            <Slider 
                defaultValue={[3]} 
                max={50} 
                min={1} 
                step={1} 
                value={[count]}
                onValueChange={(vals) => setCount(vals[0])}
            />
        </div>

        <Button onClick={generateLorem} className="w-full md:w-auto">
            <RefreshCw className="w-4 h-4 mr-2" /> Generate Lorem Ipsum
        </Button>
      </div>

      <div className="relative">
        <Textarea
          value={output}
          readOnly
          placeholder="Generated text will appear here..."
          className="min-h-[300px] text-lg p-6 resize-y"
        />
        <div className="absolute bottom-4 right-4">
          <Button onClick={copyToClipboard} size="sm" className="gap-2">
            <Copy className="w-4 h-4" /> Copy
          </Button>
        </div>
      </div>
    </div>
  );
}

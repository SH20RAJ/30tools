"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Copy, RotateCcw, ArrowUpDown, FileText } from "lucide-react";
import { toast } from "sonner";

export default function TextReverserTool() {
  const [inputText, setInputText] = useState("");
  const [reversedText, setReversedText] = useState("");
  const [reverseType, setReverseType] = useState("characters");

  const reverseText = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to reverse");
      return;
    }

    let result = "";

    if (reverseType === "characters") {
      // Reverse all characters
      result = inputText.split("").reverse().join("");
    } else if (reverseType === "words") {
      // Reverse word order but keep words intact
      result = inputText.split(" ").reverse().join(" ");
    } else if (reverseType === "lines") {
      // Reverse line order
      result = inputText.split("\n").reverse().join("\n");
    }

    setReversedText(result);
    toast.success("Text reversed successfully!");
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (_err) {
      toast.error("Failed to copy text");
    }
  };

  const clearAll = () => {
    setInputText("");
    setReversedText("");
    toast.success("Cleared all text");
  };

  const swapTexts = () => {
    if (!reversedText) {
      toast.error("No reversed text to swap");
      return;
    }

    setInputText(reversedText);
    setReversedText("");
    toast.success("Texts swapped!");
  };

  const exampleTexts = [
    "Hello World!",
    "The quick brown fox jumps over the lazy dog",
    "Lorem ipsum dolor sit amet",
    "JavaScript is awesome",
    "Text reversal made easy",
  ];

  const loadExample = (text) => {
    setInputText(text);
    setReversedText("");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Main Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RotateCcw className="h-5 w-5" />
            Text Reverser Tool
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Reverse Type Selection */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Reverse Type:</Label>
            <RadioGroup
              value={reverseType}
              onValueChange={setReverseType}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="characters" id="characters" />
                <Label htmlFor="characters" className="cursor-pointer">
                  Reverse Characters
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="words" id="words" />
                <Label htmlFor="words" className="cursor-pointer">
                  Reverse Word Order
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lines" id="lines" />
                <Label htmlFor="lines" className="cursor-pointer">
                  Reverse Line Order
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Input Section */}
          <div className="space-y-2">
            <Label htmlFor="input-text" className="text-base font-medium">
              Enter Text to Reverse:
            </Label>
            <Textarea
              id="input-text"
              placeholder="Type or paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[120px] resize-y"
            />
            <div className="text-sm text-muted-foreground">
              Characters: {inputText.length} | Words:{" "}
              {inputText.trim() ? inputText.trim().split(/\s+/).length : 0}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={reverseText}
              className="flex items-center gap-2"
              disabled={!inputText.trim()}
            >
              <RotateCcw className="h-4 w-4" />
              Reverse Text
            </Button>

            <Button
              onClick={swapTexts}
              variant="outline"
              className="flex items-center gap-2"
              disabled={!reversedText}
            >
              <ArrowUpDown className="h-4 w-4" />
              Swap Texts
            </Button>

            <Button
              onClick={clearAll}
              variant="outline"
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Clear All
            </Button>
          </div>

          {/* Output Section */}
          {reversedText && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Reversed Text:</Label>
                <Button
                  onClick={() => copyToClipboard(reversedText)}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy Result
                </Button>
              </div>
              <Textarea
                value={reversedText}
                readOnly
                className="min-h-[120px] bg-muted font-mono"
              />
              <div className="text-sm text-muted-foreground">
                Characters: {reversedText.length} | Words:{" "}
                {reversedText.trim()
                  ? reversedText.trim().split(/\s+/).length
                  : 0}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Example Texts */}
      <Card>
        <CardHeader>
          <CardTitle>Example Texts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {exampleTexts.map((text, index) => (
              <Button
                key={index}
                onClick={() => loadExample(text)}
                variant="outline"
                className="justify-start text-left h-auto p-3"
              >
                {text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reversal Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Text Reversal Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2 text-primary">
                Character Reversal:
              </h3>
              <div className="bg-muted p-3 rounded font-mono text-sm space-y-1">
                <div>
                  <strong>Input:</strong> "Hello World!"
                </div>
                <div>
                  <strong>Output:</strong> "!dlroW olleH"
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2 text-primary">
                Word Order Reversal:
              </h3>
              <div className="bg-muted p-3 rounded font-mono text-sm space-y-1">
                <div>
                  <strong>Input:</strong> "The quick brown fox"
                </div>
                <div>
                  <strong>Output:</strong> "fox brown quick The"
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2 text-primary">
                Line Order Reversal:
              </h3>
              <div className="bg-muted p-3 rounded font-mono text-sm space-y-1">
                <div>
                  <strong>Input:</strong>
                </div>
                <div className="ml-4">
                  First line
                  <br />
                  Second line
                  <br />
                  Third line
                </div>
                <div>
                  <strong>Output:</strong>
                </div>
                <div className="ml-4">
                  Third line
                  <br />
                  Second line
                  <br />
                  First line
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Tool Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-medium text-primary">✨ Key Features:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Multiple reversal modes (characters, words, lines)</li>
                <li>• Real-time character and word counting</li>
                <li>• One-click copy to clipboard</li>
                <li>• Swap input and output easily</li>
                <li>• No character or length limits</li>
                <li>• Instant results with live preview</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-primary">🔧 Use Cases:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Create mirror writing effects</li>
                <li>• Generate creative social media content</li>
                <li>• Test string manipulation algorithms</li>
                <li>• Create puzzles and word games</li>
                <li>• Artistic text arrangements</li>
                <li>• Programming practice exercises</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

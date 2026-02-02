"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Trash2, ArrowRightLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TextEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("url"); // url, base64

  const handleProcess = (action) => {
    try {
      if (mode === "url") {
        if (action === "encode") {
          setOutput(encodeURIComponent(input));
        } else {
          setOutput(decodeURIComponent(input));
        }
      } else if (mode === "base64") {
        if (action === "encode") {
          setOutput(btoa(input));
        } else {
          setOutput(atob(input));
        }
      }
    } catch (e) {
      setOutput("Error: Invalid input for decoding.");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Tabs defaultValue="url" className="w-full" onValueChange={setMode}>
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="url">URL Encode/Decode</TabsTrigger>
          <TabsTrigger value="base64">Base64 Encode/Decode</TabsTrigger>
        </TabsList>
        
        <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Input</h3>
                    <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setInput("")}
                    >
                        Clear
                    </Button>
                </div>
                <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Enter text to ${mode} encode/decode...`}
                    className="min-h-[300px] font-mono"
                />
            </div>

            {/* Output Section */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Output</h3>
                     <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => copyToClipboard(output)}
                    >
                        <Copy className="w-4 h-4 mr-2" /> Copy
                    </Button>
                </div>
                <Textarea
                    value={output}
                    readOnly
                    placeholder="Result will appear here..."
                    className="min-h-[300px] font-mono bg-muted/30"
                />
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
             <Button size="lg" onClick={() => handleProcess("encode")} className="w-32">
                Encode
             </Button>
             <Button size="lg" variant="secondary" onClick={() => handleProcess("decode")} className="w-32">
                Decode
             </Button>
        </div>
      </Tabs>
    </div>
  );
}

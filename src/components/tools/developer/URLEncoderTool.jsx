"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link2, Copy, ArrowDownUp } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function URLEncoderTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    try {
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
      toast.success("URL encoded successfully!");
    } catch (_error) {
      toast.error("Failed to encode URL");
    }
  };

  const decode = () => {
    try {
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
      toast.success("URL decoded successfully!");
    } catch (_error) {
      toast.error("Failed to decode URL - invalid format");
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  const swap = () => {
    const temp = input;
    setInput(output);
    setOutput(temp);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <Tabs defaultValue="encode" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="encode">Encode</TabsTrigger>
          <TabsTrigger value="decode">Decode</TabsTrigger>
        </TabsList>

        <TabsContent value="encode" className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label>Input (Plain Text)</Label>
            <Textarea
              placeholder="Enter text or URL to encode..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[150px] font-mono text-sm"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={encode} className="flex-1">
              <Link2 className="w-4 h-4 mr-2" />
              Encode URL
            </Button>
            <Button variant="outline" onClick={() => { setInput(''); setOutput(''); }}>
              Clear
            </Button>
            {output && (
              <Button variant="outline" onClick={swap}>
                <ArrowDownUp className="w-4 h-4" />
              </Button>
            )}
          </div>

          {output && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Encoded Output</CardTitle>
                  <Button size="sm" variant="outline" onClick={copyOutput}>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-mono text-sm break-all">{output}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="decode" className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label>Input (Encoded URL)</Label>
            <Textarea
              placeholder="Enter encoded URL to decode..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[150px] font-mono text-sm"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={decode} className="flex-1">
              <Link2 className="w-4 h-4 mr-2" />
              Decode URL
            </Button>
            <Button variant="outline" onClick={() => { setInput(''); setOutput(''); }}>
              Clear
            </Button>
            {output && (
              <Button variant="outline" onClick={swap}>
                <ArrowDownUp className="w-4 h-4" />
              </Button>
            )}
          </div>

          {output && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Decoded Output</CardTitle>
                  <Button size="sm" variant="outline" onClick={copyOutput}>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-mono text-sm break-all">{output}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-sm">Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div>
            <p className="font-medium mb-1">Encode:</p>
            <p className="text-muted-foreground font-mono text-xs">
              Input: "Hello World!" → Output: "Hello%20World%21"
            </p>
          </div>
          <div>
            <p className="font-medium mb-1">Decode:</p>
            <p className="text-muted-foreground font-mono text-xs">
              Input: "Hello%20World%21" → Output: "Hello World!"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Copy, Trash2, FileText, BarChart3 } from "lucide-react";
import { toast } from "sonner";

export default function RemoveDuplicatesTool() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [trimWhitespace, setTrimWhitespace] = useState(true);
  const [preserveOrder, setPreserveOrder] = useState(true);
  const [stats, setStats] = useState({
    totalLines: 0,
    uniqueLines: 0,
    duplicatesRemoved: 0,
    percentage: 0
  });

  const removeDuplicates = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to process");
      return;
    }

    const lines = inputText.split('\n');
    const totalLines = lines.length;
    
    let processedLines = lines;
    
    // Trim whitespace if option is enabled
    if (trimWhitespace) {
      processedLines = processedLines.map(line => line.trim());
    }
    
    // Remove duplicates
    const uniqueLines = [];
    const seen = new Set();
    
    for (const line of processedLines) {
      const compareValue = caseSensitive ? line : line.toLowerCase();
      
      if (!seen.has(compareValue)) {
        seen.add(compareValue);
        uniqueLines.push(line);
      }
    }
    
    const duplicatesRemoved = totalLines - uniqueLines.length;
    const percentage = totalLines > 0 ? Math.round((duplicatesRemoved / totalLines) * 100) : 0;
    
    setOutputText(uniqueLines.join('\n'));
    setStats({
      totalLines,
      uniqueLines: uniqueLines.length,
      duplicatesRemoved,
      percentage
    });
    
    toast.success(`Removed ${duplicatesRemoved} duplicate lines!`);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy text");
    }
  };

  const clearAll = () => {
    setInputText("");
    setOutputText("");
    setStats({
      totalLines: 0,
      uniqueLines: 0,
      duplicatesRemoved: 0,
      percentage: 0
    });
    toast.success("Cleared all text");
  };

  const exampleTexts = [
    "apple\nbanana\napple\ncherry\nbanana\ndate\napple",
    "john@example.com\njane@example.com\njohn@example.com\nadmin@example.com\njane@example.com",
    "Product A\nProduct B\nProduct A\nProduct C\nProduct B\nProduct D",
    "Line 1\nLine 2\nLine 1\nLine 3\nLine 2\nLine 4",
    "URL1\nURL2\nURL1\nURL3\nURL2\nURL4\nURL1"
  ];

  const loadExample = (text) => {
    setInputText(text);
    setOutputText("");
    setStats({
      totalLines: 0,
      uniqueLines: 0,
      duplicatesRemoved: 0,
      percentage: 0
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Main Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trash2 className="h-5 w-5" />
            Remove Duplicate Lines Tool
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Options */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Deduplication Options:</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="case-sensitive" 
                  checked={caseSensitive}
                  onCheckedChange={setCaseSensitive}
                />
                <Label htmlFor="case-sensitive" className="cursor-pointer">
                  Case Sensitive
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="trim-whitespace" 
                  checked={trimWhitespace}
                  onCheckedChange={setTrimWhitespace}
                />
                <Label htmlFor="trim-whitespace" className="cursor-pointer">
                  Trim Whitespace
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="preserve-order" 
                  checked={preserveOrder}
                  onCheckedChange={setPreserveOrder}
                />
                <Label htmlFor="preserve-order" className="cursor-pointer">
                  Preserve Order
                </Label>
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="space-y-2">
            <Label htmlFor="input-text" className="text-base font-medium">
              Enter Text with Duplicates:
            </Label>
            <Textarea
              id="input-text"
              placeholder="Paste your text with duplicate lines here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[120px] resize-y"
            />
            <div className="text-sm text-muted-foreground">
              Total Lines: {inputText ? inputText.split('\n').length : 0}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={removeDuplicates}
              className="flex items-center gap-2"
              disabled={!inputText.trim()}
            >
              <Trash2 className="h-4 w-4" />
              Remove Duplicates
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

          {/* Statistics */}
          {stats.totalLines > 0 && (
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="h-4 w-4" />
                <span className="font-medium">Deduplication Statistics</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{stats.totalLines}</div>
                  <div className="text-muted-foreground">Total Lines</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{stats.uniqueLines}</div>
                  <div className="text-muted-foreground">Unique Lines</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-destructive">{stats.duplicatesRemoved}</div>
                  <div className="text-muted-foreground">Duplicates Removed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{stats.percentage}%</div>
                  <div className="text-muted-foreground">Reduction</div>
                </div>
              </div>
            </div>
          )}

          {/* Output Section */}
          {outputText && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Deduplicated Text:</Label>
                <Button
                  onClick={() => copyToClipboard(outputText)}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy Result
                </Button>
              </div>
              <Textarea
                value={outputText}
                readOnly
                className="min-h-[120px] bg-muted font-mono"
              />
              <div className="text-sm text-muted-foreground">
                Unique Lines: {outputText ? outputText.split('\n').length : 0}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Example Texts */}
      <Card>
        <CardHeader>
          <CardTitle>Example Text Lists</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button
              onClick={() => loadExample(exampleTexts[0])}
              variant="outline"
              className="justify-start text-left h-auto p-3"
            >
              <div>
                <div className="font-medium">Fruit List</div>
                <div className="text-sm text-muted-foreground">apple, banana, apple, cherry...</div>
              </div>
            </Button>
            <Button
              onClick={() => loadExample(exampleTexts[1])}
              variant="outline"
              className="justify-start text-left h-auto p-3"
            >
              <div>
                <div className="font-medium">Email Addresses</div>
                <div className="text-sm text-muted-foreground">john@example.com, jane@example.com...</div>
              </div>
            </Button>
            <Button
              onClick={() => loadExample(exampleTexts[2])}
              variant="outline"
              className="justify-start text-left h-auto p-3"
            >
              <div>
                <div className="font-medium">Product Names</div>
                <div className="text-sm text-muted-foreground">Product A, Product B, Product A...</div>
              </div>
            </Button>
            <Button
              onClick={() => loadExample(exampleTexts[3])}
              variant="outline"
              className="justify-start text-left h-auto p-3"
            >
              <div>
                <div className="font-medium">Text Lines</div>
                <div className="text-sm text-muted-foreground">Line 1, Line 2, Line 1...</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Deduplication Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Deduplication Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2 text-primary">Case Sensitive Deduplication:</h3>
              <div className="bg-muted p-3 rounded font-mono text-sm space-y-2">
                <div><strong>Input:</strong></div>
                <div className="ml-4">Apple<br/>apple<br/>APPLE<br/>Banana<br/>apple</div>
                <div><strong>Output:</strong></div>
                <div className="ml-4">Apple<br/>apple<br/>APPLE<br/>Banana</div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2 text-primary">Case Insensitive Deduplication:</h3>
              <div className="bg-muted p-3 rounded font-mono text-sm space-y-2">
                <div><strong>Input:</strong></div>
                <div className="ml-4">Apple<br/>apple<br/>APPLE<br/>Banana<br/>apple</div>
                <div><strong>Output:</strong></div>
                <div className="ml-4">Apple<br/>Banana</div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2 text-primary">Whitespace Trimming:</h3>
              <div className="bg-muted p-3 rounded font-mono text-sm space-y-2">
                <div><strong>Input:</strong></div>
                <div className="ml-4">"  Apple  "<br/>"Apple"<br/>" Apple"<br/>"  Apple"</div>
                <div><strong>Output (with trimming):</strong></div>
                <div className="ml-4">Apple</div>
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
                <li>• Case-sensitive and insensitive duplicate detection</li>
                <li>• Whitespace trimming before comparison</li>
                <li>• Preserve original line order</li>
                <li>• Real-time statistics and feedback</li>
                <li>• Handle large text files efficiently</li>
                <li>• One-click copy to clipboard</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-primary">🔧 Use Cases:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Clean CSV and Excel data</li>
                <li>• Remove duplicate email addresses</li>
                <li>• Deduplicate customer lists</li>
                <li>• Clean log files and output</li>
                <li>• Organize inventory and product lists</li>
                <li>• Process scraped web data</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
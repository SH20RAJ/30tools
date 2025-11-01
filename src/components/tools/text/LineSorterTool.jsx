"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Copy, ArrowUpDown, FileText, BarChart3 } from "lucide-react";
import { toast } from "sonner";

export default function LineSorterTool() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [sortMethod, setSortMethod] = useState("alphabetical");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [removeEmpty, setRemoveEmpty] = useState(false);
  const [removeDuplicates, setRemoveDuplicates] = useState(false);

  const sortLines = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to sort");
      return;
    }

    let lines = inputText.split('\n');
    
    // Remove empty lines if option is enabled
    if (removeEmpty) {
      lines = lines.filter(line => line.trim() !== '');
    }
    
    // Remove duplicates if option is enabled
    if (removeDuplicates) {
      const uniqueLines = [];
      const seen = new Set();
      
      for (const line of lines) {
        const compareValue = caseSensitive ? line : line.toLowerCase();
        if (!seen.has(compareValue)) {
          seen.add(compareValue);
          uniqueLines.push(line);
        }
      }
      lines = uniqueLines;
    }
    
    // Sort lines based on selected method
    let sortedLines = [...lines];
    
    switch (sortMethod) {
      case 'alphabetical':
        sortedLines.sort((a, b) => {
          const strA = caseSensitive ? a : a.toLowerCase();
          const strB = caseSensitive ? b : b.toLowerCase();
          return strA.localeCompare(strB);
        });
        break;
        
      case 'numerical':
        sortedLines.sort((a, b) => {
          const numA = parseFloat(a) || 0;
          const numB = parseFloat(b) || 0;
          return numA - numB;
        });
        break;
        
      case 'length':
        sortedLines.sort((a, b) => a.length - b.length);
        break;
        
      case 'natural':
        sortedLines.sort((a, b) => {
          return a.localeCompare(b, undefined, { numeric: true, sensitivity: caseSensitive ? 'case' : 'base' });
        });
        break;
        
      case 'random':
        for (let i = sortedLines.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [sortedLines[i], sortedLines[j]] = [sortedLines[j], sortedLines[i]];
        }
        break;
        
      default:
        break;
    }
    
    // Apply sort order
    if (sortOrder === 'descending' && sortMethod !== 'random') {
      sortedLines.reverse();
    }
    
    setOutputText(sortedLines.join('\n'));
    toast.success(`Sorted ${sortedLines.length} lines ${sortOrder === 'ascending' ? 'ascending' : 'descending'}!`);
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
    toast.success("Cleared all text");
  };

  const reverseLines = () => {
    if (!outputText) {
      toast.error("No sorted text to reverse");
      return;
    }
    
    const reversed = outputText.split('\n').reverse().join('\n');
    setOutputText(reversed);
    toast.success("Lines reversed!");
  };

  const exampleTexts = [
    "Zebra\nApple\nMonkey\nBanana\nCat\nDog",
    "100\n5\n25\n3\n50\n1",
    "Very long sentence here\nHi\nMedium length text\nShort\nA\nSomewhat longer text",
    "item10\nitem2\nitem1\nitem20\nitem3",
    "John Smith\nJane Doe\nBob Johnson\nAlice Brown\nCharlie Wilson"
  ];

  const loadExample = (text) => {
    setInputText(text);
    setOutputText("");
  };

  const getInputStats = () => {
    if (!inputText) return { lines: 0, chars: 0, words: 0 };
    const lines = inputText.split('\n');
    return {
      lines: lines.length,
      chars: inputText.length,
      words: inputText.trim() ? inputText.trim().split(/\s+/).length : 0
    };
  };

  const getOutputStats = () => {
    if (!outputText) return { lines: 0, chars: 0, words: 0 };
    const lines = outputText.split('\n');
    return {
      lines: lines.length,
      chars: outputText.length,
      words: outputText.trim() ? outputText.trim().split(/\s+/).length : 0
    };
  };

  const inputStats = getInputStats();
  const outputStats = getOutputStats();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Main Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowUpDown className="h-5 w-5" />
            Line Sorter Tool
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sort Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label className="text-base font-medium">Sorting Method:</Label>
              <Select value={sortMethod} onValueChange={setSortMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sorting method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alphabetical">Alphabetical (A-Z)</SelectItem>
                  <SelectItem value="numerical">Numerical (1-100)</SelectItem>
                  <SelectItem value="length">By Length</SelectItem>
                  <SelectItem value="natural">Natural Sort</SelectItem>
                  <SelectItem value="random">Random Shuffle</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <Label className="text-base font-medium">Sort Order:</Label>
              <Select value={sortOrder} onValueChange={setSortOrder} disabled={sortMethod === 'random'}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ascending">Ascending</SelectItem>
                  <SelectItem value="descending">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Options */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Additional Options:</Label>
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
                  id="remove-empty" 
                  checked={removeEmpty}
                  onCheckedChange={setRemoveEmpty}
                />
                <Label htmlFor="remove-empty" className="cursor-pointer">
                  Remove Empty Lines
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remove-duplicates" 
                  checked={removeDuplicates}
                  onCheckedChange={setRemoveDuplicates}
                />
                <Label htmlFor="remove-duplicates" className="cursor-pointer">
                  Remove Duplicates
                </Label>
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="space-y-2">
            <Label htmlFor="input-text" className="text-base font-medium">
              Enter Text Lines to Sort:
            </Label>
            <Textarea
              id="input-text"
              placeholder="Enter each item on a new line..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[120px] resize-y"
            />
            <div className="text-sm text-muted-foreground">
              Lines: {inputStats.lines} | Characters: {inputStats.chars} | Words: {inputStats.words}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={sortLines}
              className="flex items-center gap-2"
              disabled={!inputText.trim()}
            >
              <ArrowUpDown className="h-4 w-4" />
              Sort Lines
            </Button>
            
            <Button 
              onClick={reverseLines}
              variant="outline"
              className="flex items-center gap-2"
              disabled={!outputText}
            >
              <ArrowUpDown className="h-4 w-4 rotate-180" />
              Reverse Order
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
          {outputText && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Sorted Lines:</Label>
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
                Lines: {outputStats.lines} | Characters: {outputStats.chars} | Words: {outputStats.words}
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
                <div className="font-medium">Animals List</div>
                <div className="text-sm text-muted-foreground">Zebra, Apple, Monkey, Banana...</div>
              </div>
            </Button>
            <Button
              onClick={() => loadExample(exampleTexts[1])}
              variant="outline"
              className="justify-start text-left h-auto p-3"
            >
              <div>
                <div className="font-medium">Numbers</div>
                <div className="text-sm text-muted-foreground">100, 5, 25, 3, 50, 1</div>
              </div>
            </Button>
            <Button
              onClick={() => loadExample(exampleTexts[2])}
              variant="outline"
              className="justify-start text-left h-auto p-3"
            >
              <div>
                <div className="font-medium">Different Lengths</div>
                <div className="text-sm text-muted-foreground">Various length text lines...</div>
              </div>
            </Button>
            <Button
              onClick={() => loadExample(exampleTexts[3])}
              variant="outline"
              className="justify-start text-left h-auto p-3"
            >
              <div>
                <div className="font-medium">Natural Sort Test</div>
                <div className="text-sm text-muted-foreground">item10, item2, item1, item20...</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sorting Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Sorting Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 text-primary">Alphabetical Sort (A-Z):</h3>
                <div className="bg-muted p-3 rounded font-mono text-sm space-y-2">
                  <div><strong>Before:</strong> Zebra, Apple, Monkey</div>
                  <div><strong>After:</strong> Apple, Monkey, Zebra</div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 text-primary">Numerical Sort (1-100):</h3>
                <div className="bg-muted p-3 rounded font-mono text-sm space-y-2">
                  <div><strong>Before:</strong> 100, 5, 25, 3</div>
                  <div><strong>After:</strong> 3, 5, 25, 100</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 text-primary">Length Sort (Short to Long):</h3>
                <div className="bg-muted p-3 rounded font-mono text-sm space-y-2">
                  <div><strong>Before:</strong> Very long, Hi, Medium</div>
                  <div><strong>After:</strong> Hi, Medium, Very long</div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 text-primary">Natural Sort:</h3>
                <div className="bg-muted p-3 rounded font-mono text-sm space-y-2">
                  <div><strong>Before:</strong> item10, item2, item1</div>
                  <div><strong>After:</strong> item1, item2, item10</div>
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
              <h3 className="font-medium text-primary">✨ Sorting Options:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Alphabetical sorting (A-Z, Z-A)</li>
                <li>• Numerical sorting for numbers</li>
                <li>• Length-based sorting</li>
                <li>• Natural sorting for mixed content</li>
                <li>• Random shuffle option</li>
                <li>• Case-sensitive/insensitive options</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-primary">🔧 Advanced Features:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Remove empty lines automatically</li>
                <li>• Remove duplicate entries while sorting</li>
                <li>• Reverse sort order with one click</li>
                <li>• Real-time statistics display</li>
                <li>• Handle large text files efficiently</li>
                <li>• Unicode and special character support</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
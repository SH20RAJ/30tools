'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Copy, 
  Download, 
  RotateCcw, 
  Filter,
  Check,
  Trash,
  ArrowUpDown,
  FileText,
  AlertTriangle,
  Info
} from 'lucide-react';
import { toast } from 'sonner';

export default function DuplicateLineRemoverTool() {
  const [inputText, setInputText] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [sortOutput, setSortOutput] = useState(false);
  const [keepFirst, setKeepFirst] = useState(true);
  const [removeEmpty, setRemoveEmpty] = useState(true);
  const [copied, setCopied] = useState(false);

  // Process the text to remove duplicates
  const processedData = useMemo(() => {
    if (!inputText.trim()) {
      return {
        originalLines: [],
        uniqueLines: [],
        duplicateLines: [],
        removedCount: 0,
        keptCount: 0
      };
    }

    // Split into lines
    const lines = inputText.split('\n');
    const originalCount = lines.length;

    // Filter empty lines if requested
    let filteredLines = removeEmpty 
      ? lines.filter(line => line.trim() !== '') 
      : lines;

    // Track duplicates
    const seen = new Set();
    const duplicates = new Set();
    const unique = [];
    
    filteredLines.forEach(line => {
      const processedLine = caseSensitive ? line : line.toLowerCase();
      
      if (seen.has(processedLine)) {
        duplicates.add(line);
      } else {
        seen.add(processedLine);
        unique.push(line);
      }
    });

    // Sort if requested
    let result = unique;
    if (sortOutput) {
      result = [...unique].sort((a, b) => {
        if (caseSensitive) {
          return a.localeCompare(b);
        }
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
    }

    return {
      originalLines: lines,
      uniqueLines: result,
      duplicateLines: Array.from(duplicates),
      removedCount: originalCount - result.length,
      keptCount: result.length,
      emptyRemoved: removeEmpty ? lines.filter(line => line.trim() === '').length : 0
    };
  }, [inputText, caseSensitive, sortOutput, keepFirst, removeEmpty]);

  const outputText = processedData.uniqueLines.join('\n');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      toast.success('Text copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy text to clipboard');
    }
  };

  const downloadText = () => {
    try {
      const blob = new Blob([outputText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'deduplicated-text.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('File downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download file');
    }
  };

  const clearAll = () => {
    setInputText('');
    setCopied(false);
    toast.success('Text cleared!');
  };

  const loadSampleText = () => {
    const sample = `apple
banana
apple
orange
banana
grape
apple
mango
orange
kiwi
banana
apple`;
    setInputText(sample);
    toast.success('Sample text loaded!');
  };

  return (
    <div className="min-h-screen bg-gradient-cute py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Filter className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Duplicate Line Remover
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Remove duplicate lines from text and lists. Clean your data by removing repeated entries with options for case sensitivity and sorting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="card-cute">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Input Text</span>
                </CardTitle>
                <CardDescription>
                  Paste your text with duplicate lines that you want to clean
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste your text here... Each line will be checked for duplicates."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[300px] font-mono text-sm"
                />
                
                <div className="flex flex-wrap gap-2">
                  <Button onClick={loadSampleText} variant="outline" size="sm">
                    Load Sample
                  </Button>
                  <Button onClick={clearAll} variant="outline" size="sm">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Clear All
                  </Button>
                </div>

                {inputText && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline">
                      {processedData.originalLines.length} total lines
                    </Badge>
                    {processedData.emptyRemoved > 0 && (
                      <Badge variant="outline">
                        {processedData.emptyRemoved} empty lines
                      </Badge>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Options */}
            <Card className="card-cute">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>Processing Options</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="caseSensitive"
                      checked={caseSensitive}
                      onChange={(e) => setCaseSensitive(e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="caseSensitive" className="text-sm">
                      Case sensitive comparison
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="sortOutput"
                      checked={sortOutput}
                      onChange={(e) => setSortOutput(e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="sortOutput" className="text-sm">
                      Sort output alphabetically
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="removeEmpty"
                      checked={removeEmpty}
                      onChange={(e) => setRemoveEmpty(e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="removeEmpty" className="text-sm">
                      Remove empty lines
                    </Label>
                  </div>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Info className="w-4 h-4 mr-2" />
                    Options Explained
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• <strong>Case sensitive:</strong> "Apple" and "apple" are different</li>
                    <li>• <strong>Sort output:</strong> Arrange lines in alphabetical order</li>
                    <li>• <strong>Remove empty:</strong> Delete blank lines from input</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <Card className="card-cute">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Check className="w-5 h-5" />
                    <span>Clean Output</span>
                  </span>
                  <div className="flex space-x-2">
                    <Button onClick={copyToClipboard} size="sm" variant="outline">
                      {copied ? (
                        <Check className="w-4 h-4 mr-2" />
                      ) : (
                        <Copy className="w-4 h-4 mr-2" />
                      )}
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                    <Button onClick={downloadText} size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  Text with duplicate lines removed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={outputText}
                  readOnly
                  className="min-h-[300px] font-mono text-sm bg-muted"
                  placeholder="Processed text will appear here..."
                />

                {processedData.uniqueLines.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {processedData.keptCount}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        Unique Lines Kept
                      </div>
                    </div>
                    <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {processedData.removedCount}
                      </div>
                      <div className="text-xs text-red-600 dark:text-red-400">
                        Duplicate Lines Removed
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Statistics */}
            {processedData.uniqueLines.length > 0 && (
              <Card className="card-cute">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Processing Statistics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Original lines:</span>
                      <Badge variant="outline">{processedData.originalLines.length}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Unique lines:</span>
                      <Badge variant="default">{processedData.keptCount}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Duplicates removed:</span>
                      <Badge variant="destructive">{processedData.removedCount}</Badge>
                    </div>
                    {processedData.emptyRemoved > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Empty lines removed:</span>
                        <Badge variant="secondary">{processedData.emptyRemoved}</Badge>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Reduction:</span>
                      <Badge variant="outline">
                        {processedData.originalLines.length > 0 
                          ? Math.round((processedData.removedCount / processedData.originalLines.length) * 100)
                          : 0}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Duplicate Lines Preview */}
            {processedData.duplicateLines.length > 0 && (
              <Card className="card-cute">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trash className="w-5 h-5" />
                    <span>Removed Duplicates</span>
                  </CardTitle>
                  <CardDescription>
                    Lines that were found as duplicates and removed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-h-40 overflow-y-auto bg-muted rounded-lg p-3">
                    <div className="space-y-1">
                      {processedData.duplicateLines.slice(0, 10).map((line, index) => (
                        <div key={index} className="text-sm font-mono text-muted-foreground">
                          {line || '(empty line)'}
                        </div>
                      ))}
                      {processedData.duplicateLines.length > 10 && (
                        <div className="text-xs text-muted-foreground italic">
                          ... and {processedData.duplicateLines.length - 10} more
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Features */}
        <Card className="card-cute mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Features</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Filter className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-medium mb-2">Smart Detection</h4>
                <p className="text-sm text-muted-foreground">Accurately identifies and removes duplicate lines</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ArrowUpDown className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-medium mb-2">Flexible Options</h4>
                <p className="text-sm text-muted-foreground">Case sensitivity, sorting, and empty line handling</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Copy className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-medium mb-2">Easy Export</h4>
                <p className="text-sm text-muted-foreground">Copy to clipboard or download as text file</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-medium mb-2">Statistics</h4>
                <p className="text-sm text-muted-foreground">Detailed stats on duplicates found and removed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
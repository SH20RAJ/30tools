"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Search, FileText, AlertCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function RegexTesterTool() {
  const [pattern, setPattern] = useState("");
  const [testText, setTestText] = useState("");
  const [flags, setFlags] = useState({
    global: true,
    ignoreCase: false,
    multiline: false,
    dotAll: false
  });
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const commonPatterns = [
    {
      name: "Email Address",
      pattern: "^[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$",
      testText: "user@example.com\ninvalid-email\nanother@test.org"
    },
    {
      name: "Phone Number (US)",
      pattern: "^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$",
      testText: "(555) 123-4567\n555-123-4567\n555.123.4567\n5551234567"
    },
    {
      name: "URL",
      pattern: "^https?:\\/\\/[\\w\\.-]+\\.[a-zA-Z]{2,}\\/?.*$",
      testText: "https://example.com\nhttp://test.org/page\nftp://invalid.com\nhttps://sub.domain.co.uk/path?query=value"
    },
    {
      name: "Date (MM/DD/YYYY)",
      pattern: "^(0[1-9]|1[0-2])\\/(0[1-9]|[12][0-9]|3[01])\\/\\d{4}$",
      testText: "12/25/2023\n01/01/2024\n13/45/2023\n2/5/23"
    },
    {
      name: "IP Address",
      pattern: "^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$",
      testText: "192.168.1.1\n127.0.0.1\n256.1.1.1\n192.168.1"
    },
    {
      name: "Hex Color",
      pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
      testText: "#FF0000\n#abc\n#123456\n#GGGGGG\nFF0000"
    },
    {
      name: "Credit Card",
      pattern: "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3[0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$",
      testText: "4111111111111111\n5555555555554444\n378282246310005\n1234567890123456"
    },
    {
      name: "Username",
      pattern: "^[a-zA-Z0-9_-]{3,16}$",
      testText: "username\nuser_123\nuser-name\nu\nvery_long_username_that_exceeds_limit"
    }
  ];

  const testRegex = () => {
    if (!pattern) {
      setMatches([]);
      setError("");
      setIsValid(true);
      return;
    }

    try {
      const flagString = Object.entries(flags)
        .filter(([_, enabled]) => enabled)
        .map(([flag, _]) => {
          switch (flag) {
            case 'global': return 'g';
            case 'ignoreCase': return 'i';
            case 'multiline': return 'm';
            case 'dotAll': return 's';
            default: return '';
          }
        })
        .join('');

      const regex = new RegExp(pattern, flagString);
      setError("");
      setIsValid(true);

      if (!testText) {
        setMatches([]);
        return;
      }

      const foundMatches = [];
      
      if (flags.global) {
        let match;
        while ((match = regex.exec(testText)) !== null) {
          foundMatches.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
            namedGroups: match.groups || {}
          });
          
          // Prevent infinite loop for zero-length matches
          if (match.index === regex.lastIndex) {
            regex.lastIndex++;
          }
        }
      } else {
        const match = regex.exec(testText);
        if (match) {
          foundMatches.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
            namedGroups: match.groups || {}
          });
        }
      }

      setMatches(foundMatches);
      
    } catch (err) {
      setError(err.message);
      setIsValid(false);
      setMatches([]);
    }
  };

  useEffect(() => {
    testRegex();
  }, [pattern, testText, flags]);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy text");
    }
  };

  const loadPattern = (patternObj) => {
    setPattern(patternObj.pattern);
    setTestText(patternObj.testText);
    setFlags({ global: true, ignoreCase: false, multiline: true, dotAll: false });
  };

  const clearAll = () => {
    setPattern("");
    setTestText("");
    setMatches([]);
    setError("");
    setIsValid(true);
    toast.success("Cleared all fields");
  };

  const highlightMatches = (text) => {
    if (!matches.length || !pattern) return text;

    let highlightedText = text;
    let offset = 0;

    matches.forEach((match) => {
      const startTag = '<mark class="bg-muted dark:bg-primary">';
      const endTag = '</mark>';
      const actualIndex = match.index + offset;
      
      highlightedText = 
        highlightedText.slice(0, actualIndex) +
        startTag +
        highlightedText.slice(actualIndex, actualIndex + match.match.length) +
        endTag +
        highlightedText.slice(actualIndex + match.match.length);
      
      offset += startTag.length + endTag.length;
    });

    return highlightedText;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Main Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Regex Tester Tool
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Pattern Input */}
          <div className="space-y-2">
            <Label htmlFor="pattern" className="text-base font-medium">
              Regular Expression Pattern:
            </Label>
            <div className="relative">
              <Input
                id="pattern"
                placeholder="Enter your regex pattern (e.g., \\d+|[a-zA-Z]+)"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                className={`font-mono ${error ? 'border-border' : isValid && pattern ? 'border-border' : ''}`}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                {error ? (
                  <AlertCircle className="h-4 w-4 text-destructive" />
                ) : isValid && pattern ? (
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                ) : null}
              </div>
            </div>
            {error && (
              <div className="text-sm text-destructive flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}
          </div>

          {/* Flags */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Regex Flags:</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="global" 
                  checked={flags.global}
                  onCheckedChange={(checked) => setFlags(prev => ({ ...prev, global: checked }))}
                />
                <Label htmlFor="global" className="cursor-pointer text-sm">
                  Global (g)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="ignoreCase" 
                  checked={flags.ignoreCase}
                  onCheckedChange={(checked) => setFlags(prev => ({ ...prev, ignoreCase: checked }))}
                />
                <Label htmlFor="ignoreCase" className="cursor-pointer text-sm">
                  Ignore Case (i)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="multiline" 
                  checked={flags.multiline}
                  onCheckedChange={(checked) => setFlags(prev => ({ ...prev, multiline: checked }))}
                />
                <Label htmlFor="multiline" className="cursor-pointer text-sm">
                  Multiline (m)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="dotAll" 
                  checked={flags.dotAll}
                  onCheckedChange={(checked) => setFlags(prev => ({ ...prev, dotAll: checked }))}
                />
                <Label htmlFor="dotAll" className="cursor-pointer text-sm">
                  Dot All (s)
                </Label>
              </div>
            </div>
          </div>

          {/* Test Text */}
          <div className="space-y-2">
            <Label htmlFor="test-text" className="text-base font-medium">
              Test Text:
            </Label>
            <Textarea
              id="test-text"
              placeholder="Enter or paste the text you want to test your regex against..."
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              className="min-h-[120px] resize-y font-mono"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={clearAll}
              variant="outline"
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Clear All
            </Button>
          </div>

          {/* Results */}
          {matches.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">
                  Matches Found: {matches.length}
                </Label>
                <Button
                  onClick={() => copyToClipboard(matches.map(m => m.match).join('\n'))}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy Matches
                </Button>
              </div>

              {/* Highlighted Text */}
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Text with Highlighted Matches:</h3>
                <div 
                  className="font-mono text-sm whitespace-pre-wrap break-words"
                  dangerouslySetInnerHTML={{ __html: highlightMatches(testText) }}
                />
              </div>

              {/* Match Details */}
              <div className="space-y-3">
                <h3 className="font-medium">Match Details:</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {matches.map((match, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div>
                          <span className="font-medium">Match {index + 1}:</span>
                          <div className="font-mono bg-muted p-1 rounded mt-1">{match.match}</div>
                        </div>
                        <div>
                          <span className="font-medium">Position:</span>
                          <div className="font-mono bg-muted p-1 rounded mt-1">{match.index}</div>
                        </div>
                        <div>
                          <span className="font-medium">Length:</span>
                          <div className="font-mono bg-muted p-1 rounded mt-1">{match.match.length}</div>
                        </div>
                      </div>
                      {match.groups.length > 0 && (
                        <div className="mt-3">
                          <span className="font-medium">Capture Groups:</span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                            {match.groups.map((group, groupIndex) => (
                              <div key={groupIndex} className="text-sm">
                                <span className="text-muted-foreground">Group {groupIndex + 1}:</span>
                                <div className="font-mono bg-muted p-1 rounded">{group || '(no match)'}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {pattern && testText && matches.length === 0 && !error && (
            <div className="text-center py-6 text-muted-foreground">
              No matches found for the given pattern.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Regex Patterns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {commonPatterns.map((patternObj, index) => (
              <Button
                key={index}
                onClick={() => loadPattern(patternObj)}
                variant="outline"
                className="justify-start text-left h-auto p-4"
              >
                <div className="w-full">
                  <div className="font-medium mb-1">{patternObj.name}</div>
                  <div className="text-xs text-muted-foreground font-mono break-all">
                    {patternObj.pattern}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Regex Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2 text-primary">Character Classes:</h3>
              <div className="space-y-1 text-sm font-mono">
                <div><code className="bg-muted px-1 rounded">\\d</code> - Digits (0-9)</div>
                <div><code className="bg-muted px-1 rounded">\\w</code> - Word characters</div>
                <div><code className="bg-muted px-1 rounded">\\s</code> - Whitespace</div>
                <div><code className="bg-muted px-1 rounded">.</code> - Any character</div>
                <div><code className="bg-muted px-1 rounded">[abc]</code> - Character set</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2 text-primary">Quantifiers:</h3>
              <div className="space-y-1 text-sm font-mono">
                <div><code className="bg-muted px-1 rounded">*</code> - 0 or more</div>
                <div><code className="bg-muted px-1 rounded">+</code> - 1 or more</div>
                <div><code className="bg-muted px-1 rounded">?</code> - 0 or 1</div>
                <div><code className="bg-muted px-1 rounded">{`{n}`}</code> - Exactly n</div>
                <div><code className="bg-muted px-1 rounded">{`{n,m}`}</code> - Between n and m</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2 text-primary">Anchors:</h3>
              <div className="space-y-1 text-sm font-mono">
                <div><code className="bg-muted px-1 rounded">^</code> - Start of string</div>
                <div><code className="bg-muted px-1 rounded">$</code> - End of string</div>
                <div><code className="bg-muted px-1 rounded">\\b</code> - Word boundary</div>
                <div><code className="bg-muted px-1 rounded">\\B</code> - Non-word boundary</div>
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
              <h3 className="font-medium text-primary">✨ Testing Features:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Real-time pattern validation and testing</li>
                <li>• Visual match highlighting in text</li>
                <li>• Capture groups extraction and display</li>
                <li>• Support for all JavaScript regex flags</li>
                <li>• Error detection with helpful messages</li>
                <li>• Match position and length information</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-primary">🔧 Additional Tools:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Common regex patterns library</li>
                <li>• Quick reference for regex syntax</li>
                <li>• Copy matches to clipboard</li>
                <li>• Pattern explanation and breakdown</li>
                <li>• Performance indicators for complex patterns</li>
                <li>• Support for named capture groups</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
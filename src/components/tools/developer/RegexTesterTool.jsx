"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeftIcon,
  TestTubeIcon,
  CopyIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  CodeIcon,
  SearchIcon,
  BookOpenIcon,
  ZapIcon,
  TargetIcon,
  WandIcon,
} from "lucide-react";
import Link from "next/link";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

export default function RegexTesterTool() {
  const [pattern, setPattern] = useState("");
  const [testString, setTestString] = useState("");
  const [flags, setFlags] = useState({
    global: true,
    ignoreCase: false,
    multiline: false,
    dotAll: false,
    unicode: false,
    sticky: false,
  });
  const [matches, setMatches] = useState([]);
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const commonPatterns = [
    {
      name: "Email Address",
      pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
      description: "Matches most email addresses",
      testString: "Contact me at john@example.com or support@mysite.org",
    },
    {
      name: "Phone Number (US)",
      pattern: "\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})",
      description: "US phone numbers in various formats",
      testString: "Call (555) 123-4567 or 555.123.4567 or 555 123 4567",
    },
    {
      name: "URL/Website",
      pattern:
        "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)",
      description: "HTTP and HTTPS URLs",
      testString:
        "Visit https://www.example.com or http://subdomain.site.org/path",
    },
    {
      name: "IPv4 Address",
      pattern:
        "\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b",
      description: "Valid IPv4 addresses",
      testString: "Server IPs: 192.168.1.1, 10.0.0.1, 172.16.0.1, 8.8.8.8",
    },
    {
      name: "Credit Card Number",
      pattern: "\\b(?:\\d{4}[-\\s]?){3}\\d{4}\\b",
      description: "Credit card numbers with optional separators",
      testString:
        "4532-1234-5678-9012 or 4532 1234 5678 9012 or 4532123456789012",
    },
    {
      name: "Date (MM/DD/YYYY)",
      pattern:
        "\\b(0?[1-9]|1[0-2])\\/(0?[1-9]|[12][0-9]|3[01])\\/(19|20)\\d{2}\\b",
      description: "US date format MM/DD/YYYY",
      testString: "Important dates: 12/25/2023, 1/1/2024, 07/04/2024",
    },
    {
      name: "HTML Tags",
      pattern: "<\\/?[a-z][a-z0-9]*[^<>]*>",
      description: "HTML opening and closing tags",
      testString:
        '<div class="container"><p>Hello <strong>world</strong>!</p></div>',
    },
    {
      name: "Hexadecimal Color",
      pattern: "#(?:[0-9a-fA-F]{3}){1,2}\\b",
      description: "3 or 6 digit hex color codes",
      testString: "Colors: #fff, #000000, #ff5733, #3498db, #2ecc71",
    },
  ];

  useEffect(() => {
    testRegex();
  }, [pattern, testString, flags]);

  const testRegex = () => {
    if (!pattern) {
      setMatches([]);
      setIsValid(null);
      setError("");
      return;
    }

    try {
      const flagString = Object.entries(flags)
        .filter(([_, enabled]) => enabled)
        .map(([flag, _]) => {
          switch (flag) {
            case "global":
              return "g";
            case "ignoreCase":
              return "i";
            case "multiline":
              return "m";
            case "dotAll":
              return "s";
            case "unicode":
              return "u";
            case "sticky":
              return "y";
            default:
              return "";
          }
        })
        .join("");

      const regex = new RegExp(pattern, flagString);
      setIsValid(true);
      setError("");

      if (!testString) {
        setMatches([]);
        return;
      }

      const foundMatches = [];
      let match;

      if (flags.global) {
        while ((match = regex.exec(testString)) !== null) {
          foundMatches.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
            input: testString,
          });

          // Prevent infinite loop on zero-length matches
          if (match.index === regex.lastIndex) {
            regex.lastIndex++;
          }
        }
      } else {
        match = regex.exec(testString);
        if (match) {
          foundMatches.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
            input: testString,
          });
        }
      }

      setMatches(foundMatches);
    } catch (_err) {
      setIsValid(false);
      setError(err.message);
      setMatches([]);
    }
  };

  const loadPattern = (patternData) => {
    setPattern(patternData.pattern);
    setTestString(patternData.testString);
    setFlags({ ...flags, global: true, ignoreCase: false });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightMatches = (text) => {
    if (!matches.length || !text) return text;

    let highlighted = text;
    const sortedMatches = [...matches].sort((a, b) => b.index - a.index);

    sortedMatches.forEach((match, index) => {
      const start = match.index;
      const end = start + match.match.length;
      const before = highlighted.substring(0, start);
      const matchText = highlighted.substring(start, end);
      const after = highlighted.substring(end);

      highlighted =
        before +
        `<mark class="bg-muted px-1 rounded">${matchText}</mark>` +
        after;
    });

    return highlighted;
  };

  const generateCodeSnippet = (language) => {
    const flagString = Object.entries(flags)
      .filter(([_, enabled]) => enabled)
      .map(([flag, _]) => {
        switch (flag) {
          case "global":
            return "g";
          case "ignoreCase":
            return "i";
          case "multiline":
            return "m";
          case "dotAll":
            return "s";
          case "unicode":
            return "u";
          case "sticky":
            return "y";
          default:
            return "";
        }
      })
      .join("");

    switch (language) {
      case "javascript":
        return `const regex = /${pattern}/${flagString};
const text = "${testString}";
const matches = text.match(regex);
console.log(matches);`;

      case "python":
        const pythonFlags = [];
        if (flags.ignoreCase) pythonFlags.push("re.IGNORECASE");
        if (flags.multiline) pythonFlags.push("re.MULTILINE");
        if (flags.dotAll) pythonFlags.push("re.DOTALL");
        const flagsStr = pythonFlags.length
          ? `, ${pythonFlags.join(" | ")}`
          : "";

        return `import re

pattern = r"${pattern}"
text = "${testString}"
matches = re.findall(pattern, text${flagsStr})
print(matches)`;

      case "php":
        const phpFlags = [];
        if (flags.ignoreCase) phpFlags.push("i");
        if (flags.multiline) phpFlags.push("m");
        if (flags.dotAll) phpFlags.push("s");
        const phpFlagStr = phpFlags.join("");

        return `<?php
$pattern = '/${pattern}/${phpFlagStr}';
$text = "${testString}";
preg_match_all($pattern, $text, $matches);
print_r($matches[0]);
?>`;

      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
          <TestTubeIcon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Regex Tester</h1>
          <p className="text-muted-foreground">
            Test and debug regular expressions with real-time matching and
            explanations
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Real-time Testing</Badge>
        <Badge variant="secondary">Common Patterns</Badge>
        <Badge variant="secondary">Code Generation</Badge>
        <Badge variant="secondary">Match Highlighting</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Testing Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Pattern Input */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CodeIcon className="h-5 w-5" />
                Regular Expression Pattern
              </CardTitle>
              <CardDescription>
                Enter your regex pattern to test against the input text
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="pattern">Pattern</Label>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">/</span>
                  <Input
                    id="pattern"
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                    placeholder="Enter your regex pattern here..."
                    className="font-mono input-cute"
                  />
                  <span className="text-muted-foreground">/</span>
                  <span className="text-sm text-muted-foreground min-w-fit">
                    {Object.entries(flags)
                      .filter(([_, enabled]) => enabled)
                      .map(([flag, _]) => {
                        switch (flag) {
                          case "global":
                            return "g";
                          case "ignoreCase":
                            return "i";
                          case "multiline":
                            return "m";
                          case "dotAll":
                            return "s";
                          case "unicode":
                            return "u";
                          case "sticky":
                            return "y";
                          default:
                            return "";
                        }
                      })
                      .join("")}
                  </span>
                </div>
              </div>

              {/* Flags */}
              <div>
                <Label className="text-sm font-medium">Flags</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {Object.entries(flags).map(([flag, enabled]) => (
                    <div key={flag} className="flex items-center space-x-2">
                      <Checkbox
                        id={flag}
                        checked={enabled}
                        onCheckedChange={(checked) =>
                          setFlags((prev) => ({ ...prev, [flag]: checked }))
                        }
                      />
                      <Label htmlFor={flag} className="text-sm capitalize">
                        {flag === "ignoreCase"
                          ? "Ignore Case"
                          : flag === "dotAll"
                            ? "Dot All"
                            : flag}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              {isValid === false && error && (
                <Alert>
                  <AlertCircleIcon className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Invalid Pattern:</strong> {error}
                  </AlertDescription>
                </Alert>
              )}

              {isValid === true && (
                <Alert>
                  <CheckCircleIcon className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Valid Pattern:</strong> Found {matches.length} match
                    {matches.length !== 1 ? "es" : ""}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Test String */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SearchIcon className="h-5 w-5" />
                Test String
              </CardTitle>
              <CardDescription>
                Enter text to test your regex pattern against
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={testString}
                onChange={(e) => setTestString(e.target.value)}
                placeholder="Enter your test string here..."
                className="min-h-[150px] font-mono input-cute"
              />
            </CardContent>
          </Card>

          {/* Results */}
          {matches.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TargetIcon className="h-5 w-5" />
                  Matches ({matches.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Highlighted Text */}
                  <div>
                    <Label className="text-sm font-medium">
                      Highlighted Matches
                    </Label>
                    <div
                      className="p-3 bg-muted rounded-lg font-mono text-sm"
                      dangerouslySetInnerHTML={{
                        __html: highlightMatches(testString),
                      }}
                    />
                  </div>

                  {/* Match Details */}
                  <div>
                    <Label className="text-sm font-medium">Match Details</Label>
                    <div className="space-y-2 mt-2">
                      {matches.map((match, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-medium">
                              Match {index + 1}
                            </span>
                            <Badge variant="outline">
                              Position {match.index}
                            </Badge>
                          </div>
                          <div className="font-mono text-sm bg-muted p-2 rounded">
                            "{match.match}"
                          </div>
                          {match.groups.length > 0 && (
                            <div className="mt-2">
                              <div className="text-sm font-medium">
                                Capture Groups:
                              </div>
                              <div className="space-y-1 mt-1">
                                {match.groups.map((group, groupIndex) => (
                                  <div key={groupIndex} className="text-sm">
                                    Group {groupIndex + 1}:{" "}
                                    <code className="bg-muted px-1 rounded">
                                      {group || "(empty)"}
                                    </code>
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
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Common Patterns */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpenIcon className="h-5 w-5" />
                Common Patterns
              </CardTitle>
              <CardDescription>
                Click to load pre-built regex patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {commonPatterns.map((patternData, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3"
                    onClick={() => loadPattern(patternData)}
                  >
                    <div>
                      <div className="font-medium">{patternData.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {patternData.description}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Code Generation */}
          {pattern && isValid && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <WandIcon className="h-5 w-5" />
                  Code Generation
                </CardTitle>
                <CardDescription>
                  Generate code snippets for different languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="javascript" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="javascript">JS</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="php">PHP</TabsTrigger>
                  </TabsList>

                  {["javascript", "python", "php"].map((lang) => (
                    <TabsContent key={lang} value={lang} className="space-y-2">
                      <div className="relative">
                        <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                          <code>{generateCodeSnippet(lang)}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-2 right-2"
                          onClick={() =>
                            copyToClipboard(generateCodeSnippet(lang))
                          }
                        >
                          {copied ? (
                            <CheckCircleIcon className="h-3 w-3" />
                          ) : (
                            <CopyIcon className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ZapIcon className="h-5 w-5" />
              Real-time Testing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Test your regex patterns instantly as you type. See matches
              highlighted in real-time.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpenIcon className="h-5 w-5" />
              Pattern Library
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Access common regex patterns for emails, URLs, phone numbers, and
              more.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CodeIcon className="h-5 w-5" />
              Code Export
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Generate ready-to-use code snippets in JavaScript, Python, and
              PHP.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="Regex Tester"
          toolDescription="Test and debug regular expressions with real-time matching, highlighting, and code generation. Free online regex tool"
          toolUrl="https://30tools.com/regex-tester"
          category="developer"
        />
      </div>
    </div>
  );
}

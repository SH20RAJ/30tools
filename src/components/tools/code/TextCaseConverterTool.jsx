"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Type,
  Copy,
  Download,
  RefreshCw,
  CheckCircle,
  BarChart3,
  Zap,
  Shield,
  ArrowUpDown,
} from "lucide-react";

export default function TextCaseConverterTool() {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState({});
  const [stats, setStats] = useState(null);

  const sampleTexts = [
    "hello world! this is a SAMPLE text for CASE conversion.",
    "JavaScript is a Programming Language used for Web Development",
    "convert THIS mixed CaSe TeXt to DIFFERENT formats easily",
  ];

  const caseTypes = [
    {
      key: "lowercase",
      name: "lowercase",
      description: "All letters in lowercase",
      icon: "↓",
      example: "hello world",
    },
    {
      key: "uppercase",
      name: "UPPERCASE",
      description: "All letters in uppercase",
      icon: "↑",
      example: "HELLO WORLD",
    },
    {
      key: "titleCase",
      name: "Title Case",
      description: "First letter of each word capitalized",
      icon: "Tt",
      example: "Hello World",
    },
    {
      key: "sentenceCase",
      name: "Sentence case",
      description: "First letter of each sentence capitalized",
      icon: "Aa",
      example: "Hello world. This is sentence case.",
    },
    {
      key: "camelCase",
      name: "camelCase",
      description: "First word lowercase, others capitalized, no spaces",
      icon: "🐪",
      example: "helloWorld",
    },
    {
      key: "pascalCase",
      name: "PascalCase",
      description: "All words capitalized, no spaces",
      icon: "P",
      example: "HelloWorld",
    },
    {
      key: "snakeCase",
      name: "snake_case",
      description: "All lowercase with underscores",
      icon: "🐍",
      example: "hello_world",
    },
    {
      key: "kebabCase",
      name: "kebab-case",
      description: "All lowercase with hyphens",
      icon: "🍢",
      example: "hello-world",
    },
    {
      key: "constantCase",
      name: "CONSTANT_CASE",
      description: "All uppercase with underscores",
      icon: "C",
      example: "HELLO_WORLD",
    },
    {
      key: "dotCase",
      name: "dot.case",
      description: "All lowercase with dots",
      icon: "•",
      example: "hello.world",
    },
    {
      key: "pathCase",
      name: "path/case",
      description: "All lowercase with forward slashes",
      icon: "/",
      example: "hello/world",
    },
    {
      key: "alternatingCase",
      name: "aLtErNaTiNg CaSe",
      description: "Alternating uppercase and lowercase",
      icon: "⚡",
      example: "hElLo WoRlD",
    },
    {
      key: "inverseCase",
      name: "iNVERSE cASE",
      description: "Inverts the current case of each letter",
      icon: "🔄",
      example: "hELLO wORLD",
    },
    {
      key: "randomCase",
      name: "RaNdOm CaSe",
      description: "Random uppercase and lowercase",
      icon: "🎲",
      example: "HeLLo WoRlD",
    },
  ];

  const convertCase = useCallback(() => {
    if (!inputText.trim()) {
      setResults({});
      setStats(null);
      return;
    }

    const text = inputText.trim();
    const conversions = {};

    // Helper functions
    const toTitleCase = (str) => {
      return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
      );
    };

    const toSentenceCase = (str) => {
      return str
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    };

    const toCamelCase = (str) => {
      return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
    };

    const toPascalCase = (str) => {
      return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
          return word.toUpperCase();
        })
        .replace(/\s+/g, "");
    };

    const toSnakeCase = (str) => {
      return str
        .replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join("_");
    };

    const toKebabCase = (str) => {
      return str
        .replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join("-");
    };

    const toConstantCase = (str) => {
      return toSnakeCase(str).toUpperCase();
    };

    const toDotCase = (str) => {
      return str
        .replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join(".");
    };

    const toPathCase = (str) => {
      return str
        .replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join("/");
    };

    const toAlternatingCase = (str) => {
      return str
        .split("")
        .map((char, index) => {
          if (/[a-zA-Z]/.test(char)) {
            return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
          }
          return char;
        })
        .join("");
    };

    const toInverseCase = (str) => {
      return str
        .split("")
        .map((char) => {
          if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            return char.toLowerCase();
          } else if (
            char === char.toLowerCase() &&
            char !== char.toUpperCase()
          ) {
            return char.toUpperCase();
          }
          return char;
        })
        .join("");
    };

    const toRandomCase = (str) => {
      return str
        .split("")
        .map((char) => {
          if (/[a-zA-Z]/.test(char)) {
            return Math.random() > 0.5
              ? char.toUpperCase()
              : char.toLowerCase();
          }
          return char;
        })
        .join("");
    };

    // Apply all conversions
    conversions.lowercase = text.toLowerCase();
    conversions.uppercase = text.toUpperCase();
    conversions.titleCase = toTitleCase(text);
    conversions.sentenceCase = toSentenceCase(text);
    conversions.camelCase = toCamelCase(text);
    conversions.pascalCase = toPascalCase(text);
    conversions.snakeCase = toSnakeCase(text);
    conversions.kebabCase = toKebabCase(text);
    conversions.constantCase = toConstantCase(text);
    conversions.dotCase = toDotCase(text);
    conversions.pathCase = toPathCase(text);
    conversions.alternatingCase = toAlternatingCase(text);
    conversions.inverseCase = toInverseCase(text);
    conversions.randomCase = toRandomCase(text);

    setResults(conversions);

    // Calculate statistics
    const words = text.split(/\s+/).length;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const sentences = text
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 0).length;
    const paragraphs = text
      .split(/\n\s*\n/)
      .filter((p) => p.trim().length > 0).length;

    setStats({
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
    });
  }, [inputText]);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (_err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = (content, filename) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const loadSample = () => {
    const randomSample =
      sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setInputText(randomSample);
    setTimeout(convertCase, 100);
  };

  const clearAll = () => {
    setInputText("");
    setResults({});
    setStats(null);
  };

  // Auto-convert when text changes
  useState(() => {
    if (inputText) {
      const timeoutId = setTimeout(convertCase, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [inputText, convertCase]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Free Text Case Converter</h2>
        <p className="text-xl text-muted-foreground mb-6">
          Convert text to different cases instantly: lowercase, UPPERCASE, Title
          Case, camelCase, snake_case, kebab-case, and more. Perfect for
          developers and content creators.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Real-time Conversion</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowUpDown className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">14 Case Types</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Client-Side Processing</span>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="h-5 w-5" />
            Text Input
          </CardTitle>
          <CardDescription>
            Enter your text below to convert it to different cases
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 mb-4">
            <Button onClick={loadSample} variant="outline" size="sm">
              Load Sample Text
            </Button>
            <Button onClick={clearAll} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </div>

          <Textarea
            placeholder="Enter your text here to convert to different cases..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[150px] text-base"
          />
        </CardContent>
      </Card>

      {/* Statistics */}
      {stats && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Text Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-5">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-primary">
                  {stats.characters}
                </div>
                <div className="text-xs text-muted-foreground">Characters</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-primary">
                  {stats.charactersNoSpaces}
                </div>
                <div className="text-xs text-muted-foreground">No Spaces</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-primary">
                  {stats.words}
                </div>
                <div className="text-xs text-muted-foreground">Words</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-primary">
                  {stats.sentences}
                </div>
                <div className="text-xs text-muted-foreground">Sentences</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-destructive">
                  {stats.paragraphs}
                </div>
                <div className="text-xs text-muted-foreground">Paragraphs</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Grid */}
      {Object.keys(results).length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          {caseTypes.map((caseType) => (
            <Card key={caseType.key} className="relative">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{caseType.icon}</span>
                    {caseType.name}
                  </span>
                  <div className="flex gap-1">
                    <Button
                      onClick={() => handleCopy(results[caseType.key])}
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button
                      onClick={() =>
                        handleDownload(results[caseType.key], caseType.key)
                      }
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="text-xs">
                  {caseType.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-muted p-3 rounded text-sm font-mono break-all">
                  {results[caseType.key] || "No conversion available"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Quick Start Message */}
      {!inputText && (
        <Alert className="mb-6">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Quick Start:</strong> Enter any text above or click "Load
            Sample Text" to see all case conversions instantly.
          </AlertDescription>
        </Alert>
      )}

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5" />
              Real-time Conversion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Instant text case conversion as you type. See all 14 case formats
              updated in real-time.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ArrowUpDown className="h-5 w-5" />
              14 Case Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Support for all common cases: programming cases, title cases,
              specialty cases, and more.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5" />
              Privacy First
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All text processing happens locally in your browser. Your text
              never leaves your device.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Use Cases */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Perfect For</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-3">Programming & Development</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Variable and function naming</li>
                <li>• API endpoint formatting</li>
                <li>• Database column names</li>
                <li>• CSS class and ID names</li>
                <li>• Configuration keys</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Content & Writing</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Title and heading formatting</li>
                <li>• SEO-friendly URLs</li>
                <li>• Social media posts</li>
                <li>• Document standardization</li>
                <li>• Brand name variations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Case Type Reference */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Case Type Reference</CardTitle>
          <CardDescription>
            Examples of how "hello world example" converts to each case type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {caseTypes.map((caseType) => (
              <div
                key={caseType.key}
                className="flex items-center justify-between p-2 bg-muted rounded"
              >
                <span className="text-sm font-medium">{caseType.name}:</span>
                <code className="text-sm text-muted-foreground">
                  {caseType.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                What's the difference between camelCase and PascalCase?
              </h4>
              <p className="text-sm text-muted-foreground">
                camelCase starts with a lowercase letter (firstName), while
                PascalCase starts with uppercase (FirstName).
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                When should I use snake_case vs kebab-case?
              </h4>
              <p className="text-sm text-muted-foreground">
                snake_case is common in Python and database naming, while
                kebab-case is used in URLs and CSS classes.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                What is alternating case used for?
              </h4>
              <p className="text-sm text-muted-foreground">
                Alternating case is often used for stylistic purposes, memes, or
                to represent sarcasm in informal text.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                Does the tool preserve special characters?
              </h4>
              <p className="text-sm text-muted-foreground">
                Yes, special characters, numbers, and punctuation are preserved.
                Only letter cases are modified.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

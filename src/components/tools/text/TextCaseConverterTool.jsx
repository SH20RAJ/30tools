"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeftIcon,
  CopyIcon,
  TypeIcon,
  RefreshCwIcon,
  DownloadIcon,
  WandIcon,
  CheckIcon,
} from "lucide-react";
import Link from "next/link";

export default function TextCaseConverterTool() {
  const [inputText, setInputText] = useState(
    "Convert this text to different cases using our free online text case converter tool. Perfect for developers, writers, and content creators.",
  );
  const [copiedCase, setCopiedCase] = useState("");

  // Text transformation functions
  const transformations = useMemo(() => {
    if (!inputText) return {};

    return {
      uppercase: inputText.toUpperCase(),
      lowercase: inputText.toLowerCase(),
      titleCase: inputText.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
      ),
      sentenceCase:
        inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase(),
      camelCase: inputText
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, ""),
      pascalCase: inputText
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
        .replace(/\s+/g, ""),
      snakeCase: inputText
        .replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join("_"),
      kebabCase: inputText
        .replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join("-"),
      constantCase: inputText
        .replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toUpperCase())
        .join("_"),
      dotCase: inputText
        .replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join("."),
      pathCase: inputText
        .replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join("/"),
      alternatingCase: inputText
        .split("")
        .map((char, index) =>
          index % 2 === 0 ? char.toLowerCase() : char.toUpperCase(),
        )
        .join(""),
      inverseCase: inputText
        .split("")
        .map((char) =>
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
        )
        .join(""),
      capitalizeWords: inputText.replace(/\b\w/g, (char) => char.toUpperCase()),
      removeSpaces: inputText.replace(/\s+/g, ""),
      reverseText: inputText.split("").reverse().join(""),
    };
  }, [inputText]);

  const copyToClipboard = async (text, caseType) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCase(caseType);
      setTimeout(() => setCopiedCase(""), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const downloadAsText = (text, caseType) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `text-${caseType}-${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const clearText = () => {
    setInputText("");
  };

  const restoreExample = () => {
    setInputText(
      "Convert this text to different cases using our free online text case converter tool. Perfect for developers, writers, and content creators.",
    );
  };

  const caseTypes = [
    {
      id: "uppercase",
      name: "UPPERCASE",
      description: "Convert all letters to UPPERCASE",
      example: "HELLO WORLD",
      text: transformations.uppercase,
      popular: true,
    },
    {
      id: "lowercase",
      name: "lowercase",
      description: "Convert all letters to lowercase",
      example: "hello world",
      text: transformations.lowercase,
      popular: true,
    },
    {
      id: "titleCase",
      name: "Title Case",
      description: "Capitalize The First Letter Of Each Word",
      example: "Hello World",
      text: transformations.titleCase,
      popular: true,
    },
    {
      id: "sentenceCase",
      name: "Sentence case",
      description: "Capitalize only the first letter of the sentence",
      example: "Hello world",
      text: transformations.sentenceCase,
      popular: true,
    },
    {
      id: "camelCase",
      name: "camelCase",
      description: "Remove spaces and capitalize each word except the first",
      example: "helloWorld",
      text: transformations.camelCase,
      popular: true,
    },
    {
      id: "pascalCase",
      name: "PascalCase",
      description: "Remove spaces and capitalize each word including the first",
      example: "HelloWorld",
      text: transformations.pascalCase,
      popular: true,
    },
    {
      id: "snakeCase",
      name: "snake_case",
      description: "Replace spaces with underscores and use lowercase",
      example: "hello_world",
      text: transformations.snakeCase,
      popular: true,
    },
    {
      id: "kebabCase",
      name: "kebab-case",
      description: "Replace spaces with hyphens and use lowercase",
      example: "hello-world",
      text: transformations.kebabCase,
      popular: true,
    },
    {
      id: "constantCase",
      name: "CONSTANT_CASE",
      description: "Replace spaces with underscores and use UPPERCASE",
      example: "HELLO_WORLD",
      text: transformations.constantCase,
      popular: false,
    },
    {
      id: "dotCase",
      name: "dot.case",
      description: "Replace spaces with dots and use lowercase",
      example: "hello.world",
      text: transformations.dotCase,
      popular: false,
    },
    {
      id: "pathCase",
      name: "path/case",
      description: "Replace spaces with forward slashes",
      example: "hello/world",
      text: transformations.pathCase,
      popular: false,
    },
    {
      id: "alternatingCase",
      name: "aLtErNaTiNg CaSe",
      description: "Alternate between lowercase and uppercase",
      example: "hElLo WoRlD",
      text: transformations.alternatingCase,
      popular: false,
    },
    {
      id: "inverseCase",
      name: "iNVERSE cASE",
      description: "Invert the case of each character",
      example: "hELLO wORLD",
      text: transformations.inverseCase,
      popular: false,
    },
    {
      id: "capitalizeWords",
      name: "Capitalize Words",
      description: "Capitalize the first letter of each word",
      example: "Hello World",
      text: transformations.capitalizeWords,
      popular: false,
    },
    {
      id: "removeSpaces",
      name: "RemoveSpaces",
      description: "Remove all spaces from the text",
      example: "HelloWorld",
      text: transformations.removeSpaces,
      popular: false,
    },
    {
      id: "reverseText",
      name: "txeT esreveR",
      description: "Reverse the entire text",
      example: "dlroW olleH",
      text: transformations.reverseText,
      popular: false,
    },
  ];

  const popularCases = caseTypes.filter((c) => c.popular);
  const additionalCases = caseTypes.filter((c) => !c.popular);

  const textStats = useMemo(() => {
    if (!inputText) return { characters: 0, words: 0, lines: 0 };

    return {
      characters: inputText.length,
      words: inputText.trim() ? inputText.trim().split(/\s+/).length : 0,
      lines: inputText.split("\n").length,
    };
  }, [inputText]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <TypeIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Text Case Converter</h1>
              <p className="text-muted-foreground">
                Convert text to UPPERCASE, lowercase, Title Case, camelCase, and
                more
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">16 Case Types</Badge>
            <Badge variant="secondary">Real-time Conversion</Badge>
            <Badge variant="secondary">Developer Friendly</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Input Text</CardTitle>
                <CardDescription>
                  Enter or paste your text to convert
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="input-text">Text to Convert</Label>
                  <Textarea
                    id="input-text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter your text here..."
                    rows={8}
                    className="resize-none"
                  />
                </div>

                {/* Text Statistics */}
                <div className="bg-muted/50 p-3 rounded-lg text-sm">
                  <h4 className="font-medium mb-2">Text Statistics</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Characters: {textStats.characters.toLocaleString()}</p>
                    <p>Words: {textStats.words.toLocaleString()}</p>
                    <p>Lines: {textStats.lines.toLocaleString()}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                    onClick={clearText}
                    variant="outline"
                    className="w-full"
                    size="sm"
                  >
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Clear Text
                  </Button>

                  <Button
                    onClick={restoreExample}
                    variant="ghost"
                    className="w-full"
                    size="sm"
                  >
                    <WandIcon className="h-4 w-4 mr-2" />
                    Restore Example
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Panel */}
          <div className="lg:col-span-3 space-y-6">
            {/* Popular Case Types */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Case Conversions</CardTitle>
                <CardDescription>
                  Most commonly used text case formats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {popularCases.map((caseType) => (
                    <div
                      key={caseType.id}
                      className="p-4 border rounded-lg space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{caseType.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {caseType.description}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            onClick={() =>
                              copyToClipboard(caseType.text, caseType.id)
                            }
                            variant="ghost"
                            size="sm"
                          >
                            {copiedCase === caseType.id ? (
                              <CheckIcon className="h-4 w-4 text-primary" />
                            ) : (
                              <CopyIcon className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            onClick={() =>
                              downloadAsText(caseType.text, caseType.id)
                            }
                            variant="ghost"
                            size="sm"
                          >
                            <DownloadIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="bg-muted/50 p-2 rounded text-sm font-mono break-all">
                        {caseType.text || "Enter text to see conversion..."}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Case Types */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Case Conversions</CardTitle>
                <CardDescription>
                  Specialized case formats for specific use cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additionalCases.map((caseType) => (
                    <div
                      key={caseType.id}
                      className="p-4 border rounded-lg space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{caseType.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {caseType.description}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            onClick={() =>
                              copyToClipboard(caseType.text, caseType.id)
                            }
                            variant="ghost"
                            size="sm"
                          >
                            {copiedCase === caseType.id ? (
                              <CheckIcon className="h-4 w-4 text-primary" />
                            ) : (
                              <CopyIcon className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            onClick={() =>
                              downloadAsText(caseType.text, caseType.id)
                            }
                            variant="ghost"
                            size="sm"
                          >
                            <DownloadIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="bg-muted/50 p-2 rounded text-sm font-mono break-all">
                        {caseType.text || "Enter text to see conversion..."}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Information Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Use Cases */}
          <Card>
            <CardHeader>
              <CardTitle>When to Use Each Case Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Programming & Development</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Use specific case formats for clean, readable code
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>
                    • <strong>camelCase:</strong> JavaScript variables,
                    functions
                  </li>
                  <li>
                    • <strong>PascalCase:</strong> Class names, components
                  </li>
                  <li>
                    • <strong>snake_case:</strong> Python variables, database
                    fields
                  </li>
                  <li>
                    • <strong>kebab-case:</strong> CSS classes, URLs
                  </li>
                  <li>
                    • <strong>CONSTANT_CASE:</strong> Constants, environment
                    variables
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-1">Writing & Content</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Perfect text formatting for different contexts
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>
                    • <strong>Title Case:</strong> Headlines, book titles
                  </li>
                  <li>
                    • <strong>Sentence case:</strong> Normal text, descriptions
                  </li>
                  <li>
                    • <strong>UPPERCASE:</strong> Headings, emphasis
                  </li>
                  <li>
                    • <strong>lowercase:</strong> Casual text, tags
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-1">Special Formatting</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Unique formats for creative or technical needs
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>
                    • <strong>aLtErNaTiNg:</strong> Creative text, memes
                  </li>
                  <li>
                    • <strong>dot.case:</strong> File extensions, domains
                  </li>
                  <li>
                    • <strong>path/case:</strong> File paths, URLs
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Features & Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Features & Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">✨ Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 16 different case conversion types</li>
                  <li>• Real-time text transformation</li>
                  <li>• Copy to clipboard with one click</li>
                  <li>• Download converted text as file</li>
                  <li>• Text statistics (characters, words, lines)</li>
                  <li>• Mobile-friendly responsive design</li>
                  <li>• No character or length limits</li>
                  <li>• Privacy-first - all processing in browser</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-2">💡 Pro Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use camelCase for JavaScript variables</li>
                  <li>• Use kebab-case for CSS class names</li>
                  <li>• Use snake_case for Python functions</li>
                  <li>• Use PascalCase for React components</li>
                  <li>• Use CONSTANT_CASE for environment variables</li>
                  <li>• Use Title Case for headings and titles</li>
                  <li>• Keep consistency within your project</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-2">🚀 Keyboard Shortcuts</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    • <strong>Ctrl/Cmd + A:</strong> Select all text
                  </li>
                  <li>
                    • <strong>Ctrl/Cmd + C:</strong> Copy text
                  </li>
                  <li>
                    • <strong>Ctrl/Cmd + V:</strong> Paste text
                  </li>
                  <li>
                    • <strong>Ctrl/Cmd + Z:</strong> Undo changes
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SEO FAQ Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">
                What is a text case converter?
              </h4>
              <p className="text-sm text-muted-foreground">
                A text case converter is a tool that transforms text between
                different capitalization formats like UPPERCASE, lowercase,
                Title Case, camelCase, snake_case, and more. It's essential for
                developers, writers, and content creators who need consistent
                text formatting.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">
                What case formats are supported?
              </h4>
              <p className="text-sm text-muted-foreground">
                Our tool supports 16 different case formats including UPPERCASE,
                lowercase, Title Case, Sentence case, camelCase, PascalCase,
                snake_case, kebab-case, CONSTANT_CASE, dot.case, path/case,
                aLtErNaTiNg CaSe, iNVERSE cASE, and more.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">
                When should I use camelCase vs snake_case?
              </h4>
              <p className="text-sm text-muted-foreground">
                Use camelCase for JavaScript, Java, and C# variables/functions
                (e.g., userName, getData). Use snake_case for Python, Ruby, and
                database fields (e.g., user_name, get_data). The choice often
                depends on your programming language's conventions.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">
                Is this text case converter free to use?
              </h4>
              <p className="text-sm text-muted-foreground">
                Yes! Our text case converter is completely free with no
                registration required. There are no character limits, and all
                processing happens in your browser for privacy and speed.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">
                Can I convert large amounts of text?
              </h4>
              <p className="text-sm text-muted-foreground">
                Absolutely! There are no character or word limits. You can
                convert entire documents, code files, or any amount of text. The
                tool processes everything instantly in your browser.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">
                How do I convert text to Title Case?
              </h4>
              <p className="text-sm text-muted-foreground">
                Simply paste your text in the input field and look at the "Title
                Case" result. Title Case capitalizes the first letter of each
                word, making it perfect for headlines, book titles, and formal
                headings.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

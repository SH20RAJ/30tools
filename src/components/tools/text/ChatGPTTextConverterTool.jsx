"use client";

import { useState } from "react";
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
import {
  ArrowLeftIcon,
  CopyIcon,
  RefreshCwIcon,
  MessageSquareIcon,
  ArrowRightIcon,
} from "lucide-react";
import Link from "next/link";

export default function ChatGPTTextConverterTool() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [copied, setCopied] = useState(false);

  const convertText = (text) => {
    let converted = text;

    // Remove headers (### ## #) and add proper spacing
    converted = converted.replace(/^#{1,6}\s+(.+)$/gm, "$1\n");

    // Remove bold formatting (**text** or __text__)
    converted = converted.replace(/\*\*(.*?)\*\*/g, "$1");
    converted = converted.replace(/__(.*?)__/g, "$1");

    // Remove italic formatting (*text* or _text_)
    converted = converted.replace(/\*(.*?)\*/g, "$1");
    converted = converted.replace(/_(.*?)_/g, "$1");

    // Remove strikethrough (~~text~~)
    converted = converted.replace(/~~(.*?)~~/g, "$1");

    // Remove inline code (`code`)
    converted = converted.replace(/`([^`]+)`/g, "$1");

    // Remove code blocks (```code```)
    converted = converted.replace(/```[\s\S]*?```/g, (match) => {
      return match.replace(/```\w*\n?/g, "").replace(/```/g, "");
    });

    // Convert unordered lists with proper indentation
    converted = converted.replace(
      /^(\s*)[-*+]\s+(.+)$/gm,
      (match, indent, content) => {
        const level = Math.floor(indent.length / 2);
        const indentation = "  ".repeat(level);
        return `${indentation}• ${content}`;
      },
    );

    // Convert ordered lists with proper numbering and indentation
    converted = converted.replace(
      /^(\s*)\d+\.\s+(.+)$/gm,
      (match, indent, content, offset, string) => {
        const level = Math.floor(indent.length / 2);
        const indentation = "  ".repeat(level);

        // Count previous numbered items at the same level to get correct numbering
        const lines = string.substring(0, offset).split("\n");
        let listNumber = 1;

        for (let i = lines.length - 2; i >= 0; i--) {
          const line = lines[i];
          const listMatch = line.match(/^(\s*)\d+\.\s+/);
          if (listMatch) {
            const lineLevel = Math.floor(listMatch[1].length / 2);
            if (lineLevel === level) {
              listNumber++;
            } else if (lineLevel < level) {
              break;
            }
          } else if (line.trim() === "") {
            continue;
          } else {
            break;
          }
        }

        return `${indentation}${listNumber}. ${content}`;
      },
    );

    // Convert blockquotes with proper formatting
    converted = converted.replace(/^>\s*(.+)$/gm, '"$1"');

    // Remove horizontal rules (--- or ***)
    converted = converted.replace(/^[-*]{3,}$/gm, "");

    // Remove links but keep text [text](url) -> text
    converted = converted.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

    // Remove images ![alt](url)
    converted = converted.replace(/!\[[^\]]*\]\([^)]+\)/g, "");

    // Clean up multiple consecutive newlines but preserve paragraph structure
    converted = converted.replace(/\n{3,}/g, "\n\n");

    // Remove leading/trailing whitespace from each line while preserving indentation
    converted = converted
      .split("\n")
      .map((line) => line.trimEnd())
      .join("\n");

    converted = converted.trim();

    return converted;
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    // Real-time conversion for immediate feedback
    setOutputText(convertText(text));
  };

  const handleConvert = () => {
    setOutputText(convertText(inputText));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const clearText = () => {
    setInputText("");
    setOutputText("");
  };

  const sampleText = `# 📘 Introduction to Markdown

**Markdown** is a lightweight markup language for creating formatted text using a plain-text editor. It's widely used for README files, documentation, and content writing on the web.

---

## ✨ Why Use Markdown?

Markdown is:

* 📄 Simple and readable
* ⚡ Fast to write
* 🌐 Compatible with many platforms
* 💻 Ideal for developers, writers, and bloggers

---

## 🔧 Basic Syntax

### Headings

You can create different levels of headings using \`#\` symbols.

### Emphasis

* *Italic*
* **Bold**
* ***Bold & Italic***
* ~~Strikethrough~~

---

### Lists

#### Unordered List:

* Item 1
* Item 2
  * Nested Item
* Item 3

#### Ordered List:

1. First item
2. Second item
   1. Sub-item
3. Third item

---

### Links & Images

* Link: [Visit Markdown Guide](https://www.markdownguide.org)
* Image:
  ![Markdown Logo](https://markdown-here.com/img/icon256.png)

---

### 🧱 Blockquotes

> "Markdown is not about making things look fancy. It's about making writing easier."
> — *A Wise Dev*

---

### 📌 Inline Code

Mention a command like \`npm install markdown\` within a sentence.

---

### 📊 Tables

| Feature     | Supported | Notes                        |
| ----------- | --------- | ---------------------------- |
| Headings    | ✅         | Up to 6 levels               |
| Images      | ✅         | Markdown or HTML style       |
| Code Blocks | ✅         | Supports syntax highlighting |
| Task Lists  | ✅         | GitHub Flavored Markdown     |

---

### ✅ Task List

* [x] Learn basic Markdown
* [x] Write a small article
* [ ] Share it with a friend

---

## 🧭 Conclusion

Markdown is a powerful and simple way to format your text for the web. Whether you're writing technical documentation or a personal blog post, Markdown can make the writing process smoother and cleaner.

---

> Thanks for reading! 🙌
> *Happy Writing with Markdown!*`;

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
              <MessageSquareIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">ChatGPT Text Converter</h1>
              <p className="text-muted-foreground">
                Convert ChatGPT markdown to clean, normal text
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Remove Markdown</Badge>
            <Badge variant="secondary">Clean AI Text</Badge>
            <Badge variant="secondary">Instant Conversion</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Area */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquareIcon className="h-5 w-5 text-primary" />
                ChatGPT Text (Markdown)
              </CardTitle>
              <CardDescription>
                Paste your ChatGPT response with markdown formatting here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Paste your ChatGPT text here..."
                value={inputText}
                onChange={handleInputChange}
                className="min-h-[400px] text-base leading-relaxed font-mono"
              />

              <div className="flex flex-wrap gap-2">
                <Button onClick={handleConvert} disabled={!inputText} size="sm">
                  <ArrowRightIcon className="h-4 w-4 mr-2" />
                  Convert
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputText(sampleText)}
                >
                  Try Markdown Example
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearText}
                  disabled={!inputText}
                >
                  <RefreshCwIcon className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output Area */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRightIcon className="h-5 w-5 text-primary" />
                Normal Text (Converted)
              </CardTitle>
              <CardDescription>
                Clean text without markdown formatting
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Converted text will appear here..."
                value={outputText}
                readOnly
                className="min-h-[400px] text-base leading-relaxed bg-muted/50"
              />

              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={copyToClipboard}
                  disabled={!outputText}
                  className="flex-1 sm:flex-none"
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  {copied ? "Copied!" : "Copy Text"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features & Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What it converts */}
          <Card>
            <CardHeader>
              <CardTitle>What Gets Converted</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  ✅ <strong>Headers</strong> (# ## ###) → Plain text
                </li>
                <li>
                  ✅ <strong>Bold text</strong> (**text**) → Normal text
                </li>
                <li>
                  ✅ <strong>Italic text</strong> (*text*) → Normal text
                </li>
                <li>
                  ✅ <strong>Lists</strong> (- item) → Bullet points (•)
                </li>
                <li>
                  ✅ <strong>Numbered lists</strong> (1. item) → Proper
                  numbering
                </li>
                <li>
                  ✅ <strong>Code blocks</strong> (```code```) → Clean code
                </li>
                <li>
                  ✅ <strong>Inline code</strong> (`code`) → Normal text
                </li>
                <li>
                  ✅ <strong>Links</strong> ([text](url)) → Just the text
                </li>
                <li>
                  ✅ <strong>Blockquotes</strong> (&gt; text) → Quoted text
                </li>
                <li>
                  ✅ <strong>Strikethrough</strong> (~~text~~) → Normal text
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Use Cases */}
          <Card>
            <CardHeader>
              <CardTitle>Perfect For</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">📝 Content Creation</h4>
                <p className="text-sm text-muted-foreground">
                  Clean up AI-generated content for blogs, articles, and social
                  media posts.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">📧 Email & Messages</h4>
                <p className="text-sm text-muted-foreground">
                  Convert ChatGPT responses to clean text for emails and
                  messaging apps.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">📄 Documents</h4>
                <p className="text-sm text-muted-foreground">
                  Prepare AI text for Word documents, PDFs, and presentations.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">🔄 Text Processing</h4>
                <p className="text-sm text-muted-foreground">
                  Clean text before using in other tools or applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">
                Why do I need to convert ChatGPT text?
              </h4>
              <p className="text-sm text-muted-foreground">
                ChatGPT outputs text in markdown format with special characters
                for formatting. This tool removes those characters to give you
                clean, readable text.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">
                Does this work with other AI tools?
              </h4>
              <p className="text-sm text-muted-foreground">
                Yes! This works with any markdown-formatted text from Claude,
                Gemini, or other AI assistants.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">Is my text stored anywhere?</h4>
              <p className="text-sm text-muted-foreground">
                No, all conversion happens in your browser. Your text is never
                uploaded to our servers.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">
                Can I convert large amounts of text?
              </h4>
              <p className="text-sm text-muted-foreground">
                Yes, there's no limit on text length. You can convert entire
                documents or conversations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

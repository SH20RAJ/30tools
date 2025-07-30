'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeftIcon, CopyIcon, DownloadIcon, RefreshCwIcon, FileTextIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function MarkdownToTextTool() {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [copied, setCopied] = useState(false);

    const convertMarkdownToText = (markdown) => {
        let text = markdown;

        // Remove HTML tags
        text = text.replace(/<[^>]*>/g, '');

        // Convert headers to plain text with proper spacing
        text = text.replace(/^#{1,6}\s+(.+)$/gm, '$1\n');

        // Remove bold and italic formatting
        text = text.replace(/\*\*\*(.*?)\*\*\*/g, '$1'); // Bold italic
        text = text.replace(/\*\*(.*?)\*\*/g, '$1'); // Bold
        text = text.replace(/\*(.*?)\*/g, '$1'); // Italic
        text = text.replace(/__(.*?)__/g, '$1'); // Bold (underscore)
        text = text.replace(/_(.*?)_/g, '$1'); // Italic (underscore)

        // Remove strikethrough
        text = text.replace(/~~(.*?)~~/g, '$1');

        // Convert code blocks - preserve content but remove backticks
        text = text.replace(/```[\w]*\n?([\s\S]*?)```/g, '$1');

        // Remove inline code backticks
        text = text.replace(/`([^`]+)`/g, '$1');

        // Convert unordered lists to bullet points with proper indentation
        text = text.replace(/^(\s*)[-*+]\s+(.+)$/gm, (match, indent, content) => {
            const level = Math.floor(indent.length / 2);
            const indentation = '  '.repeat(level);
            return `${indentation}• ${content}`;
        });

        // Convert ordered lists with proper numbering and indentation
        text = text.replace(/^(\s*)\d+\.\s+(.+)$/gm, (match, indent, content, offset, string) => {
            const level = Math.floor(indent.length / 2);
            const indentation = '  '.repeat(level);

            // Count previous numbered items at the same level to get correct numbering
            const lines = string.substring(0, offset).split('\n');
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
                } else if (line.trim() === '') {
                    continue;
                } else {
                    break;
                }
            }

            return `${indentation}${listNumber}. ${content}`;
        });

        // Convert blockquotes
        text = text.replace(/^>\s*(.+)$/gm, '"$1"');

        // Convert tables to plain text format
        text = text.replace(/\|(.+)\|/g, (match, content) => {
            return content.split('|').map(cell => cell.trim()).join(' | ');
        });

        // Remove table separators (|---|---|)
        text = text.replace(/^\|?[\s]*:?-+:?[\s]*\|?[\s]*:?-+:?[\s]*\|?.*$/gm, '');

        // Convert links - keep text, remove URL
        text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

        // Remove images
        text = text.replace(/!\[[^\]]*\]\([^)]+\)/g, '');

        // Remove reference-style links
        text = text.replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1');
        text = text.replace(/^\[[^\]]+\]:\s*.+$/gm, '');

        // Remove horizontal rules
        text = text.replace(/^[-*_]{3,}$/gm, '');

        // Convert line breaks - preserve paragraph structure
        text = text.replace(/  \n/g, '\n'); // Remove markdown line breaks

        // Clean up multiple consecutive newlines
        text = text.replace(/\n{3,}/g, '\n\n');

        // Remove trailing whitespace from each line while preserving indentation
        text = text.split('\n').map(line => line.trimEnd()).join('\n');

        // Remove empty lines at the beginning and end
        text = text.trim();

        return text;
    };

    const handleInputChange = (e) => {
        const markdown = e.target.value;
        setInputText(markdown);
        setOutputText(convertMarkdownToText(markdown));
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(outputText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const downloadAsText = () => {
        const element = document.createElement('a');
        const file = new Blob([outputText], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'converted-text.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const clearText = () => {
        setInputText('');
        setOutputText('');
    };

    const sampleMarkdown = `# Markdown to Text Converter

This is a **comprehensive** tool for converting *Markdown* to plain text.

## Features

### Key Capabilities

1. **Header conversion** - All header levels supported
2. **Text formatting** - Removes bold, italic, and other formatting
3. **List handling** - Converts both ordered and unordered lists
4. **Code blocks** - Preserves code content without formatting

### Supported Elements

- Bullet points like this one
- *Italic text* becomes normal
- **Bold text** becomes normal
- \`Inline code\` is cleaned up

#### Ordered Lists

1. First item
2. Second item
   1. Nested item
   2. Another nested item
3. Third item

> This is a blockquote that will be converted to quoted text

\`\`\`javascript
// Code blocks are preserved
function hello() {
    console.log("Hello World!");
}
\`\`\`

[This link](https://example.com) will become just the text.

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| More     | Data     | Here     |

---

Perfect for cleaning up documentation and content!`;

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
                            <FileTextIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Markdown to Text Converter</h1>
                            <p className="text-muted-foreground">Convert Markdown files to clean, plain text</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">MD to Text</Badge>
                        <Badge variant="secondary">Remove Formatting</Badge>
                        <Badge variant="secondary">Preserve Structure</Badge>
                        <Badge variant="secondary">Free Forever</Badge>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Input Area */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileTextIcon className="h-5 w-5 text-primary" />
                                Markdown Input
                            </CardTitle>
                            <CardDescription>
                                Paste your Markdown content here
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Textarea
                                placeholder="Paste your Markdown here..."
                                value={inputText}
                                onChange={handleInputChange}
                                className="min-h-[400px] text-base leading-relaxed font-mono"
                            />

                            <div className="flex flex-wrap gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setInputText(sampleMarkdown)}
                                >
                                    Try Sample Markdown
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
                                Plain Text Output
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
                                    {copied ? 'Copied!' : 'Copy Text'}
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={downloadAsText}
                                    disabled={!outputText}
                                >
                                    <DownloadIcon className="h-4 w-4 mr-2" />
                                    Download
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Features & Info */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Supported Elements */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Supported Markdown Elements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li>✅ <strong>Headers</strong> (# ## ### #### ##### ######)</li>
                                <li>✅ <strong>Text formatting</strong> (bold, italic, strikethrough)</li>
                                <li>✅ <strong>Lists</strong> (ordered and unordered, nested)</li>
                                <li>✅ <strong>Code blocks</strong> and inline code</li>
                                <li>✅ <strong>Blockquotes</strong> (&gt; quoted text)</li>
                                <li>✅ <strong>Links</strong> (keeps text, removes URLs)</li>
                                <li>✅ <strong>Images</strong> (removes completely)</li>
                                <li>✅ <strong>Tables</strong> (converts to plain text format)</li>
                                <li>✅ <strong>Horizontal rules</strong> (removes)</li>
                                <li>✅ <strong>HTML tags</strong> (strips all tags)</li>
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
                                <h4 className="font-medium mb-1">📝 Documentation</h4>
                                <p className="text-sm text-muted-foreground">
                                    Convert README files and documentation to plain text for reports or presentations.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-1">📧 Email Content</h4>
                                <p className="text-sm text-muted-foreground">
                                    Clean up markdown content for email newsletters and plain text emails.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-1">📄 Content Migration</h4>
                                <p className="text-sm text-muted-foreground">
                                    Move content from markdown-based systems to plain text formats.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-1">🔍 Text Analysis</h4>
                                <p className="text-sm text-muted-foreground">
                                    Prepare markdown content for text analysis tools that require plain text.
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
                            <h4 className="font-medium mb-1">What happens to formatting?</h4>
                            <p className="text-sm text-muted-foreground">
                                All markdown formatting is removed, but the text structure is preserved. Lists become bullet points or numbered items, and headers become plain text with proper spacing.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-1">Are tables converted?</h4>
                            <p className="text-sm text-muted-foreground">
                                Yes, markdown tables are converted to a plain text format with pipe separators for readability.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-1">What about code blocks?</h4>
                            <p className="text-sm text-muted-foreground">
                                Code blocks are preserved as plain text with the code content intact, but the markdown formatting (backticks) is removed.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-1">Is this different from the ChatGPT converter?</h4>
                            <p className="text-sm text-muted-foreground">
                                Yes! This tool is more comprehensive and handles all markdown elements including tables, nested lists, and complex formatting. The ChatGPT converter is optimized for typical AI responses.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
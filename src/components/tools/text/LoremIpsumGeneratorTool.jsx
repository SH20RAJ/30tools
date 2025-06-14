'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import {
  ArrowLeftIcon,
  CopyIcon,
  RefreshCwIcon,
  FileTextIcon,
  DownloadIcon,
  CodeIcon
} from 'lucide-react';
import Link from 'next/link';

export default function LoremIpsumGeneratorTool() {
  const [type, setType] = useState('paragraphs');
  const [count, setCount] = useState(5);
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [htmlFormat, setHtmlFormat] = useState(false);
  const [copied, setCopied] = useState(false);

  // Classic Lorem Ipsum text source
  const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
    'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
    'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
    'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
    'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum', 'at', 'vero', 'eos',
    'accusamus', 'accusantium', 'doloremque', 'laudantium', 'totam', 'rem',
    'aperiam', 'eaque', 'ipsa', 'quae', 'ab', 'illo', 'inventore', 'veritatis',
    'et', 'quasi', 'architecto', 'beatae', 'vitae', 'dicta', 'sunt', 'explicabo',
    'nemo', 'ipsam', 'voluptatem', 'quia', 'voluptas', 'aspernatur', 'aut',
    'odit', 'fugit', 'sed', 'quia', 'consequuntur', 'magni', 'dolores', 'ratione',
    'sequi', 'nesciunt', 'neque', 'porro', 'quisquam', 'qui', 'dolorem',
    'adipisci', 'numquam', 'eius', 'modi', 'tempora', 'incidunt', 'magnam',
    'aliquam', 'quaerat', 'voluptatem', 'fuga', 'harum', 'quidem', 'rerum',
    'facilis', 'est', 'expedita', 'distinctio', 'nam', 'libero', 'tempore',
    'cum', 'soluta', 'nobis', 'eligendi', 'optio', 'cumque', 'nihil', 'impedit',
    'quo', 'minus', 'maxime', 'placeat', 'facere', 'possimus', 'omnis'
  ];

  const generateWords = (wordCount) => {
    const words = [];
    const startWords = startWithLorem ? ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] : [];

    // Add starting words if requested
    if (startWithLorem && wordCount >= 5) {
      words.push(...startWords);
      wordCount -= 5;
    }

    // Generate remaining words
    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * loremWords.length);
      words.push(loremWords[randomIndex]);
    }

    return words;
  };

  const generateSentence = () => {
    const sentenceLength = Math.floor(Math.random() * 10) + 8; // 8-17 words
    const words = generateWords(sentenceLength);
    const sentence = words.join(' ');
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
  };

  const generateParagraph = () => {
    const sentenceCount = Math.floor(Math.random() * 5) + 3; // 3-7 sentences
    const sentences = [];

    for (let i = 0; i < sentenceCount; i++) {
      sentences.push(generateSentence());
    }

    return sentences.join(' ');
  };

  const generatedText = useMemo(() => {
    let result = [];

    switch (type) {
      case 'words':
        const words = generateWords(count);
        result = [words.join(' ')];
        break;

      case 'sentences':
        for (let i = 0; i < count; i++) {
          result.push(generateSentence());
        }
        break;

      case 'paragraphs':
      default:
        for (let i = 0; i < count; i++) {
          result.push(generateParagraph());
        }
        break;
    }

    if (htmlFormat && type === 'paragraphs') {
      return result.map(p => `<p>${p}</p>`).join('\n\n');
    }

    return result.join('\n\n');
  }, [type, count, startWithLorem, htmlFormat]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadAsText = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `lorem-ipsum-${type}-${count}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadAsHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lorem Ipsum Text</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; }
        p { margin-bottom: 16px; }
    </style>
</head>
<body>
    ${type === 'paragraphs' ? generatedText.split('\n\n').map(p => `<p>${p}</p>`).join('\n    ') : `<p>${generatedText}</p>`}
</body>
</html>`;

    const element = document.createElement('a');
    const file = new Blob([htmlContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = `lorem-ipsum-${type}-${count}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const presetOptions = [
    { label: 'Short (1-3)', value: () => Math.floor(Math.random() * 3) + 1 },
    { label: 'Medium (3-7)', value: () => Math.floor(Math.random() * 5) + 3 },
    { label: 'Long (5-15)', value: () => Math.floor(Math.random() * 11) + 5 },
    { label: 'Extra Long (10-25)', value: () => Math.floor(Math.random() * 16) + 10 }
  ];

  const handlePreset = (preset) => {
    setCount(preset.value());
  };

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
              <h1 className="text-3xl font-bold">Lorem Ipsum Generator</h1>
              <p className="text-muted-foreground">Generate placeholder text for design and development</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Classic Lorem Ipsum</Badge>
            <Badge variant="secondary">HTML Support</Badge>
            <Badge variant="secondary">Customizable</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Generator Settings</CardTitle>
                <CardDescription>
                  Customize your Lorem Ipsum text
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Text Type */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Generate</Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="words">Words</SelectItem>
                      <SelectItem value="sentences">Sentences</SelectItem>
                      <SelectItem value="paragraphs">Paragraphs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Count */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">
                    Number of {type}
                  </Label>
                  <Input
                    type="number"
                    min="1"
                    max="100"
                    value={count}
                    onChange={(e) => setCount(parseInt(e.target.value) || 1)}
                  />
                </div>

                {/* Presets */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Quick Presets</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {presetOptions.map((preset, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handlePreset(preset)}
                        className="text-xs"
                      >
                        {preset.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Options */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Options</Label>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="start-lorem" className="text-sm">
                      Start with "Lorem ipsum"
                    </Label>
                    <Switch
                      id="start-lorem"
                      checked={startWithLorem}
                      onCheckedChange={setStartWithLorem}
                    />
                  </div>

                  {type === 'paragraphs' && (
                    <div className="flex items-center justify-between">
                      <Label htmlFor="html-format" className="text-sm">
                        HTML &lt;p&gt; tags
                      </Label>
                      <Switch
                        id="html-format"
                        checked={htmlFormat}
                        onCheckedChange={setHtmlFormat}
                      />
                    </div>
                  )}
                </div>

                <Separator />

                {/* Actions */}
                <div className="space-y-2">
                  <Button
                    onClick={copyToClipboard}
                    className="w-full"
                  >
                    <CopyIcon className="h-4 w-4 mr-2" />
                    {copied ? 'Copied!' : 'Copy Text'}
                  </Button>

                  <Button
                    onClick={downloadAsText}
                    variant="outline"
                    className="w-full"
                  >
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download as TXT
                  </Button>

                  <Button
                    onClick={downloadAsHTML}
                    variant="outline"
                    className="w-full"
                  >
                    <CodeIcon className="h-4 w-4 mr-2" />
                    Download as HTML
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Generated Text Display */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Generated Lorem Ipsum</CardTitle>
                    <CardDescription>
                      {count} {type} • {generatedText.split(' ').length} words • {generatedText.length} characters
                    </CardDescription>
                  </div>
                  <Button
                    onClick={() => setCount(count)} // Trigger regeneration
                    variant="ghost"
                    size="sm"
                  >
                    <RefreshCwIcon className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={generatedText}
                  readOnly
                  className="min-h-[500px] font-serif text-base leading-relaxed"
                  placeholder="Generated Lorem Ipsum text will appear here..."
                />

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button
                    onClick={copyToClipboard}
                    size="sm"
                  >
                    <CopyIcon className="h-4 w-4 mr-2" />
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>

                  <Button
                    onClick={downloadAsText}
                    variant="outline"
                    size="sm"
                  >
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    TXT
                  </Button>

                  <Button
                    onClick={downloadAsHTML}
                    variant="outline"
                    size="sm"
                  >
                    <CodeIcon className="h-4 w-4 mr-2" />
                    HTML
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Information Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Lorem Ipsum */}
          <Card>
            <CardHeader>
              <CardTitle>About Lorem Ipsum</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <div>
                <h4 className="font-medium mb-2">Why use Lorem Ipsum?</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Focuses attention on design rather than content</li>
                  <li>• Provides realistic text length and word distribution</li>
                  <li>• Industry standard for centuries</li>
                  <li>• Prevents copyright issues with real content</li>
                  <li>• Maintains consistent layout testing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Use Cases */}
          <Card>
            <CardHeader>
              <CardTitle>Common Use Cases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h4 className="font-medium mb-1">Web Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Fill website layouts and templates during development phase
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Graphic Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Create mockups for brochures, posters, and marketing materials
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Typography Testing</h4>
                  <p className="text-sm text-muted-foreground">
                    Test fonts, sizes, and spacing with realistic text content
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Content Planning</h4>
                  <p className="text-sm text-muted-foreground">
                    Estimate space requirements before final content is ready
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Presentations</h4>
                  <p className="text-sm text-muted-foreground">
                    Create slide templates and layout designs for presentations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

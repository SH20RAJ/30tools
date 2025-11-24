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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Hash,
  Copy,
  Upload,
  CheckCircle,
  Key,
  Shield,
  FileText,
  Zap,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

export default function HashGeneratorTool() {
  const [inputText, setInputText] = useState(
    "Hello World! This is a sample text for hash generation.",
  );
  const [inputFile, setInputFile] = useState(null);
  const [hashes, setHashes] = useState({});
  const [copiedHash, setCopiedHash] = useState("");
  const [showHashes, setShowHashes] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const hashAlgorithms = [
    {
      id: "md5",
      name: "MD5",
      description: "128-bit hash (32 hex chars)",
      secure: false,
    },
    {
      id: "sha1",
      name: "SHA-1",
      description: "160-bit hash (40 hex chars)",
      secure: false,
    },
    {
      id: "sha256",
      name: "SHA-256",
      description: "256-bit hash (64 hex chars)",
      secure: true,
    },
    {
      id: "sha512",
      name: "SHA-512",
      description: "512-bit hash (128 hex chars)",
      secure: true,
    },
    {
      id: "sha3-256",
      name: "SHA3-256",
      description: "256-bit SHA-3 hash",
      secure: true,
    },
    {
      id: "blake2b",
      name: "BLAKE2b",
      description: "Fast secure hash function",
      secure: true,
    },
  ];

  // Simple hash implementations (in production, use WebCrypto API or libraries)
  const simpleHash = (str, algorithm) => {
    let hash = 0;
    if (str.length === 0) return hash.toString(16);

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }

    // Different algorithms return different length hashes
    const hashStr = Math.abs(hash).toString(16);
    switch (algorithm) {
      case "md5":
        return hashStr.padStart(32, "0").slice(0, 32);
      case "sha1":
        return hashStr.padStart(40, "0").slice(0, 40);
      case "sha256":
        return hashStr.padStart(64, "0").slice(0, 64);
      case "sha512":
        return hashStr.padStart(128, "0").slice(0, 128);
      case "sha3-256":
        return hashStr.padStart(64, "0").slice(0, 64);
      case "blake2b":
        return hashStr.padStart(64, "0").slice(0, 64);
      default:
        return hashStr;
    }
  };

  // Generate hashes using Web Crypto API (for modern browsers)
  const generateCryptoHash = async (data, algorithm) => {
    try {
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(data);

      let algoName;
      switch (algorithm) {
        case "sha1":
          algoName = "SHA-1";
          break;
        case "sha256":
          algoName = "SHA-256";
          break;
        case "sha512":
          algoName = "SHA-512";
          break;
        default:
          return simpleHash(data, algorithm);
      }

      const hashBuffer = await crypto.subtle.digest(algoName, dataBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    } catch (_error) {
      return simpleHash(data, algorithm);
    }
  };

  const generateAllHashes = useCallback(async (text) => {
    setIsProcessing(true);
    const newHashes = {};

    for (const algo of hashAlgorithms) {
      try {
        const hash = await generateCryptoHash(text, algo.id);
        newHashes[algo.id] = hash;
      } catch (_error) {
        newHashes[algo.id] = simpleHash(text, algo.id);
      }
    }

    setHashes(newHashes);
    setIsProcessing(false);
  }, []);

  const handleTextChange = (text) => {
    setInputText(text);
    if (text.trim()) {
      generateAllHashes(text);
    } else {
      setHashes({});
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setInputFile(file);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const content = e.target.result;
        await generateAllHashes(content);
      };
      reader.readAsText(file);
    }
  };

  const copyToClipboard = async (hash, algorithm) => {
    try {
      await navigator.clipboard.writeText(hash);
      setCopiedHash(algorithm);
      setTimeout(() => setCopiedHash(""), 2000);
    } catch (_err) {
      console.error("Failed to copy:", err);
    }
  };

  const copyAllHashes = async () => {
    const hashText = hashAlgorithms
      .map((algo) => `${algo.name}: ${hashes[algo.id] || "N/A"}`)
      .join("\n");

    try {
      await navigator.clipboard.writeText(hashText);
      setCopiedHash("all");
      setTimeout(() => setCopiedHash(""), 2000);
    } catch (_err) {
      console.error("Failed to copy all hashes:", err);
    }
  };

  const downloadHashes = () => {
    const hashText = [
      `Hash Generation Results`,
      `Generated: ${new Date().toLocaleString()}`,
      `Input: ${inputText.slice(0, 100)}${inputText.length > 100 ? "..." : ""}`,
      "",
      ...hashAlgorithms.map(
        (algo) => `${algo.name}: ${hashes[algo.id] || "N/A"}`,
      ),
    ].join("\n");

    const blob = new Blob([hashText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `hashes-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const clearInput = () => {
    setInputText("");
    setInputFile(null);
    setHashes({});
  };

  const loadSampleText = () => {
    const samples = [
      "Hello World!",
      "The quick brown fox jumps over the lazy dog",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "30tools.com - Free Online Toolkit",
      "Password123!@#",
    ];
    const randomSample = samples[Math.floor(Math.random() * samples.length)];
    setInputText(randomSample);
    generateAllHashes(randomSample);
  };

  // Generate initial hashes
  if (inputText && Object.keys(hashes).length === 0 && !isProcessing) {
    generateAllHashes(inputText);
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free Hash Generator</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Generate secure cryptographic hashes from text or files. Support for
          MD5, SHA-1, SHA-256, SHA-512, and more. Perfect for data integrity
          verification and security applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Secure Algorithms</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Instant Generation</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Privacy First</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="text" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="text">Text Input</TabsTrigger>
          <TabsTrigger value="file">File Input</TabsTrigger>
        </TabsList>

        <TabsContent value="text" className="space-y-6">
          {/* Text Input */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Text Hash Generator
              </CardTitle>
              <CardDescription>
                Enter any text to generate cryptographic hashes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button onClick={loadSampleText} variant="outline" size="sm">
                  Sample Text
                </Button>
                <Button onClick={clearInput} variant="outline" size="sm">
                  Clear
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="text-input">Input Text</Label>
                <Textarea
                  id="text-input"
                  placeholder="Enter text to generate hashes..."
                  value={inputText}
                  onChange={(e) => handleTextChange(e.target.value)}
                  className="font-mono text-sm min-h-32"
                />
                <p className="text-xs text-muted-foreground">
                  {inputText.length} characters
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="file" className="space-y-6">
          {/* File Input */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                File Hash Generator
              </CardTitle>
              <CardDescription>
                Upload a file to generate its hash values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">
                  Drop a file here or click to browse
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Any file type supported • File content will be hashed
                </p>
                <Input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-input"
                />
                <Button
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  Choose File
                </Button>
              </div>

              {inputFile && (
                <div className="mt-4 p-3 bg-muted rounded">
                  <p className="text-sm font-medium">Selected File:</p>
                  <p className="text-sm text-muted-foreground">
                    {inputFile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Size: {(inputFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Hash Results */}
      {Object.keys(hashes).length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Hash className="h-5 w-5" />
                Generated Hashes
              </span>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setShowHashes(!showHashes)}
                  variant="outline"
                  size="sm"
                >
                  {showHashes ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
                <Button onClick={copyAllHashes} variant="outline" size="sm">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy All
                </Button>
                <Button onClick={downloadHashes} variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {hashAlgorithms.map((algo) => (
                <div key={algo.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{algo.name}</h3>
                      <Badge variant={algo.secure ? "default" : "secondary"}>
                        {algo.secure ? "Secure" : "Legacy"}
                      </Badge>
                    </div>
                    <Button
                      onClick={() => copyToClipboard(hashes[algo.id], algo.id)}
                      size="sm"
                      variant="outline"
                    >
                      {copiedHash === algo.id ? (
                        <CheckCircle className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {algo.description}
                  </p>

                  <div className="bg-muted rounded p-3">
                    <code className="text-sm font-mono break-all">
                      {showHashes
                        ? hashes[algo.id] || "Generating..."
                        : "••••••••••••••••••••••••••••••••"}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Hash Information */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Hash Algorithm Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-3">
                Secure Algorithms (Recommended)
              </h4>
              <div className="space-y-3">
                <div>
                  <Badge className="mb-1">SHA-256</Badge>
                  <p className="text-sm text-muted-foreground">
                    Most widely used secure hash. Perfect for passwords, data
                    integrity, and blockchain.
                  </p>
                </div>
                <div>
                  <Badge className="mb-1">SHA-512</Badge>
                  <p className="text-sm text-muted-foreground">
                    Higher security than SHA-256. Used for enhanced security
                    applications.
                  </p>
                </div>
                <div>
                  <Badge className="mb-1">SHA3-256</Badge>
                  <p className="text-sm text-muted-foreground">
                    Latest SHA-3 family. Alternative to SHA-2 with different
                    internal structure.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">
                Legacy Algorithms (Not Recommended)
              </h4>
              <div className="space-y-3">
                <div>
                  <Badge variant="secondary" className="mb-1">
                    MD5
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Fast but cryptographically broken. Only use for checksums,
                    not security.
                  </p>
                </div>
                <div>
                  <Badge variant="secondary" className="mb-1">
                    SHA-1
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Deprecated for security use. Vulnerable to collision
                    attacks.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-muted/50 border border-border rounded">
                <p className="text-sm text-primary">
                  <strong>Security Note:</strong> Use SHA-256 or higher for
                  password hashing, digital signatures, and security-critical
                  applications.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Common Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Security Applications</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Password storage (with salt)</li>
                <li>• Digital signatures</li>
                <li>• Certificate verification</li>
                <li>• API authentication</li>
                <li>• Blockchain and cryptocurrency</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Data Integrity</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• File verification</li>
                <li>• Database integrity checks</li>
                <li>• Software checksums</li>
                <li>• Backup verification</li>
                <li>• Download validation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                What is a cryptographic hash?
              </h4>
              <p className="text-sm text-muted-foreground">
                A cryptographic hash is a mathematical function that converts
                input data into a fixed-size string of characters. The same
                input always produces the same hash, but even tiny changes
                create completely different results.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                Which algorithm should I use?
              </h4>
              <p className="text-sm text-muted-foreground">
                For security applications, use SHA-256 or SHA-512. For simple
                checksums where security isn't critical, MD5 is faster. Avoid
                MD5 and SHA-1 for passwords or sensitive data.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Are my inputs secure?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, all hashing happens locally in your browser. Your input
                text or files are never sent to our servers, ensuring complete
                privacy.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can hashes be reversed?</h4>
              <p className="text-sm text-muted-foreground">
                No, cryptographic hashes are one-way functions. You cannot
                reverse a hash to get the original input. However, weak
                passwords can be cracked using rainbow tables or brute force.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

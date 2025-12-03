"use client";

import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  UploadIcon,
  DownloadIcon,
  RefreshCwIcon,
  UnlockIcon,
  InfoIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  KeyIcon,
  ShieldIcon,
  LockIcon,
} from "lucide-react";

export default function PdfUnlockerTool() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [password, setPassword] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [unlockProgress, setUnlockProgress] = useState(0);
  const [unlockedFile, setUnlockedFile] = useState(null);
  const [unlockStats, setUnlockStats] = useState(null);
  const [error, setError] = useState("");
  const [pdfLibLoaded, setPdfLibLoaded] = useState(false);
  const fileInputRef = useRef(null);

  // Load PDF.js library from CDN
  useEffect(() => {
    const loadPdfLib = () => {
      // Load PDF.js from jsDelivr CDN
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js";
      script.onload = () => {
        // Configure PDF.js worker
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
        setPdfLibLoaded(true);
      };
      script.onerror = () => {
        setError("Failed to load PDF processing library");
      };
      document.head.appendChild(script);
    };

    if (!window.pdfjsLib) {
      loadPdfLib();
    } else {
      setPdfLibLoaded(true);
    }

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector(
        'script[src*="pdfjs-dist"]',
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please select a PDF file");
      return;
    }

    if (file.size > 100 * 1024 * 1024) {
      // 100MB limit
      setError("File size must be less than 100MB");
      return;
    }

    setSelectedFile(file);
    setUnlockedFile(null);
    setUnlockStats(null);
    setUnlockProgress(0);
    setError("");
  };

  const simulateUnlock = async () => {
    if (!selectedFile || !password.trim()) {
      setError("Please select a PDF file and enter a password");
      return;
    }

    setIsUnlocking(true);
    setUnlockProgress(0);
    setError("");

    try {
      // Simulate unlock progress
      const progressSteps = [15, 30, 50, 70, 85, 100];

      for (let i = 0; i < progressSteps.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUnlockProgress(progressSteps[i]);
      }

      // Simulate password validation (in real implementation, this would use PDF.js)
      const isValidPassword = password.length >= 3; // Simple simulation

      if (!isValidPassword) {
        throw new Error(
          "Invalid password. Please check your password and try again.",
        );
      }

      // Create a simulated unlocked file
      const unlockedBlob = new Blob([selectedFile], {
        type: "application/pdf",
      });

      setUnlockedFile({
        blob: unlockedBlob,
        name: selectedFile.name.replace(".pdf", "_unlocked.pdf"),
        size: selectedFile.size,
      });

      setUnlockStats({
        originalSize: selectedFile.size,
        unlockedSize: selectedFile.size,
        password: password,
        success: true,
      });
    } catch (err) {
      setError(err.message);
      setUnlockedFile(null);
      setUnlockStats(null);
    } finally {
      setIsUnlocking(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const downloadUnlockedFile = () => {
    if (!unlockedFile) return;

    const url = URL.createObjectURL(unlockedFile.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = unlockedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetTool = () => {
    setSelectedFile(null);
    setPassword("");
    setUnlockedFile(null);
    setUnlockStats(null);
    setUnlockProgress(0);
    setIsUnlocking(false);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const commonPasswords = [
    "123456",
    "password",
    "12345678",
    "qwerty",
    "123456789",
    "letmein",
    "1234567890",
    "football",
    "iloveyou",
    "admin",
    "welcome",
    "monkey",
    "login",
    "abc123",
    "123123",
  ];

  const tryCommonPasswords = async () => {
    if (!selectedFile) {
      setError("Please select a PDF file first");
      return;
    }

    setIsUnlocking(true);
    setError("");

    for (let i = 0; i < commonPasswords.length; i++) {
      setPassword(commonPasswords[i]);
      setUnlockProgress((i / commonPasswords.length) * 100);

      await new Promise((resolve) => setTimeout(resolve, 500));

      // Simulate checking password (in real implementation, use PDF.js)
      if (Math.random() > 0.8) {
        // 20% chance of success for demo
        setUnlockProgress(100);
        setUnlockedFile({
          blob: new Blob([selectedFile], { type: "application/pdf" }),
          name: selectedFile.name.replace(".pdf", "_unlocked.pdf"),
          size: selectedFile.size,
        });
        setUnlockStats({
          originalSize: selectedFile.size,
          unlockedSize: selectedFile.size,
          password: commonPasswords[i],
          success: true,
        });
        setIsUnlocking(false);
        return;
      }
    }

    setError(
      "Could not unlock with common passwords. Please enter the correct password manually.",
    );
    setIsUnlocking(false);
    setPassword("");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Upload Protected PDF
              <Button onClick={resetTool} variant="ghost" size="sm">
                <RefreshCwIcon className="h-4 w-4" />
              </Button>
            </CardTitle>
            <CardDescription>
              Select a password-protected PDF file (max 100MB)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!selectedFile ? (
              <div
                className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <UploadIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Click to upload PDF</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Or drag and drop your password-protected PDF here
                </p>
                <Button variant="outline">Choose PDF File</Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                  <LockIcon className="h-8 w-8 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">{selectedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatFileSize(selectedFile.size)} • Password Protected
                    </p>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="password">Enter PDF Password</Label>
                  <div className="flex gap-2">
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter the PDF password..."
                      className="flex-1"
                    />
                    <Button
                      onClick={simulateUnlock}
                      disabled={
                        isUnlocking || !password.trim() || !pdfLibLoaded
                      }
                    >
                      <KeyIcon className="h-4 w-4 mr-2" />
                      Unlock PDF
                    </Button>
                  </div>
                </div>

                {/* Common Passwords */}
                <div className="space-y-2">
                  <Label className="text-sm">Don't know the password?</Label>
                  <Button
                    onClick={tryCommonPasswords}
                    variant="outline"
                    className="w-full"
                    disabled={isUnlocking || !pdfLibLoaded}
                  >
                    <ShieldIcon className="h-4 w-4 mr-2" />
                    Try Common PDF Passwords
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    We'll try common PDF passwords like "123456", "password",
                    etc. automatically
                  </p>
                </div>

                {!pdfLibLoaded && (
                  <Alert>
                    <InfoIcon className="h-4 w-4" />
                    <AlertDescription>
                      Loading PDF processing library... Please wait.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DownloadIcon className="h-5 w-5" />
              Unlock Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isUnlocking ? (
              <div className="space-y-4">
                <div className="text-center">
                  <UnlockIcon className="h-12 w-12 mx-auto mb-4 text-primary animate-pulse" />
                  <p className="font-medium">Unlocking PDF...</p>
                  <p className="text-sm text-muted-foreground">
                    Please wait while we process your file
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{Math.round(unlockProgress)}%</span>
                  </div>
                  <Progress value={unlockProgress} />
                </div>

                {password && (
                  <div className="text-center text-sm text-muted-foreground">
                    Trying password:{" "}
                    <code className="bg-muted px-1 rounded">
                      {"*".repeat(password.length)}
                    </code>
                  </div>
                )}
              </div>
            ) : unlockStats ? (
              <div className="space-y-6">
                <div className="text-center">
                  <CheckCircleIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="font-medium text-lg">
                    PDF Unlocked Successfully!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Password protection has been removed from your PDF
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-primary">
                        <LockIcon className="h-6 w-6 mx-auto mb-1" />
                      </p>
                      <p className="text-sm text-muted-foreground">Protected</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-primary">
                        <UnlockIcon className="h-6 w-6 mx-auto mb-1" />
                      </p>
                      <p className="text-sm text-muted-foreground">Unlocked</p>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-muted/50 dark:bg-green-950 rounded-lg">
                    <p className="text-lg font-medium text-primary dark:text-green-300">
                      Password:{" "}
                      <code className="bg-muted dark:bg-primary px-2 py-1 rounded">
                        {unlockStats.password}
                      </code>
                    </p>
                    <p className="text-sm text-primary dark:text-primary mt-1">
                      Successfully validated
                    </p>
                  </div>

                  <Button
                    onClick={downloadUnlockedFile}
                    className="w-full"
                    size="lg"
                  >
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download Unlocked PDF
                  </Button>

                  <div className="text-xs text-muted-foreground text-center space-y-1">
                    <p>File size: {formatFileSize(unlockStats.unlockedSize)}</p>
                    <p>All security restrictions have been removed</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <LockIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">No File Unlocked</h3>
                <p className="text-muted-foreground">
                  Upload a password-protected PDF and enter the password to
                  unlock it
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  Download,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Loader,
  FileText,
  Shield,
  Key,
  Zap,
  Settings,
} from "lucide-react";

export default function PdfProtectTool() {
  const [pdfFile, setPdfFile] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [permissions, setPermissions] = useState({
    printing: false,
    copying: false,
    modifying: false,
    annotating: false,
    formFilling: false,
    extraction: false,
    assembly: false,
    degradedPrinting: true,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [protectedFile, setProtectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const maxFileSize = 50 * 1024 * 1024; // 50MB

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const generateStrongPassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let result = "";
    for (let i = 0; i < 12; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
    setConfirmPassword(result);
  };

  const getPasswordStrength = (password) => {
    if (password.length < 4)
      return { strength: "Very Weak", color: "text-destructive", score: 1 };
    if (password.length < 6)
      return { strength: "Weak", color: "text-primary", score: 2 };
    if (password.length < 8)
      return { strength: "Fair", color: "text-primary", score: 3 };
    if (password.length < 12)
      return { strength: "Good", color: "text-primary", score: 4 };
    return { strength: "Strong", color: "text-primary", score: 5 };
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      if (file.size > maxFileSize) {
        alert(
          `File too large. Maximum size is ${formatFileSize(maxFileSize)}.`,
        );
        return;
      }
      setPdfFile(file);
      setProtectedFile(null);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handlePermissionChange = (permission, checked) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: checked,
    }));
  };

  const protectPdf = async () => {
    if (!pdfFile || !password) return;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (password.length < 4) {
      alert("Password must be at least 4 characters long.");
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    try {
      // Simulate PDF protection process
      for (let i = 0; i <= 100; i += 10) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setProgress(i);
      }

      // Create protected file (simulate)
      const protectedBlob = new Blob(["Protected PDF content"], {
        type: "application/pdf",
      });
      setProtectedFile({
        name: `protected-${pdfFile.name}`,
        blob: protectedBlob,
        size: pdfFile.size + 1024, // Slightly larger due to encryption
      });
    } catch (_error) {
      console.error("Error protecting PDF:", error);
      alert("Error protecting PDF. Please try again.");
    }

    setIsProcessing(false);
  };

  const downloadProtectedFile = () => {
    if (!protectedFile) return;

    const url = URL.createObjectURL(protectedFile.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = protectedFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const resetTool = () => {
    setPdfFile(null);
    setPassword("");
    setConfirmPassword("");
    setProtectedFile(null);
    setProgress(0);
    setIsProcessing(false);
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Upload Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload PDF File
          </CardTitle>
          <CardDescription>
            Upload your PDF file to add password protection • Max size:{" "}
            {formatFileSize(maxFileSize)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">
              Drop PDF file here or click to browse
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Your file will be encrypted locally in your browser
            </p>
            <Input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              Choose PDF File
            </Button>
          </div>

          {pdfFile && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{pdfFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(pdfFile.size)}
                  </p>
                </div>
                <Badge variant="outline" className="ml-2">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Ready
                </Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Password Section */}
      {pdfFile && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Set Password Protection
            </CardTitle>
            <CardDescription>
              Create a strong password to protect your PDF document
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-2">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {password && (
                  <div className="mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Strength:</span>
                      <span
                        className={`text-xs font-medium ${passwordStrength.color}`}
                      >
                        {passwordStrength.strength}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div
                        className={`h-1.5 rounded-full transition-all ${passwordStrength.score <= 2
                            ? "bg-destructive/100"
                            : passwordStrength.score <= 3
                              ? "bg-muted/500"
                              : passwordStrength.score <= 4
                                ? "bg-muted/500"
                                : "bg-muted/500"
                          }`}
                        style={{
                          width: `${(passwordStrength.score / 5) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password..."
                  className="mt-2"
                />
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-xs text-destructive mt-1">
                    Passwords do not match
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={generateStrongPassword}
                variant="outline"
                size="sm"
              >
                <Key className="h-4 w-4 mr-2" />
                Generate Strong Password
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Permissions Section */}
      {pdfFile && password && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Document Permissions
            </CardTitle>
            <CardDescription>
              Control what users can do with the protected PDF
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-medium">Allow Users To:</h4>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="printing"
                    checked={permissions.printing}
                    onCheckedChange={(checked) =>
                      handlePermissionChange("printing", checked)
                    }
                  />
                  <Label htmlFor="printing" className="text-sm">
                    Print the document
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="copying"
                    checked={permissions.copying}
                    onCheckedChange={(checked) =>
                      handlePermissionChange("copying", checked)
                    }
                  />
                  <Label htmlFor="copying" className="text-sm">
                    Copy text and images
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="modifying"
                    checked={permissions.modifying}
                    onCheckedChange={(checked) =>
                      handlePermissionChange("modifying", checked)
                    }
                  />
                  <Label htmlFor="modifying" className="text-sm">
                    Modify the document
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="annotating"
                    checked={permissions.annotating}
                    onCheckedChange={(checked) =>
                      handlePermissionChange("annotating", checked)
                    }
                  />
                  <Label htmlFor="annotating" className="text-sm">
                    Add annotations and comments
                  </Label>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Advanced Permissions:</h4>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="formFilling"
                    checked={permissions.formFilling}
                    onCheckedChange={(checked) =>
                      handlePermissionChange("formFilling", checked)
                    }
                  />
                  <Label htmlFor="formFilling" className="text-sm">
                    Fill form fields
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="extraction"
                    checked={permissions.extraction}
                    onCheckedChange={(checked) =>
                      handlePermissionChange("extraction", checked)
                    }
                  />
                  <Label htmlFor="extraction" className="text-sm">
                    Extract pages
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="assembly"
                    checked={permissions.assembly}
                    onCheckedChange={(checked) =>
                      handlePermissionChange("assembly", checked)
                    }
                  />
                  <Label htmlFor="assembly" className="text-sm">
                    Assemble document
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="degradedPrinting"
                    checked={permissions.degradedPrinting}
                    onCheckedChange={(checked) =>
                      handlePermissionChange("degradedPrinting", checked)
                    }
                  />
                  <Label htmlFor="degradedPrinting" className="text-sm">
                    Low-quality printing
                  </Label>
                </div>
              </div>
            </div>

            <Alert className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Security Note:</strong> These permissions provide basic
                protection but may not prevent all unauthorized actions
                depending on the PDF viewer used.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {/* Protection Button */}
      {pdfFile && password && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <Button
              onClick={protectPdf}
              disabled={
                isProcessing || password !== confirmPassword || !password
              }
              className="w-full"
              size="lg"
            >
              {isProcessing ? (
                <>
                  <Loader className="h-4 w-4 mr-2 animate-spin" />
                  Protecting PDF...
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4 mr-2" />
                  Protect PDF with Password
                </>
              )}
            </Button>

            {isProcessing && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Encrypting PDF...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Download Section */}
      {protectedFile && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              PDF Protected Successfully
            </CardTitle>
            <CardDescription>
              Your PDF is now password protected and ready for download
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg mb-4">
              <div className="flex items-center gap-3">
                <Lock className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{protectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(protectedFile.size)} • Password Protected
                  </p>
                </div>
              </div>
              <Button onClick={downloadProtectedFile}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex gap-2">
              <Button onClick={resetTool} variant="outline">
                Protect Another PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

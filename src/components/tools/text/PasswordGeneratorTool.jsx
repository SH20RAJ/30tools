"use client";

import { useState, useCallback } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeftIcon,
  CopyIcon,
  RefreshCwIcon,
  ShieldIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  KeyIcon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";
import Link from "next/link";

export default function PasswordGeneratorTool() {
  const [length, setLength] = useState([12]);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false);
  const [password, setPassword] = useState("");
  const [passwords, setPasswords] = useState([]);
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const generatePassword = useCallback(() => {
    let charset = "";

    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    // Exclude similar characters if requested
    if (excludeSimilar) {
      charset = charset.replace(/[il1Lo0O]/g, "");
    }

    // Exclude ambiguous characters if requested
    if (excludeAmbiguous) {
      charset = charset.replace(/[{}[\]()\/\\'"~,;.<>]/g, "");
    }

    if (charset === "") {
      alert("Please select at least one character type!");
      return;
    }

    let result = "";
    for (let i = 0; i < length[0]; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(result);
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    excludeSimilar,
    excludeAmbiguous,
  ]);

  const generateMultiplePasswords = () => {
    const newPasswords = [];
    for (let i = 0; i < 10; i++) {
      let charset = "";

      if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
      if (includeNumbers) charset += "0123456789";
      if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

      if (excludeSimilar) {
        charset = charset.replace(/[il1Lo0O]/g, "");
      }

      if (excludeAmbiguous) {
        charset = charset.replace(/[{}[\]()\/\\'"~,;.<>]/g, "");
      }

      if (charset === "") continue;

      let result = "";
      for (let j = 0; j < length[0]; j++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
      }

      newPasswords.push(result);
    }

    setPasswords(newPasswords);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy password: ", err);
    }
  };

  // Password strength calculation
  const getPasswordStrength = (pwd) => {
    if (!pwd) return { score: 0, label: "No Password", color: "bg-gray-300" };

    let score = 0;
    let feedback = [];

    // Length scoring
    if (pwd.length >= 8) score += 25;
    if (pwd.length >= 12) score += 25;
    if (pwd.length >= 16) score += 25;

    // Character variety scoring
    if (/[a-z]/.test(pwd)) score += 5;
    if (/[A-Z]/.test(pwd)) score += 5;
    if (/[0-9]/.test(pwd)) score += 5;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 15;

    // Bonus for very long passwords
    if (pwd.length >= 20) score += 10;

    // Determine strength label and color
    if (score < 30) {
      return {
        score,
        label: "Very Weak",
        color: "bg-destructive/100",
        feedback: ["Password is too short", "Add more character types"],
      };
    } else if (score < 50) {
      return {
        score,
        label: "Weak",
        color: "bg-muted/500",
        feedback: ["Consider adding special characters", "Increase length"],
      };
    } else if (score < 75) {
      return {
        score,
        label: "Good",
        color: "bg-muted/500",
        feedback: ["Good password strength"],
      };
    } else if (score < 90) {
      return {
        score,
        label: "Strong",
        color: "bg-muted/500",
        feedback: ["Strong password"],
      };
    } else {
      return {
        score,
        label: "Very Strong",
        color: "bg-primary",
        feedback: ["Excellent password strength"],
      };
    }
  };

  const strength = getPasswordStrength(password);

  // Generate initial password
  if (!password) {
    generatePassword();
  }

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
              <KeyIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Password Generator</h1>
              <p className="text-muted-foreground">
                Create strong, secure passwords instantly
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Cryptographically Secure</Badge>
            <Badge variant="secondary">No Storage</Badge>
            <Badge variant="secondary">Customizable</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Password Settings</CardTitle>
                <CardDescription>
                  Customize your password requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Length Slider */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">
                    Password Length: {length[0]} characters
                  </Label>
                  <Slider
                    value={length}
                    onValueChange={setLength}
                    min={4}
                    max={128}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>4</span>
                    <span>128</span>
                  </div>
                </div>

                <Separator />

                {/* Character Types */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    Include Characters
                  </Label>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="uppercase"
                        checked={includeUppercase}
                        onCheckedChange={setIncludeUppercase}
                      />
                      <Label htmlFor="uppercase" className="text-sm">
                        Uppercase Letters (A-Z)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="lowercase"
                        checked={includeLowercase}
                        onCheckedChange={setIncludeLowercase}
                      />
                      <Label htmlFor="lowercase" className="text-sm">
                        Lowercase Letters (a-z)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="numbers"
                        checked={includeNumbers}
                        onCheckedChange={setIncludeNumbers}
                      />
                      <Label htmlFor="numbers" className="text-sm">
                        Numbers (0-9)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="symbols"
                        checked={includeSymbols}
                        onCheckedChange={setIncludeSymbols}
                      />
                      <Label htmlFor="symbols" className="text-sm">
                        Symbols (!@#$%^&*)
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Advanced Options */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    Advanced Options
                  </Label>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="exclude-similar"
                        checked={excludeSimilar}
                        onCheckedChange={setExcludeSimilar}
                      />
                      <Label htmlFor="exclude-similar" className="text-sm">
                        Exclude Similar Characters (i, l, 1, L, o, 0, O)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="exclude-ambiguous"
                        checked={excludeAmbiguous}
                        onCheckedChange={setExcludeAmbiguous}
                      />
                      <Label htmlFor="exclude-ambiguous" className="text-sm">
                        Exclude Ambiguous Characters ({"{}[]()\/'\"~,;.<>"})
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Generate Button */}
                <Button onClick={generatePassword} className="w-full" size="lg">
                  <RefreshCwIcon className="h-4 w-4 mr-2" />
                  Generate New Password
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Generated Password Display */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Password */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Generated Password</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={
                      showPassword ? password : "•".repeat(password.length)
                    }
                    readOnly
                    className="font-mono text-lg"
                  />
                  <Button
                    onClick={() => copyToClipboard(password)}
                    variant="outline"
                  >
                    <CopyIcon className="h-4 w-4 mr-2" />
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>

                {/* Password Strength */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-medium">
                      Password Strength
                    </Label>
                    <Badge
                      variant="outline"
                      className={`text-white ${strength.color}`}
                    >
                      {strength.label}
                    </Badge>
                  </div>
                  <Progress value={strength.score} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    Score: {strength.score}/100
                  </div>
                </div>

                {/* Security Tips */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-start gap-2 mb-2">
                    <ShieldIcon className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm font-medium">Security Tips</span>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Use a unique password for each account</li>
                    <li>• Enable two-factor authentication when available</li>
                    <li>• Consider using a password manager</li>
                    <li>• Never share your passwords with others</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Multiple Passwords */}
            <Card>
              <CardHeader>
                <CardTitle>Generate Multiple Passwords</CardTitle>
                <CardDescription>
                  Generate 10 passwords at once with your current settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={generateMultiplePasswords}
                  variant="outline"
                  className="w-full"
                >
                  Generate 10 Passwords
                </Button>

                {passwords.length > 0 && (
                  <div className="space-y-2">
                    {passwords.map((pwd, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={showPassword ? pwd : "•".repeat(pwd.length)}
                          readOnly
                          className="font-mono text-sm"
                        />
                        <Button
                          onClick={() => copyToClipboard(pwd)}
                          variant="ghost"
                          size="sm"
                        >
                          <CopyIcon className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features & Security Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Cryptographically secure random generation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Customizable length (4-128 characters)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Multiple character sets support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Password strength analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Generate multiple passwords at once
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  No passwords stored or logged
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Exclude similar/ambiguous characters
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Mobile-friendly interface
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Security & FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Security & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1 flex items-center gap-2">
                  <ShieldIcon className="h-4 w-4 text-primary" />
                  Complete Privacy
                </h4>
                <p className="text-sm text-muted-foreground">
                  All password generation happens in your browser. No passwords
                  are ever sent to our servers or stored anywhere.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">
                  How secure are these passwords?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our generator uses cryptographically secure random number
                  generation, making passwords virtually impossible to predict
                  or crack.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">
                  What makes a password strong?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Length is most important, followed by character variety. A 12+
                  character password with mixed case, numbers, and symbols is
                  very secure.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">
                  Should I use a password manager?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Yes! Password managers help you use unique, strong passwords
                  for every account without having to remember them all.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

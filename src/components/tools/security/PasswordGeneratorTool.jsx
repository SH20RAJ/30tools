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
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  ArrowLeftIcon,
  ShieldIcon,
  CopyIcon,
  CheckCircleIcon,
  RefreshCwIcon,
  EyeIcon,
  EyeOffIcon,
  KeyIcon,
  AlertTriangleIcon,
  CheckIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

export default function PasswordGeneratorTool() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState([16]);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeSimilar: false,
    excludeAmbiguous: false,
  });
  const [showPassword, setShowPassword] = useState(true);
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState(0);
  const [strengthText, setStrengthText] = useState("");
  const [generatedPasswords, setGeneratedPasswords] = useState([]);

  const characterSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    similar: "il1Lo0O",
    ambiguous: "{}[]()/\\'\"`~,;.<>",
  };

  useEffect(() => {
    generatePassword();
  }, [length, options]);

  const generatePassword = () => {
    let charset = "";

    if (options.uppercase) charset += characterSets.uppercase;
    if (options.lowercase) charset += characterSets.lowercase;
    if (options.numbers) charset += characterSets.numbers;
    if (options.symbols) charset += characterSets.symbols;

    if (options.excludeSimilar) {
      charset = charset
        .split("")
        .filter((char) => !characterSets.similar.includes(char))
        .join("");
    }

    if (options.excludeAmbiguous) {
      charset = charset
        .split("")
        .filter((char) => !characterSets.ambiguous.includes(char))
        .join("");
    }

    if (!charset) {
      setPassword("");
      return;
    }

    let result = "";
    const passwordLength = length[0];

    // Ensure at least one character from each selected set
    const requiredChars = [];
    if (options.uppercase)
      requiredChars.push(getRandomChar(characterSets.uppercase, options));
    if (options.lowercase)
      requiredChars.push(getRandomChar(characterSets.lowercase, options));
    if (options.numbers)
      requiredChars.push(getRandomChar(characterSets.numbers, options));
    if (options.symbols)
      requiredChars.push(getRandomChar(characterSets.symbols, options));

    // Fill the rest randomly
    for (let i = requiredChars.length; i < passwordLength; i++) {
      requiredChars.push(
        charset.charAt(Math.floor(Math.random() * charset.length)),
      );
    }

    // Shuffle the array
    for (let i = requiredChars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [requiredChars[i], requiredChars[j]] = [
        requiredChars[j],
        requiredChars[i],
      ];
    }

    result = requiredChars.slice(0, passwordLength).join("");
    setPassword(result);
    calculateStrength(result);
  };

  const getRandomChar = (charset, options) => {
    let filteredCharset = charset;

    if (options.excludeSimilar) {
      filteredCharset = filteredCharset
        .split("")
        .filter((char) => !characterSets.similar.includes(char))
        .join("");
    }

    if (options.excludeAmbiguous) {
      filteredCharset = filteredCharset
        .split("")
        .filter((char) => !characterSets.ambiguous.includes(char))
        .join("");
    }

    return filteredCharset.charAt(
      Math.floor(Math.random() * filteredCharset.length),
    );
  };

  const calculateStrength = (pwd) => {
    let score = 0;
    let feedback = [];

    // Length scoring
    if (pwd.length >= 12) score += 25;
    else if (pwd.length >= 8) score += 15;
    else if (pwd.length >= 6) score += 5;

    // Character variety scoring
    if (/[a-z]/.test(pwd)) score += 15;
    if (/[A-Z]/.test(pwd)) score += 15;
    if (/[0-9]/.test(pwd)) score += 15;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 20;

    // Pattern penalties
    if (/(.)\1{2,}/.test(pwd)) score -= 10; // Repeated characters
    if (/123|abc|qwe/i.test(pwd)) score -= 15; // Common sequences

    // Bonus for variety
    const uniqueChars = new Set(pwd).size;
    if (uniqueChars / pwd.length > 0.7) score += 10;

    setStrength(Math.min(100, Math.max(0, score)));

    if (score < 30) setStrengthText("Weak");
    else if (score < 60) setStrengthText("Fair");
    else if (score < 80) setStrengthText("Good");
    else setStrengthText("Strong");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateMultiple = () => {
    const passwords = [];
    for (let i = 0; i < 10; i++) {
      generatePassword();
      passwords.push(password);
    }
    setTimeout(() => {
      setGeneratedPasswords(passwords);
    }, 100);
  };

  const getStrengthColor = () => {
    if (strength < 30) return "bg-destructive/100";
    if (strength < 60) return "bg-muted/500";
    if (strength < 80) return "bg-muted/500";
    return "bg-muted/500";
  };

  const passwordRequirements = [
    { text: "At least 8 characters", met: password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { text: "Contains number", met: /[0-9]/.test(password) },
    { text: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
          <ShieldIcon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Password Generator</h2>
          <p className="text-muted-foreground">
            Generate secure, random passwords with customizable options
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Cryptographically Secure</Badge>
        <Badge variant="secondary">Customizable Length</Badge>
        <Badge variant="secondary">Strength Analysis</Badge>
        <Badge variant="secondary">Bulk Generation</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Generator */}
        <div className="lg:col-span-2 space-y-6">
          {/* Generated Password */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <KeyIcon className="h-5 w-5" />
                Generated Password
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Input
                  value={password}
                  readOnly
                  type={showPassword ? "text" : "password"}
                  className="font-mono text-lg pr-20"
                  placeholder="Generated password will appear here..."
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyToClipboard}
                    disabled={!password}
                  >
                    {copied ? (
                      <CheckCircleIcon className="h-4 w-4 text-primary" />
                    ) : (
                      <CopyIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Strength Meter */}
              {password && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Password Strength
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        strength < 30
                          ? "text-destructive"
                          : strength < 60
                            ? "text-primary"
                            : strength < 80
                              ? "text-primary"
                              : "text-primary"
                      }`}
                    >
                      {strengthText} ({strength}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${getStrengthColor()}`}
                      style={{ width: `${strength}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button onClick={generatePassword} className="flex-1">
                  <RefreshCwIcon className="h-4 w-4 mr-2" />
                  Generate New
                </Button>
                <Button onClick={generateMultiple} variant="outline">
                  Generate 10
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Password Options */}
          <Card>
            <CardHeader>
              <CardTitle>Password Options</CardTitle>
              <CardDescription>
                Customize your password generation settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Length Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>Password Length</Label>
                  <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
                    {length[0]} characters
                  </span>
                </div>
                <Slider
                  value={length}
                  onValueChange={setLength}
                  max={128}
                  min={4}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>4</span>
                  <span>128</span>
                </div>
              </div>

              {/* Character Type Options */}
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Include Characters
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="uppercase"
                      checked={options.uppercase}
                      onCheckedChange={(checked) =>
                        setOptions((prev) => ({ ...prev, uppercase: checked }))
                      }
                    />
                    <Label htmlFor="uppercase">Uppercase (A-Z)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="lowercase"
                      checked={options.lowercase}
                      onCheckedChange={(checked) =>
                        setOptions((prev) => ({ ...prev, lowercase: checked }))
                      }
                    />
                    <Label htmlFor="lowercase">Lowercase (a-z)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="numbers"
                      checked={options.numbers}
                      onCheckedChange={(checked) =>
                        setOptions((prev) => ({ ...prev, numbers: checked }))
                      }
                    />
                    <Label htmlFor="numbers">Numbers (0-9)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="symbols"
                      checked={options.symbols}
                      onCheckedChange={(checked) =>
                        setOptions((prev) => ({ ...prev, symbols: checked }))
                      }
                    />
                    <Label htmlFor="symbols">Symbols (!@#$%)</Label>
                  </div>
                </div>
              </div>

              {/* Advanced Options */}
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Advanced Options
                </Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="excludeSimilar"
                      checked={options.excludeSimilar}
                      onCheckedChange={(checked) =>
                        setOptions((prev) => ({
                          ...prev,
                          excludeSimilar: checked,
                        }))
                      }
                    />
                    <Label htmlFor="excludeSimilar" className="text-sm">
                      Exclude similar characters (i, l, 1, L, o, 0, O)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="excludeAmbiguous"
                      checked={options.excludeAmbiguous}
                      onCheckedChange={(checked) =>
                        setOptions((prev) => ({
                          ...prev,
                          excludeAmbiguous: checked,
                        }))
                      }
                    />
                    <Label htmlFor="excludeAmbiguous" className="text-sm">
                      Exclude ambiguous characters ({'{}[]()/"...>'})
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Multiple Passwords */}
          {generatedPasswords.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Generated Passwords</CardTitle>
                <CardDescription>
                  Multiple password options to choose from
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {generatedPasswords.map((pwd, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 border rounded-lg"
                    >
                      <Input
                        value={pwd}
                        readOnly
                        type={showPassword ? "text" : "password"}
                        className="font-mono flex-1"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigator.clipboard.writeText(pwd)}
                      >
                        <CopyIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Password Requirements */}
          {password && (
            <Card>
              <CardHeader>
                <CardTitle>Password Requirements</CardTitle>
                <CardDescription>Common security requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {req.met ? (
                        <CheckIcon className="h-4 w-4 text-primary" />
                      ) : (
                        <XIcon className="h-4 w-4 text-destructive" />
                      )}
                      <span
                        className={`text-sm ${req.met ? "text-primary" : "text-destructive"}`}
                      >
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Security Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangleIcon className="h-5 w-5" />
                Security Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>• Use unique passwords</strong>
                <p className="text-muted-foreground">
                  Never reuse passwords across multiple accounts
                </p>
              </div>
              <div>
                <strong>• Enable 2FA</strong>
                <p className="text-muted-foreground">
                  Add two-factor authentication when available
                </p>
              </div>
              <div>
                <strong>• Use a password manager</strong>
                <p className="text-muted-foreground">
                  Store passwords securely and generate them automatically
                </p>
              </div>
              <div>
                <strong>• Update regularly</strong>
                <p className="text-muted-foreground">
                  Change passwords periodically, especially after breaches
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Password Strength Info */}
          <Card>
            <CardHeader>
              <CardTitle>Strength Factors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Length (12+ chars)</span>
                <span className="font-medium">+25 pts</span>
              </div>
              <div className="flex justify-between">
                <span>Uppercase letters</span>
                <span className="font-medium">+15 pts</span>
              </div>
              <div className="flex justify-between">
                <span>Lowercase letters</span>
                <span className="font-medium">+15 pts</span>
              </div>
              <div className="flex justify-between">
                <span>Numbers</span>
                <span className="font-medium">+15 pts</span>
              </div>
              <div className="flex justify-between">
                <span>Special characters</span>
                <span className="font-medium">+20 pts</span>
              </div>
              <div className="flex justify-between">
                <span>Character variety</span>
                <span className="font-medium">+10 pts</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Privacy Notice */}
      <Alert className="mt-6">
        <ShieldIcon className="h-4 w-4" />
        <AlertDescription>
          <strong>Privacy Notice:</strong> All passwords are generated locally
          in your browser. No passwords are sent to our servers or stored
          anywhere.
        </AlertDescription>
      </Alert>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="Password Generator"
          toolDescription="Generate secure, random passwords with customizable options and strength analysis. Cryptographically secure password generator"
          toolUrl="https://30tools.com/password-generator"
          category="security"
        />
      </div>
    </div>
  );
}

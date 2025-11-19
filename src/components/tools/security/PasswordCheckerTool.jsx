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
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeftIcon,
  ShieldIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeOffIcon,
  CopyIcon,
  RefreshCwIcon,
  KeyIcon,
  LockIcon,
  UnlockIcon,
  ZapIcon,
  TrendingUpIcon,
} from "lucide-react";
import Link from "next/link";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

export default function PasswordCheckerTool() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState([]);
  const [isCompromised, setIsCompromised] = useState(false);
  const [estimatedCrackTime, setEstimatedCrackTime] = useState("");

  const calculatePasswordStrength = (pwd) => {
    let score = 0;
    const checks = [];

    // Length check
    if (pwd.length >= 8) {
      score += 20;
      checks.push({
        type: "success",
        message: "Length is adequate (8+ characters)",
      });
    } else {
      checks.push({
        type: "error",
        message: "Password too short (minimum 8 characters)",
      });
    }

    // Uppercase check
    if (/[A-Z]/.test(pwd)) {
      score += 15;
      checks.push({ type: "success", message: "Contains uppercase letters" });
    } else {
      checks.push({ type: "error", message: "Add uppercase letters (A-Z)" });
    }

    // Lowercase check
    if (/[a-z]/.test(pwd)) {
      score += 15;
      checks.push({ type: "success", message: "Contains lowercase letters" });
    } else {
      checks.push({ type: "error", message: "Add lowercase letters (a-z)" });
    }

    // Numbers check
    if (/\d/.test(pwd)) {
      score += 15;
      checks.push({ type: "success", message: "Contains numbers" });
    } else {
      checks.push({ type: "error", message: "Add numbers (0-9)" });
    }

    // Special characters check
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)) {
      score += 20;
      checks.push({ type: "success", message: "Contains special characters" });
    } else {
      checks.push({
        type: "error",
        message: "Add special characters (!@#$%^&*)",
      });
    }

    // Length bonus
    if (pwd.length >= 12) {
      score += 10;
      checks.push({
        type: "success",
        message: "Excellent length (12+ characters)",
      });
    }

    // Repetition penalty
    if (/(.)\1{2,}/.test(pwd)) {
      score -= 10;
      checks.push({ type: "warning", message: "Avoid repeating characters" });
    }

    // Common patterns penalty
    if (/123|abc|qwe|password|admin/i.test(pwd)) {
      score -= 20;
      checks.push({ type: "error", message: "Avoid common patterns or words" });
    }

    return { score: Math.max(0, Math.min(100, score)), checks };
  };

  const calculateCrackTime = (pwd) => {
    if (!pwd) return "";

    let charset = 0;
    if (/[a-z]/.test(pwd)) charset += 26;
    if (/[A-Z]/.test(pwd)) charset += 26;
    if (/\d/.test(pwd)) charset += 10;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)) charset += 32;

    const combinations = Math.pow(charset, pwd.length);
    const secondsToCrack = combinations / (2 * 1000000000); // Assuming 1 billion guesses per second

    if (secondsToCrack < 60) return "Less than a minute";
    if (secondsToCrack < 3600)
      return `${Math.ceil(secondsToCrack / 60)} minutes`;
    if (secondsToCrack < 86400)
      return `${Math.ceil(secondsToCrack / 3600)} hours`;
    if (secondsToCrack < 31536000)
      return `${Math.ceil(secondsToCrack / 86400)} days`;
    if (secondsToCrack < 31536000000)
      return `${Math.ceil(secondsToCrack / 31536000)} years`;
    return "Centuries";
  };

  useEffect(() => {
    if (password) {
      const result = calculatePasswordStrength(password);
      setStrength(result.score);
      setFeedback(result.checks);
      setEstimatedCrackTime(calculateCrackTime(password));
    } else {
      setStrength(0);
      setFeedback([]);
      setEstimatedCrackTime("");
    }
  }, [password]);

  const getStrengthColor = () => {
    if (strength < 30) return "text-destructive bg-destructive/20";
    if (strength < 60) return "text-primary bg-muted";
    if (strength < 80) return "text-primary bg-muted";
    return "text-primary bg-muted";
  };

  const getStrengthText = () => {
    if (strength < 30) return "Weak";
    if (strength < 60) return "Fair";
    if (strength < 80) return "Strong";
    return "Very Strong";
  };

  const generateSecurePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    const allChars = lowercase + uppercase + numbers + symbols;
    let password = "";

    // Ensure at least one character from each category
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the rest randomly
    for (let i = 4; i < 16; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password
    setPassword(
      password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join(""),
    );
  };

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
          <h1 className="text-3xl font-bold">Password Strength Checker</h1>
          <p className="text-muted-foreground">
            Check how secure your passwords are and get improvement tips
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Security Analysis</Badge>
        <Badge variant="secondary">Crack Time Estimation</Badge>
        <Badge variant="secondary">Improvement Tips</Badge>
        <Badge variant="secondary">Password Generator</Badge>
      </div>

      <Tabs defaultValue="checker" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="checker">Check Password</TabsTrigger>
          <TabsTrigger value="generator">Generate Password</TabsTrigger>
        </TabsList>

        <TabsContent value="checker" className="space-y-6">
          {/* Password Input */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <KeyIcon className="h-5 w-5" />
                Enter Password to Check
              </CardTitle>
              <CardDescription>
                Your password is never sent to our servers - all analysis
                happens in your browser
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password..."
                    className="pr-10 input-cute"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {password && (
                <div className="space-y-4">
                  {/* Strength Meter */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-sm font-medium">
                        Password Strength
                      </Label>
                      <Badge className={getStrengthColor()}>
                        {getStrengthText()} ({strength}%)
                      </Badge>
                    </div>
                    <Progress value={strength} className="h-3" />
                  </div>

                  {/* Crack Time Estimation */}
                  <Alert>
                    <TrendingUpIcon className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Estimated crack time:</strong>{" "}
                      {estimatedCrackTime}
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Feedback */}
          {password && feedback.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Security Analysis</CardTitle>
                <CardDescription>
                  Detailed breakdown of your password strength
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feedback.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {item.type === "success" && (
                        <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                      {item.type === "error" && (
                        <AlertTriangleIcon className="h-5 w-5 text-destructive flex-shrink-0" />
                      )}
                      {item.type === "warning" && (
                        <AlertTriangleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                      <span className="text-sm">{item.message}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="generator" className="space-y-6">
          {/* Password Generator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ZapIcon className="h-5 w-5" />
                Secure Password Generator
              </CardTitle>
              <CardDescription>
                Generate cryptographically secure passwords
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={generateSecurePassword} className="btn-cute">
                <RefreshCwIcon className="h-4 w-4 mr-2" />
                Generate Secure Password
              </Button>

              {password && (
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between">
                      <code className="text-lg font-mono break-all">
                        {password}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigator.clipboard.writeText(password)}
                      >
                        <CopyIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-sm font-medium">
                        Password Strength
                      </Label>
                      <Badge className={getStrengthColor()}>
                        {getStrengthText()} ({strength}%)
                      </Badge>
                    </div>
                    <Progress value={strength} className="h-3" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Best Practices */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Password Security Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 text-primary">✅ Do This</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Use at least 12 characters</li>
                <li>• Include uppercase, lowercase, numbers, and symbols</li>
                <li>• Use unique passwords for each account</li>
                <li>• Consider using a password manager</li>
                <li>• Enable two-factor authentication</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-destructive">
                ❌ Avoid This
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Common words or personal information</li>
                <li>• Sequential patterns (123, abc)</li>
                <li>• Reusing passwords across sites</li>
                <li>• Storing passwords in plain text</li>
                <li>• Sharing passwords via email or chat</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="Password Strength Checker"
          toolDescription="Check how secure your passwords are and get improvement tips with this free online tool"
          toolUrl="https://30tools.com/password-strength-checker"
          category="security"
        />
      </div>
    </div>
  );
}

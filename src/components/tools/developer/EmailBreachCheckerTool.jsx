"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  Search,
  AlertTriangle,
  Info,
  Mail,
  Calendar,
  Users,
  Lock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { checkEmailBreaches } from "@/lib/breach-actions";

export default function EmailBreachCheckerTool() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    if (!email.trim()) {
      setError("Please enter an email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");
    setResults(null);

    try {
      const result = await checkEmailBreaches(email.trim());

      if (result.success) {
        setResults({
          email: result.email,
          breaches: result.data.breaches,
          pastes: result.data.pastes,
        });
      } else {
        setError(result.error);
      }
    } catch (_err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <div className="min-h-screen  p-4">
      <div className="max-w-4xl mx-auto">
        {/* SEO Content - Hidden but accessible to search engines */}
        <div className="sr-only">
          <div>
            Email Breach Checker - Check if Your Email is Compromised | 30tools
          </div>
          <p>
            Free email breach checker to see if your email has been compromised
            in data breaches. Check against billions of breached accounts using
            HaveIBeenPwned database. Protect your online security by checking if
            your email has been exposed in data breaches.
          </p>
          <h2>Features</h2>
          <ul>
            <li>Email breach checking against HaveIBeenPwned database</li>
            <li>Detailed breach information and dates</li>
            <li>Privacy-focused - no data stored</li>
            <li>Free unlimited checks</li>
            <li>Real-time results</li>
          </ul>
          <p>
            Keywords: email breach checker, data breach checker, email security,
            compromised email, haveibeenpwned, email breach check, data breach
            lookup
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Email Breach Checker
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check if your email has been compromised in data breaches. Get
            detailed information about security incidents affecting your email.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary">Free Unlimited Checks</Badge>
            <Badge variant="secondary">Billions of Records</Badge>
            <Badge variant="secondary">Real-time Results</Badge>
            <Badge variant="secondary">Privacy Focused</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Tool */}
          <div className="lg:col-span-2">
            <Card className="card-cute">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Email Security Check
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-border focus:border-primary focus:ring-primary"
                    onKeyPress={(e) => e.key === "Enter" && handleCheck()}
                  />
                </div>

                {/* Error Display */}
                {error && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {/* Check Button */}
                <Button
                  onClick={handleCheck}
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Checking Email...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Check for Breaches
                    </>
                  )}
                </Button>

                {/* Results */}
                {results && (
                  <div className="space-y-4">
                    {/* Email Results Summary */}
                    <div
                      className={`flex items-center gap-3 p-4 rounded-lg border-2 ${results.breaches.length > 0
                          ? "bg-destructive/10 border-destructive/50"
                          : "bg-muted/50 border-border"
                        }`}
                    >
                      {results.breaches.length > 0 ? (
                        <ShieldAlert className="w-8 h-8 text-destructive" />
                      ) : (
                        <ShieldCheck className="w-8 h-8 text-primary" />
                      )}
                      <div>
                        <h3
                          className={`font-semibold ${results.breaches.length > 0
                              ? "text-destructive"
                              : "text-foreground"
                            }`}
                        >
                          {results.breaches.length > 0
                            ? `Found in ${results.breaches.length} breach${results.breaches.length > 1 ? "es" : ""}`
                            : "No breaches found"}
                        </h3>
                        <p
                          className={`text-sm ${results.breaches.length > 0
                              ? "text-destructive"
                              : "text-primary"
                            }`}
                        >
                          Email: {results.email}
                        </p>
                      </div>
                    </div>

                    {/* Breach Details */}
                    {results.breaches.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Breach Details:</h4>
                        {results.breaches.map((breach, index) => (
                          <Card
                            key={index}
                            className="border-l-4 border-l-red-500"
                          >
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="font-semibold">{breach.Name}</h5>
                                <Badge variant="destructive">
                                  {formatDate(breach.BreachDate)}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {breach.Description}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  {formatNumber(breach.PwnCount)} accounts
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  Added: {formatDate(breach.AddedDate)}
                                </span>
                              </div>
                              {breach.DataClasses && (
                                <div className="mt-2">
                                  <p className="text-xs font-medium mb-1">
                                    Compromised data:
                                  </p>
                                  <div className="flex flex-wrap gap-1">
                                    {breach.DataClasses.map((dataClass, i) => (
                                      <Badge
                                        key={i}
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        {dataClass}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}

                    {/* Password Check Suggestion */}
                    <Card className="bg-background">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Lock className="w-6 h-6 text-primary" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-primary">
                              Check Your Passwords Too
                            </h4>
                            <p className="text-sm text-primary">
                              Also check if your passwords have been compromised
                              in data breaches.
                            </p>
                          </div>
                          <Link href="/password-breach-checker">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-border text-primary hover:bg-muted"
                            >
                              Check Passwords
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg border-0 rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Email Checking</h4>
                  <p className="text-muted-foreground">
                    We check your email against the HaveIBeenPwned database,
                    which contains billions of compromised accounts from known
                    data breaches.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Data Sources</h4>
                  <p className="text-muted-foreground">
                    Our database includes major breaches from companies like
                    Facebook, LinkedIn, Adobe, and many others.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Shield className="w-5 h-5" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  <span>No data stored on our servers</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  <span>Powered by HaveIBeenPwned</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  <span>Secure server-side checking</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  <span>Real-time breach database</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 rounded-xl">
              <CardHeader>
                <CardTitle className="text-foreground">Security Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Use unique passwords for each account</p>
                <p>• Enable two-factor authentication</p>
                <p>• Monitor your accounts regularly</p>
                <p>• Update compromised passwords immediately</p>
                <p>• Use a password manager</p>
              </CardContent>
            </Card>

            {/* Link to Password Checker */}
            <Card className="bg-background">
              <CardContent className="p-4 text-center">
                <Lock className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold text-primary mb-2">
                  Password Security
                </h3>
                <p className="text-sm text-primary mb-3">
                  Check if your passwords have been compromised too.
                </p>
                <Link href="/password-breach-checker">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Check Passwords
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Use Our Email Breach Checker?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-cute text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Privacy First</h3>
                <p className="text-sm text-muted-foreground">
                  Your email is checked securely without storing any personal
                  data.
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute text-center">
              <CardContent className="p-6">
                <Search className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Comprehensive</h3>
                <p className="text-sm text-muted-foreground">
                  Check against billions of compromised accounts from major data
                  breaches.
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute text-center">
              <CardContent className="p-6">
                <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Real-time</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant results with up-to-date breach information.
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute text-center">
              <CardContent className="p-6">
                <Info className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Detailed Info</h3>
                <p className="text-sm text-muted-foreground">
                  Get detailed information about breaches including dates and
                  compromised data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

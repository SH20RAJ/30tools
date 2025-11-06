'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  Search,
  AlertTriangle,
  Info,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { checkPasswordBreaches } from '@/lib/breach-actions';

export default function PasswordBreachCheckerTool() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  // Create SHA-1 hash client-side for privacy
  const createPasswordHash = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
  };

  const handleCheck = async () => {
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      // Hash password client-side
      const passwordHash = await createPasswordHash(password);

      // Send only hash to server
      const result = await checkPasswordBreaches(passwordHash);

      if (result.success) {
        setResults({
          count: result.data.count,
          isCompromised: result.data.isCompromised
        });
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <div className="min-h-screen   p-4">
      <div className="max-w-4xl mx-auto">
        {/* SEO Content - Hidden but accessible to search engines */}
        <div className="sr-only">
          <h1>Password Breach Checker - Check if Your Email/Password is Compromised | 30tools</h1>
          <p>
            Free password breach checker to see if your email or password has been compromised in data breaches.
            Check against billions of breached accounts instantly using HaveIBeenPwned database. Protect your
            online security by checking if your credentials have been exposed in data breaches.
          </p>
          <h2>Features</h2>
          <ul>
            <li>Email breach checking against HaveIBeenPwned database</li>
            <li>Password security checking using k-anonymity</li>
            <li>Detailed breach information and dates</li>
            <li>Privacy-focused - passwords never leave your browser</li>
            <li>Free unlimited checks</li>
            <li>Real-time results</li>
          </ul>
          <h2>How It Works</h2>
          <p>
            Our tool uses the HaveIBeenPwned API to check if your email has appeared in known data breaches.
            For passwords, we use k-anonymity to check against compromised passwords without sending your
            actual password to any server.
          </p>
          <p>Keywords: password breach checker, email breach check, data breach checker, password security, compromised password, haveibeenpwned, security check, password safety, data breach lookup</p>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Password Breach Checker
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check if your password has been compromised in data breaches.
            Secure password checking using k-anonymity for maximum privacy.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary">Free Unlimited Checks</Badge>
            <Badge variant="secondary">Privacy Focused</Badge>
            <Badge variant="secondary">Real-time Results</Badge>
            <Badge variant="secondary">Billions of Records</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Tool */}
          <div className="lg:col-span-2">
            <Card className="card-cute">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Password Security Check
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-border focus:border-border focus:ring-primary pr-10"
                      onKeyPress={(e) => e.key === 'Enter' && handleCheck()}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your password is hashed locally and never sent to our servers. We use k-anonymity for secure checking.
                  </p>
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
                  className="w-full bg-destructive hover:bg-destructive/90 text-white"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Checking...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Check Password Security
                    </>
                  )}
                </Button>

                {/* Results */}
                {results && (
                  <div className="space-y-4">
                    {/* Password Results */}
                    <div className={`flex items-center gap-3 p-4 rounded-lg border-2 ${results.isCompromised
                        ? 'bg-destructive/10 border-destructive/50'
                        : 'bg-muted/50 border-border'
                      }`}>
                      {results.isCompromised ? (
                        <ShieldAlert className="w-8 h-8 text-destructive" />
                      ) : (
                        <ShieldCheck className="w-8 h-8 text-primary" />
                      )}
                      <div>
                        <h3 className={`font-semibold ${results.isCompromised ? 'text-destructive' : 'text-foreground'
                          }`}>
                          {results.isCompromised
                            ? 'Password Compromised!'
                            : 'Password Looks Safe'
                          }
                        </h3>
                        <p className={`text-sm ${results.isCompromised ? 'text-destructive' : 'text-primary'
                          }`}>
                          {results.isCompromised
                            ? `Found in ${formatNumber(results.count)} breach${results.count > 1 ? 'es' : ''}`
                            : 'This password was not found in any known breaches'
                          }
                        </p>
                      </div>
                    </div>

                    {results.isCompromised && (
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          This password has been seen {formatNumber(results.count)} times in data breaches.
                          We recommend changing it immediately and using a unique password for each account.
                        </AlertDescription>
                      </Alert>
                    )}

                    {/* Email Check Suggestion */}
                    <Card className="bg-background">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Mail className="w-6 h-6 text-primary" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">Check Your Email Too</h4>
                            <p className="text-sm text-primary">
                              Also check if your email has been compromised in data breaches.
                            </p>
                          </div>
                          <Link href="/email-breach-checker">
                            <Button variant="outline" size="sm" className="border-border text-primary hover:bg-muted">
                              Check Email
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
                    We check your email against the HaveIBeenPwned database, which contains
                    billions of compromised accounts from known data breaches.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Password Checking</h4>
                  <p className="text-muted-foreground">
                    Your password is hashed locally and checked using k-anonymity.
                    Your actual password never leaves your browser.
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
                  <span>Passwords are hashed locally</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  <span>No data stored on our servers</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  <span>Uses k-anonymity for security</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  <span>Powered by HaveIBeenPwned</span>
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
                <p>• Use a password manager</p>
                <p>• Regularly check for breaches</p>
                <p>• Update compromised passwords immediately</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why Use Our Breach Checker?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-cute text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Privacy First</h3>
                <p className="text-sm text-muted-foreground">
                  Your passwords never leave your browser. We use secure hashing and k-anonymity.
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute text-center">
              <CardContent className="p-6">
                <Search className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Comprehensive</h3>
                <p className="text-sm text-muted-foreground">
                  Check against billions of compromised accounts from major data breaches.
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute text-center">
              <CardContent className="p-6">
                <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Real-time</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant results with up-to-date breach information from HaveIBeenPwned.
                </p>
              </CardContent>
            </Card>
            <Card className="card-cute text-center">
              <CardContent className="p-6">
                <Info className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Detailed Info</h3>
                <p className="text-sm text-muted-foreground">
                  Get detailed information about breaches including dates and compromised data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
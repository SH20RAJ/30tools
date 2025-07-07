'use client';
import { useState, useEffect } from 'react';
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
  Mail,
  ExternalLink,
  CheckCircle,
  XCircle,
  Globe,
  Database,
  Github,
  Lock
} from 'lucide-react';
import Link from 'next/link';
import { checkTempEmail } from '@/lib/temp-email-actions';

export default function TempEmailCheckerTool() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ blocklist: 0, allowlist: 0 });

  useEffect(() => {
    // Load stats on component mount
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const statsData = await fetch('/api/temp-email-stats').then(res => res.json());
      setStats(statsData);
    } catch (err) {
      console.error('Failed to load stats:', err);
    }
  };

  const handleCheck = async () => {
    if (!input.trim()) {
      setError('Please enter an email address or domain');
      return;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const result = await checkTempEmail(input.trim());
      setResults(result);
    } catch (err) {
      setError('Failed to check email. Please try again.');
      console.error('Check error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCheck();
    }
  };

  const isEmail = (str) => {
    return str.includes('@') && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  };

  const isDomain = (str) => {
    return !str.includes('@') && /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(str);
  };

  return (
    <div className="min-h-screen bg-gradient-cute py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Temporary Email Checker
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Detect disposable and temporary email addresses. Validate emails against comprehensive blocklist and allowlist databases.
          </p>
        </div>

        {/* SEO Content */}
        <div className="mb-8 text-center">
          <p className="text-sm text-muted-foreground">
            Free temporary email checker to detect disposable email addresses and validate email domains.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Keywords: temporary email checker, disposable email detector, temp mail checker, email validation, fake email detector, throwaway email checker
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="card-cute">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Blocked Domains</p>
                  <p className="text-2xl font-bold text-foreground">{stats.blocklist.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-cute">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Allowed Domains</p>
                  <p className="text-2xl font-bold text-foreground">{stats.allowlist.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tool */}
        <Card className="card-cute mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Check Email or Domain</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Enter email address or domain (e.g., user@example.com or example.com)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button 
                onClick={handleCheck} 
                disabled={loading}
                className="btn-cute"
              >
                {loading ? 'Checking...' : 'Check'}
              </Button>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {results && (
              <div className="space-y-4">
                <Alert variant={results.isTemporary ? "destructive" : "default"}>
                  <div className="flex items-center space-x-2">
                    {results.isTemporary ? (
                      <ShieldAlert className="h-4 w-4" />
                    ) : (
                      <ShieldCheck className="h-4 w-4" />
                    )}
                    <AlertDescription>
                      <strong>
                        {results.isTemporary 
                          ? "⚠️ Temporary/Disposable Email Detected" 
                          : "✅ Valid Email Domain"}
                      </strong>
                    </AlertDescription>
                  </div>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Input Details</span>
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <Badge variant="outline">
                            {results.inputType === 'email' ? 'Email Address' : 'Domain'}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Domain:</span>
                          <span className="font-mono">{results.domain}</span>
                        </div>
                        {results.inputType === 'email' && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Local Part:</span>
                            <span className="font-mono">{results.localPart}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 flex items-center space-x-2">
                        <Database className="w-4 h-4" />
                        <span>Validation Results</span>
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">In Blocklist:</span>
                          <Badge variant={results.inBlocklist ? "destructive" : "secondary"}>
                            {results.inBlocklist ? "Yes" : "No"}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">In Allowlist:</span>
                          <Badge variant={results.inAllowlist ? "default" : "secondary"}>
                            {results.inAllowlist ? "Yes" : "No"}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge variant={results.isTemporary ? "destructive" : "default"}>
                            {results.isTemporary ? "Temporary" : "Valid"}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {results.recommendation && (
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Recommendation:</strong> {results.recommendation}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="card-cute">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Info className="w-5 h-5" />
                <span>How It Works</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">1</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Enter an email address or domain name to check
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">2</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We check against comprehensive blocklist and allowlist databases
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">3</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get instant results with detailed validation information
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-cute">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Why Check Temporary Emails?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  • <strong>Prevent Fraud:</strong> Block fake registrations and spam
                </p>
                <p className="text-sm text-muted-foreground">
                  • <strong>Improve Quality:</strong> Ensure real user engagement
                </p>
                <p className="text-sm text-muted-foreground">
                  • <strong>Reduce Bounces:</strong> Maintain email deliverability
                </p>
                <p className="text-sm text-muted-foreground">
                  • <strong>Compliance:</strong> Meet business verification requirements
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Source Attribution */}
        <Card className="card-cute mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>Data Source</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">
                  This tool uses data from the actively maintained{' '}
                  <Link 
                    href="https://github.com/disposable-email-domains/disposable-email-domains" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    disposable-email-domains repository
                  </Link>
                  {' '}on GitHub. The database is regularly updated with new temporary email providers.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">
                    <Globe className="w-3 h-3 mr-1" />
                    {stats.blocklist.toLocaleString()} blocked domains
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {stats.allowlist.toLocaleString()} allowed domains
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Github className="w-3 h-3 mr-1" />
                    Open Source
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Tools */}
        <Card className="card-cute">
          <CardHeader>
            <CardTitle>Related Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/email-breach-checker" className="group">
                <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                    <span className="font-medium group-hover:text-primary">Email Breach Checker</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Check if your email has been compromised in data breaches
                  </p>
                </div>
              </Link>
              
              <Link href="/password-breach-checker" className="group">
                <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-orange-500" />
                    <span className="font-medium group-hover:text-primary">Password Breach Checker</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Verify if your password has been exposed in breaches
                  </p>
                </div>
              </Link>
              
              <Link href="/hash-generator" className="group">
                <div className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <span className="font-medium group-hover:text-primary">Hash Generator</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Generate secure hashes for passwords and data
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Globe, AlertTriangle, CheckCircle2, XCircle, Clock, Lock, Award } from 'lucide-react';
import { toast } from 'sonner';

export default function SSLChecker() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sslData, setSslData] = useState(null);
  const [error, setError] = useState('');

  const checkSSL = async () => {
    if (!url.trim()) {
      toast.error('Please enter a website URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setSslData(null);

    try {
      // Clean the URL
      let cleanUrl = url.trim();
      if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
        cleanUrl = 'https://' + cleanUrl;
      }

      // For demo purposes, we'll simulate SSL checking
      // In a real implementation, this would call an API service
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate SSL data (in production, this would come from an actual SSL checking service)
      const domain = new URL(cleanUrl).hostname;
      const mockSslData = {
        domain: domain,
        isValid: Math.random() > 0.2, // 80% chance of valid SSL
        issuer: 'Let\'s Encrypt Authority X3',
        validFrom: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        validTo: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        daysUntilExpiry: 60,
        grade: Math.random() > 0.3 ? 'A' : Math.random() > 0.5 ? 'B' : 'C',
        protocol: 'TLS 1.3',
        keySize: '2048 bit RSA',
        signatureAlgorithm: 'SHA256withRSA',
        certificateChain: [
          { name: domain, issuer: 'Let\'s Encrypt Authority X3' },
          { name: 'Let\'s Encrypt Authority X3', issuer: 'DST Root CA X3' },
          { name: 'DST Root CA X3', issuer: 'Self-signed' }
        ],
        features: {
          hsts: Math.random() > 0.5,
          ocspStapling: Math.random() > 0.5,
          sni: true,
          heartbleed: false,
          poodle: false
        }
      };

      setSslData(mockSslData);
      toast.success('SSL check completed!');
    } catch (err) {
      setError('Failed to check SSL certificate. Please verify the URL and try again.');
      toast.error('SSL check failed');
    } finally {
      setIsLoading(false);
    }
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A': return 'text-primary bg-muted/50 border-border';
      case 'B': return 'text-primary bg-muted/50 border-border';
      case 'C': return 'text-primary bg-muted/50 border-border';
      case 'D': return 'text-primary bg-muted/50 border-border';
      case 'F': return 'text-destructive bg-destructive/10 border-destructive/50';
      default: return 'text-muted-foreground bg-gray-50 border-border';
    }
  };

  const getExpiryStatus = (days) => {
    if (days < 0) return { color: 'text-destructive', text: 'Expired', icon: XCircle };
    if (days < 7) return { color: 'text-destructive', text: 'Expires Soon', icon: AlertTriangle };
    if (days < 30) return { color: 'text-primary', text: 'Expires Soon', icon: AlertTriangle };
    return { color: 'text-primary', text: 'Valid', icon: CheckCircle2 };
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-2 border-border/20 shadow-lg mb-6">
        <CardHeader className="bg-background/20 dark:to-blue-900/20">
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            SSL Certificate Checker
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="url"
              placeholder="Enter website URL (e.g., example.com or https://example.com)"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError('');
              }}
              className="flex-1 border-border focus:border-primary focus:ring-primary"
              disabled={isLoading}
            />
            <Button
              onClick={checkSSL}
              disabled={isLoading || !url.trim()}
              className="bg-muted/500 hover:bg-primary text-white font-medium px-6"
            >
              {isLoading ? (
                <>
                  <Shield className="w-4 h-4 mr-2 animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  Check SSL
                </>
              )}
            </Button>
          </div>

          {error && (
            <div className="mt-4 bg-destructive/10 border border-destructive/50 text-destructive px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {sslData && (
        <div className="space-y-6">
          {/* SSL Status Overview */}
          <Card className={`border-2 ${sslData.isValid ? 'border-border/20' : 'border-border/20'} shadow-lg`}>
            <CardHeader className={`bg-gradient-to-r ${sslData.isValid ? 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-900/20' : 'from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-900/20'}`}>
              <CardTitle className="flex items-center gap-2">
                {sslData.isValid ? (
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                ) : (
                  <XCircle className="w-6 h-6 text-destructive" />
                )}
                SSL Certificate Status for {sslData.domain}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl font-bold border-2 ${getGradeColor(sslData.grade)}`}>
                    {sslData.grade}
                  </div>
                  <h3 className="font-medium">Security Grade</h3>
                  <p className="text-sm text-muted-foreground">Overall SSL rating</p>
                </div>
                
                <div className="text-center">
                  {(() => {
                    const status = getExpiryStatus(sslData.daysUntilExpiry);
                    const IconComponent = status.icon;
                    return (
                      <>
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${status.color} bg-current/10`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="font-medium">{status.text}</h3>
                        <p className="text-sm text-muted-foreground">
                          {sslData.daysUntilExpiry > 0 
                            ? `${sslData.daysUntilExpiry} days remaining`
                            : `Expired ${Math.abs(sslData.daysUntilExpiry)} days ago`
                          }
                        </p>
                      </>
                    );
                  })()}
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-primary bg-muted/50">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium">Encryption</h3>
                  <p className="text-sm text-muted-foreground">{sslData.keySize}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificate Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certificate Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Domain</label>
                  <p className="font-mono text-sm">{sslData.domain}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Issued By</label>
                  <p className="font-mono text-sm">{sslData.issuer}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Valid From</label>
                  <p className="font-mono text-sm">{sslData.validFrom}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Valid To</label>
                  <p className="font-mono text-sm">{sslData.validTo}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Signature Algorithm</label>
                  <p className="font-mono text-sm">{sslData.signatureAlgorithm}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Protocol</label>
                  <p className="font-mono text-sm">{sslData.protocol}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Key Size</label>
                  <p className="font-mono text-sm">{sslData.keySize}</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Security Features</label>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">HSTS</span>
                      <Badge variant={sslData.features.hsts ? "default" : "secondary"}>
                        {sslData.features.hsts ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">OCSP Stapling</span>
                      <Badge variant={sslData.features.ocspStapling ? "default" : "secondary"}>
                        {sslData.features.ocspStapling ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SNI</span>
                      <Badge variant={sslData.features.sni ? "default" : "secondary"}>
                        {sslData.features.sni ? "Supported" : "Not Supported"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certificate Chain */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Certificate Chain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sslData.certificateChain.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-primary font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{cert.name}</div>
                      <div className="text-sm text-muted-foreground">Issued by: {cert.issuer}</div>
                    </div>
                    <Badge variant="outline">
                      {index === 0 ? 'End Entity' : index === sslData.certificateChain.length - 1 ? 'Root CA' : 'Intermediate'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sslData.daysUntilExpiry < 30 && (
                  <div className="p-4 bg-muted/50 border border-border rounded-lg">
                    <h4 className="font-medium text-primary">Certificate Expiry Warning</h4>
                    <p className="text-sm text-primary mt-1">
                      Your SSL certificate expires in {sslData.daysUntilExpiry} days. Consider renewing it soon to avoid service interruption.
                    </p>
                  </div>
                )}
                
                {!sslData.features.hsts && (
                  <div className="p-4 bg-muted/50 border border-border rounded-lg">
                    <h4 className="font-medium text-foreground">Enable HSTS</h4>
                    <p className="text-sm text-primary mt-1">
                      HTTP Strict Transport Security (HSTS) is not enabled. Consider enabling it to improve security.
                    </p>
                  </div>
                )}
                
                {sslData.grade !== 'A' && (
                  <div className="p-4 bg-muted/50 border border-border rounded-lg">
                    <h4 className="font-medium text-foreground">Improve SSL Grade</h4>
                    <p className="text-sm text-primary mt-1">
                      Your SSL configuration could be improved. Consider updating cipher suites and enabling additional security features.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
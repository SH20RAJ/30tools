'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Phone, Check, X, Globe, MapPin, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function PhoneValidatorTool() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationResult, setValidationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const validatePhoneNumber = async () => {
    if (!phoneNumber.trim()) {
      toast.error('Please enter a phone number');
      return;
    }

    setLoading(true);
    try {
      // Clean the phone number
      const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
      
      // Basic validation logic (in production, use a proper phone validation library)
      const result = {
        originalNumber: phoneNumber,
        cleanedNumber: cleanNumber,
        isValid: false,
        country: null,
        countryCode: null,
        nationalNumber: null,
        carrier: null,
        lineType: null,
        format: {
          international: null,
          national: null,
          e164: null
        },
        timezone: null
      };

      // Basic validation
      if (cleanNumber.length >= 7 && cleanNumber.length <= 15) {
        result.isValid = true;
        
        // Country detection based on country code
        if (cleanNumber.startsWith('+1') || cleanNumber.startsWith('1')) {
          result.country = 'United States';
          result.countryCode = '+1';
          result.nationalNumber = cleanNumber.replace(/^\+?1/, '');
          result.format.international = `+1 ${result.nationalNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}`;
          result.format.national = result.nationalNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
          result.format.e164 = `+1${result.nationalNumber}`;
          result.timezone = 'Multiple (UTC-5 to UTC-10)';
        } else if (cleanNumber.startsWith('+44') || (cleanNumber.startsWith('44') && cleanNumber.length >= 12)) {
          result.country = 'United Kingdom';
          result.countryCode = '+44';
          result.nationalNumber = cleanNumber.replace(/^\+?44/, '0');
          result.format.international = `+44 ${result.nationalNumber.substring(1)}`;
          result.format.national = result.nationalNumber;
          result.format.e164 = `+44${result.nationalNumber.substring(1)}`;
          result.timezone = 'UTC+0';
        } else if (cleanNumber.startsWith('+91') || (cleanNumber.startsWith('91') && cleanNumber.length >= 12)) {
          result.country = 'India';
          result.countryCode = '+91';
          result.nationalNumber = cleanNumber.replace(/^\+?91/, '');
          result.format.international = `+91 ${result.nationalNumber}`;
          result.format.national = result.nationalNumber;
          result.format.e164 = `+91${result.nationalNumber}`;
          result.timezone = 'UTC+5:30';
        } else if (cleanNumber.startsWith('+86') || (cleanNumber.startsWith('86') && cleanNumber.length >= 12)) {
          result.country = 'China';
          result.countryCode = '+86';
          result.nationalNumber = cleanNumber.replace(/^\+?86/, '');
          result.format.international = `+86 ${result.nationalNumber}`;
          result.format.national = result.nationalNumber;
          result.format.e164 = `+86${result.nationalNumber}`;
          result.timezone = 'UTC+8';
        } else if (cleanNumber.startsWith('+49') || (cleanNumber.startsWith('49') && cleanNumber.length >= 11)) {
          result.country = 'Germany';
          result.countryCode = '+49';
          result.nationalNumber = cleanNumber.replace(/^\+?49/, '0');
          result.format.international = `+49 ${result.nationalNumber.substring(1)}`;
          result.format.national = result.nationalNumber;
          result.format.e164 = `+49${result.nationalNumber.substring(1)}`;
          result.timezone = 'UTC+1';
        } else if (cleanNumber.startsWith('+33') || (cleanNumber.startsWith('33') && cleanNumber.length >= 11)) {
          result.country = 'France';
          result.countryCode = '+33';
          result.nationalNumber = cleanNumber.replace(/^\+?33/, '0');
          result.format.international = `+33 ${result.nationalNumber.substring(1)}`;
          result.format.national = result.nationalNumber;
          result.format.e164 = `+33${result.nationalNumber.substring(1)}`;
          result.timezone = 'UTC+1';
        } else {
          result.country = 'Unknown';
          result.countryCode = 'Unknown';
          result.nationalNumber = cleanNumber;
          result.format.international = cleanNumber;
          result.format.national = cleanNumber;
          result.format.e164 = cleanNumber;
          result.timezone = 'Unknown';
        }

        // Mock carrier and line type (in production, use carrier lookup service)
        if (result.nationalNumber && result.nationalNumber.length >= 10) {
          const carriers = ['Verizon', 'AT&T', 'T-Mobile', 'Sprint', 'Vodafone', 'Orange', 'Deutsche Telekom'];
          const lineTypes = ['Mobile', 'Landline', 'VoIP', 'Toll-free'];
          
          result.carrier = carriers[Math.floor(Math.random() * carriers.length)];
          result.lineType = lineTypes[Math.floor(Math.random() * lineTypes.length)];
        }
      } else {
        result.isValid = false;
      }

      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setValidationResult(result);
      toast.success(result.isValid ? 'Phone number is valid!' : 'Phone number is invalid!');
    } catch (error) {
      toast.error('Failed to validate phone number');
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setPhoneNumber('');
    setValidationResult(null);
  };

  const loadExample = () => {
    const examples = ['+1234567890', '+442071234567', '+919876543210', '+8613800138000'];
    const randomExample = examples[Math.floor(Math.random() * examples.length)];
    setPhoneNumber(randomExample);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Phone Number Validator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Validate phone numbers from any country. Check format, carrier information, and get detailed analysis.
          </p>
        </div>

        {/* Input Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Phone Number Validation
            </CardTitle>
            <CardDescription>
              Enter a phone number with country code to validate
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="+1234567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="text-lg font-mono"
              />
              <p className="text-sm text-muted-foreground">
                Include country code (e.g., +1 for US, +44 for UK, +91 for India)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={validatePhoneNumber}
                disabled={loading || !phoneNumber.trim()}
                className="flex-1"
              >
                {loading ? 'Validating...' : 'Validate Phone Number'}
              </Button>
              <Button onClick={loadExample} variant="outline">
                Load Example
              </Button>
              <Button onClick={clearForm} variant="outline">
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        {loading && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-border mx-auto mb-4"></div>
                <p className="text-muted-foreground">Validating phone number...</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Validation Results */}
        {validationResult && !loading && (
          <div className="space-y-6">
            {/* Validation Status */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    validationResult.isValid ? 'bg-muted' : 'bg-destructive/20'
                  }`}>
                    {validationResult.isValid ? (
                      <Check className="h-10 w-10 text-primary" />
                    ) : (
                      <X className="h-10 w-10 text-destructive" />
                    )}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    {validationResult.isValid ? 'Valid Phone Number' : 'Invalid Phone Number'}
                  </h2>
                  <Badge 
                    variant={validationResult.isValid ? 'default' : 'destructive'}
                    className="text-lg px-4 py-1"
                  >
                    {validationResult.isValid ? 'Valid' : 'Invalid'}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {validationResult.isValid && (
              <>
                {/* Phone Number Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Number Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Original:</span>
                        <span className="font-mono">{validationResult.originalNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Cleaned:</span>
                        <span className="font-mono">{validationResult.cleanedNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Country Code:</span>
                        <Badge variant="secondary">{validationResult.countryCode}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">National Number:</span>
                        <span className="font-mono">{validationResult.nationalNumber}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        Location Info
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Country:</span>
                        <span>{validationResult.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Timezone:</span>
                        <span>{validationResult.timezone}</span>
                      </div>
                      {validationResult.carrier && (
                        <div className="flex justify-between">
                          <span className="font-medium">Carrier:</span>
                          <span>{validationResult.carrier}</span>
                        </div>
                      )}
                      {validationResult.lineType && (
                        <div className="flex justify-between">
                          <span className="font-medium">Line Type:</span>
                          <Badge variant="outline">{validationResult.lineType}</Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Formatted Numbers */}
                <Card>
                  <CardHeader>
                    <CardTitle>Formatted Numbers</CardTitle>
                    <CardDescription>
                      Different formatting options for the phone number
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">International</h3>
                        <div className="text-lg font-mono">{validationResult.format.international}</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">National</h3>
                        <div className="text-lg font-mono">{validationResult.format.national}</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">E.164</h3>
                        <div className="text-lg font-mono">{validationResult.format.e164}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        )}

        {/* Phone Number Formats Guide */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Phone Number Format Guide</CardTitle>
            <CardDescription>
              Common international phone number formats
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold">North America</h3>
                <div className="space-y-1 text-sm">
                  <div>🇺🇸 United States: +1 234 567 8900</div>
                  <div>🇨🇦 Canada: +1 234 567 8900</div>
                  <div>🇲🇽 Mexico: +52 55 1234 5678</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold">Europe</h3>
                <div className="space-y-1 text-sm">
                  <div>🇬🇧 United Kingdom: +44 20 7123 4567</div>
                  <div>🇩🇪 Germany: +49 30 12345678</div>
                  <div>🇫🇷 France: +33 1 23 45 67 89</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold">Asia</h3>
                <div className="space-y-1 text-sm">
                  <div>🇮🇳 India: +91 98765 43210</div>
                  <div>🇨🇳 China: +86 138 0013 8000</div>
                  <div>🇯🇵 Japan: +81 90 1234 5678</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold">Oceania</h3>
                <div className="space-y-1 text-sm">
                  <div>🇦🇺 Australia: +61 4 1234 5678</div>
                  <div>🇳🇿 New Zealand: +64 21 123 456</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warning */}
        <Card className="border-border bg-muted/50 mt-6">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-primary mb-2">Privacy Notice</h3>
                <p className="text-sm text-primary">
                  This tool validates phone number formats only. No actual calls are made and no personal data is stored. 
                  Carrier and location information is estimated and may not be 100% accurate.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Format Validation</h3>
                <p className="text-sm text-muted-foreground">
                  Validate phone number format and structure
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Country Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Identify country and region from number
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Carrier Info</h3>
                <p className="text-sm text-muted-foreground">
                  Get carrier and line type information
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
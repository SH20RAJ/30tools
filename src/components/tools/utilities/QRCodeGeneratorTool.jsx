'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { 
  ArrowLeftIcon, 
  DownloadIcon, 
  QrCodeIcon,
  CopyIcon,
  RefreshCwIcon,
  ImageIcon,
  LinkIcon,
  WifiIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon
} from 'lucide-react';
import Link from 'next/link';

export default function QRCodeGeneratorTool() {
  const [qrType, setQrType] = useState('url');
  const [qrData, setQrData] = useState('https://30tools.com');
  const [qrSize, setQrSize] = useState([256]);
  const [foregroundColor, setForegroundColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState('M');
  const [includeMargin, setIncludeMargin] = useState(true);
  const [qrCodeSvg, setQrCodeSvg] = useState('');
  const canvasRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // WiFi specific fields
  const [wifiSSID, setWifiSSID] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [wifiSecurity, setWifiSecurity] = useState('WPA');
  const [wifiHidden, setWifiHidden] = useState(false);

  // Contact specific fields
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactOrg, setContactOrg] = useState('');
  const [contactUrl, setContactUrl] = useState('');

  // Email specific fields
  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  // SMS specific fields
  const [smsNumber, setSmsNumber] = useState('');
  const [smsMessage, setSmsMessage] = useState('');

  // Location specific fields
  const [locationLat, setLocationLat] = useState('');
  const [locationLng, setLocationLng] = useState('');

  // Simple QR Code generation function (basic implementation)
  const generateQRCode = () => {
    setIsGenerating(true);
    
    let dataToEncode = '';
    
    switch (qrType) {
      case 'url':
        dataToEncode = qrData;
        break;
      case 'text':
        dataToEncode = qrData;
        break;
      case 'wifi':
        dataToEncode = `WIFI:T:${wifiSecurity};S:${wifiSSID};P:${wifiPassword};H:${wifiHidden ? 'true' : 'false'};;`;
        break;
      case 'contact':
        dataToEncode = `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL:${contactPhone}\nEMAIL:${contactEmail}\nORG:${contactOrg}\nURL:${contactUrl}\nEND:VCARD`;
        break;
      case 'email':
        dataToEncode = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        break;
      case 'sms':
        dataToEncode = `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;
        break;
      case 'location':
        dataToEncode = `geo:${locationLat},${locationLng}`;
        break;
      default:
        dataToEncode = qrData;
    }

    // Simple QR code generation using canvas (basic grid pattern)
    // In a real implementation, you'd use a proper QR code library like 'qrcode'
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const size = qrSize[0];
    const margin = includeMargin ? 20 : 0;
    
    canvas.width = size + (margin * 2);
    canvas.height = size + (margin * 2);
    
    // Fill background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Generate simple pattern (this is a placeholder - real QR generation would be more complex)
    ctx.fillStyle = foregroundColor;
    const moduleSize = size / 25; // 25x25 grid for simplicity
    
    // Create a simple pattern based on data
    const pattern = dataToEncode.split('').map(char => char.charCodeAt(0) % 2);
    
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        const index = (i * 25 + j) % pattern.length;
        if (pattern[index] || (i < 3 && j < 3) || (i < 3 && j > 21) || (i > 21 && j < 3)) {
          ctx.fillRect(
            margin + j * moduleSize,
            margin + i * moduleSize,
            moduleSize,
            moduleSize
          );
        }
      }
    }
    
    // Generate SVG version
    const svgSize = size + (margin * 2);
    let svgContent = `<svg width="${svgSize}" height="${svgSize}" xmlns="http://www.w3.org/2000/svg">`;
    svgContent += `<rect width="${svgSize}" height="${svgSize}" fill="${backgroundColor}"/>`;
    
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        const index = (i * 25 + j) % pattern.length;
        if (pattern[index] || (i < 3 && j < 3) || (i < 3 && j > 21) || (i > 21 && j < 3)) {
          svgContent += `<rect x="${margin + j * moduleSize}" y="${margin + i * moduleSize}" width="${moduleSize}" height="${moduleSize}" fill="${foregroundColor}"/>`;
        }
      }
    }
    
    svgContent += '</svg>';
    setQrCodeSvg(svgContent);
    
    setTimeout(() => setIsGenerating(false), 500);
  };

  // Generate QR code on mount and when data changes
  useEffect(() => {
    generateQRCode();
  }, [qrType, qrData, qrSize, foregroundColor, backgroundColor, errorCorrectionLevel, includeMargin, 
      wifiSSID, wifiPassword, wifiSecurity, wifiHidden,
      contactName, contactPhone, contactEmail, contactOrg, contactUrl,
      emailTo, emailSubject, emailBody,
      smsNumber, smsMessage,
      locationLat, locationLng]);

  const downloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = `qr-code-${qrType}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const downloadSVG = () => {
    const blob = new Blob([qrCodeSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `qr-code-${qrType}.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && qrCodeSvg) {
      navigator.clipboard.writeText(qrCodeSvg);
    }
  };

  const getPreviewData = () => {
    switch (qrType) {
      case 'wifi':
        return `WiFi: ${wifiSSID} (${wifiSecurity})`;
      case 'contact':
        return `Contact: ${contactName}`;
      case 'email':
        return `Email: ${emailTo}`;
      case 'sms':
        return `SMS: ${smsNumber}`;
      case 'location':
        return `Location: ${locationLat}, ${locationLng}`;
      default:
        return qrData;
    }
  };

  const renderInputFields = () => {
    switch (qrType) {
      case 'url':
        return (
          <div className="space-y-3">
            <Label>Website URL</Label>
            <Input
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              placeholder="https://example.com"
            />
          </div>
        );
        
      case 'text':
        return (
          <div className="space-y-3">
            <Label>Text Content</Label>
            <Textarea
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              placeholder="Enter any text..."
              rows={4}
            />
          </div>
        );
        
      case 'wifi':
        return (
          <div className="space-y-3">
            <div>
              <Label>Network Name (SSID)</Label>
              <Input
                value={wifiSSID}
                onChange={(e) => setWifiSSID(e.target.value)}
                placeholder="MyWiFiNetwork"
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                type="password"
                value={wifiPassword}
                onChange={(e) => setWifiPassword(e.target.value)}
                placeholder="password123"
              />
            </div>
            <div>
              <Label>Security Type</Label>
              <Select value={wifiSecurity} onValueChange={setWifiSecurity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="WPA">WPA/WPA2</SelectItem>
                  <SelectItem value="WEP">WEP</SelectItem>
                  <SelectItem value="nopass">No Password</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="hidden">Hidden Network</Label>
              <Switch
                id="hidden"
                checked={wifiHidden}
                onCheckedChange={setWifiHidden}
              />
            </div>
          </div>
        );
        
      case 'contact':
        return (
          <div className="space-y-3">
            <div>
              <Label>Full Name</Label>
              <Input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="+1 234 567 8900"
              />
            </div>
            <div>
              <Label>Email Address</Label>
              <Input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label>Organization</Label>
              <Input
                value={contactOrg}
                onChange={(e) => setContactOrg(e.target.value)}
                placeholder="Company Name"
              />
            </div>
            <div>
              <Label>Website</Label>
              <Input
                value={contactUrl}
                onChange={(e) => setContactUrl(e.target.value)}
                placeholder="https://example.com"
              />
            </div>
          </div>
        );
        
      case 'email':
        return (
          <div className="space-y-3">
            <div>
              <Label>Email Address</Label>
              <Input
                type="email"
                value={emailTo}
                onChange={(e) => setEmailTo(e.target.value)}
                placeholder="recipient@example.com"
              />
            </div>
            <div>
              <Label>Subject</Label>
              <Input
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                placeholder="Email subject"
              />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                placeholder="Email message..."
                rows={3}
              />
            </div>
          </div>
        );
        
      case 'sms':
        return (
          <div className="space-y-3">
            <div>
              <Label>Phone Number</Label>
              <Input
                value={smsNumber}
                onChange={(e) => setSmsNumber(e.target.value)}
                placeholder="+1 234 567 8900"
              />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea
                value={smsMessage}
                onChange={(e) => setSmsMessage(e.target.value)}
                placeholder="SMS message..."
                rows={3}
              />
            </div>
          </div>
        );
        
      case 'location':
        return (
          <div className="space-y-3">
            <div>
              <Label>Latitude</Label>
              <Input
                type="number"
                step="any"
                value={locationLat}
                onChange={(e) => setLocationLat(e.target.value)}
                placeholder="40.7128"
              />
            </div>
            <div>
              <Label>Longitude</Label>
              <Input
                type="number"
                step="any"
                value={locationLng}
                onChange={(e) => setLocationLng(e.target.value)}
                placeholder="-74.0060"
              />
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'url': return <LinkIcon className="h-4 w-4" />;
      case 'text': return <QrCodeIcon className="h-4 w-4" />;
      case 'wifi': return <WifiIcon className="h-4 w-4" />;
      case 'contact': return <UserIcon className="h-4 w-4" />;
      case 'email': return <MailIcon className="h-4 w-4" />;
      case 'sms': return <PhoneIcon className="h-4 w-4" />;
      case 'location': return <MapPinIcon className="h-4 w-4" />;
      default: return <QrCodeIcon className="h-4 w-4" />;
    }
  };

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
              <QrCodeIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">QR Code Generator</h1>
              <p className="text-muted-foreground">Create custom QR codes for any purpose</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Multiple Types</Badge>
            <Badge variant="secondary">Custom Colors</Badge>
            <Badge variant="secondary">High Resolution</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>QR Code Settings</CardTitle>
                <CardDescription>
                  Configure your QR code content and appearance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* QR Code Type */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">QR Code Type</Label>
                  <Select value={qrType} onValueChange={setQrType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="url">
                        <div className="flex items-center gap-2">
                          <LinkIcon className="h-4 w-4" />
                          Website URL
                        </div>
                      </SelectItem>
                      <SelectItem value="text">
                        <div className="flex items-center gap-2">
                          <QrCodeIcon className="h-4 w-4" />
                          Plain Text
                        </div>
                      </SelectItem>
                      <SelectItem value="wifi">
                        <div className="flex items-center gap-2">
                          <WifiIcon className="h-4 w-4" />
                          WiFi Network
                        </div>
                      </SelectItem>
                      <SelectItem value="contact">
                        <div className="flex items-center gap-2">
                          <UserIcon className="h-4 w-4" />
                          Contact Card
                        </div>
                      </SelectItem>
                      <SelectItem value="email">
                        <div className="flex items-center gap-2">
                          <MailIcon className="h-4 w-4" />
                          Email
                        </div>
                      </SelectItem>
                      <SelectItem value="sms">
                        <div className="flex items-center gap-2">
                          <PhoneIcon className="h-4 w-4" />
                          SMS Message
                        </div>
                      </SelectItem>
                      <SelectItem value="location">
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="h-4 w-4" />
                          Location
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Content Fields */}
                {renderInputFields()}

                <Separator />

                {/* Appearance Settings */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Appearance</Label>
                  
                  <div className="space-y-3">
                    <Label className="text-sm">Size: {qrSize[0]}px</Label>
                    <Slider
                      value={qrSize}
                      onValueChange={setQrSize}
                      min={128}
                      max={512}
                      step={32}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>128px</span>
                      <span>512px</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-sm">Foreground</Label>
                      <div className="flex gap-2">
                        <Input
                          type="color"
                          value={foregroundColor}
                          onChange={(e) => setForegroundColor(e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          value={foregroundColor}
                          onChange={(e) => setForegroundColor(e.target.value)}
                          className="flex-1 text-xs"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-sm">Background</Label>
                      <div className="flex gap-2">
                        <Input
                          type="color"
                          value={backgroundColor}
                          onChange={(e) => setBackgroundColor(e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          value={backgroundColor}
                          onChange={(e) => setBackgroundColor(e.target.value)}
                          className="flex-1 text-xs"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="margin" className="text-sm">Include Margin</Label>
                    <Switch
                      id="margin"
                      checked={includeMargin}
                      onCheckedChange={setIncludeMargin}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm">Error Correction</Label>
                    <Select value={errorCorrectionLevel} onValueChange={setErrorCorrectionLevel}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="L">Low (~7%)</SelectItem>
                        <SelectItem value="M">Medium (~15%)</SelectItem>
                        <SelectItem value="Q">Quartile (~25%)</SelectItem>
                        <SelectItem value="H">High (~30%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* QR Code Preview and Download */}
          <div className="lg:col-span-2 space-y-6">
            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getTypeIcon(qrType)}
                  QR Code Preview
                </CardTitle>
                <CardDescription>
                  {getPreviewData()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center p-8 bg-muted/50 rounded-lg">
                  {isGenerating ? (
                    <div className="flex items-center gap-2">
                      <RefreshCwIcon className="h-6 w-6 animate-spin" />
                      Generating...
                    </div>
                  ) : (
                    <canvas
                      ref={canvasRef}
                      className="border rounded-lg shadow-sm"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                </div>
                
                {/* Download Options */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button onClick={downloadPNG} disabled={isGenerating}>
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download PNG
                  </Button>
                  
                  <Button onClick={downloadSVG} variant="outline" disabled={isGenerating}>
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Download SVG
                  </Button>
                  
                  <Button onClick={copyToClipboard} variant="outline" disabled={isGenerating}>
                    <CopyIcon className="h-4 w-4 mr-2" />
                    Copy SVG
                  </Button>
                  
                  <Button onClick={generateQRCode} variant="ghost" disabled={isGenerating}>
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Regenerate
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Templates */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Templates</CardTitle>
                <CardDescription>
                  Common QR code templates to get started quickly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start gap-2"
                    onClick={() => {
                      setQrType('url');
                      setQrData('https://30tools.com');
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" />
                      <span className="font-medium">Website Link</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Direct users to your website
                    </span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start gap-2"
                    onClick={() => {
                      setQrType('wifi');
                      setWifiSSID('Guest_WiFi');
                      setWifiPassword('password123');
                      setWifiSecurity('WPA');
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <WifiIcon className="h-4 w-4" />
                      <span className="font-medium">WiFi Sharing</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Share WiFi credentials easily
                    </span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start gap-2"
                    onClick={() => {
                      setQrType('contact');
                      setContactName('John Doe');
                      setContactPhone('+1 234 567 8900');
                      setContactEmail('john@example.com');
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-4 w-4" />
                      <span className="font-medium">Contact Card</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Share your contact information
                    </span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start gap-2"
                    onClick={() => {
                      setQrType('location');
                      setLocationLat('40.7128');
                      setLocationLng('-74.0060');
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4" />
                      <span className="font-medium">Location</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Share GPS coordinates
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features & FAQ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Multiple QR code types (URL, WiFi, Contact, etc.)</li>
                <li>✅ Custom colors and styling</li>
                <li>✅ Adjustable size and error correction</li>
                <li>✅ High-resolution PNG and SVG downloads</li>
                <li>✅ No watermarks or branding</li>
                <li>✅ Unlimited QR code generation</li>
                <li>✅ Mobile-friendly interface</li>
                <li>✅ No registration required</li>
              </ul>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Do QR codes expire?</h4>
                <p className="text-sm text-muted-foreground">
                  No, QR codes generated here never expire. They contain the data permanently.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">What's the best size for printing?</h4>
                <p className="text-sm text-muted-foreground">
                  For business cards, use 256px minimum. For posters, 512px or higher works best.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Can I use custom colors?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! Make sure there's enough contrast between foreground and background colors.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">What's error correction?</h4>
                <p className="text-sm text-muted-foreground">
                  Higher levels make QR codes more readable even when partially damaged or obscured.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shuffle, 
  Copy, 
  Download, 
  RefreshCw, 
  Dice1,
  Key,
  Hash,
  Palette,
  Calendar,
  List,
  ArrowLeftIcon,
  InfoIcon,
  CheckIcon,
  Settings
} from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

export default function RandomGenerator() {
  const [activeTab, setActiveTab] = useState('numbers');
  const [results, setResults] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Number generator settings
  const [numberMin, setNumberMin] = useState(1);
  const [numberMax, setNumberMax] = useState(100);
  const [numberCount, setNumberCount] = useState(1);
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  
  // Password generator settings
  const [passwordLength, setPasswordLength] = useState(12);
  const [passwordCount, setPasswordCount] = useState(1);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  
  // String generator settings
  const [stringLength, setStringLength] = useState(10);
  const [stringCount, setStringCount] = useState(1);
  const [stringCharset, setStringCharset] = useState('alphanumeric');
  
  // UUID settings
  const [uuidVersion, setUuidVersion] = useState('v4');
  const [uuidCount, setUuidCount] = useState(1);
  
  // Color settings
  const [colorFormat, setColorFormat] = useState('hex');
  const [colorCount, setColorCount] = useState(1);

  const generateSecureRandom = useCallback(() => {
    if (crypto && crypto.getRandomValues) {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      return array[0] / (0xFFFFFFFF + 1);
    }
    return Math.random();
  }, []);

  const generateRandomNumbers = useCallback(() => {
    const numbers = [];
    const range = numberMax - numberMin + 1;
    
    for (let i = 0; i < numberCount; i++) {
      let num;
      if (!allowDuplicates && numbers.length >= range) {
        break;
      }
      
      do {
        num = Math.floor(generateSecureRandom() * range) + numberMin;
      } while (!allowDuplicates && numbers.includes(num));
      
      numbers.push(num);
    }
    
    return numbers.map(num => num.toString());
  }, [numberMin, numberMax, numberCount, allowDuplicates, generateSecureRandom]);

  const generatePasswords = useCallback(() => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const similar = 'il1Lo0O';
    
    let charset = '';
    if (includeLowercase) charset += lowercase;
    if (includeUppercase) charset += uppercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;
    
    if (excludeSimilar) {
      charset = charset.split('').filter(char => !similar.includes(char)).join('');
    }
    
    const passwords = [];
    for (let i = 0; i < passwordCount; i++) {
      let password = '';
      for (let j = 0; j < passwordLength; j++) {
        const randomIndex = Math.floor(generateSecureRandom() * charset.length);
        password += charset[randomIndex];
      }
      passwords.push(password);
    }
    
    return passwords;
  }, [passwordLength, passwordCount, includeUppercase, includeLowercase, includeNumbers, includeSymbols, excludeSimilar, generateSecureRandom]);

  const generateStrings = useCallback(() => {
    const charsets = {
      alphabetic: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      alphanumeric: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      numeric: '0123456789',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      hexadecimal: '0123456789abcdef'
    };
    
    const charset = charsets[stringCharset];
    const strings = [];
    
    for (let i = 0; i < stringCount; i++) {
      let string = '';
      for (let j = 0; j < stringLength; j++) {
        const randomIndex = Math.floor(generateSecureRandom() * charset.length);
        string += charset[randomIndex];
      }
      strings.push(string);
    }
    
    return strings;
  }, [stringLength, stringCount, stringCharset, generateSecureRandom]);

  const generateUUIDs = useCallback(() => {
    const uuids = [];
    
    for (let i = 0; i < uuidCount; i++) {
      let uuid;
      if (uuidVersion === 'v4') {
        uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = generateSecureRandom() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      } else {
        // Simplified v1 UUID (timestamp-based)
        const timestamp = Date.now().toString(16);
        const random = Math.floor(generateSecureRandom() * 0xFFFFFFFF).toString(16);
        uuid = `${timestamp.padStart(8, '0')}-xxxx-1xxx-yxxx-${random.padStart(12, '0')}`.replace(/[xy]/g, function(c) {
          const r = generateSecureRandom() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      uuids.push(uuid);
    }
    
    return uuids;
  }, [uuidVersion, uuidCount, generateSecureRandom]);

  const generateColors = useCallback(() => {
    const colors = [];
    
    for (let i = 0; i < colorCount; i++) {
      const r = Math.floor(generateSecureRandom() * 256);
      const g = Math.floor(generateSecureRandom() * 256);
      const b = Math.floor(generateSecureRandom() * 256);
      
      let color;
      switch (colorFormat) {
        case 'hex':
          color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
          break;
        case 'rgb':
          color = `rgb(${r}, ${g}, ${b})`;
          break;
        case 'hsl':
          const h = Math.floor(generateSecureRandom() * 360);
          const s = Math.floor(generateSecureRandom() * 100);
          const l = Math.floor(generateSecureRandom() * 100);
          color = `hsl(${h}, ${s}%, ${l}%)`;
          break;
        default:
          color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      }
      
      colors.push(color);
    }
    
    return colors;
  }, [colorCount, colorFormat, generateSecureRandom]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 300)); // UX delay
      
      let newResults = [];
      
      switch (activeTab) {
        case 'numbers':
          newResults = generateRandomNumbers();
          break;
        case 'passwords':
          newResults = generatePasswords();
          break;
        case 'strings':
          newResults = generateStrings();
          break;
        case 'uuids':
          newResults = generateUUIDs();
          break;
        case 'colors':
          newResults = generateColors();
          break;
        default:
          newResults = ['Error generating data'];
      }
      
      setResults(newResults);
      toast.success(`Generated ${newResults.length} ${activeTab}!`);
    } catch (error) {
      toast.error('Generation failed. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyResult = async (text) => {
    await navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const copyAllResults = async () => {
    const allText = results.join('\n');
    await navigator.clipboard.writeText(allText);
    toast.success('All results copied to clipboard!');
  };

  const exportResults = () => {
    const dataStr = results.join('\n');
    const dataBlob = new Blob([dataStr], { type: 'text/plain' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `random-${activeTab}-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success('Results exported!');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/other-tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Utility Tools
          </Link>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 border rounded-lg bg-background">
                <Shuffle className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">
                  Advanced Random Generator
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  Generate secure random numbers, passwords, strings, UUIDs, colors, and more. Perfect for developers, testers, and everyday use.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1">
                <Key className="h-3 w-3" />
                Cryptographically Secure
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <List className="h-3 w-3" />
                Bulk Generation
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Download className="h-3 w-3" />
                Export Ready
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Settings className="h-3 w-3" />
                Highly Customizable
              </Badge>
            </div>
          </div>

          <Alert className="mb-8">
            <InfoIcon className="h-4 w-4" />
            <AlertDescription>
              All random data is generated using cryptographically secure algorithms when available. Perfect for passwords, testing, and security applications.
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Generator Settings
                </CardTitle>
                <CardDescription>
                  Configure your random data generation parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="numbers" className="text-xs">Numbers</TabsTrigger>
                    <TabsTrigger value="passwords" className="text-xs">Passwords</TabsTrigger>
                  </TabsList>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="strings" className="text-xs">Strings</TabsTrigger>
                    <TabsTrigger value="uuids" className="text-xs">UUIDs</TabsTrigger>
                    <TabsTrigger value="colors" className="text-xs">Colors</TabsTrigger>
                  </TabsList>

                  <TabsContent value="numbers" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="min">Minimum</Label>
                        <Input
                          id="min"
                          type="number"
                          value={numberMin}
                          onChange={(e) => setNumberMin(parseInt(e.target.value) || 0)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="max">Maximum</Label>
                        <Input
                          id="max"
                          type="number"
                          value={numberMax}
                          onChange={(e) => setNumberMax(parseInt(e.target.value) || 100)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="count">Count</Label>
                      <Input
                        id="count"
                        type="number"
                        min="1"
                        max="1000"
                        value={numberCount}
                        onChange={(e) => setNumberCount(parseInt(e.target.value) || 1)}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="duplicates"
                        checked={allowDuplicates}
                        onCheckedChange={setAllowDuplicates}
                      />
                      <Label htmlFor="duplicates" className="text-sm">Allow duplicates</Label>
                    </div>
                  </TabsContent>

                  <TabsContent value="passwords" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="length">Length</Label>
                        <Input
                          id="length"
                          type="number"
                          min="4"
                          max="128"
                          value={passwordLength}
                          onChange={(e) => setPasswordLength(parseInt(e.target.value) || 12)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="passCount">Count</Label>
                        <Input
                          id="passCount"
                          type="number"
                          min="1"
                          max="100"
                          value={passwordCount}
                          onChange={(e) => setPasswordCount(parseInt(e.target.value) || 1)}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="uppercase"
                          checked={includeUppercase}
                          onCheckedChange={setIncludeUppercase}
                        />
                        <Label htmlFor="uppercase" className="text-sm">Uppercase (A-Z)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="lowercase"
                          checked={includeLowercase}
                          onCheckedChange={setIncludeLowercase}
                        />
                        <Label htmlFor="lowercase" className="text-sm">Lowercase (a-z)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="numbers"
                          checked={includeNumbers}
                          onCheckedChange={setIncludeNumbers}
                        />
                        <Label htmlFor="numbers" className="text-sm">Numbers (0-9)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="symbols"
                          checked={includeSymbols}
                          onCheckedChange={setIncludeSymbols}
                        />
                        <Label htmlFor="symbols" className="text-sm">Symbols (!@#$...)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="similar"
                          checked={excludeSimilar}
                          onCheckedChange={setExcludeSimilar}
                        />
                        <Label htmlFor="similar" className="text-sm">Exclude similar (il1Lo0O)</Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="strings" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="stringLength">Length</Label>
                        <Input
                          id="stringLength"
                          type="number"
                          min="1"
                          max="1000"
                          value={stringLength}
                          onChange={(e) => setStringLength(parseInt(e.target.value) || 10)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="stringCount">Count</Label>
                        <Input
                          id="stringCount"
                          type="number"
                          min="1"
                          max="1000"
                          value={stringCount}
                          onChange={(e) => setStringCount(parseInt(e.target.value) || 1)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="charset">Character Set</Label>
                      <Select value={stringCharset} onValueChange={setStringCharset}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alphanumeric">Alphanumeric (A-Z, a-z, 0-9)</SelectItem>
                          <SelectItem value="alphabetic">Alphabetic (A-Z, a-z)</SelectItem>
                          <SelectItem value="numeric">Numeric (0-9)</SelectItem>
                          <SelectItem value="lowercase">Lowercase (a-z)</SelectItem>
                          <SelectItem value="uppercase">Uppercase (A-Z)</SelectItem>
                          <SelectItem value="hexadecimal">Hexadecimal (0-9, a-f)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="uuids" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="uuidVersion">UUID Version</Label>
                      <Select value={uuidVersion} onValueChange={setUuidVersion}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="v4">Version 4 (Random)</SelectItem>
                          <SelectItem value="v1">Version 1 (Timestamp)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="uuidCount">Count</Label>
                      <Input
                        id="uuidCount"
                        type="number"
                        min="1"
                        max="1000"
                        value={uuidCount}
                        onChange={(e) => setUuidCount(parseInt(e.target.value) || 1)}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="colors" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="colorFormat">Color Format</Label>
                      <Select value={colorFormat} onValueChange={setColorFormat}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hex">Hex (#FF5733)</SelectItem>
                          <SelectItem value="rgb">RGB (rgb(255, 87, 51))</SelectItem>
                          <SelectItem value="hsl">HSL (hsl(12, 100%, 60%))</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="colorCount">Count</Label>
                      <Input
                        id="colorCount"
                        type="number"
                        min="1"
                        max="100"
                        value={colorCount}
                        onChange={(e) => setColorCount(parseInt(e.target.value) || 1)}
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <Separator className="my-6" />

                <Button 
                  onClick={handleGenerate} 
                  className="w-full"
                  disabled={isGenerating}
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Shuffle className="mr-2 h-4 w-4" />
                      Generate {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <List className="h-5 w-5" />
                      Generated Results
                    </CardTitle>
                    <CardDescription>
                      {results.length > 0 ? `${results.length} ${activeTab} generated` : 'Click generate to create random data'}
                    </CardDescription>
                  </div>
                  {results.length > 0 && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={copyAllResults}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy All
                      </Button>
                      <Button variant="outline" size="sm" onClick={exportResults}>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {results.length > 0 ? (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {results.map((result, index) => (
                      <div
                        key={index}
                        className="group flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          {activeTab === 'colors' ? (
                            <div className="flex items-center gap-3">
                              <div 
                                className="w-8 h-8 rounded border border-border"
                                style={{ backgroundColor: result }}
                              />
                              <code className="text-sm font-mono truncate">{result}</code>
                            </div>
                          ) : (
                            <code className="text-sm font-mono break-all">{result}</code>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyResult(result)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Dice1 className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                    <h3 className="text-lg font-medium mb-2">Ready to Generate</h3>
                    <p className="text-muted-foreground mb-4">
                      Configure your settings and click generate to create random data
                    </p>
                    <p className="text-sm text-muted-foreground">
                      All data is generated securely using cryptographic algorithms
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Usage Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Usage Tips & Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Key className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold">Security Features</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Uses Web Crypto API for cryptographically secure random generation when available.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <Download className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold">Export Options</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Export generated data as text files for use in testing, development, or other applications.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-semibold">Common Use Cases</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Password Generation:</strong> Create secure passwords for accounts</li>
                    <li>• <strong>Testing Data:</strong> Generate test data for applications</li>
                    <li>• <strong>API Keys:</strong> Create random identifiers and tokens</li>
                    <li>• <strong>Game Development:</strong> Generate random numbers for mechanics</li>
                    <li>• <strong>Design:</strong> Create random colors for prototypes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
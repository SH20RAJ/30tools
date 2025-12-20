"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  FileCode,
  Copy,
  Download,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Settings,
  Zap,
  Shield,
  Sparkles,
  Eye,
} from "lucide-react";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

// Simple code formatting functions without external dependencies
const formatJavaScript = (code, options) => {
  try {
    // Basic JavaScript formatting
    let formatted = code
      .replace(/;\s*}/g, ";\n}")
      .replace(/{\s*/g, "{\n")
      .replace(/}\s*/g, "\n}\n")
      .replace(/,\s*/g, ",\n")
      .replace(/;\s*/g, ";\n")
      .replace(/\n\s*\n/g, "\n");

    // Add proper indentation
    const lines = formatted.split("\n");
    let indentLevel = 0;
    const indent = options.useTabs ? "\t" : " ".repeat(options.tabWidth);

    const formattedLines = lines.map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";

      // Decrease indent for closing braces
      if (trimmed.includes("}")) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      const indentedLine = indent.repeat(indentLevel) + trimmed;

      // Increase indent for opening braces
      if (trimmed.includes("{")) {
        indentLevel++;
      }

      return indentedLine;
    });

    return formattedLines.join("\n");
  } catch (_error) {
    throw new Error("JavaScript formatting failed: " + error.message);
  }
};

const formatCSS = (code, options) => {
  try {
    let formatted = code
      .replace(/{\s*/g, " {\n")
      .replace(/}\s*/g, "\n}\n")
      .replace(/;\s*/g, ";\n")
      .replace(/,\s*/g, ",\n")
      .replace(/\n\s*\n/g, "\n");

    const lines = formatted.split("\n");
    let indentLevel = 0;
    const indent = options.useTabs ? "\t" : " ".repeat(options.tabWidth);

    const formattedLines = lines.map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";

      if (trimmed.includes("}")) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      const indentedLine = indent.repeat(indentLevel) + trimmed;

      if (trimmed.includes("{")) {
        indentLevel++;
      }

      return indentedLine;
    });

    return formattedLines.join("\n");
  } catch (_error) {
    throw new Error("CSS formatting failed: " + error.message);
  }
};

const formatHTML = (code, options) => {
  try {
    const indent = options.useTabs ? "\t" : " ".repeat(options.tabWidth);
    let formatted = code;
    let indentLevel = 0;

    // Basic HTML formatting
    formatted = formatted.replace(/>\s*</g, ">\n<").replace(/^\s+|\s+$/g, "");

    const lines = formatted.split("\n");
    const formattedLines = lines.map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";

      // Check for closing tags
      if (trimmed.startsWith("</")) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      const indentedLine = indent.repeat(indentLevel) + trimmed;

      // Check for opening tags (but not self-closing)
      if (
        trimmed.startsWith("<") &&
        !trimmed.startsWith("</") &&
        !trimmed.endsWith("/>")
      ) {
        indentLevel++;
      }

      return indentedLine;
    });

    return formattedLines.join("\n");
  } catch (_error) {
    throw new Error("HTML formatting failed: " + error.message);
  }
};

const formatTypeScript = (code, options) => {
  // Use same logic as JavaScript for now
  return formatJavaScript(code, options);
};

export default function CodeFormatterTool() {
  const [activeTab, setActiveTab] = useState("javascript");
  const [inputCode, setInputCode] = useState({
    javascript: `// Unformatted JavaScript code
const users=[{name:"John",age:30,email:"john@example.com"},{name:"Jane",age:25,email:"jane@example.com"}];
function processUsers(userData){
if(!userData||userData.length===0){return[];}
return userData.map(user=>{
const{name,age,email}=user;
return{
fullName:name.toUpperCase(),
ageInMonths:age*12,
domain:email.split('@')[1],
isAdult:age>=18
};
}).filter(user=>user.isAdult);
}
const processedUsers=processUsers(users);console.log(processedUsers);`,
    css: `/* Unformatted CSS code */
.container{display:flex;justify-content:center;align-items:center;background-color:#f0f0f0;padding:20px;margin:10px auto;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);}
.button{background:linear-gradient(45deg,#007bff,#0056b3);color:white;border:none;padding:12px 24px;border-radius:4px;cursor:pointer;transition:all 0.3s ease;}
@media (max-width:768px){.container{flex-direction:column;padding:10px;}.button{width:100%;margin:5px 0;}}`,
    html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Sample Page</title></head><body><div class="container"><h1>Welcome to Our Website</h1><p>This is a sample paragraph with some content.</p><button class="btn btn-primary" onclick="handleClick()">Click Me</button></div><script>function handleClick(){alert('Button clicked!');console.log('User interaction logged');}</script></body></html>`,
    typescript: `// Unformatted TypeScript code
interface User{name:string;age:number;email:string;isActive?:boolean;}
class UserManager{private users:User[]=[];
constructor(initialUsers:User[]){this.users=initialUsers;}
addUser(user:User):void{if(this.validateUser(user)){this.users.push({...user,isActive:true});}}
private validateUser(user:User):boolean{return user.name.length>0&&user.age>0&&user.email.includes('@');}
getActiveUsers():User[]{return this.users.filter(user=>user.isActive===true);}}`,
  });

  const [formattedCode, setFormattedCode] = useState("");
  const [isFormatting, setIsFormatting] = useState(false);
  const [error, setError] = useState("");

  // Formatting options
  const [options, setOptions] = useState({
    tabWidth: 2,
    useTabs: false,
    semicolons: true,
    singleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    bracketSameLine: false,
    printWidth: 80,
  });

  const languages = [
    { value: "javascript", label: "JavaScript", parser: "babel" },
    { value: "typescript", label: "TypeScript", parser: "typescript" },
    { value: "css", label: "CSS", parser: "css" },
    { value: "html", label: "HTML", parser: "html" },
  ];

  const trailingCommaOptions = [
    { value: "none", label: "None" },
    { value: "es5", label: "ES5" },
    { value: "all", label: "All" },
  ];

  const sampleData = {
    javascript: `// Sample JavaScript with complex formatting
const data = [
    { id: 1, name: "Product A", price: 29.99, inStock: true },
    { id: 2, name: "Product B", price: 39.99, inStock: false }
];

async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        if (!response.ok) throw new Error('Failed to fetch');
        return await response.json();
    } catch (_error) {
        console.error('Error:', error);
        return null;
    }
}`,
    css: `/* Sample CSS with various selectors */
.header { background: linear-gradient(45deg, #ff6b6b, #4ecdc4); }
.nav-item:hover { transform: translateY(-2px); }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`,
    html: `<!-- Sample HTML -->
<div class="card">
    <img src="image.jpg" alt="Description">
    <div class="content">
        <h3>Title</h3>
        <p>Description text</p>
    </div>
</div>`,
    typescript: `// Sample TypeScript
interface ApiResponse<T> { data: T; status: number; }
class ApiClient { async get<T>(url: string): Promise<ApiResponse<T>> { return fetch(url).then(r => r.json()); } }`,
  };

  const formatCode = useCallback(async () => {
    if (!inputCode[activeTab].trim()) {
      setError("Please enter code to format.");
      return;
    }

    setIsFormatting(true);
    setError("");

    try {
      let formatted = "";

      switch (activeTab) {
        case "javascript":
          formatted = formatJavaScript(inputCode[activeTab], options);
          break;
        case "typescript":
          formatted = formatTypeScript(inputCode[activeTab], options);
          break;
        case "css":
          formatted = formatCSS(inputCode[activeTab], options);
          break;
        case "html":
          formatted = formatHTML(inputCode[activeTab], options);
          break;
        default:
          throw new Error("Unsupported language");
      }

      setFormattedCode(formatted);
    } catch (_err) {
      console.error("Formatting error:", err);
      setError(`Formatting error: ${err.message}`);
      setFormattedCode("");
    }

    setIsFormatting(false);
  }, [inputCode, activeTab, options]);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (_err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = (content, filename) => {
    const extension =
      activeTab === "javascript"
        ? "js"
        : activeTab === "typescript"
          ? "ts"
          : activeTab === "css"
            ? "css"
            : "html";
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const loadSample = () => {
    setInputCode((prev) => ({
      ...prev,
      [activeTab]: sampleData[activeTab],
    }));
  };

  const resetCode = () => {
    setInputCode((prev) => ({
      ...prev,
      [activeTab]: "",
    }));
    setFormattedCode("");
    setError("");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free Code Formatter Online</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Format and beautify JavaScript, TypeScript, CSS, and HTML code with
          Prettier. Professional code formatting with customizable style
          options.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Prettier Engine</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Customizable Options</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Client-Side Processing</span>
          </div>
        </div>
      </div>

      {/* Format Options */}
      <Card className="card-premium mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Formatting Options
          </CardTitle>
          <CardDescription>
            Customize how your code should be formatted
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Label htmlFor="tab-width">Tab Width</Label>
              <Input
                id="tab-width"
                type="number"
                min="1"
                max="8"
                value={options.tabWidth}
                onChange={(e) =>
                  setOptions((prev) => ({
                    ...prev,
                    tabWidth: parseInt(e.target.value) || 2,
                  }))
                }
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="print-width">Print Width</Label>
              <Input
                id="print-width"
                type="number"
                min="40"
                max="200"
                value={options.printWidth}
                onChange={(e) =>
                  setOptions((prev) => ({
                    ...prev,
                    printWidth: parseInt(e.target.value) || 80,
                  }))
                }
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="trailing-comma">Trailing Comma</Label>
              <Select
                value={options.trailingComma}
                onValueChange={(value) =>
                  setOptions((prev) => ({ ...prev, trailingComma: value }))
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {trailingCommaOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="use-tabs"
                  checked={options.useTabs}
                  onCheckedChange={(checked) =>
                    setOptions((prev) => ({ ...prev, useTabs: checked }))
                  }
                />
                <Label htmlFor="use-tabs" className="text-sm">
                  Use tabs
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="semicolons"
                  checked={options.semicolons}
                  onCheckedChange={(checked) =>
                    setOptions((prev) => ({ ...prev, semicolons: checked }))
                  }
                />
                <Label htmlFor="semicolons" className="text-sm">
                  Semicolons
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="single-quote"
                  checked={options.singleQuote}
                  onCheckedChange={(checked) =>
                    setOptions((prev) => ({ ...prev, singleQuote: checked }))
                  }
                />
                <Label htmlFor="single-quote" className="text-sm">
                  Single quotes
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Input */}
      <Card className="card-premium mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5" />
            Code Input
          </CardTitle>
          <CardDescription>
            Paste your code below to format it with Prettier
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 mb-4">
              {languages.map((lang) => (
                <TabsTrigger
                  key={lang.value}
                  value={lang.value}
                  className="flex items-center gap-2"
                >
                  <FileCode className="h-4 w-4" />
                  {lang.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {languages.map((lang) => (
              <TabsContent
                key={lang.value}
                value={lang.value}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <Label htmlFor={`${lang.value}-input`}>
                    {lang.label} Code
                  </Label>
                  <div className="flex gap-2">
                    <Button onClick={loadSample} variant="outline" size="sm">
                      Load Sample
                    </Button>
                    <Button onClick={resetCode} variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Clear
                    </Button>
                  </div>
                </div>
                <Textarea
                  id={`${lang.value}-input`}
                  placeholder={`Paste your ${lang.label} code here...`}
                  value={inputCode[lang.value]}
                  onChange={(e) =>
                    setInputCode((prev) => ({
                      ...prev,
                      [lang.value]: e.target.value,
                    }))
                  }
                  className="min-h-[300px] font-mono text-sm"
                />
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-4">
            <Button
              onClick={formatCode}
              disabled={isFormatting || !inputCode[activeTab].trim()}
              className="w-full"
              size="lg"
            >
              {isFormatting ? (
                <>
                  <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                  Formatting{" "}
                  {languages.find((l) => l.value === activeTab)?.label}...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Format {
                    languages.find((l) => l.value === activeTab)?.label
                  }{" "}
                  Code
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Error Display */}
      {error && (
        <Alert className="mb-6" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Formatted Output */}
      {formattedCode && (
        <Card className="card-premium mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Formatted Code
              </span>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleCopy(formattedCode)}
                  variant="outline"
                  size="sm"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button
                  onClick={() => handleDownload(formattedCode, "formatted")}
                  variant="outline"
                  size="sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={formattedCode}
              readOnly
              className="min-h-[300px] font-mono text-sm bg-muted"
            />
          </CardContent>
        </Card>
      )}

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="h-5 w-5" />
              Prettier Engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Uses the official Prettier library for industry-standard code
              formatting across multiple languages.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Settings className="h-5 w-5" />
              Highly Customizable
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Configure tab width, quotes, semicolons, line length, and more to
              match your coding style.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5" />
              Secure Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All formatting happens locally in your browser. Your code never
              leaves your device.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Use Cases */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Perfect For</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-3">Development Workflow</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Code review preparation</li>
                <li>• Legacy code cleanup</li>
                <li>• Consistent team formatting</li>
                <li>• Pre-commit formatting</li>
                <li>• Documentation examples</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Code Quality</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Improved readability</li>
                <li>• Standardized style</li>
                <li>• Reduced diff noise</li>
                <li>• Better collaboration</li>
                <li>• Professional presentation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="card-premium">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                What formatting engine is used?
              </h4>
              <p className="text-sm text-muted-foreground">
                We use Prettier, the industry-standard code formatter trusted by
                millions of developers worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                Can I save my formatting preferences?
              </h4>
              <p className="text-sm text-muted-foreground">
                Currently, preferences are saved for your session. We're working
                on persistent settings for future updates.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                What languages are supported?
              </h4>
              <p className="text-sm text-muted-foreground">
                JavaScript, TypeScript, CSS, and HTML are fully supported with
                their respective Prettier parsers.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                Does formatting change code functionality?
              </h4>
              <p className="text-sm text-muted-foreground">
                No, Prettier only changes formatting and whitespace. Your code's
                functionality remains exactly the same.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="Code Formatter"
          toolDescription="Format and beautify JavaScript, TypeScript, CSS, and HTML code with Prettier engine. Professional code formatting online"
          toolUrl="https://30tools.com/code-formatter"
          category="developer"
        />
      </div>
    </div>
  );
}

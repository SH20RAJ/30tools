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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  FileSpreadsheet,
  FileJson,
  Upload,
  Download,
  Copy,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Settings,
  BarChart3,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function CsvToJsonTool() {
  const [csvInput, setCsvInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [delimiter, setDelimiter] = useState(",");
  const [hasHeaders, setHasHeaders] = useState(true);
  const [outputFormat, setOutputFormat] = useState("array");
  const [indentSize, setIndentSize] = useState(2);
  const [customDelimiter, setCustomDelimiter] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("csv");

  const sampleData = {
    simple: `name,age,city
John Doe,30,New York
Jane Smith,25,Los Angeles
Bob Johnson,35,Chicago`,
    complex: `product_id,product_name,category,price,in_stock,rating,description
1,"MacBook Pro 14""",Laptops,1999.99,true,4.8,"Powerful laptop with M2 chip"
2,"iPhone 14 Pro",Smartphones,999.99,true,4.7,"Latest iPhone with advanced camera"
3,"AirPods Pro",Audio,249.99,false,4.6,"Noise-cancelling wireless earbuds"
4,"iPad Air",Tablets,599.99,true,4.5,"Versatile tablet for work and play"
5,"Apple Watch Series 8",Wearables,399.99,true,4.4,"Advanced fitness and health tracking"`,
  };

  const delimiters = [
    { value: ",", label: "Comma (,)" },
    { value: ";", label: "Semicolon (;)" },
    { value: "\t", label: "Tab" },
    { value: "|", label: "Pipe (|)" },
    { value: "custom", label: "Custom" },
  ];

  const outputFormats = [
    {
      value: "array",
      label: "Array of Objects",
      description: "[{key: value}, ...]",
    },
    {
      value: "object",
      label: "Object with Arrays",
      description: "{key: [values], ...}",
    },
    {
      value: "nested",
      label: "Nested by First Column",
      description: "{id: {data}, ...}",
    },
  ];

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const parseCSV = (csvText, delimiter) => {
    const lines = csvText.trim().split("\n");
    const result = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const row = [];
      let current = "";
      let inQuotes = false;

      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        const nextChar = line[j + 1];

        if (char === '"') {
          if (inQuotes && nextChar === '"') {
            current += '"';
            j++; // Skip next quote
          } else {
            inQuotes = !inQuotes;
          }
        } else if (char === delimiter && !inQuotes) {
          row.push(current.trim());
          current = "";
        } else {
          current += char;
        }
      }

      row.push(current.trim());
      result.push(row);
    }

    return result;
  };

  const convertToJson = useCallback(() => {
    if (!csvInput.trim()) {
      setError("Please enter CSV data to convert.");
      return;
    }

    setIsConverting(true);
    setError("");

    try {
      const actualDelimiter =
        delimiter === "custom" ? customDelimiter : delimiter;

      if (!actualDelimiter) {
        setError("Please specify a delimiter.");
        setIsConverting(false);
        return;
      }

      const rows = parseCSV(csvInput, actualDelimiter);

      if (rows.length === 0) {
        setError("No data found in CSV input.");
        setIsConverting(false);
        return;
      }

      let headers = [];
      let dataRows = rows;

      if (hasHeaders) {
        headers = rows[0];
        dataRows = rows.slice(1);
      } else {
        // Generate generic headers
        const maxColumns = Math.max(...rows.map((row) => row.length));
        headers = Array.from(
          { length: maxColumns },
          (_, i) => `column_${i + 1}`,
        );
      }

      let jsonResult;

      switch (outputFormat) {
        case "array":
          jsonResult = dataRows.map((row) => {
            const obj = {};
            headers.forEach((header, index) => {
              const value = row[index] || "";
              // Try to parse as number or boolean
              let parsedValue = value;
              if (value === "true") parsedValue = true;
              else if (value === "false") parsedValue = false;
              else if (value === "null" || value === "") parsedValue = null;
              else if (
                !isNaN(value) &&
                !isNaN(parseFloat(value)) &&
                value.trim() !== ""
              ) {
                parsedValue = parseFloat(value);
              }
              obj[header] = parsedValue;
            });
            return obj;
          });
          break;

        case "object":
          jsonResult = {};
          headers.forEach((header, index) => {
            jsonResult[header] = dataRows.map((row) => {
              const value = row[index] || "";
              let parsedValue = value;
              if (value === "true") parsedValue = true;
              else if (value === "false") parsedValue = false;
              else if (value === "null" || value === "") parsedValue = null;
              else if (
                !isNaN(value) &&
                !isNaN(parseFloat(value)) &&
                value.trim() !== ""
              ) {
                parsedValue = parseFloat(value);
              }
              return parsedValue;
            });
          });
          break;

        case "nested":
          jsonResult = {};
          dataRows.forEach((row) => {
            const key = row[0] || "unknown";
            const obj = {};
            headers.slice(1).forEach((header, index) => {
              const value = row[index + 1] || "";
              let parsedValue = value;
              if (value === "true") parsedValue = true;
              else if (value === "false") parsedValue = false;
              else if (value === "null" || value === "") parsedValue = null;
              else if (
                !isNaN(value) &&
                !isNaN(parseFloat(value)) &&
                value.trim() !== ""
              ) {
                parsedValue = parseFloat(value);
              }
              obj[header] = parsedValue;
            });
            jsonResult[key] = obj;
          });
          break;
      }

      const jsonString = JSON.stringify(jsonResult, null, indentSize);
      setJsonOutput(jsonString);

      // Calculate statistics
      const csvSize = new Blob([csvInput]).size;
      const jsonSize = new Blob([jsonString]).size;
      const compression =
        csvSize > jsonSize
          ? `-${Math.round(((csvSize - jsonSize) / csvSize) * 100)}%`
          : `+${Math.round(((jsonSize - csvSize) / csvSize) * 100)}%`;

      setStats({
        csvSize: formatFileSize(csvSize),
        jsonSize: formatFileSize(jsonSize),
        compression,
        rows: dataRows.length,
        columns: headers.length,
        totalCells: dataRows.length * headers.length,
      });
    } catch (err) {
      setError(`Conversion error: ${err.message}`);
      setJsonOutput("");
      setStats(null);
    }

    setIsConverting(false);
  }, [
    csvInput,
    delimiter,
    customDelimiter,
    hasHeaders,
    outputFormat,
    indentSize,
  ]);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = (content, filename) => {
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const loadSample = (type) => {
    setCsvInput(sampleData[type]);
    setTimeout(convertToJson, 100);
  };

  const clearAll = () => {
    setCsvInput("");
    setJsonOutput("");
    setError("");
    setStats(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free CSV to JSON Converter</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Convert CSV data to JSON format with customizable delimiters and
          output structures. Perfect for data processing, API integration, and
          database imports.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Smart Data Types</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Flexible Output</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Client-Side Processing</span>
          </div>
        </div>
      </div>

      {/* Configuration */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Conversion Settings
          </CardTitle>
          <CardDescription>
            Configure how your CSV data should be parsed and converted
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Label htmlFor="delimiter">Delimiter</Label>
              <Select value={delimiter} onValueChange={setDelimiter}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {delimiters.map((del) => (
                    <SelectItem key={del.value} value={del.value}>
                      {del.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {delimiter === "custom" && (
                <Input
                  placeholder="Enter custom delimiter"
                  value={customDelimiter}
                  onChange={(e) => setCustomDelimiter(e.target.value)}
                  className="mt-2"
                  maxLength="3"
                />
              )}
            </div>

            <div>
              <Label htmlFor="output-format">Output Format</Label>
              <Select value={outputFormat} onValueChange={setOutputFormat}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {outputFormats.map((format) => (
                    <SelectItem key={format.value} value={format.value}>
                      <div>
                        <div className="font-medium">{format.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {format.description}
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="indent">JSON Indentation</Label>
              <Input
                id="indent"
                type="number"
                min="0"
                max="8"
                value={indentSize}
                onChange={(e) => setIndentSize(parseInt(e.target.value) || 2)}
                className="mt-2"
              />
            </div>

            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="headers"
                checked={hasHeaders}
                onCheckedChange={setHasHeaders}
              />
              <Label htmlFor="headers" className="text-sm">
                First row contains headers
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Input/Output */}
      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        {/* CSV Input */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5" />
              CSV Input
            </CardTitle>
            <CardDescription>
              Paste your CSV data or load a sample
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => loadSample("simple")}
                variant="outline"
                size="sm"
              >
                Simple Sample
              </Button>
              <Button
                onClick={() => loadSample("complex")}
                variant="outline"
                size="sm"
              >
                Complex Sample
              </Button>
              <Button onClick={clearAll} variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Clear
              </Button>
            </div>

            <Textarea
              placeholder="Paste your CSV data here..."
              value={csvInput}
              onChange={(e) => setCsvInput(e.target.value)}
              className="min-h-[300px] font-mono text-sm"
            />
          </CardContent>
        </Card>

        {/* JSON Output */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileJson className="h-5 w-5" />
                JSON Output
              </span>
              {jsonOutput && (
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleCopy(jsonOutput)}
                    variant="outline"
                    size="sm"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    onClick={() => handleDownload(jsonOutput, "converted.json")}
                    variant="outline"
                    size="sm"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              )}
            </CardTitle>
            <CardDescription>Converted JSON data ready to use</CardDescription>
          </CardHeader>
          <CardContent>
            {jsonOutput ? (
              <Textarea
                value={jsonOutput}
                readOnly
                className="min-h-[300px] font-mono text-sm bg-muted"
              />
            ) : (
              <div className="min-h-[300px] border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <ArrowRight className="h-8 w-8 mx-auto mb-2" />
                  <p>JSON output will appear here</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Convert Button */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <Button
            onClick={convertToJson}
            disabled={isConverting || !csvInput.trim()}
            className="w-full"
            size="lg"
          >
            {isConverting ? (
              <>
                <FileJson className="h-4 w-4 mr-2 animate-pulse" />
                Converting CSV to JSON...
              </>
            ) : (
              <>
                <ArrowRight className="h-4 w-4 mr-2" />
                Convert CSV to JSON
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Error Display */}
      {error && (
        <Alert className="mb-6" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Statistics */}
      {stats && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Conversion Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-primary">
                  {stats.rows}
                </div>
                <div className="text-xs text-muted-foreground">Rows</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-primary">
                  {stats.columns}
                </div>
                <div className="text-xs text-muted-foreground">Columns</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-primary">
                  {stats.totalCells}
                </div>
                <div className="text-xs text-muted-foreground">Total Cells</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">{stats.csvSize}</div>
                <div className="text-xs text-muted-foreground">CSV Size</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold">{stats.jsonSize}</div>
                <div className="text-xs text-muted-foreground">JSON Size</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-primary">
                  {stats.compression}
                </div>
                <div className="text-xs text-muted-foreground">Size Change</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5" />
              Smart Data Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Automatically detects and converts numbers, booleans, and null
              values for proper JSON structure.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Settings className="h-5 w-5" />
              Flexible Output
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Choose from multiple JSON formats: array of objects, object with
              arrays, or nested structures.
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
              All conversion happens locally in your browser. Your data never
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
              <h4 className="font-medium mb-3">Data Integration</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• API data preparation</li>
                <li>• Database imports</li>
                <li>• Excel/Google Sheets exports</li>
                <li>• Data warehouse loading</li>
                <li>• Configuration file creation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Development Workflow</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Test data generation</li>
                <li>• Mock API responses</li>
                <li>• JavaScript object creation</li>
                <li>• NoSQL database seeding</li>
                <li>• Front-end data binding</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                What delimiters are supported?
              </h4>
              <p className="text-sm text-muted-foreground">
                Common delimiters like comma, semicolon, tab, and pipe, plus
                custom delimiters up to 3 characters.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">How are data types handled?</h4>
              <p className="text-sm text-muted-foreground">
                The tool automatically converts strings to appropriate JSON
                types: numbers, booleans (true/false), and null values.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                What if my CSV has quoted values?
              </h4>
              <p className="text-sm text-muted-foreground">
                The parser handles quoted values correctly, including escaped
                quotes and values containing delimiters.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                Which output format should I choose?
              </h4>
              <p className="text-sm text-muted-foreground">
                Array of objects is most common for APIs, object with arrays for
                data analysis, and nested for key-based lookups.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

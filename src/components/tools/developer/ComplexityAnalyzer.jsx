"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  analyzeComplexity,
  getAvailableModels,
  validateCode,
  getSupportedLanguages,
} from "@/lib/complexity-actions";
import {
  CodeIcon,
  PlayIcon,
  RefreshCwIcon,
  DownloadIcon,
  ClockIcon,
  DatabaseIcon,
  TrendingUpIcon,
  LightbulbIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoIcon,
  CopyIcon,
  ZapIcon,
  BrainIcon,
  TargetIcon,
  LayersIcon,
  SparklesIcon,
} from "lucide-react";

export default function ComplexityAnalyzer() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [model, setModel] = useState("qwen-coder");
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState(null);
  const [validation, setValidation] = useState(null);
  const [availableModels, setAvailableModels] = useState([]);
  const [progress, setProgress] = useState(0);

  const textareaRef = useRef(null);

  const [supportedLanguages, setSupportedLanguages] = useState([]);

  // Load available models and supported languages on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load models
        const result = await getAvailableModels();
        if (result.success) {
          setAvailableModels(result.models);
        } else {
          console.warn("Using fallback models:", result.models);
          setAvailableModels(result.models);
        }

        // Load supported languages
        const languages = await getSupportedLanguages();
        setSupportedLanguages(languages);
      } catch (error) {
        console.error("Failed to load data:", error);
        // Use fallback data
        setAvailableModels([
          {
            name: "qwen-coder",
            description: "Qwen 2.5 Coder 32B",
            tier: "anonymous",
          },
          { name: "deepseek", description: "DeepSeek V3.1", tier: "seed" },
          {
            name: "openai",
            description: "OpenAI GPT-5 Nano",
            tier: "anonymous",
          },
        ]);
        setSupportedLanguages([
          {
            value: "javascript",
            label: "JavaScript",
            extensions: [".js", ".mjs"],
          },
          { value: "python", label: "Python", extensions: [".py", ".pyw"] },
          { value: "java", label: "Java", extensions: [".java"] },
          { value: "cpp", label: "C++", extensions: [".cpp", ".cxx", ".cc"] },
        ]);
      }
    };

    loadData();
  }, []);

  // Validate code when it changes
  useEffect(() => {
    const validateAsync = async () => {
      if (code.trim()) {
        const validationResult = await validateCode(code, language);
        setValidation(validationResult);
      } else {
        setValidation(null);
      }
    };

    validateAsync();
  }, [code, language]);

  // Simulate progress during analysis
  useEffect(() => {
    let interval;
    if (isAnalyzing) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 10;
        });
      }, 500);
    } else {
      setProgress(100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAnalyzing]);

  const handleAnalyze = useCallback(async () => {
    if (!code.trim()) {
      setError("Please enter some code to analyze");
      return;
    }

    if (validation && !validation.valid) {
      setError(`Code validation failed: ${validation.issues.join(", ")}`);
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setAnalysis(null);

    try {
      const result = await analyzeComplexity(code, language, model);

      if (result.success) {
        setAnalysis(result.analysis);
        setProgress(100);
      } else {
        setError(result.error || "Analysis failed");
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsAnalyzing(false);
    }
  }, [code, language, model, validation]);

  const handleCopyAnalysis = useCallback(() => {
    if (!analysis) return;

    const formattedAnalysis = `
# Complexity Analysis Results

## Time Complexity
- **Big O:** ${analysis.timeComplexity.bigO}
- **Best Case:** ${analysis.timeComplexity.bestCase}
- **Average Case:** ${analysis.timeComplexity.averageCase}  
- **Worst Case:** ${analysis.timeComplexity.worstCase}
- **Explanation:** ${analysis.timeComplexity.explanation}

## Space Complexity
- **Big O:** ${analysis.spaceComplexity.bigO}
- **Auxiliary Space:** ${analysis.spaceComplexity.auxiliary}
- **Explanation:** ${analysis.spaceComplexity.explanation}

## Algorithm Type
${analysis.algorithmType}

## Key Insights
${analysis.keyInsights?.map((insight) => `- ${insight}`).join("\n") || "No insights available"}

## Optimization Suggestions
${analysis.optimizations?.map((opt) => `- ${opt}`).join("\n") || "No optimizations suggested"}
    `.trim();

    navigator.clipboard.writeText(formattedAnalysis);
  }, [analysis]);

  const handleDownloadAnalysis = useCallback(() => {
    if (!analysis) return;

    const jsonData = JSON.stringify(analysis, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `complexity-analysis-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [analysis]);

  const loadSampleCode = useCallback(
    (sampleLanguage = language) => {
      const samples = {
        javascript: `function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}`,
        python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
        java: `public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return i + 1;
    }
    
    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}`,
        cpp: `#include <vector>
#include <algorithm>

class Solution {
public:
    std::vector<int> mergeSort(std::vector<int>& nums) {
        if (nums.size() <= 1) return nums;
        
        int mid = nums.size() / 2;
        std::vector<int> left(nums.begin(), nums.begin() + mid);
        std::vector<int> right(nums.begin() + mid, nums.end());
        
        left = mergeSort(left);
        right = mergeSort(right);
        
        return merge(left, right);
    }
    
private:
    std::vector<int> merge(const std::vector<int>& left, const std::vector<int>& right) {
        std::vector<int> result;
        int i = 0, j = 0;
        
        while (i < left.size() && j < right.size()) {
            if (left[i] <= right[j]) {
                result.push_back(left[i++]);
            } else {
                result.push_back(right[j++]);
            }
        }
        
        while (i < left.size()) result.push_back(left[i++]);
        while (j < right.size()) result.push_back(right[j++]);
        
        return result;
    }
};`,
      };

      setCode(samples[sampleLanguage] || samples.javascript);
    },
    [language],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30 p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-background">
              <BrainIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-background">
              Complexity Analyzer
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analyze the time and space complexity of your code using AI-powered
            analysis. Get detailed insights, optimization suggestions, and
            algorithm explanations.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CodeIcon className="w-5 h-5 mr-2" />
                Code Input
              </CardTitle>
              <CardDescription>
                Paste your code below and select the programming language
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Language and Model Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Programming Language
                  </label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      {supportedLanguages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          {lang.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    AI Model
                  </label>
                  <Select value={model} onValueChange={setModel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableModels.map((modelOption) => (
                        <SelectItem
                          key={modelOption.name}
                          value={modelOption.name}
                        >
                          <div className="flex items-center">
                            <span>{modelOption.description}</span>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {modelOption.tier}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Sample Code Buttons */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => loadSampleCode("javascript")}
                >
                  Load JS Sample
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => loadSampleCode("python")}
                >
                  Load Python Sample
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => loadSampleCode("java")}
                >
                  Load Java Sample
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => loadSampleCode("cpp")}
                >
                  Load C++ Sample
                </Button>
              </div>

              {/* Code Input */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Your Code
                </label>
                <Textarea
                  ref={textareaRef}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Paste your code here..."
                  className="min-h-[400px] font-mono text-sm"
                />
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>{code.length} / 50,000 characters</span>
                  {code.length > 40000 && (
                    <span className="text-primary">Approaching limit</span>
                  )}
                </div>
              </div>

              {/* Validation Messages */}
              {validation && !validation.valid && (
                <Alert variant="destructive">
                  <AlertTriangleIcon className="h-4 w-4" />
                  <AlertTitle>Code Issues</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc list-inside">
                      {validation.issues.map((issue, index) => (
                        <li key={index}>{issue}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              {validation && validation.valid && (
                <Alert>
                  <CheckCircleIcon className="h-4 w-4" />
                  <AlertTitle>Code Valid</AlertTitle>
                  <AlertDescription>
                    Your code passed basic validation checks
                  </AlertDescription>
                </Alert>
              )}

              {/* Analyze Button */}
              <div className="flex gap-2">
                <Button
                  onClick={handleAnalyze}
                  disabled={
                    isAnalyzing ||
                    !code.trim() ||
                    (validation && !validation.valid)
                  }
                  className="flex-1"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCwIcon className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <PlayIcon className="w-4 h-4 mr-2" />
                      Analyze Complexity
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setCode("")}
                  disabled={isAnalyzing}
                >
                  Clear
                </Button>
              </div>

              {/* Progress Bar */}
              {isAnalyzing && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Analyzing with AI...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <TargetIcon className="w-5 h-5 mr-2" />
                  Analysis Results
                </span>
                {analysis && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyAnalysis}
                    >
                      <CopyIcon className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownloadAnalysis}
                    >
                      <DownloadIcon className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                )}
              </CardTitle>
              <CardDescription>
                Detailed complexity analysis and optimization suggestions
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive">
                  <AlertTriangleIcon className="h-4 w-4" />
                  <AlertTitle>Analysis Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {!analysis && !error && !isAnalyzing && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-background">
                    <SparklesIcon className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Ready to Analyze
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Enter your code and click "Analyze Complexity" to get
                    started
                  </p>
                </div>
              )}

              {analysis && (
                <Tabs defaultValue="complexity" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="complexity">Complexity</TabsTrigger>
                    <TabsTrigger value="insights">Insights</TabsTrigger>
                    <TabsTrigger value="optimizations">Optimize</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>

                  <TabsContent value="complexity" className="space-y-4">
                    {/* Time Complexity */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <ClockIcon className="w-5 h-5 mr-2 text-primary" />
                        <h3 className="text-lg font-semibold">
                          Time Complexity
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-muted/30 rounded-lg p-3 text-center">
                          <div className="text-xs text-muted-foreground mb-1">
                            Big O
                          </div>
                          <div className="font-mono font-semibold text-lg text-primary">
                            {analysis.timeComplexity.bigO}
                          </div>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3 text-center">
                          <div className="text-xs text-muted-foreground mb-1">
                            Best
                          </div>
                          <div className="font-mono font-semibold">
                            {analysis.timeComplexity.bestCase}
                          </div>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3 text-center">
                          <div className="text-xs text-muted-foreground mb-1">
                            Average
                          </div>
                          <div className="font-mono font-semibold">
                            {analysis.timeComplexity.averageCase}
                          </div>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3 text-center">
                          <div className="text-xs text-muted-foreground mb-1">
                            Worst
                          </div>
                          <div className="font-mono font-semibold">
                            {analysis.timeComplexity.worstCase}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {analysis.timeComplexity.explanation}
                      </p>
                    </div>

                    <Separator />

                    {/* Space Complexity */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <DatabaseIcon className="w-5 h-5 mr-2 text-primary" />
                        <h3 className="text-lg font-semibold">
                          Space Complexity
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-muted/30 rounded-lg p-3 text-center">
                          <div className="text-xs text-muted-foreground mb-1">
                            Big O
                          </div>
                          <div className="font-mono font-semibold text-lg text-primary">
                            {analysis.spaceComplexity.bigO}
                          </div>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3 text-center">
                          <div className="text-xs text-muted-foreground mb-1">
                            Auxiliary
                          </div>
                          <div className="font-mono font-semibold">
                            {analysis.spaceComplexity.auxiliary}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {analysis.spaceComplexity.explanation}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="insights" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <LightbulbIcon className="w-5 h-5 mr-2 text-primary" />
                        <h3 className="text-lg font-semibold">
                          Algorithm Type
                        </h3>
                      </div>
                      <p className="text-muted-foreground bg-muted/30 rounded-lg p-3">
                        {analysis.algorithmType}
                      </p>

                      {analysis.keyInsights &&
                        analysis.keyInsights.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="font-semibold">Key Insights</h4>
                            <ul className="space-y-2">
                              {analysis.keyInsights.map((insight, index) => (
                                <li key={index} className="flex items-start">
                                  <InfoIcon className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                                  <span className="text-sm">{insight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  </TabsContent>

                  <TabsContent value="optimizations" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <ZapIcon className="w-5 h-5 mr-2 text-primary" />
                        <h3 className="text-lg font-semibold">
                          Optimization Suggestions
                        </h3>
                      </div>
                      {analysis.optimizations &&
                      analysis.optimizations.length > 0 ? (
                        <ul className="space-y-3">
                          {analysis.optimizations.map((optimization, index) => (
                            <li key={index} className="flex items-start">
                              <TrendingUpIcon className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                              <span className="text-sm">{optimization}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground">
                          No specific optimizations suggested for this code.
                        </p>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-4">
                    {analysis.complexity_analysis && (
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <LayersIcon className="w-5 h-5 mr-2 text-primary" />
                          <h3 className="text-lg font-semibold">
                            Detailed Analysis
                          </h3>
                        </div>

                        {analysis.complexity_analysis.loops && (
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                              Loop Analysis
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {analysis.complexity_analysis.loops}
                            </p>
                          </div>
                        )}

                        {analysis.complexity_analysis.recursion && (
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                              Recursion Analysis
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {analysis.complexity_analysis.recursion}
                            </p>
                          </div>
                        )}

                        {analysis.complexity_analysis.dataStructures && (
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-semibold mb-2">
                              Data Structures Impact
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {analysis.complexity_analysis.dataStructures}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

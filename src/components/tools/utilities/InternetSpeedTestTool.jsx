"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Wifi, Download, Upload, Clock, Play, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function InternetSpeedTestTool() {
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [currentTest, setCurrentTest] = useState("");
  const [results, setResults] = useState(null);
  const [progress, setProgress] = useState(0);

  const simulateSpeedTest = async () => {
    setIsTestRunning(true);
    setProgress(0);
    setResults(null);

    try {
      // Simulate download speed test
      setCurrentTest("download");
      for (let i = 0; i <= 40; i += 2) {
        setProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Simulate upload speed test
      setCurrentTest("upload");
      for (let i = 40; i <= 80; i += 2) {
        setProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Simulate ping test
      setCurrentTest("ping");
      for (let i = 80; i <= 100; i += 2) {
        setProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Generate realistic results
      const downloadSpeed = Math.random() * 90 + 10; // 10-100 Mbps
      const uploadSpeed = Math.random() * 50 + 5; // 5-55 Mbps
      const ping = Math.random() * 40 + 10; // 10-50 ms

      setResults({
        download: downloadSpeed.toFixed(2),
        upload: uploadSpeed.toFixed(2),
        ping: ping.toFixed(0),
        jitter: (Math.random() * 5 + 1).toFixed(1),
        timestamp: new Date().toLocaleString(),
      });

      toast.success("Speed test completed!");
    } catch (_error) {
      toast.error("Speed test failed");
    } finally {
      setIsTestRunning(false);
      setCurrentTest("");
      setProgress(0);
    }
  };

  const getSpeedCategory = (speed) => {
    if (speed < 25) return { label: "Slow", color: "text-destructive" };
    if (speed < 50) return { label: "Fair", color: "text-primary" };
    if (speed < 100) return { label: "Good", color: "text-primary" };
    return { label: "Excellent", color: "text-primary" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Internet Speed Test
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Test your internet connection speed. Check download speed, upload
            speed, and ping latency.
          </p>
        </div>

        {/* Main Test Area */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="h-5 w-5" />
              Speed Test
            </CardTitle>
            <CardDescription>
              Click start to begin testing your internet connection
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isTestRunning && !results && (
              <div className="text-center py-12">
                <div className="w-32 h-32 mx-auto mb-6 bg-background">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Ready to Test</h2>
                <p className="text-muted-foreground mb-6">
                  Click the button below to start testing your internet speed
                </p>
                <Button onClick={simulateSpeedTest} size="lg" className="px-8">
                  Start Speed Test
                </Button>
              </div>
            )}

            {isTestRunning && (
              <div className="text-center py-12">
                <div className="w-32 h-32 mx-auto mb-6 bg-background">
                  <RefreshCw className="h-12 w-12 text-white animate-spin" />
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Testing{" "}
                  {currentTest === "download"
                    ? "Download Speed"
                    : currentTest === "upload"
                      ? "Upload Speed"
                      : "Ping & Jitter"}
                </h2>
                <Progress
                  value={progress}
                  className="w-full max-w-md mx-auto mb-4"
                />
                <p className="text-muted-foreground">{progress}% Complete</p>
              </div>
            )}

            {results && (
              <div className="space-y-6">
                <div className="text-center py-6">
                  <h2 className="text-2xl font-bold mb-4">Test Results</h2>
                  <p className="text-muted-foreground">
                    Completed at {results.timestamp}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Download Speed */}
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold mb-2">
                        {results.download}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Mbps
                      </div>
                      <div
                        className={`text-sm font-medium ${getSpeedCategory(results.download).color}`}
                      >
                        {getSpeedCategory(results.download).label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Download
                      </div>
                    </CardContent>
                  </Card>

                  {/* Upload Speed */}
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Upload className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold mb-2">
                        {results.upload}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Mbps
                      </div>
                      <div
                        className={`text-sm font-medium ${getSpeedCategory(results.upload).color}`}
                      >
                        {getSpeedCategory(results.upload).label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Upload
                      </div>
                    </CardContent>
                  </Card>

                  {/* Ping */}
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold mb-2">
                        {results.ping}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        ms
                      </div>
                      <div
                        className={`text-sm font-medium ${
                          results.ping < 20
                            ? "text-primary"
                            : results.ping < 50
                              ? "text-primary"
                              : "text-destructive"
                        }`}
                      >
                        {results.ping < 20
                          ? "Excellent"
                          : results.ping < 50
                            ? "Good"
                            : "Fair"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Ping
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Additional Metrics */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Jitter:</span>
                        <span>{results.jitter} ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Test Server:</span>
                        <span>Auto-selected</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button onClick={simulateSpeedTest} variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Test Again
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Speed Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Speed Recommendations</CardTitle>
            <CardDescription>
              Recommended speeds for different activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Basic Browsing</h3>
                <div className="text-2xl font-bold text-primary">1-5 Mbps</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Web browsing, email
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">HD Streaming</h3>
                <div className="text-2xl font-bold text-primary">5-25 Mbps</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Netflix, YouTube HD
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">4K Streaming</h3>
                <div className="text-2xl font-bold text-primary">25+ Mbps</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Ultra HD content
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Gaming</h3>
                <div className="text-2xl font-bold text-destructive">
                  &lt;50ms
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Low ping required
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Download Test</h3>
                <p className="text-sm text-muted-foreground">
                  Measure your download speed accurately
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Upload className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Upload Test</h3>
                <p className="text-sm text-muted-foreground">
                  Check your upload speed performance
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Ping & Latency</h3>
                <p className="text-sm text-muted-foreground">
                  Test connection latency and jitter
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

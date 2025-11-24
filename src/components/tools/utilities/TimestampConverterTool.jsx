"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Clock, Calendar, Copy, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function TimestampConverterTool() {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [timestamp, setTimestamp] = useState("");
  const [humanDate, setHumanDate] = useState("");
  const [resultTimestamp, setResultTimestamp] = useState("");
  const [resultHuman, setResultHuman] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const convertToHuman = () => {
    try {
      const num = parseInt(timestamp);
      if (isNaN(num)) {
        toast.error("Please enter a valid timestamp");
        return;
      }

      // Check if timestamp is in seconds or milliseconds
      const ts = num.toString().length === 10 ? num * 1000 : num;
      const date = new Date(ts);

      if (isNaN(date.getTime())) {
        toast.error("Invalid timestamp");
        return;
      }

      setResultHuman(date.toISOString());
      toast.success("Converted to human-readable date!");
    } catch (_error) {
      toast.error("Conversion failed");
    }
  };

  const convertToTimestamp = () => {
    try {
      const date = new Date(humanDate);

      if (isNaN(date.getTime())) {
        toast.error("Please enter a valid date");
        return;
      }

      setResultTimestamp(Math.floor(date.getTime() / 1000).toString());
      toast.success("Converted to Unix timestamp!");
    } catch (_error) {
      toast.error("Conversion failed");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const useCurrentTime = () => {
    const now = new Date();
    setTimestamp(Math.floor(now.getTime() / 1000).toString());
    setHumanDate(now.toISOString().slice(0, 16));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {/* Current Time Display */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-900">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <Clock className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400" />
            <h3 className="text-sm font-medium text-muted-foreground">Current Time</h3>
            <div className="space-y-1">
              <p className="text-2xl font-bold font-mono">{Math.floor(currentTime / 1000)}</p>
              <p className="text-sm text-muted-foreground">{new Date(currentTime).toISOString()}</p>
              <p className="text-sm text-muted-foreground">{new Date(currentTime).toLocaleString()}</p>
            </div>
            <Button size="sm" variant="outline" onClick={useCurrentTime}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Use Current Time
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Timestamp to Human */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Timestamp → Human
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Unix Timestamp (seconds or milliseconds)</Label>
              <Input
                type="number"
                placeholder="1234567890"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
              />
            </div>

            <Button onClick={convertToHuman} className="w-full">
              Convert
            </Button>

            {resultHuman && (
              <div className="space-y-2">
                <Label>Result</Label>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1 flex-1">
                      <p className="font-mono text-xs">{resultHuman}</p>
                      <p className="text-sm">{new Date(resultHuman).toLocaleString()}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(resultHuman)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Human to Timestamp */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Human → Timestamp
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Date & Time</Label>
              <Input
                type="datetime-local"
                value={humanDate}
                onChange={(e) => setHumanDate(e.target.value)}
              />
            </div>

            <Button onClick={convertToTimestamp} className="w-full">
              Convert
            </Button>

            {resultTimestamp && (
              <div className="space-y-2">
                <Label>Result (Unix Timestamp in seconds)</Label>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm flex-1">{resultTimestamp}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(resultTimestamp)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-sm">Quick Reference</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Unix timestamp = seconds since January 1, 1970 (Unix Epoch)</p>
          <p>• Common formats: 10 digits (seconds) or 13 digits (milliseconds)</p>
          <p>• ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ</p>
          <p>• Timestamps are timezone-independent (UTC)</p>
        </CardContent>
      </Card>
    </div>
  );
}

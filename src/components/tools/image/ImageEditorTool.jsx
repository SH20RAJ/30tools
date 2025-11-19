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
import { Edit } from "lucide-react";
import { toast } from "sonner";

export default function ImageEditor() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = async () => {
    setIsProcessing(true);
    try {
      // Simulate processing
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Operation completed successfully!");
    } catch (error) {
      toast.error("Operation failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Image Editor</h1>
            <p className="text-lg text-muted-foreground">
              Edit images online with filters, effects, and basic editing tools
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="w-5 h-5" />
                Image Editor
              </CardTitle>
              <CardDescription>
                This tool is currently under development. More features coming
                soon!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-12">
                <Edit className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  We're working hard to bring you this amazing tool. Stay tuned!
                </p>
                <Button onClick={handleProcess} disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Try Demo"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What to Expect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Edit images online with filters, effects, and basic editing
                tools. This tool will provide a user-friendly interface with
                advanced features to help you accomplish your tasks efficiently.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

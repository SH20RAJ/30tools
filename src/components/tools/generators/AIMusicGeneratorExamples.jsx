import { Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXAMPLE_PROMPTS } from "./ai-music-constants";

export default function AIMusicGeneratorExamples({ loadPrompt, loading }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5" />
          Example Prompts
        </CardTitle>
        <CardDescription>Get inspired with these example style prompts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EXAMPLE_PROMPTS.map((category, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-medium text-sm">{category.category}</h4>
              <div className="space-y-1">
                {category.prompts.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => loadPrompt(example)}
                    className="w-full text-left p-2 text-xs bg-muted hover:bg-muted/80 rounded transition-colors"
                    disabled={loading}
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
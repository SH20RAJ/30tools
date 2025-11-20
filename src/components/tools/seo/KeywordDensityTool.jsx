"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { BarChart, FileText, Hash, TrendingUp } from "lucide-react";
import { toast } from "sonner";

export default function KeywordDensityTool() {
  const [text, setText] = useState("");
  const [results, setResults] = useState(null);

  const analyzeText = () => {
    if (!text.trim()) {
      toast.error("Please enter some text to analyze");
      return;
    }

    // Clean and normalize text
    const cleanText = text.toLowerCase().replace(/[^\w\s]/g, ' ');
    const words = cleanText.split(/\s+/).filter(w => w.length > 0);

    // Filter stop words
    const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'between', 'under', 'again', 'is', 'was', 'are', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'them', 'their', 'what', 'which', 'who', 'when', 'where', 'why', 'how']);

    const filteredWords = words.filter(w => !stopWords.has(w) && w.length > 2);

    // Count single words
    const wordCount = {};
    filteredWords.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });

    // Count 2-word phrases
    const twoWordPhrases = {};
    for (let i = 0; i < filteredWords.length - 1; i++) {
      const phrase = `${filteredWords[i]} ${filteredWords[i + 1]}`;
      twoWordPhrases[phrase] = (twoWordPhrases[phrase] || 0) + 1;
    }

    // Count 3-word phrases
    const threeWordPhrases = {};
    for (let i = 0; i < filteredWords.length - 2; i++) {
      const phrase = `${filteredWords[i]} ${filteredWords[i + 1]} ${filteredWords[i + 2]}`;
      threeWordPhrases[phrase] = (threeWordPhrases[phrase] || 0) + 1;
    }

    // Sort and get top keywords
    const sortedWords = Object.entries(wordCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([word, count]) => ({
        keyword: word,
        count,
        density: ((count / words.length) * 100).toFixed(2)
      }));

    const sortedTwoWord = Object.entries(twoWordPhrases)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
      .map(([phrase, count]) => ({
        keyword: phrase,
        count,
        density: ((count / words.length) * 100).toFixed(2)
      }));

    const sortedThreeWord = Object.entries(threeWordPhrases)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([phrase, count]) => ({
        keyword: phrase,
        count,
        density: ((count / words.length) * 100).toFixed(2)
      }));

    setResults({
      totalWords: words.length,
      uniqueWords: Object.keys(wordCount).length,
      singleWords: sortedWords,
      twoWordPhrases: sortedTwoWord,
      threeWordPhrases: sortedThreeWord
    });

    toast.success("Analysis complete!");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text-input">Enter Your Text</Label>
            <Textarea
              id="text-input"
              placeholder="Paste your content here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[400px] font-mono text-sm"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={analyzeText} className="flex">
              <BarChart className="w-4 h-4 mr-2" />
              Analyze
            </Button>
            <Button variant="outline" onClick={() => { setText(''); setResults(null); }}>
              Clear
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4">
          {results && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <FileText className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-3xl font-bold">{results.totalWords}</p>
                      <p className="text-sm text-muted-foreground">Total Words</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Hash className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-3xl font-bold">{results.uniqueWords}</p>
                      <p className="text-sm text-muted-foreground">Unique Words</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Keywords (1-word)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-[300px] overflow-y-auto">
                    {results.singleWords.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 px-3 bg-muted rounded-lg">
                        <span className="font-medium">{item.keyword}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">{item.count}x</span>
                          <span className="text-sm font-semibold text-primary">{item.density}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Phrases (2-word)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-[200px] overflow-y-auto">
                    {results.twoWordPhrases.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 px-3 bg-muted rounded-lg">
                        <span className="font-medium text-sm">{item.keyword}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">{item.count}x</span>
                          <span className="text-xs font-semibold text-primary">{item.density}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Phrases (3-word)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-[200px] overflow-y-auto">
                    {results.threeWordPhrases.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 px-3 bg-muted rounded-lg">
                        <span className="font-medium text-sm">{item.keyword}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">{item.count}x</span>
                          <span className="text-xs font-semibold text-primary">{item.density}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {!results && (
            <div className="border-2 border-dashed rounded-xl p-12 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-medium mb-2">No Analysis Yet</h3>
              <p className="text-sm text-muted-foreground">
                Enter your text and click "Analyze" to see keyword density
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

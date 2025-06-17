'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeftIcon,
  PlayIcon,
  PauseIcon,
  RefreshCwIcon,
  KeyboardIcon,
  ClockIcon,
  TargetIcon,
  TrendingUpIcon,
  AwardIcon,
  BookOpenIcon,
  CheckCircleIcon,
  XCircleIcon
} from 'lucide-react';
import Link from 'next/link';

const SAMPLE_TEXTS = {
  easy: [
    "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet at least once.",
    "A journey of a thousand miles begins with a single step. Every expert was once a beginner.",
    "Technology has made our lives easier and more connected than ever before in human history."
  ],
  medium: [
    "Programming requires patience, persistence, and practice. Debugging code teaches logical thinking and problem-solving skills that extend far beyond computer science.",
    "The advancement of artificial intelligence and machine learning has revolutionized industries from healthcare to transportation, creating new opportunities while presenting unique challenges.",
    "Effective communication involves not just speaking clearly but also listening actively, understanding context, and adapting your message to your audience's needs and expectations."
  ],
  hard: [
    "Quantum mechanics fundamentally challenges our intuitive understanding of reality by demonstrating that particles can exist in superposition states and exhibit non-local correlations through entanglement.",
    "The philosophical implications of consciousness studies intersect with neuroscience, psychology, and computer science, raising profound questions about the nature of subjective experience and artificial sentience.",
    "Cryptographic protocols ensure data integrity and confidentiality through mathematical algorithms that would require computationally infeasible amounts of time to break using current technology."
  ]
};

const TEST_DURATIONS = [
  { value: 30, label: '30 seconds' },
  { value: 60, label: '1 minute' },
  { value: 120, label: '2 minutes' },
  { value: 300, label: '5 minutes' }
];

export default function TypingSpeedTestTool() {
  const [selectedText, setSelectedText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isTestActive, setIsTestActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedDuration, setSelectedDuration] = useState(60);
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
  const [startTime, setStartTime] = useState(null);
  const [results, setResults] = useState(null);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [errors, setErrors] = useState([]);
  const [history, setHistory] = useState([]);

  const textareaRef = useRef(null);
  const intervalRef = useRef(null);

  // Initialize with random text
  useEffect(() => {
    resetTest();
  }, [selectedDifficulty]);

  const getRandomText = useCallback(() => {
    const texts = SAMPLE_TEXTS[selectedDifficulty];
    return texts[Math.floor(Math.random() * texts.length)];
  }, [selectedDifficulty]);

  const resetTest = useCallback(() => {
    setSelectedText(getRandomText());
    setUserInput('');
    setIsTestActive(false);
    setTimeLeft(selectedDuration);
    setStartTime(null);
    setResults(null);
    setCurrentCharIndex(0);
    setErrors([]);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [selectedDuration, getRandomText]);

  const startTest = useCallback(() => {
    if (!selectedText) return;
    
    setIsTestActive(true);
    setStartTime(Date.now());
    setUserInput('');
    setCurrentCharIndex(0);
    setErrors([]);
    
    if (textareaRef.current) {
      textareaRef.current.focus();
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [selectedText]);

  const endTest = useCallback(() => {
    if (!isTestActive || !startTime) return;

    const endTime = Date.now();
    const timeElapsed = (endTime - startTime) / 1000; // in seconds
    const wordsTyped = userInput.trim().split(/\s+/).length;
    const charactersTyped = userInput.length;
    const correctCharacters = userInput.split('').filter((char, index) => 
      char === selectedText[index]
    ).length;
    
    const wpm = Math.round((wordsTyped / timeElapsed) * 60);
    const accuracy = Math.round((correctCharacters / charactersTyped) * 100) || 0;
    const cpm = Math.round((charactersTyped / timeElapsed) * 60);

    const testResult = {
      wpm,
      accuracy,
      cpm,
      timeElapsed: Math.round(timeElapsed),
      charactersTyped,
      correctCharacters,
      errors: errors.length,
      difficulty: selectedDifficulty,
      date: new Date().toISOString()
    };

    setResults(testResult);
    setHistory(prev => [testResult, ...prev.slice(0, 9)]); // Keep last 10 results
    setIsTestActive(false);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [isTestActive, startTime, userInput, selectedText, errors, selectedDifficulty]);

  const handleInputChange = useCallback((e) => {
    if (!isTestActive) return;

    const value = e.target.value;
    setUserInput(value);
    setCurrentCharIndex(value.length);

    // Track errors
    const newErrors = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== selectedText[i]) {
        newErrors.push(i);
      }
    }
    setErrors(newErrors);

    // End test if user completes the text
    if (value.length >= selectedText.length) {
      endTest();
    }
  }, [isTestActive, selectedText, endTest]);

  const handleKeyDown = useCallback((e) => {
    if (!isTestActive && e.key === 'Enter') {
      startTest();
    }
  }, [isTestActive, startTest]);

  const getCharacterClass = useCallback((index) => {
    if (index < currentCharIndex) {
      return errors.includes(index) ? 'text-red-500 bg-red-100' : 'text-green-600 bg-green-100';
    } else if (index === currentCharIndex) {
      return 'bg-blue-200 border-b-2 border-blue-500';
    }
    return 'text-muted-foreground';
  }, [currentCharIndex, errors]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getWPMRating = (wpm) => {
    if (wpm >= 70) return { label: 'Excellent', color: 'text-green-600' };
    if (wpm >= 50) return { label: 'Good', color: 'text-blue-600' };
    if (wpm >= 30) return { label: 'Average', color: 'text-yellow-600' };
    return { label: 'Needs Practice', color: 'text-red-600' };
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
              <KeyboardIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Typing Speed Test</h1>
              <p className="text-muted-foreground">Test your typing speed and accuracy with real-time WPM calculation</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Real-time WPM</Badge>
            <Badge variant="secondary">Accuracy Tracking</Badge>
            <Badge variant="secondary">Multiple Difficulties</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <Tabs defaultValue="test" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="test">Typing Test</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="test" className="space-y-6">
            {/* Test Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  Test Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Duration</label>
                    <Select 
                      value={selectedDuration.toString()} 
                      onValueChange={(value) => {
                        setSelectedDuration(parseInt(value));
                        setTimeLeft(parseInt(value));
                      }}
                      disabled={isTestActive}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {TEST_DURATIONS.map((duration) => (
                          <SelectItem key={duration.value} value={duration.value.toString()}>
                            {duration.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Difficulty</label>
                    <Select 
                      value={selectedDifficulty} 
                      onValueChange={setSelectedDifficulty}
                      disabled={isTestActive}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button 
                      onClick={resetTest} 
                      variant="outline"
                      disabled={isTestActive}
                      className="w-full"
                    >
                      <RefreshCwIcon className="h-4 w-4 mr-2" />
                      New Text
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Test Area */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <TargetIcon className="h-5 w-5" />
                    Typing Test
                  </CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold">
                      {formatTime(timeLeft)}
                    </div>
                    {isTestActive && (
                      <Badge variant="default">
                        {Math.round((userInput.length / (selectedDuration - timeLeft + 1)) * 60)} WPM
                      </Badge>
                    )}
                  </div>
                </div>
                {timeLeft < selectedDuration && (
                  <Progress value={(1 - timeLeft / selectedDuration) * 100} className="mt-2" />
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Text to type */}
                <div className="p-4 bg-muted/30 rounded-lg border-2 border-dashed">
                  <div className="text-lg leading-relaxed font-mono">
                    {selectedText.split('').map((char, index) => (
                      <span key={index} className={getCharacterClass(index)}>
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Input area */}
                <div>
                  <textarea
                    ref={textareaRef}
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={isTestActive ? "Start typing..." : "Click 'Start Test' or press Enter to begin"}
                    disabled={!isTestActive && timeLeft > 0 && timeLeft < selectedDuration}
                    className="w-full h-32 p-4 text-lg font-mono border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    spellCheck="false"
                    autoCorrect="off"
                    autoCapitalize="off"
                  />
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4">
                  {!isTestActive && timeLeft === selectedDuration ? (
                    <Button onClick={startTest} size="lg">
                      <PlayIcon className="h-4 w-4 mr-2" />
                      Start Test
                    </Button>
                  ) : isTestActive ? (
                    <Button onClick={endTest} variant="destructive" size="lg">
                      <PauseIcon className="h-4 w-4 mr-2" />
                      End Test
                    </Button>
                  ) : (
                    <Button onClick={resetTest} size="lg">
                      <RefreshCwIcon className="h-4 w-4 mr-2" />
                      Reset Test
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            {results ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AwardIcon className="h-5 w-5" />
                    Test Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{results.wpm}</div>
                      <div className="text-sm text-muted-foreground">Words per Minute</div>
                      <div className={`text-sm font-medium ${getWPMRating(results.wpm).color}`}>
                        {getWPMRating(results.wpm).label}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">{results.accuracy}%</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{results.cpm}</div>
                      <div className="text-sm text-muted-foreground">Characters per Minute</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{results.errors}</div>
                      <div className="text-sm text-muted-foreground">Errors</div>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Time Elapsed:</span>
                      <div className="font-medium">{results.timeElapsed}s</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Characters Typed:</span>
                      <div className="font-medium">{results.charactersTyped}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Correct Characters:</span>
                      <div className="font-medium">{results.correctCharacters}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Difficulty:</span>
                      <div className="font-medium capitalize">{results.difficulty}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <BookOpenIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Results Yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete a typing test to see your results here
                  </p>
                  <Button onClick={() => document.querySelector('[value="test"]').click()}>
                    Take a Test
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="statistics" className="space-y-6">
            {history.length > 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUpIcon className="h-5 w-5" />
                    Your Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {history.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="grid grid-cols-4 gap-4 flex-1">
                          <div>
                            <div className="font-medium">{result.wpm} WPM</div>
                            <div className="text-sm text-muted-foreground">Speed</div>
                          </div>
                          <div>
                            <div className="font-medium">{result.accuracy}%</div>
                            <div className="text-sm text-muted-foreground">Accuracy</div>
                          </div>
                          <div>
                            <div className="font-medium capitalize">{result.difficulty}</div>
                            <div className="text-sm text-muted-foreground">Difficulty</div>
                          </div>
                          <div>
                            <div className="font-medium">
                              {new Date(result.date).toLocaleDateString()}
                            </div>
                            <div className="text-sm text-muted-foreground">Date</div>
                          </div>
                        </div>
                        <Badge variant={result.accuracy >= 95 ? 'default' : 'secondary'}>
                          {getWPMRating(result.wpm).label}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <TrendingUpIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No History Yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Your typing test history will appear here
                  </p>
                  <Button onClick={() => document.querySelector('[value="test"]').click()}>
                    Take Your First Test
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* SEO Content Section */}
        <Separator className="my-12" />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Improve Your Typing Speed & Accuracy</h2>
            <p className="text-muted-foreground text-lg">
              Master keyboard skills with our comprehensive typing speed test and detailed performance analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Free Typing Speed Test Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Test your typing speed with our free online WPM test. Get instant results showing your words per minute, 
                  accuracy percentage, and detailed performance metrics. Perfect for students, professionals, and anyone 
                  looking to improve their keyboard skills.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Real-time WPM Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our advanced algorithm calculates your typing speed in real-time, providing instant feedback on your 
                  performance. Track your progress across multiple difficulty levels and time durations to identify 
                  areas for improvement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accuracy Tracking & Error Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Monitor your typing accuracy with detailed error tracking. Visual feedback highlights mistakes in 
                  real-time, helping you identify common errors and improve your typing precision over time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Multiple Test Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Choose from various test durations (30 seconds to 5 minutes) and difficulty levels. Practice with 
                  different text types to challenge yourself and develop well-rounded typing skills for any situation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Typing Speed Benchmarks */}
          <div className="bg-muted/30 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Typing Speed Benchmarks</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐌</span>
                </div>
                <h4 className="font-semibold mb-2">Beginner</h4>
                <p className="text-sm text-muted-foreground">Under 30 WPM</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚶</span>
                </div>
                <h4 className="font-semibold mb-2">Average</h4>
                <p className="text-sm text-muted-foreground">30-50 WPM</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏃</span>
                </div>
                <h4 className="font-semibold mb-2">Good</h4>
                <p className="text-sm text-muted-foreground">50-70 WPM</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold mb-2">Excellent</h4>
                <p className="text-sm text-muted-foreground">70+ WPM</p>
              </div>
            </div>
          </div>

          {/* Tips for improvement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Practice Regularly</h4>
              <p className="text-sm text-muted-foreground">
                Consistent daily practice, even for 10-15 minutes, leads to significant improvement
              </p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <TargetIcon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Focus on Accuracy</h4>
              <p className="text-sm text-muted-foreground">
                Prioritize accuracy over speed initially; speed will naturally increase with accuracy
              </p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <KeyboardIcon className="h-8 w-8 text-purple-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Proper Technique</h4>
              <p className="text-sm text-muted-foreground">
                Use all fingers, maintain good posture, and keep your wrists straight while typing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

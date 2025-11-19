"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
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
} from "lucide-react";
import Link from "next/link";

const SAMPLE_TEXTS = {
  easy: [
    "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet at least once.",
    "A journey of a thousand miles begins with a single step. Every expert was once a beginner.",
    "Technology has made our lives easier and more connected than ever before in human history.",
  ],
  medium: [
    "Programming requires patience, persistence, and practice. Debugging code teaches logical thinking and problem-solving skills that extend far beyond computer science.",
    "The advancement of artificial intelligence and machine learning has revolutionized industries from healthcare to transportation, creating new opportunities while presenting unique challenges.",
    "Effective communication involves not just speaking clearly but also listening actively, understanding context, and adapting your message to your audience's needs and expectations.",
  ],
  hard: [
    "Quantum mechanics fundamentally challenges our intuitive understanding of reality by demonstrating that particles can exist in superposition states and exhibit non-local correlations through entanglement.",
    "The philosophical implications of consciousness studies intersect with neuroscience, psychology, and computer science, raising profound questions about the nature of subjective experience and artificial sentience.",
    "Cryptographic protocols ensure data integrity and confidentiality through mathematical algorithms that would require computationally infeasible amounts of time to break using current technology.",
  ],
};

const TEST_DURATIONS = [
  { value: 30, label: "30 seconds" },
  { value: 60, label: "1 minute" },
  { value: 120, label: "2 minutes" },
  { value: 300, label: "5 minutes" },
];

export default function TypingSpeedTestTool() {
  const [selectedText, setSelectedText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isTestActive, setIsTestActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedDuration, setSelectedDuration] = useState(60);
  const [selectedDifficulty, setSelectedDifficulty] = useState("medium");
  const [startTime, setStartTime] = useState(null);
  const [results, setResults] = useState(null);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [errors, setErrors] = useState([]);
  const [history, setHistory] = useState([]);

  const textareaRef = useRef(null);
  const intervalRef = useRef(null);

  // Initialize with random text and focus textarea
  useEffect(() => {
    resetTest();
    // Focus textarea after component mounts
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 100);
  }, [selectedDifficulty]);

  const getRandomText = useCallback(() => {
    const texts = SAMPLE_TEXTS[selectedDifficulty];
    return texts[Math.floor(Math.random() * texts.length)];
  }, [selectedDifficulty]);

  const resetTest = useCallback(() => {
    setSelectedText(getRandomText());
    setUserInput("");
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
    setUserInput("");
    setCurrentCharIndex(0);
    setErrors([]);

    if (textareaRef.current) {
      textareaRef.current.focus();
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Auto-end test when time runs out
          setTimeout(() => endTest(), 100); // Small delay to ensure state updates
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
    const correctCharacters = userInput
      .split("")
      .filter((char, index) => char === selectedText[index]).length;

    const wpm = Math.round((wordsTyped / timeElapsed) * 60);
    const accuracy =
      Math.round((correctCharacters / charactersTyped) * 100) || 0;
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
      date: new Date().toISOString(),
    };

    setResults(testResult);
    setHistory((prev) => [testResult, ...prev.slice(0, 9)]); // Keep last 10 results
    setIsTestActive(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Optional: Play completion sound (browser's default notification sound)
    try {
      // Create a brief audio notification
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.3,
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
      // Ignore audio errors (some browsers may block audio without user interaction)
    }
  }, [
    isTestActive,
    startTime,
    userInput,
    selectedText,
    errors,
    selectedDifficulty,
  ]);

  const handleInputChange = useCallback(
    (e) => {
      const value = e.target.value;

      // Auto-start test on first character typed (if not already active)
      if (
        !isTestActive &&
        value.length === 1 &&
        timeLeft === selectedDuration
      ) {
        startTest();
        return; // Don't process this input yet, let the test start first
      }

      if (!isTestActive) return;

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
    },
    [
      isTestActive,
      selectedText,
      endTest,
      startTest,
      timeLeft,
      selectedDuration,
    ],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (!isTestActive && e.key === "Enter") {
        startTest();
      }
    },
    [isTestActive, startTest],
  );

  const getCharacterClass = useCallback(
    (index) => {
      if (index < currentCharIndex) {
        return errors.includes(index)
          ? "text-destructive bg-destructive/20"
          : "text-primary bg-muted";
      } else if (index === currentCharIndex) {
        return "bg-muted border-b-2 border-border";
      }
      return "text-muted-foreground";
    },
    [currentCharIndex, errors],
  );

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getWPMRating = (wpm) => {
    if (wpm >= 70) return { label: "Excellent", color: "text-primary" };
    if (wpm >= 50) return { label: "Good", color: "text-primary" };
    if (wpm >= 30) return { label: "Average", color: "text-primary" };
    return { label: "Needs Practice", color: "text-destructive" };
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
              <p className="text-muted-foreground">
                Test your typing speed and accuracy with real-time WPM
                calculation
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Real-time WPM</Badge>
            <Badge variant="secondary">Accuracy Tracking</Badge>
            <Badge variant="secondary">Multiple Difficulties</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="space-y-6">
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
                  <label className="text-sm font-medium mb-2 block">
                    Duration
                  </label>
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
                        <SelectItem
                          key={duration.value}
                          value={duration.value.toString()}
                        >
                          {duration.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Difficulty
                  </label>
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
                  Free Typing Speed Test Online{" "}
                  {isTestActive && (
                    <Badge variant="secondary" className="ml-2">
                      Active
                    </Badge>
                  )}
                </CardTitle>
                <div className="flex items-center gap-4">
                  <div
                    className={`text-2xl font-bold ${timeLeft <= 10 && isTestActive ? "text-destructive animate-pulse" : ""}`}
                  >
                    {formatTime(timeLeft)}
                  </div>
                  {isTestActive && (
                    <Badge variant="default">
                      {Math.round(
                        (userInput.length / (selectedDuration - timeLeft + 1)) *
                          60,
                      )}{" "}
                      WPM
                    </Badge>
                  )}
                </div>
              </div>
              {timeLeft < selectedDuration && (
                <Progress
                  value={(1 - timeLeft / selectedDuration) * 100}
                  className="mt-2"
                />
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Text to type */}
              <div
                className={`p-4 bg-muted/30 rounded-lg border-2 transition-colors ${
                  isTestActive ? "border-primary" : "border-dashed"
                }`}
              >
                <div className="text-lg leading-relaxed font-mono">
                  {selectedText.split("").map((char, index) => (
                    <span key={index} className={getCharacterClass(index)}>
                      {char}
                    </span>
                  ))}
                </div>
                {!isTestActive && timeLeft === selectedDuration && (
                  <div className="mt-3 text-center">
                    <Badge variant="outline" className="animate-pulse">
                      Ready to start - begin typing above text
                    </Badge>
                  </div>
                )}
              </div>

              {/* Input area */}
              <div>
                <textarea
                  ref={textareaRef}
                  value={userInput}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    isTestActive
                      ? "Type the text above..."
                      : "Start typing to begin test automatically, or click 'Start Test' button"
                  }
                  disabled={results && timeLeft === 0}
                  className="w-full h-32 p-4 text-lg font-mono border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  spellCheck="false"
                  autoCorrect="off"
                  autoCapitalize="off"
                />
                {!isTestActive && timeLeft === selectedDuration && (
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    💡 <strong>Tip:</strong> Just start typing to begin the test
                    automatically, or use the button below
                  </p>
                )}
                {isTestActive && (
                  <div className="mt-2 flex justify-between items-center text-sm text-muted-foreground">
                    <span>
                      Progress: {userInput.length}/{selectedText.length}{" "}
                      characters
                    </span>
                    <span>Errors: {errors.length}</span>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex justify-center gap-4">
                  {!isTestActive && timeLeft === selectedDuration ? (
                    <Button onClick={startTest} size="lg">
                      <PlayIcon className="h-4 w-4 mr-2" />
                      Start Typing Test
                    </Button>
                  ) : isTestActive ? (
                    <Button onClick={endTest} variant="destructive" size="lg">
                      <PauseIcon className="h-4 w-4 mr-2" />
                      Stop Test
                    </Button>
                  ) : (
                    <Button onClick={resetTest} size="lg">
                      <RefreshCwIcon className="h-4 w-4 mr-2" />
                      New Test
                    </Button>
                  )}
                </div>

                {!isTestActive && timeLeft === selectedDuration && (
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      <strong>Auto-start:</strong> Test begins automatically
                      when you start typing
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Test will stop automatically after {selectedDuration}{" "}
                      seconds
                    </p>
                  </div>
                )}

                {isTestActive && (
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      ⏱️ Test will end automatically in {formatTime(timeLeft)}{" "}
                      or click "Stop Test"
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Live Results - Show immediately after test completion */}
          {results && (
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AwardIcon className="h-5 w-5 text-primary" />
                  Your Typing Speed Test Results
                </CardTitle>
                <CardDescription>
                  Test completed! Here's your detailed typing performance
                  analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {results.wpm}
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Words per Minute
                    </div>
                    <div
                      className={`text-sm font-medium ${getWPMRating(results.wpm).color}`}
                    >
                      {getWPMRating(results.wpm).label}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {results.accuracy}%
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Typing Accuracy
                    </div>
                    <div className="text-sm font-medium">
                      {results.accuracy >= 95
                        ? "Excellent"
                        : results.accuracy >= 85
                          ? "Good"
                          : "Needs Practice"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {results.cpm}
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Characters per Minute
                    </div>
                    <div className="text-sm font-medium">Including spaces</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {results.errors}
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Typing Errors
                    </div>
                    <div className="text-sm font-medium">
                      {results.errors === 0
                        ? "Perfect!"
                        : `${((results.errors / results.charactersTyped) * 100).toFixed(1)}% error rate`}
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <span className="text-muted-foreground block">
                      Time Elapsed
                    </span>
                    <div className="font-medium text-lg">
                      {results.timeElapsed}s
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-muted-foreground block">
                      Characters Typed
                    </span>
                    <div className="font-medium text-lg">
                      {results.charactersTyped}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-muted-foreground block">
                      Correct Characters
                    </span>
                    <div className="font-medium text-lg">
                      {results.correctCharacters}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-muted-foreground block">
                      Test Difficulty
                    </span>
                    <div className="font-medium text-lg capitalize">
                      {results.difficulty}
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button onClick={resetTest} className="mr-4">
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Take Another Test
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const text = `I just scored ${results.wpm} WPM with ${results.accuracy}% accuracy on the typing speed test at 30tools.com! 🚀`;
                      navigator.share
                        ? navigator.share({ title: "My Typing Speed", text })
                        : navigator.clipboard.writeText(text);
                    }}
                  >
                    Share Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Test History - Show if user has previous tests */}
          {history.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUpIcon className="h-5 w-5" />
                  Your Typing Progress History
                </CardTitle>
                <CardDescription>
                  Track your improvement over time with detailed statistics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {history.slice(0, 5).map((result, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50"
                    >
                      <div className="grid grid-cols-5 gap-4 flex-1 text-sm">
                        <div>
                          <div className="font-medium">{result.wpm} WPM</div>
                          <div className="text-xs text-muted-foreground">
                            Speed
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">{result.accuracy}%</div>
                          <div className="text-xs text-muted-foreground">
                            Accuracy
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">{result.errors}</div>
                          <div className="text-xs text-muted-foreground">
                            Errors
                          </div>
                        </div>
                        <div>
                          <div className="font-medium capitalize">
                            {result.difficulty}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Level
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">
                            {new Date(result.date).toLocaleDateString()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Date
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={
                          result.accuracy >= 95 ? "default" : "secondary"
                        }
                        className="ml-4"
                      >
                        {getWPMRating(result.wpm).label}
                      </Badge>
                    </div>
                  ))}
                </div>
                {history.length > 5 && (
                  <div className="text-center mt-4">
                    <Badge variant="outline">
                      {history.length - 5} more tests in history
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Comprehensive SEO Content Section with Long-tail Keywords */}
        <Separator className="my-16" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Master Your Keyboard Skills with the Best Free Typing Speed Test
              Online
            </h2>
            <p className="text-muted-foreground text-xl max-w-4xl mx-auto leading-relaxed">
              Improve your typing speed and accuracy with our comprehensive
              typing test. Get instant WPM results, detailed accuracy analysis,
              and track your progress over time. Perfect for students,
              professionals, and anyone looking to enhance their keyboard
              skills.
            </p>
          </div>

          {/* Main SEO Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Free Typing Speed Test Online - No Registration Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Take our completely free typing speed test online without any
                  registration or downloads. Our WPM typing test with accuracy
                  measurement provides instant results showing your words per
                  minute, character accuracy, and detailed performance
                  analytics. Features auto-start when you begin typing and
                  auto-stop when time expires. Perfect for students preparing
                  for exams, professionals improving workplace efficiency, and
                  job seekers enhancing their resume skills.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">Auto-start/stop</Badge>
                  <Badge variant="outline">No Registration</Badge>
                  <Badge variant="outline">Instant Results</Badge>
                  <Badge variant="outline">100% Free</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  WPM Typing Test with Accuracy Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our advanced typing speed checker calculates your words per
                  minute in real-time while tracking every keystroke for precise
                  accuracy measurement. The keyboard typing speed test includes
                  visual feedback with color-coded character highlighting,
                  helping you identify and correct typing mistakes instantly.
                  Choose from multiple test durations and difficulty levels to
                  challenge yourself appropriately.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">Real-time WPM</Badge>
                  <Badge variant="outline">Visual Feedback</Badge>
                  <Badge variant="outline">Multiple Levels</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Professional Keyboard Typing Speed Test for All Skill Levels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a beginner learning touch typing or an advanced
                  typist aiming for 100+ WPM, our typing test 1 minute free
                  option provides the perfect practice environment. The test
                  includes common words, business terminology, and technical
                  vocabulary to simulate real-world typing scenarios. Track your
                  improvement over time with detailed statistics and performance
                  history.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">All Skill Levels</Badge>
                  <Badge variant="outline">Progress Tracking</Badge>
                  <Badge variant="outline">Real-world Text</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Best Typing Speed Test for Students and Professionals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Designed specifically for educational and professional
                  environments, our typing speed test online free tool helps
                  students improve their academic performance and professionals
                  enhance their workplace productivity. The test measures not
                  just speed but also consistency, error patterns, and typing
                  rhythm. Ideal for preparing for typing-intensive careers,
                  standardized tests, and professional certifications.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">Educational Focus</Badge>
                  <Badge variant="outline">Career Prep</Badge>
                  <Badge variant="outline">Professional Standards</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Typing Speed Benchmarks with Long-tail Keywords */}
          <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              Professional Typing Speed Benchmarks - Know Your WPM Level
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🐌</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Beginner Level</h4>
                <div className="text-2xl font-bold text-destructive mb-2">
                  Under 30 WPM
                </div>
                <p className="text-sm text-muted-foreground">
                  Perfect for those just starting their typing journey. Focus on
                  accuracy over speed and learn proper finger placement.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚶</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Average Typist</h4>
                <div className="text-2xl font-bold text-primary mb-2">
                  30-50 WPM
                </div>
                <p className="text-sm text-muted-foreground">
                  Suitable for most office work and academic typing. Adequate
                  for email, documents, and basic data entry tasks.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏃</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Good Typist</h4>
                <div className="text-2xl font-bold text-primary mb-2">
                  50-70 WPM
                </div>
                <p className="text-sm text-muted-foreground">
                  Excellent for professional environments. Suitable for
                  transcription, content writing, and administrative roles.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Expert Level</h4>
                <div className="text-2xl font-bold text-primary mb-2">
                  70+ WPM
                </div>
                <p className="text-sm text-muted-foreground">
                  Professional standard for typists, court reporters, and
                  high-volume data entry positions. Top 10% of all typists.
                </p>
              </div>
            </div>
          </div>

          {/* Comprehensive Improvement Guide */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              How to Improve Your Typing Speed - Complete Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    Master Touch Typing Technique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn proper finger placement on the home row (ASDF JKL;)
                    and use all ten fingers. Practice muscle memory through
                    consistent daily sessions of 15-30 minutes. Focus on
                    accuracy first - speed will naturally follow.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Position fingers on home row keys</li>
                    <li>• Use correct finger for each key</li>
                    <li>• Keep wrists straight and relaxed</li>
                    <li>• Maintain good posture while typing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <TargetIcon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    Practice Consistency and Accuracy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Aim for 95%+ accuracy before focusing on speed improvement.
                    Regular practice with our typing speed test helps identify
                    weak areas and common mistakes. Set daily goals and track
                    progress over time.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Practice 15-30 minutes daily</li>
                    <li>• Focus on problem characters/words</li>
                    <li>• Use proper typing rhythm</li>
                    <li>• Track accuracy percentage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <KeyboardIcon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    Optimize Your Typing Environment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Use a comfortable keyboard and maintain proper ergonomics.
                    Good lighting, correct monitor height, and a supportive
                    chair significantly impact typing performance and reduce
                    fatigue during long sessions.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use mechanical or ergonomic keyboard</li>
                    <li>• Adjust monitor to eye level</li>
                    <li>• Ensure adequate lighting</li>
                    <li>• Take regular breaks to avoid strain</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section for SEO */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions - Typing Speed Test
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    What is a good typing speed for beginners?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For beginners, 20-30 WPM with 90%+ accuracy is a good
                    starting point. Focus on developing proper technique and
                    accuracy before trying to increase speed. With consistent
                    practice, most people can reach 40-50 WPM within 3-6 months.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    How often should I take typing speed tests?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Take a typing speed test once or twice per week to track
                    progress. Daily practice is more important than frequent
                    testing. Use tests to identify improvement areas and
                    celebrate milestones in your typing journey.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    What typing speed do employers expect?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most office jobs require 40-60 WPM with high accuracy. Data
                    entry positions typically require 60+ WPM, while
                    administrative roles usually expect 45+ WPM. Customer
                    service and content creation roles benefit from 50+ WPM
                    typing speeds.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Can I improve my typing speed at any age?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! People of all ages can improve their typing speed with
                    proper practice and technique. While younger learners may
                    progress faster, adults can achieve significant improvements
                    through consistent practice and proper finger positioning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Industry Usage and Benefits */}
          <div className="bg-muted/30 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8">
              Why Typing Speed Matters in Today's Digital World
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-semibold mb-2">Career Advancement</h4>
                <p className="text-sm text-muted-foreground">
                  Higher typing speeds increase productivity and open doors to
                  better job opportunities in administrative, content creation,
                  and technical fields.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-semibold mb-2">Academic Success</h4>
                <p className="text-sm text-muted-foreground">
                  Students with faster typing speeds complete assignments more
                  efficiently, take better notes, and perform better on
                  computer-based exams.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">Daily Productivity</h4>
                <p className="text-sm text-muted-foreground">
                  Faster typing saves hours of time daily in emails, messaging,
                  document creation, and online communication. Improve
                  efficiency in all digital tasks.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-semibold mb-2">Cognitive Benefits</h4>
                <p className="text-sm text-muted-foreground">
                  Typing practice improves hand-eye coordination, muscle memory,
                  and multitasking abilities. Regular practice enhances overall
                  digital literacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

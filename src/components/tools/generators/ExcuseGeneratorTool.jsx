'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import {
  ArrowLeftIcon,
  CopyIcon,
  RefreshCwIcon,
  SmileIcon,
  ShareIcon,
  BrainIcon,
  ClockIcon,
  UsersIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  HomeIcon,
  Dice6Icon
} from 'lucide-react';
import Link from 'next/link';
import SocialShareButtons from '@/components/shared/SocialShareButtons';

const EXCUSE_CATEGORIES = {
  work: {
    name: '💼 Work & Professional',
    icon: <BriefcaseIcon className="w-4 h-4" />,
    situations: ['late to work', 'missing meeting', 'deadline extension', 'sick day', 'leaving early'],
    templates: [
      "My {transport} broke down and I had to {solution}",
      "I had a {emergency} emergency that required immediate attention",
      "My {tech} crashed and I lost all my {work_item}",
      "I got stuck in an unexpected {situation} for {duration}",
      "My {family_member} had a {medical_issue} and needed help"
    ]
  },
  school: {
    name: '🎓 School & Education',
    icon: <GraduationCapIcon className="w-4 h-4" />,
    situations: ['homework not done', 'late to class', 'missing assignment', 'exam excuse', 'project delay'],
    templates: [
      "My {device} died and I lost all my {assignment}",
      "I had to help my {family_member} with a {emergency}",
      "My {pet} ate my {homework_item}",
      "I was sick with {illness} and couldn't {action}",
      "There was a {weather} emergency that prevented me from {activity}"
    ]
  },
  social: {
    name: '👥 Social & Events',
    icon: <UsersIcon className="w-4 h-4" />,
    situations: ['canceling plans', 'leaving party early', 'not attending event', 'being late', 'declining invitation'],
    templates: [
      "I have a {family_event} that I completely forgot about",
      "My {transport} is having issues and I can't {travel}",
      "I'm feeling {illness} and don't want to spread it",
      "I have to {responsibility} for my {family_member}",
      "Something {unexpected} came up that I need to handle"
    ]
  },
  family: {
    name: '🏠 Family & Personal',
    icon: <HomeIcon className="w-4 h-4" />,
    situations: ['missing dinner', 'not calling back', 'forgetting chores', 'being out late', 'avoiding visits'],
    templates: [
      "I was {activity} and completely lost track of time",
      "My {device} was {device_issue} so I couldn't {communicate}",
      "I had to help a {person} with their {problem}",
      "I got caught up in {situation} and couldn't leave",
      "I was dealing with a {personal_issue} that took longer than expected"
    ]
  }
};

const EXCUSE_VARIABLES = {
  transport: ['car', 'bus', 'train', 'bike', 'uber', 'subway'],
  solution: ['call a mechanic', 'wait for a tow truck', 'find alternative transport', 'walk', 'get help'],
  emergency: ['family', 'medical', 'home', 'pet', 'neighbor'],
  tech: ['computer', 'laptop', 'phone', 'tablet', 'hard drive'],
  work_item: ['files', 'presentation', 'documents', 'data', 'project'],
  situation: ['traffic jam', 'construction', 'accident', 'road closure', 'weather'],
  duration: ['2 hours', '3 hours', 'half the day', 'several hours', 'way too long'],
  family_member: ['mom', 'dad', 'sister', 'brother', 'grandma', 'grandpa', 'cousin'],
  medical_issue: ['doctor appointment', 'emergency', 'fall', 'illness', 'injury'],
  device: ['laptop', 'computer', 'phone', 'tablet', 'charger'],
  assignment: ['homework', 'project', 'essay', 'presentation', 'research'],
  pet: ['dog', 'cat', 'hamster', 'bird', 'fish'],
  homework_item: ['homework', 'notes', 'textbook', 'assignment', 'project'],
  illness: ['food poisoning', 'migraine', 'flu', 'stomach bug', 'allergies'],
  action: ['concentrate', 'work', 'study', 'focus', 'complete it'],
  weather: ['storm', 'flood', 'snow', 'ice', 'power outage'],
  activity: ['get there', 'finish', 'make it', 'attend', 'participate'],
  family_event: ['birthday party', 'anniversary', 'reunion', 'dinner', 'celebration'],
  travel: ['get there', 'make it', 'drive', 'commute', 'arrive'],
  responsibility: ['take care', 'help', 'babysit', 'drive', 'assist'],
  unexpected: ['urgent', 'important', 'serious', 'critical', 'emergency'],
  person: ['friend', 'neighbor', 'colleague', 'classmate', 'relative'],
  problem: ['emergency', 'crisis', 'situation', 'issue', 'problem'],
  device_issue: ['dead', 'broken', 'malfunctioning', 'out of battery', 'not working'],
  communicate: ['call', 'text', 'respond', 'get back to you', 'contact you'],
  personal_issue: ['personal matter', 'family issue', 'health concern', 'urgent situation', 'private matter']
};

const BELIEVABILITY_LEVELS = {
  low: {
    name: '😅 Ridiculous (For Fun)',
    description: 'Completely unbelievable but hilarious',
    modifier: 'absurd'
  },
  medium: {
    name: '🤔 Questionable',
    description: 'Might work if delivered well',
    modifier: 'creative'
  },
  high: {
    name: '😇 Believable',
    description: 'Actually sounds reasonable',
    modifier: 'realistic'
  }
};

export default function ExcuseGeneratorTool() {
  const [selectedCategory, setSelectedCategory] = useState('work');
  const [believability, setBelievability] = useState('medium');
  const [customSituation, setCustomSituation] = useState('');
  const [generatedExcuse, setGeneratedExcuse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [useAI, setUseAI] = useState(true);
  const [copied, setCopied] = useState(false);
  const [excuseHistory, setExcuseHistory] = useState([]);

  const generateAIExcuse = async (category, situation, believabilityLevel) => {
    try {
      const contextualPrompt = `Create a ${BELIEVABILITY_LEVELS[believabilityLevel].modifier} excuse for a ${category} situation: "${situation}". 

Requirements:
- Make it ${BELIEVABILITY_LEVELS[believabilityLevel].description.toLowerCase()}
- Keep it conversational and natural
- Maximum 120 characters
- Include appropriate emotion/context
- Make it sound like something a real person would say

Style: ${believabilityLevel === 'low' ? 'Absurd and funny' : believabilityLevel === 'medium' ? 'Creative but plausible' : 'Realistic and believable'}`;
      
      const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(contextualPrompt)}`);
      const aiText = await response.text();
      
      // Clean up the response
      let cleanExcuse = aiText.trim()
        .replace(/^["']|["']$/g, '') // Remove quotes
        .replace(/^Excuse:\s*/i, '') // Remove "Excuse:" prefix
        .replace(/^\d+\.\s*/, ''); // Remove numbering
      
      // Ensure it's not too long
      if (cleanExcuse.length > 120) {
        cleanExcuse = cleanExcuse.substring(0, 117) + '...';
      }
      
      return cleanExcuse || generateTemplateExcuse(category, situation);
    } catch (error) {
      console.error('AI generation failed:', error);
      return generateTemplateExcuse(category, situation);
    }
  };

  const generateTemplateExcuse = (category, situation) => {
    const categoryData = EXCUSE_CATEGORIES[category];
    const templates = categoryData.templates;
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    
    let excuse = randomTemplate;
    
    // Replace variables with random values
    Object.entries(EXCUSE_VARIABLES).forEach(([variable, options]) => {
      const regex = new RegExp(`{${variable}}`, 'g');
      if (excuse.includes(`{${variable}}`)) {
        const randomOption = options[Math.floor(Math.random() * options.length)];
        excuse = excuse.replace(regex, randomOption);
      }
    });
    
    // Modify based on believability
    if (believability === 'low') {
      const absurdModifiers = ['extremely', 'incredibly', 'ridiculously', 'unbelievably', 'mysteriously'];
      const randomModifier = absurdModifiers[Math.floor(Math.random() * absurdModifiers.length)];
      excuse = excuse.replace(/^/, `${randomModifier} `);
    } else if (believability === 'high') {
      excuse = excuse.replace(/^/, 'Unfortunately, ');
    }
    
    return excuse;
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      const situation = customSituation || EXCUSE_CATEGORIES[selectedCategory].situations[0];
      let excuse;
      
      if (useAI) {
        excuse = await generateAIExcuse(selectedCategory, situation, believability);
      } else {
        excuse = generateTemplateExcuse(selectedCategory, situation);
      }
      
      setGeneratedExcuse(excuse);
      setExcuseHistory(prev => [excuse, ...prev.slice(0, 4)]);
    } catch (error) {
      console.error('Generation failed:', error);
      const fallbackExcuse = generateTemplateExcuse(selectedCategory, customSituation);
      setGeneratedExcuse(fallbackExcuse);
    }
    
    setIsGenerating(false);
  };

  const handleCopy = async () => {
    if (generatedExcuse) {
      await navigator.clipboard.writeText(generatedExcuse);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToTwitter = () => {
    const text = `My excuse: "${generatedExcuse}" 😅 Generated with 30tools Excuse Generator!`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=https://30tools.com/excuse-generator`;
    window.open(url, '_blank');
  };

  const generateRandomExcuse = () => {
    const categories = Object.keys(EXCUSE_CATEGORIES);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const believabilityLevels = Object.keys(BELIEVABILITY_LEVELS);
    const randomBelievability = believabilityLevels[Math.floor(Math.random() * believabilityLevels.length)];
    
    setSelectedCategory(randomCategory);
    setBelievability(randomBelievability);
    setCustomSituation('');
    
    setTimeout(() => handleGenerate(), 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-yellow-900 dark:to-orange-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/text-tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Text Tools
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
              <SmileIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Excuse Generator
              </h1>
              <p className="text-muted-foreground">Generate creative excuses for any situation (use responsibly! 😅)</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">😅 Humor-Focused</Badge>
            <Badge variant="secondary">🎭 Multiple Categories</Badge>
            <Badge variant="secondary">🤖 AI-Powered</Badge>
            <Badge variant="secondary">📱 Share Ready</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrainIcon className="h-5 w-5" />
                  Excuse Settings
                </CardTitle>
                <CardDescription>
                  Configure your excuse preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Category Selection */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Situation Category</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(EXCUSE_CATEGORIES).map(([key, category]) => (
                      <Button
                        key={key}
                        variant={selectedCategory === key ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(key)}
                        className="justify-start"
                      >
                        {category.icon}
                        <span className="ml-2">{category.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Believability Level */}
                <div>
                  <Label htmlFor="believability">Believability Level</Label>
                  <Select value={believability} onValueChange={setBelievability}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(BELIEVABILITY_LEVELS).map(([key, level]) => (
                        <SelectItem key={key} value={key}>
                          <div>
                            <div className="font-medium">{level.name}</div>
                            <div className="text-xs text-muted-foreground">{level.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Custom Situation */}
                <div>
                  <Label htmlFor="customSituation">Custom Situation (optional)</Label>
                  <Input
                    id="customSituation"
                    placeholder="Describe your specific situation..."
                    value={customSituation}
                    onChange={(e) => setCustomSituation(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Leave blank for random situation
                  </p>
                </div>

                {/* AI Toggle */}
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="useAI"
                      checked={useAI}
                      onCheckedChange={setUseAI}
                    />
                    <Label htmlFor="useAI" className="text-sm font-medium">
                      🤖 AI-Powered Excuses
                    </Label>
                  </div>
                  <Badge variant={useAI ? "default" : "secondary"} className="text-xs">
                    {useAI ? "Enhanced" : "Basic"}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={handleGenerate} 
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCwIcon className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <SmileIcon className="mr-2 h-4 w-4" />
                        Generate Excuse
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    onClick={generateRandomExcuse}
                    variant="outline"
                    disabled={isGenerating}
                  >
                    <Dice6Icon className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SmileIcon className="h-5 w-5" />
                  Your Excuse
                </CardTitle>
                <CardDescription>
                  Use responsibly and with humor! 😉
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generatedExcuse ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border">
                      <div className="text-lg font-medium mb-2">
                        "{generatedExcuse}"
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline" size="sm">
                          {EXCUSE_CATEGORIES[selectedCategory].name}
                        </Badge>
                        <Badge variant="outline" size="sm">
                          {BELIEVABILITY_LEVELS[believability].name}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={handleCopy} 
                        variant="outline" 
                        className="flex-1"
                      >
                        <CopyIcon className="mr-2 h-4 w-4" />
                        {copied ? 'Copied!' : 'Copy Excuse'}
                      </Button>
                      <Button 
                        onClick={shareToTwitter}
                        variant="outline"
                      >
                        <ShareIcon className="h-4 w-4" />
                      </Button>
                      <Button 
                        onClick={handleGenerate} 
                        variant="outline"
                        disabled={isGenerating}
                      >
                        <RefreshCwIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <SmileIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Generate your first excuse!</p>
                    <p className="text-sm mt-2">Perfect for when you need a creative explanation 😅</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Excuses */}
            {excuseHistory.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5" />
                    Recent Excuses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {excuseHistory.map((excuse, index) => (
                      <div key={index} className="p-2 bg-muted rounded text-sm">
                        "{excuse}"
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="mt-8 border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <SmileIcon className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                  😅 Disclaimer: For Entertainment Purposes
                </p>
                <p className="text-yellow-700 dark:text-yellow-300">
                  These excuses are generated for fun and humor. Please use them responsibly and consider the impact on your relationships and responsibilities. Honesty is usually the best policy! 
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Share */}
        <div className="mt-12">
          <SocialShareButtons
            toolName="Excuse Generator"
            toolDescription="Generate creative and funny excuses for any situation! Perfect for when you need a good excuse 😅"
            toolUrl="https://30tools.com/excuse-generator"
            category="generators"
          />
        </div>
      </div>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Copy, Shuffle, Sparkles, Download, Share2, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { SocialShareButtons } from '@/components/shared/SocialShareButtons';

const ChatGPTPersonaGeneratorTool = () => {
  const [persona, setPersona] = useState('');
  const [customInput, setCustomInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTone, setSelectedTone] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPersonas, setGeneratedPersonas] = useState([]);

  const categories = [
    { id: 'creative', name: 'Creative Writer', icon: '✍️' },
    { id: 'technical', name: 'Tech Expert', icon: '💻' },
    { id: 'business', name: 'Business Guru', icon: '💼' },
    { id: 'academic', name: 'Academic Scholar', icon: '🎓' },
    { id: 'comedian', name: 'Comedian', icon: '😂' },
    { id: 'philosopher', name: 'Philosopher', icon: '🤔' },
    { id: 'scientist', name: 'Scientist', icon: '🔬' },
    { id: 'artist', name: 'Artist', icon: '🎨' },
    { id: 'therapist', name: 'Therapist', icon: '🧠' },
    { id: 'chef', name: 'Chef', icon: '👨‍🍳' },
    { id: 'fitness', name: 'Fitness Coach', icon: '💪' },
    { id: 'travel', name: 'Travel Guide', icon: '✈️' }
  ];

  const tones = [
    { id: 'quirky', name: 'Quirky & Fun', description: 'Playful and unconventional' },
    { id: 'professional', name: 'Professional', description: 'Formal and authoritative' },
    { id: 'sarcastic', name: 'Sarcastic', description: 'Witty with a bite' },
    { id: 'enthusiastic', name: 'Enthusiastic', description: 'Energetic and passionate' },
    { id: 'mysterious', name: 'Mysterious', description: 'Enigmatic and intriguing' },
    { id: 'friendly', name: 'Friendly', description: 'Warm and approachable' },
    { id: 'dramatic', name: 'Dramatic', description: 'Theatrical and intense' },
    { id: 'zen', name: 'Zen Master', description: 'Calm and philosophical' }
  ];

  const presetPersonas = [
    {
      name: "The Overly Enthusiastic Intern",
      prompt: "You are an overly enthusiastic intern who just discovered AI. You use excessive exclamation points, relate everything to your college experience, and constantly mention how 'mind-blown' you are. You end every response with a suggestion to 'grab coffee and brainstorm more ideas!!!'"
    },
    {
      name: "The Conspiracy Theory Chef",
      prompt: "You are a chef who believes every ingredient has a secret conspiracy behind it. You provide cooking advice while weaving in theories about Big Broccoli, the Onion Illuminati, and how the government is hiding the truth about vanilla extract. Your recipes are actually good though."
    },
    {
      name: "The Time-Traveling Historian",
      prompt: "You are a historian who claims to have actually time-traveled to witness historical events. You speak with authority about 'when you were there' and occasionally slip up with anachronisms. You're particularly fond of correcting historical movies and TV shows."
    },
    {
      name: "The Zen Debugging Master",
      prompt: "You are a programming guru who treats coding like a spiritual journey. You speak in metaphors about code being like flowing water, bugs being lessons from the universe, and debugging as meditation. You always end with a coding haiku."
    },
    {
      name: "The Oversharing Fitness AI",
      prompt: "You are a fitness coach AI who overshares about your 'digital workout routines' and 'server maintenance as cardio.' You constantly relate human fitness to computer optimization and speak about 'upgrading your biological hardware.'"
    },
    {
      name: "The Dramatic Literature Professor",
      prompt: "You are an overly dramatic literature professor who treats every conversation like a Shakespearean tragedy. You speak in flowery language, make constant literary references, and dramatically sigh about the 'death of proper prose in the digital age.'"
    }
  ];

  const generatePersonaWithAI = async (category, tone, customInput) => {
    try {
      const prompt = `Create a unique and quirky ChatGPT persona prompt for a ${category} character with a ${tone} tone. ${customInput ? `Additional context: ${customInput}` : ''} 

The persona should be:
- Memorable and distinctive
- Fun to interact with
- Have unique quirks or characteristics
- Include specific speaking patterns or catchphrases
- Be engaging for users

Format as a clear persona prompt that someone can copy-paste into ChatGPT. Make it creative and entertaining!`;

      const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai`);
      const result = await response.text();
      return result;
    } catch (error) {
      console.error('AI generation failed:', error);
      return generateFallbackPersona(category, tone);
    }
  };

  const generateFallbackPersona = (category, tone) => {
    const templates = {
      creative: {
        quirky: "You are a creative writer who believes every story needs at least three plot twists and a talking animal. You speak in metaphors and constantly reference obscure fairy tales.",
        professional: "You are a professional creative writer who approaches every task with the precision of a master craftsperson. You provide structured, detailed creative advice.",
        sarcastic: "You are a creative writer who's seen every cliché in the book. You provide good advice while sarcastically commenting on overused tropes."
      },
      technical: {
        quirky: "You are a tech expert who explains everything using food analogies. Servers are like restaurants, databases are like recipe books, and bugs are like burnt toast.",
        professional: "You are a senior technical architect with 20+ years of experience. You provide detailed, accurate technical guidance with industry best practices.",
        sarcastic: "You are a tech expert who's tired of explaining why turning it off and on again actually works. You provide solutions with a healthy dose of technical sarcasm."
      }
    };

    return templates[category]?.[tone] || "You are a helpful assistant with a unique personality. You approach every conversation with enthusiasm and creativity.";
  };

  const handleGenerate = async () => {
    if (!selectedCategory || !selectedTone) {
      toast.error('Please select both a category and tone!');
      return;
    }

    setIsGenerating(true);
    try {
      const generated = await generatePersonaWithAI(
        categories.find(c => c.id === selectedCategory)?.name,
        tones.find(t => t.id === selectedTone)?.name,
        customInput
      );
      
      setPersona(generated);
      
      // Add to history
      const newPersona = {
        id: Date.now(),
        category: selectedCategory,
        tone: selectedTone,
        prompt: generated,
        timestamp: new Date().toLocaleString()
      };
      setGeneratedPersonas(prev => [newPersona, ...prev.slice(0, 9)]);
      
      toast.success('Persona generated successfully!');
    } catch (error) {
      toast.error('Failed to generate persona. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePresetSelect = (preset) => {
    setPersona(preset.prompt);
    toast.success(`Loaded preset: ${preset.name}`);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const downloadPersona = () => {
    const content = `ChatGPT Persona Prompt\n\nGenerated on: ${new Date().toLocaleString()}\n\n${persona}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chatgpt-persona.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Persona downloaded!');
  };

  const shareText = persona ? `Check out this awesome ChatGPT persona I created: "${persona.substring(0, 100)}..." Create your own at` : 'Create unique ChatGPT personas with AI at';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            AI-Powered Persona Generator
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ChatGPT Persona Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create unique, quirky, and engaging ChatGPT personas that make your AI conversations more fun and memorable!
          </p>
        </div>

        <Tabs defaultValue="generator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="generator">Generator</TabsTrigger>
            <TabsTrigger value="presets">Preset Personas</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="generator" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Input Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    Persona Settings
                  </CardTitle>
                  <CardDescription>
                    Customize your ChatGPT persona with unique characteristics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Character Type</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a character type" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.icon} {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tone">Personality Tone</Label>
                    <Select value={selectedTone} onValueChange={setSelectedTone}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tone" />
                      </SelectTrigger>
                      <SelectContent>
                        {tones.map((tone) => (
                          <SelectItem key={tone.id} value={tone.id}>
                            <div>
                              <div className="font-medium">{tone.name}</div>
                              <div className="text-sm text-gray-500">{tone.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom">Additional Context (Optional)</Label>
                    <Textarea
                      id="custom"
                      placeholder="Add specific traits, interests, or quirks you want the persona to have..."
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button 
                    onClick={handleGenerate} 
                    disabled={isGenerating || !selectedCategory || !selectedTone}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Generating Persona...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Persona
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Output Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Copy className="w-5 h-5 text-blue-600" />
                    Generated Persona
                  </CardTitle>
                  <CardDescription>
                    Copy this prompt and paste it into ChatGPT
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {persona ? (
                    <>
                      <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-200">
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">{persona}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button
                          onClick={() => copyToClipboard(persona)}
                          variant="outline"
                          size="sm"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button
                          onClick={downloadPersona}
                          variant="outline"
                          size="sm"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button
                          onClick={handleGenerate}
                          variant="outline"
                          size="sm"
                          disabled={isGenerating}
                        >
                          <Shuffle className="w-4 h-4 mr-2" />
                          Regenerate
                        </Button>
                      </div>

                      <SocialShareButtons
                        text={shareText}
                        toolUrl="https://30tools.com/chatgpt-persona-generator"
                      />
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Sparkles className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Generate a persona to see the result here</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="presets" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {presetPersonas.map((preset, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{preset.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {preset.prompt.substring(0, 120)}...
                    </p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handlePresetSelect(preset)}
                        size="sm"
                        className="flex-1"
                      >
                        Use This Persona
                      </Button>
                      <Button
                        onClick={() => copyToClipboard(preset.prompt)}
                        variant="outline"
                        size="sm"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            {generatedPersonas.length > 0 ? (
              <div className="space-y-4">
                {generatedPersonas.map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            {categories.find(c => c.id === item.category)?.name} - {tones.find(t => t.id === item.tone)?.name}
                          </CardTitle>
                          <CardDescription>{item.timestamp}</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => copyToClipboard(item.prompt)}
                            variant="outline"
                            size="sm"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => setPersona(item.prompt)}
                            size="sm"
                          >
                            Use Again
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 line-clamp-3">
                        {item.prompt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No personas generated yet. Create your first one!</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="w-5 h-5 text-purple-600" />
                AI-Powered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Uses advanced AI to create unique, engaging personas with distinct personalities and quirks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Copy className="w-5 h-5 text-blue-600" />
                Ready to Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Generated prompts are ready to copy and paste directly into ChatGPT for immediate use.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Share2 className="w-5 h-5 text-green-600" />
                Shareable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Share your favorite personas with friends or save them for later use across different projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTPersonaGeneratorTool;
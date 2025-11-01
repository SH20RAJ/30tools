'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  RefreshCwIcon, 
  ImageIcon, 
  DownloadIcon, 
  CopyIcon, 
  HeartIcon,
  TrashIcon,
  SparklesTool,
  Palette,
  History,
  Settings
} from 'lucide-react';
import { toast } from 'sonner';

export default function AIImageGeneratorTool() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('generator');
  
  // Advanced settings
  const [style, setStyle] = useState('photorealistic');
  const [size, setSize] = useState('1024x1024');
  const [seed, setSeed] = useState('');

  const styles = [
    { value: 'photorealistic', label: 'Photorealistic', description: 'Highly detailed, camera-like images' },
    { value: 'digital-art', label: 'Digital Art', description: 'Modern digital illustration style' },
    { value: 'oil-painting', label: 'Oil Painting', description: 'Classic artistic painting technique' },
    { value: 'watercolor', label: 'Watercolor', description: 'Soft, flowing watercolor style' },
    { value: 'cartoon', label: 'Cartoon', description: 'Stylized cartoon artwork' },
    { value: 'anime', label: 'Anime', description: 'Japanese animation style' },
    { value: 'cyberpunk', label: 'Cyberpunk', description: 'Futuristic neon aesthetic' },
    { value: 'fantasy', label: 'Fantasy', description: 'Magical and mystical themes' }
  ];

  const sizes = [
    { value: '512x512', label: 'Square (512x512)' },
    { value: '1024x1024', label: 'Large Square (1024x1024)' },
    { value: '1024x768', label: 'Landscape (1024x768)' },
    { value: '768x1024', label: 'Portrait (768x1024)' },
    { value: '1920x1080', label: 'HD Wallpaper (1920x1080)' }
  ];

  const examplePrompts = [
    "A majestic dragon flying over a medieval castle at sunset",
    "Futuristic city with flying cars and neon lights",
    "Peaceful zen garden with cherry blossoms and koi pond",
    "Abstract cosmic landscape with swirling nebulas",
    "Cute robot dog playing in a field of flowers",
    "Victorian steampunk inventor's workshop with gears and gadgets",
    "Underwater coral reef city with mermaids and sea creatures",
    "Post-apocalyptic wasteland with overgrown ruins"
  ];

  // Load history and favorites from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('ai-image-history');
    const savedFavorites = localStorage.getItem('ai-image-favorites');
    
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const saveToHistory = (imageData) => {
    const newHistory = [imageData, ...history.slice(0, 49)]; // Keep last 50 images
    setHistory(newHistory);
    localStorage.setItem('ai-image-history', JSON.stringify(newHistory));
  };

  const addToFavorites = (imageData) => {
    if (favorites.find(fav => fav.url === imageData.url)) {
      toast.info('Already in favorites');
      return;
    }
    
    const newFavorites = [imageData, ...favorites];
    setFavorites(newFavorites);
    localStorage.setItem('ai-image-favorites', JSON.stringify(newFavorites));
    toast.success('Added to favorites');
  };

  const removeFromFavorites = (url) => {
    const newFavorites = favorites.filter(fav => fav.url !== url);
    setFavorites(newFavorites);
    localStorage.setItem('ai-image-favorites', JSON.stringify(newFavorites));
    toast.success('Removed from favorites');
  };

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear all history?')) {
      setHistory([]);
      localStorage.removeItem('ai-image-history');
      toast.success('History cleared');
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a description');
      return;
    }

    setLoading(true);
    setError('');
    setImageUrl('');
    
    try {
      // Build style-enhanced prompt
      const stylePrefix = {
        'photorealistic': 'photorealistic, highly detailed, professional photography',
        'digital-art': 'digital art, illustration, artstation trending',
        'oil-painting': 'oil painting, classical art style, brushstrokes',
        'watercolor': 'watercolor painting, soft colors, flowing',
        'cartoon': 'cartoon style, colorful, animated',
        'anime': 'anime style, manga art, japanese animation',
        'cyberpunk': 'cyberpunk style, neon lights, futuristic',
        'fantasy': 'fantasy art, magical, mystical atmosphere'
      };

      const enhancedPrompt = `${stylePrefix[style]}, ${prompt}`;
      let url = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}`;
      
      // Add size parameter
      url += `?width=${size.split('x')[0]}&height=${size.split('x')[1]}`;
      
      // Add seed if provided
      if (seed) {
        url += `&seed=${seed}`;
      }

      setImageUrl(url);
      
      // Save to history
      const imageData = {
        id: Date.now(),
        url,
        prompt: prompt.trim(),
        style,
        size,
        seed,
        timestamp: new Date().toISOString()
      };
      saveToHistory(imageData);
      
      toast.success('Image generated successfully!');
    } catch (e) {
      setError('Failed to generate image. Please try again.');
      toast.error('Generation failed');
    }
    setLoading(false);
  };

  const handleCopy = async () => {
    if (imageUrl) {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('Image URL copied to clipboard');
    }
  };

  const handleDownload = async () => {
    if (!imageUrl) return;
    
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ai-generated-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success('Image downloaded');
    } catch (error) {
      toast.error('Download failed');
    }
  };

  const loadPrompt = (selectedPrompt) => {
    setPrompt(selectedPrompt);
  };

  const loadFromHistory = (item) => {
    setPrompt(item.prompt);
    setStyle(item.style);
    setSize(item.size);
    setSeed(item.seed || '');
    setImageUrl(item.url);
    setActiveTab('generator');
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 p-1 bg-muted rounded-lg">
        <Button
          variant={activeTab === 'generator' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('generator')}
          className="flex-1 min-w-0"
        >
          <SparklesTool className="w-4 h-4 mr-2" />
          Generator
        </Button>
        <Button
          variant={activeTab === 'history' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('history')}
          className="flex-1 min-w-0"
        >
          <History className="w-4 h-4 mr-2" />
          History ({history.length})
        </Button>
        <Button
          variant={activeTab === 'favorites' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('favorites')}
          className="flex-1 min-w-0"
        >
          <HeartIcon className="w-4 h-4 mr-2" />
          Favorites ({favorites.length})
        </Button>
      </div>

      {activeTab === 'generator' && (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-purple-500" />
                  Image Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="prompt">Describe your image</Label>
                  <Textarea
                    id="prompt"
                    placeholder="A majestic lion in golden sunset light..."
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                    disabled={loading}
                    className="min-h-[100px] mt-1"
                  />
                </div>

                <div>
                  <Label>Art Style</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {styles.map(styleOption => (
                        <SelectItem key={styleOption.value} value={styleOption.value}>
                          <div>
                            <div className="font-medium">{styleOption.label}</div>
                            <div className="text-xs text-muted-foreground">{styleOption.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Image Size</Label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sizes.map(sizeOption => (
                        <SelectItem key={sizeOption.value} value={sizeOption.value}>
                          {sizeOption.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="seed">Seed (optional)</Label>
                  <Input
                    id="seed"
                    placeholder="Random number for reproducible results"
                    value={seed}
                    onChange={e => setSeed(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button 
                  onClick={handleGenerate} 
                  disabled={loading || !prompt.trim()} 
                  className="w-full bg-purple-500 hover:bg-purple-600"
                >
                  {loading ? (
                    <RefreshCwIcon className="animate-spin h-4 w-4 mr-2" />
                  ) : (
                    <ImageIcon className="h-4 w-4 mr-2" />
                  )}
                  {loading ? 'Generating...' : 'Generate Image'}
                </Button>

                {error && (
                  <div className="text-red-500 text-sm p-3 bg-red-50 rounded border border-red-200">
                    {error}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Example Prompts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Example Prompts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {examplePrompts.slice(0, 4).map((example, index) => (
                    <button
                      key={index}
                      onClick={() => loadPrompt(example)}
                      className="w-full text-left p-2 text-sm bg-muted hover:bg-muted/80 rounded border transition-colors"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Generated Image */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-purple-500" />
                  Generated Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                {imageUrl ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <img 
                        src={imageUrl} 
                        alt="AI generated" 
                        className="w-full rounded-lg border shadow-lg max-h-[500px] object-contain bg-muted" 
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button onClick={handleDownload} variant="outline">
                        <DownloadIcon className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button onClick={handleCopy} variant="outline">
                        <CopyIcon className="h-4 w-4 mr-2" />
                        {copied ? 'Copied!' : 'Copy Link'}
                      </Button>
                      <Button 
                        onClick={() => addToFavorites({ 
                          id: Date.now(), 
                          url: imageUrl, 
                          prompt, 
                          style, 
                          size, 
                          seed,
                          timestamp: new Date().toISOString() 
                        })} 
                        variant="outline"
                      >
                        <HeartIcon className="h-4 w-4 mr-2" />
                        Add to Favorites
                      </Button>
                    </div>

                    <div className="bg-muted/50 p-3 rounded">
                      <p className="text-sm font-medium mb-1">Prompt:</p>
                      <p className="text-sm text-muted-foreground">{prompt}</p>
                      <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                        <span>Style: {styles.find(s => s.value === style)?.label}</span>
                        <span>Size: {size}</span>
                        {seed && <span>Seed: {seed}</span>}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-20 text-muted-foreground">
                    <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg mb-2">Your AI-generated image will appear here</p>
                    <p className="text-sm">Enter a description and click "Generate Image" to get started</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5 text-blue-500" />
                Generation History
              </CardTitle>
              {history.length > 0 && (
                <Button onClick={clearHistory} variant="outline" size="sm">
                  <TrashIcon className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {history.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <History className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No images generated yet</p>
                <p className="text-sm">Your generated images will appear here</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {history.map((item) => (
                  <div key={item.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                    <img 
                      src={item.url} 
                      alt={item.prompt}
                      className="w-full h-40 object-cover rounded mb-3 cursor-pointer"
                      onClick={() => loadFromHistory(item)}
                    />
                    <p className="text-sm font-medium mb-1 line-clamp-2">{item.prompt}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                      <Badge variant="outline" className="text-xs">{item.style}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {activeTab === 'favorites' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeartIcon className="h-5 w-5 text-red-500" />
              Favorite Images
            </CardTitle>
          </CardHeader>
          <CardContent>
            {favorites.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <HeartIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No favorites yet</p>
                <p className="text-sm">Heart images to save them here</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((item) => (
                  <div key={item.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img 
                        src={item.url} 
                        alt={item.prompt}
                        className="w-full h-40 object-cover rounded mb-3 cursor-pointer"
                        onClick={() => loadFromHistory(item)}
                      />
                      <Button
                        onClick={() => removeFromFavorites(item.url)}
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2 w-8 h-8 p-0 bg-white/90"
                      >
                        <TrashIcon className="w-3 h-3" />
                      </Button>
                    </div>
                    <p className="text-sm font-medium mb-1 line-clamp-2">{item.prompt}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                      <Badge variant="outline" className="text-xs">{item.style}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
} 
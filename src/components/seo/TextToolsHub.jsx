'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Type, 
  FileText, 
  Hash, 
  AlignLeft,
  Search,
  Copy,
  Shield,
  Clock,
  Star,
  Users,
  TrendingUp,
  Zap,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Edit3,
  RotateCcw,
  Shuffle,
  Eye,
  Filter
} from 'lucide-react';
import Link from 'next/link';

// Text tool icons mapping
const TOOL_ICONS = {
  'word-counter': FileText,
  'character-counter': Type,
  'password-generator': Shield,
  'text-case-converter': RotateCcw,
  'lorem-ipsum-generator': BookOpen,
  'text-diff': Eye,
  'text-formatter': Edit3,
  'duplicate-line-remover': Filter,
  'text-encoder': Hash,
  'binary-converter': Hash
};

// Tool statistics (would come from analytics in real app)
const TOOL_STATS = {
  'word-counter': { users: '89K', usage: '+34%', rating: 4.9 },
  'character-counter': { users: '76K', usage: '+28%', rating: 4.8 },
  'password-generator': { users: '156K', usage: '+45%', rating: 4.9 },
  'text-case-converter': { users: '45K', usage: '+19%', rating: 4.7 },
  'lorem-ipsum-generator': { users: '38K', usage: '+22%', rating: 4.6 },
  'text-diff': { users: '29K', usage: '+15%', rating: 4.8 },
  'text-formatter': { users: '34K', usage: '+18%', rating: 4.7 },
  'duplicate-line-remover': { users: '52K', usage: '+31%', rating: 4.8 }
};

export default function TextToolsHub({ tools = [], faqs = [], tutorials = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tools', icon: Type },
    { id: 'counter', name: 'Counters', icon: FileText },
    { id: 'generator', name: 'Generators', icon: Shuffle },
    { id: 'converter', name: 'Converters', icon: RotateCcw },
    { id: 'formatter', name: 'Formatters', icon: Edit3 }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularTools = tools.filter(tool => tool.popular).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/20 to-background dark:via-blue-950/10">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Type className="h-4 w-4" />
            Professional Text Processing Tools
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Free Text Tools
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional text tools for writers, students & developers. Word counter, character counter, 
            password generator, text formatter & more. Free, fast, secure - no signup required.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: Zap, title: 'Instant Results', desc: 'Real-time processing' },
              { icon: Shield, title: 'Privacy First', desc: 'Local processing only' },
              { icon: Users, title: '200K+ Writers', desc: 'Trusted by professionals' },
              { icon: CheckCircle2, title: 'Always Free', desc: 'No limits or registration' }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search text tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg border-blue-200 focus:border-blue-400"
            />
          </div>
        </div>
      </section>

      {/* Popular Tools Showcase */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Most Popular Text Tools</h2>
            <p className="text-muted-foreground">The essential tools for writers, students, and professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool, index) => {
              const Icon = TOOL_ICONS[tool.id] || Type;
              const stats = TOOL_STATS[tool.id] || { users: '0', usage: '0%', rating: 4.0 };
              
              return (
                <Card key={tool.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg group-hover:scale-110 transition-transform">
                          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                          #{index + 1} Popular
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{stats.rating}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {tool.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{stats.users} users</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        <span>{stats.usage} this week</span>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600" size="sm">
                      <Link href={tool.route}>
                        Use Tool
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
                      : 'border-blue-200 hover:border-blue-400'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool) => {
              const Icon = TOOL_ICONS[tool.id] || Type;
              const stats = TOOL_STATS[tool.id];
              
              return (
                <Card key={tool.id} className="group hover:shadow-lg transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      {tool.popular && (
                        <Badge variant="secondary" className="text-xs bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-300">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {tool.description}
                    </p>
                    
                    {stats && (
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span>{stats.users} users</span>
                        <span>{stats.rating} ⭐</span>
                      </div>
                    )}

                    <Button asChild className="w-full" size="sm" variant="outline">
                      <Link href={tool.route}>
                        Open Tool
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <Type className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No tools found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Text Tools Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Text Tools</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Professional-grade text processing tools designed for writers, students, developers, and content creators. 
              Trusted by 200,000+ users worldwide for reliable, fast, and secure text processing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Privacy Focused',
                description: 'All text processing happens locally in your browser. Your data never leaves your device.',
                icon: '🔒'
              },
              {
                title: 'Lightning Fast',
                description: 'Real-time processing with instant results. No waiting, no delays, no server uploads.',
                icon: '⚡'
              },
              {
                title: 'Professional Grade',
                description: 'Accurate algorithms used by writers, students, and professionals worldwide.',
                icon: '💼'
              },
              {
                title: 'Always Available',
                description: 'Works offline once loaded. No internet required for most text processing tasks.',
                icon: '🌐'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Statistics */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600/5 to-indigo-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Trusted by Writers & Professionals Worldwide</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '200K+', label: 'Active Users', icon: Users },
              { value: '5M+', label: 'Text Processed', icon: FileText },
              { value: '120+', label: 'Countries', icon: TrendingUp },
              { value: '99.9%', label: 'Uptime', icon: Clock }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// Specialized component for text tool features showcase
export function TextToolFeatures({ tool, features = [] }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-blue-500" />
          Key Features
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2" />
              <div>
                <h4 className="font-medium text-sm">{feature.title || feature}</h4>
                {feature.description && (
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Text tool usage examples component
export function TextToolExamples({ tool, examples = [] }) {
  const [activeExample, setActiveExample] = useState(0);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-500" />
          Usage Examples
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {examples.map((example, index) => (
              <Button
                key={index}
                variant={activeExample === index ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveExample(index)}
                className={activeExample === index ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : ''}
              >
                {example.title}
              </Button>
            ))}
          </div>
          
          {examples[activeExample] && (
            <div className="space-y-3">
              <h4 className="font-medium">{examples[activeExample].title}</h4>
              <p className="text-sm text-muted-foreground">
                {examples[activeExample].description}
              </p>
              
              {examples[activeExample].input && (
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Input:</label>
                  <div className="mt-1 p-3 bg-muted rounded-lg font-mono text-sm">
                    {examples[activeExample].input}
                  </div>
                </div>
              )}
              
              {examples[activeExample].output && (
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Output:</label>
                  <div className="mt-1 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg text-sm">
                    {examples[activeExample].output}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
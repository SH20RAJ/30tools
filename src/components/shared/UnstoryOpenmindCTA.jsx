'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  MessageCircle, 
  Users, 
  Shield, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  PenTool,
  Globe,
  Star,
  Coffee,
  Moon,
  Sun
} from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';

const features = [
  {
    icon: Shield,
    title: "Safe Space",
    description: "Share without judgment in our secure environment"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with like-minded individuals on similar journeys"
  },
  {
    icon: Heart,
    title: "Authentic Stories",
    description: "Real experiences, genuine connections, meaningful growth"
  },
  {
    icon: BookOpen,
    title: "Personal Growth",
    description: "Learn from others' experiences and share your wisdom"
  }
];

const testimonials = [
  {
    text: "This platform changed how I view vulnerability. It's okay to not be okay.",
    author: "Anonymous Student",
    emotion: "grateful"
  },
  {
    text: "Finally found a space where my story matters. Thank you for creating this.",
    author: "Community Member",
    emotion: "hopeful"
  }
];

const communityStats = [
  { label: "Active Members", value: "2.5K+", icon: Users },
  { label: "Stories Shared", value: "850+", icon: BookOpen },
  { label: "Support Given", value: "3.2K+", icon: Heart },
  { label: "Growth Together", value: "∞", icon: Sparkles }
];

export default function UnstoryOpenmindCTA() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-12 max-w-6xl mx-auto px-4">
      <Card 
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 border-0 shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-700/10 dark:to-purple-700/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-200/20 to-purple-200/20 dark:from-pink-700/10 dark:to-purple-700/10 rounded-full blur-3xl" />
          {/* Floating Elements */}
          <div className={`absolute transition-all duration-1000 ${isHovered ? 'translate-y-2 scale-110' : 'translate-y-0'}`}>
            <Heart className="absolute top-20 left-20 w-6 h-6 text-pink-300/40 dark:text-pink-400/30" />
            <Star className="absolute top-32 right-32 w-4 h-4 text-yellow-300/40 dark:text-yellow-400/30" />
            <Sparkles className="absolute bottom-24 left-32 w-5 h-5 text-purple-300/40 dark:text-purple-400/30" />
            <Coffee className="absolute bottom-32 right-24 w-5 h-5 text-orange-300/40 dark:text-orange-400/30" />
          </div>
        </div>

        <CardContent className="relative p-8 md:p-12">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <Badge 
              variant="secondary" 
              className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 border-0"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Find Your Calm & Share Your Story
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Join Unstory Openmind
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A safe space for authentic conversations and personal growth. 
              <span className="font-medium text-foreground"> Share your story, judgment-free.</span>
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {communityStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-4 rounded-xl bg-white/30 dark:bg-gray-800/20 backdrop-blur-sm">
                  <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Testimonial Carousel */}
          <div className="mb-8 p-6 rounded-2xl bg-white/40 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/20">
            <div className="text-center min-h-[100px] flex flex-col justify-center">
              <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <blockquote className="text-lg italic text-foreground mb-3 transition-all duration-500">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <cite className="text-sm text-muted-foreground">
                — {testimonials[currentTestimonial].author}
              </cite>
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-500 w-6' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Instagram Embed */}
          <div className="mb-8">
            <InstagramEmbed />
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px] group"
              >
                <a 
                  href="https://unstory.live" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Explore Openmind
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 min-w-[200px] group"
              >
                <PenTool className="w-5 h-5 mr-2" />
                Start Writing
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
              Join thousands sharing their authentic stories in a supportive community
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center mt-6 space-x-6 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-1 text-green-500" />
              Safe & Secure
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1 text-blue-500" />
              Active Community
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1 text-pink-500" />
              Judgment-Free
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
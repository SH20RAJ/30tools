'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Shield, 
  ArrowRight,
  Globe,
  Sparkles
} from 'lucide-react';

export default function UnstoryOpenmindCTACompact() {
  return (
    <div className="my-8">
      <Card className="relative overflow-hidden bg-muted/20 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 border-0 shadow-lg">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-700/10 dark:to-purple-700/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-pink-200/20 to-purple-200/20 dark:from-pink-700/10 dark:to-purple-700/10 rounded-full blur-2xl" />
        </div>

        <CardContent className="relative p-6 text-center">
          {/* Header */}
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-background">
              <Heart className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <Badge 
            variant="secondary" 
            className="mb-3 px-3 py-1 bg-background/50 dark:to-purple-900/50 text-primary dark:text-blue-300 border-0"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Find Your Calm
          </Badge>
          
          <h2 className="text-2xl font-bold mb-2 bg-muted/20 bg-clip-text text-transparent">
            Join Unstory Openmind
          </h2>
          
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
            A safe space for authentic conversations and personal growth. 
            <span className="font-medium text-foreground"> Share your story, judgment-free.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center mb-4 space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Shield className="w-3 h-3 mr-1 text-primary" />
              Safe & Secure
            </div>
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1 text-primary" />
              2.5K+ Members
            </div>
            <div className="flex items-center">
              <Heart className="w-3 h-3 mr-1 text-primary" />
              Judgment-Free
            </div>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            className="bg-background"
          >
            <a 
              href="https://unstory.live" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Globe className="w-4 h-4 mr-2" />
              Explore Openmind
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
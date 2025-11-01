'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Star, Zap } from 'lucide-react';
import { useToolAuth } from '@/hooks/useToolAuth';

export function ToolAuthGuard({ 
  children, 
  title = "Premium Feature", 
  description = "Sign in to access this premium feature and unlock all tools",
  icon: Icon = Lock,
  variant = "card" // "card" | "inline" | "overlay"
}) {
  const { isAuthenticated, signInWithRedirect } = useToolAuth();

  if (isAuthenticated) {
    return children;
  }

  if (variant === "inline") {
    return (
      <div className="flex items-center justify-center p-6 border-2 border-dashed border-muted-foreground/25 rounded-lg bg-muted/10">
        <div className="text-center space-y-3">
          <Icon className="w-8 h-8 mx-auto text-muted-foreground" />
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <Button 
            onClick={() => signInWithRedirect()}
            className="btn-cute"
          >
            <Star className="w-4 h-4 mr-2" />
            Sign In to Access
          </Button>
        </div>
      </div>
    );
  }

  if (variant === "overlay") {
    return (
      <div className="relative">
        <div className="pointer-events-none opacity-50 blur-sm">
          {children}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={() => signInWithRedirect()}
                className="btn-cute w-full"
              >
                <Zap className="w-4 h-4 mr-2" />
                Sign In to Unlock
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Default "card" variant
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <Button 
          onClick={() => signInWithRedirect()}
          className="btn-cute w-full"
        >
          <Star className="w-4 h-4 mr-2" />
          Sign In to Access
        </Button>
      </CardContent>
    </Card>
  );
}
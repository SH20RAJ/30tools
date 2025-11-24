"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogIn, LogOut, Settings } from "lucide-react";
import Link from "next/link";

export default function AuthComponent() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check authentication status with StackAuth
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Replace with actual StackAuth implementation
      const response = await fetch("/api/auth/status");
      if (response.ok) {
        const userData = await response.json();
        setIsSignedIn(true);
        setUser(userData);
      }
    } catch (_error) {
      setIsSignedIn(false);
      setUser(null);
    }
  };

  const handleSignIn = async () => {
    try {
      // Redirect to StackAuth sign-in
      window.location.href = "/api/auth/signin";
    } catch (_error) {
      console.error("Sign in failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" });
      setIsSignedIn(false);
      setUser(null);
    } catch (_error) {
      console.error("Sign out failed:", error);
    }
  };

  if (isSignedIn && user) {
    return (
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2 px-2 py-1 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors">
          <Avatar className="w-8 h-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user.name?.charAt(0)?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground/80 hidden sm:block">
            {user.name || "User"}
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Settings className="w-4 h-4" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="h-8 w-8 p-0 hover:bg-destructive/20 hover:text-destructive"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleSignIn}
      className="btn-cute flex items-center space-x-2"
    >
      <LogIn className="w-4 h-4" />
      <span className="hidden sm:block">Sign In</span>
    </Button>
  );
}

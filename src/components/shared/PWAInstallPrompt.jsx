"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DownloadIcon, XIcon, SmartphoneIcon } from "lucide-react";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if it's iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(ios);

    // Check if already installed
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;
    const isPWA = window.navigator.standalone === true;

    if (isStandalone || isPWA) {
      return; // Already installed
    }

    // Check if user has dismissed the prompt before
    const dismissed = localStorage.getItem("pwa-prompt-dismissed");
    if (dismissed) {
      const dismissedTime = new Date(dismissed);
      const daysSinceDismissed =
        (new Date() - dismissedTime) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) {
        // Don't show again for 7 days
        return;
      }
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show prompt after 30 seconds
      setTimeout(() => setShowPrompt(true), 30000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // For iOS, show prompt after 1 minute if not installed
    if (ios) {
      setTimeout(() => setShowPrompt(true), 60000);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
        setShowPrompt(false);
      }
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-prompt-dismissed", new Date().toISOString());
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="shadow-lg border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SmartphoneIcon className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Install 30tools</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="h-8 w-8 p-0"
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>
            {isIOS
              ? "Add to your home screen for a better experience"
              : "Install our app for faster access and offline support"}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          {isIOS ? (
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>To install:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Tap the Share button</li>
                <li>Scroll down and tap "Add to Home Screen"</li>
                <li>Tap "Add" to confirm</li>
              </ol>
            </div>
          ) : (
            <Button onClick={handleInstall} className="w-full">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Install App
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

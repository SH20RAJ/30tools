"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Crown, Zap } from "lucide-react";
import { useToolAuth } from "@/hooks/useToolAuth";

export function ToolSignButton({
  children,
  className = "",
  variant = "default",
  size = "sm",
  premium = false,
  feature = "this feature",
  ...props
}) {
  const { isAuthenticated, signInWithRedirect } = useToolAuth();

  if (isAuthenticated) {
    return children;
  }

  const handleClick = () => {
    signInWithRedirect();
  };

  const getButtonContent = () => {
    if (premium) {
      return (
        <>
          <Crown className="w-4 h-4 mr-2" />
          Sign In for Premium
        </>
      );
    }
    return (
      <>
        <Star className="w-4 h-4 mr-2" />
        Sign In to Use {feature}
      </>
    );
  };

  return (
    <div className="relative">
      {children && (
        <div className="pointer-events-none opacity-50 blur-[1px]">
          {children}
        </div>
      )}
      <div
        className={`${children ? "absolute inset-0" : ""} flex items-center justify-center ${children ? "bg-background/80 backdrop-blur-sm" : ""}`}
      >
        <div className="text-center space-y-2">
          {premium && (
            <Badge variant="secondary" className="mb-2">
              <Zap className="w-3 h-3 mr-1" />
              Premium Feature
            </Badge>
          )}
          <Button
            onClick={handleClick}
            variant={variant}
            size={size}
            className={`btn-cute ${className}`}
            {...props}
          >
            {getButtonContent()}
          </Button>
        </div>
      </div>
    </div>
  );
}

// For specific premium features
export function PremiumToolButton({
  children,
  feature = "premium features",
  ...props
}) {
  return (
    <ToolSignButton premium feature={feature} {...props}>
      {children}
    </ToolSignButton>
  );
}

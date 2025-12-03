"use client";

import { useCallback } from "react";

export function useToolAuth() {
  // Mock user object
  const user = null;

  const requireAuth = useCallback(() => {
    return true;
  }, []);

  const signInWithRedirect = useCallback(() => {
    // No-op or redirect to a custom sign-in page if one existed
    console.log("Sign in requested (Stack Auth removed)");
  }, []);

  return {
    user,
    isAuthenticated: !!user,
    requireAuth,
    signInWithRedirect,
  };
}

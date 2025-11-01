'use client';

import { useUser } from '@stackframe/stack';
import { useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export function useToolAuth() {
  const user = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const requireAuth = useCallback((toolPath = null) => {
    if (!user) {
      // If no specific tool path provided, use current pathname
      const redirectTo = toolPath || pathname;
      router.push(`/handler/signin?after_auth_return_to=${encodeURIComponent(redirectTo)}`);
      return false;
    }
    return true;
  }, [user, router, pathname]);

  const signInWithRedirect = useCallback((toolPath = null) => {
    const redirectTo = toolPath || pathname;
    router.push(`/handler/signin?after_auth_return_to=${encodeURIComponent(redirectTo)}`);
  }, [router, pathname]);

  return {
    user,
    isAuthenticated: !!user,
    requireAuth,
    signInWithRedirect,
  };
}
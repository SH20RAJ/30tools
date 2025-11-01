# Enhanced Authentication System with StackAuth

This document explains the improved authentication system implementation for 30tools using StackAuth, with features for redirecting users to tools after login.

## Overview

The enhanced authentication system provides:
- Proper StackAuth integration
- Automatic redirects to tools after login
- Reusable components for protecting premium features
- User-friendly authentication flow

## Components

### 1. AuthComponent (`/src/components/auth/AuthComponent.jsx`)

Enhanced authentication component with:
- Proper StackAuth hooks integration
- Dropdown menu for authenticated users
- Redirect functionality for sign-in
- User profile display

```jsx
import AuthComponent from '@/components/auth/AuthComponent';

// Basic usage
<AuthComponent />

// With specific redirect
<AuthComponent redirectTo="/specific-tool" />
```

### 2. ToolSignButton (`/src/components/auth/ToolSignButton.jsx`)

Reusable button component for protecting tool features:

```jsx
import { ToolSignButton, PremiumToolButton } from '@/components/auth/ToolSignButton';

// Basic usage - shows sign-in prompt when not authenticated
<ToolSignButton feature="advanced features">
  <ExpensiveFeatureComponent />
</ToolSignButton>

// Premium feature variant
<PremiumToolButton feature="bulk processing">
  <BulkProcessingComponent />
</PremiumToolButton>
```

### 3. ToolAuthGuard (`/src/components/auth/ToolAuthGuard.jsx`)

Flexible authentication guard with multiple display variants:

```jsx
import { ToolAuthGuard } from '@/components/auth/ToolAuthGuard';

// Card variant (default)
<ToolAuthGuard title="Premium Feature" description="Sign in to access">
  <PremiumContent />
</ToolAuthGuard>

// Inline variant
<ToolAuthGuard variant="inline" title="Sign in required">
  <ProtectedContent />
</ToolAuthGuard>

// Overlay variant
<ToolAuthGuard variant="overlay" title="Premium Access">
  <ExpensiveFeature />
</ToolAuthGuard>
```

### 4. useToolAuth Hook (`/src/hooks/useToolAuth.js`)

Custom hook for authentication logic:

```jsx
import { useToolAuth } from '@/hooks/useToolAuth';

function MyTool() {
  const { isAuthenticated, user, requireAuth, signInWithRedirect } = useToolAuth();
  
  const handlePremiumFeature = () => {
    if (!requireAuth()) return; // Redirects to sign-in if not authenticated
    // Execute premium feature
  };
  
  return (
    <div>
      {isAuthenticated ? (
        <div>Welcome, {user.displayName}!</div>
      ) : (
        <button onClick={() => signInWithRedirect()}>
          Sign in to access premium features
        </button>
      )}
    </div>
  );
}
```

## Usage Examples

### Adding Authentication to a Tool Feature

1. **Import the necessary components:**
```jsx
import { useToolAuth } from '@/hooks/useToolAuth';
import { ToolSignButton } from '@/components/auth/ToolSignButton';
```

2. **Use the hook in your component:**
```jsx
const { isAuthenticated } = useToolAuth();
```

3. **Conditionally render based on authentication:**
```jsx
{isAuthenticated ? (
  <PremiumFeatureComponent />
) : (
  <ToolSignButton premium feature="bulk processing">
    <PlaceholderComponent />
  </ToolSignButton>
)}
```

### Protecting Entire Tool Sections

For protecting large sections or entire tools:

```jsx
import { ToolAuthGuard } from '@/components/auth/ToolAuthGuard';

<ToolAuthGuard 
  variant="overlay"
  title="Premium Tool"
  description="Sign in to access advanced features"
  icon={Crown}
>
  <ExpensiveToolComponent />
</ToolAuthGuard>
```

## Redirect Flow

When a user clicks a sign-in button on a tool:

1. Current page URL is captured
2. User is redirected to `/handler/signin?after_auth_return_to={currentUrl}`
3. StackAuth handles authentication
4. After successful authentication, user is redirected back to the original tool
5. Tool immediately shows the authenticated content

## Configuration

### Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your_client_key
STACK_SECRET_SERVER_KEY=your_secret_key
```

### StackAuth Configuration

The server app is configured in `/src/stack.js`:
```javascript
export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  urls: {
    afterSignIn: "/",
    afterSignUp: "/",
    afterSignOut: "/",
    home: "/",
  },
});
```

## Best Practices

1. **Use specific feature names:** Instead of "premium features", use "bulk password generation" or "advanced editing tools"

2. **Provide clear value proposition:** Show what users get by signing in

3. **Use appropriate variants:** 
   - `inline` for small features
   - `overlay` for major features
   - `card` for dedicated premium sections

4. **Test the redirect flow:** Ensure users land on the right page after authentication

## Migration Guide

To update existing tools:

1. **Import the authentication components:**
```jsx
import { useToolAuth } from '@/hooks/useToolAuth';
import { ToolSignButton } from '@/components/auth/ToolSignButton';
```

2. **Add the hook to your component:**
```jsx
const { isAuthenticated } = useToolAuth();
```

3. **Wrap premium features:**
```jsx
// Before
<PremiumFeature />

// After
{isAuthenticated ? (
  <PremiumFeature />
) : (
  <ToolSignButton premium feature="specific feature name">
    <FeaturePlaceholder />
  </ToolSignButton>
)}
```

This system provides a seamless experience where users can discover premium features, sign in with one click, and immediately access the tool they were interested in.
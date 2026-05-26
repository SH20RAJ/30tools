// src/types/custom-modules.d.ts

// Wildcard declarations for JavaScript/JSX modules used in the project.
// This tells TypeScript that any import matching the listed patterns has an "any" type.
// It prevents TS7016 errors for components without .d.ts files.

declare module "@/components/tools/**/*.js" {
  const Component: any;
  export default Component;
}

declare module "@/components/tools/**/*.jsx" {
  const Component: any;
  export default Component;
}

declare module "@/components/tools/**/*.ts" {
  const Component: any;
  export default Component;
}

declare module "@/components/tools/**/*.tsx" {
  const Component: any;
  export default Component;
}

// Also allow importing any generic .js or .jsx files without a declaration.
declare module "*.js" {
  const value: any;
  export default value;
}

declare module "*.jsx" {
  const value: any;
  export default value;
}

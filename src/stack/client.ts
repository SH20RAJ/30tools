import { StackClientApp } from "@stackframe/stack";

export const stackClientApp =
  process.env.NEXT_PUBLIC_STACK_PROJECT_ID
    ? new StackClientApp({
      tokenStore: "nextjs-cookie",
    })
    : null;
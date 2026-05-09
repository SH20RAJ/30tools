import { StackClientApp } from "@stackframe/stack";

const stackProjectId = process.env.NEXT_PUBLIC_STACK_PROJECT_ID;

export const stackClientApp =
  stackProjectId
    ? new StackClientApp({
      tokenStore: "nextjs-cookie",
    })
    : null;
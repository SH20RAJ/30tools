import { StackClientApp } from "@stackframe/stack";

const stackProjectId = process.env.NEXT_PUBLIC_STACK_PROJECT_ID;
const stackPublishableClientKey = process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY;

export const stackClientApp =
  stackProjectId && stackPublishableClientKey
    ? new StackClientApp({
      projectId: stackProjectId,
      publishableClientKey: stackPublishableClientKey,
      tokenStore: "nextjs-cookie",
    })
    : null;
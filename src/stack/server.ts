import "server-only";
import { StackServerApp } from "@stackframe/stack";
import { stackClientApp } from "./client";

export const stackServerApp = stackClientApp
  ? new StackServerApp({
    inheritsFrom: stackClientApp as any,
    secretServerKey: process.env.STACK_SECRET_SERVER_KEY,
  })
  : null;

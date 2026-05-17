import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import { notFound } from "next/navigation";

export default function Handler(props: unknown) {
  if (!stackServerApp) return notFound();
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}

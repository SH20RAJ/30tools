import React from "react";
import { Metadata } from "next";
import VisitorCounterClient from "./client";
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
    title: "Free Visitor Counter Badge Generator | GitHub & Websites",
    description: "Generate free, customizable visitor counter badges for your GitHub README, personal website, or project documentation. Track your traffic with style.",
    keywords: ["visitor counter", "github badge", "visitor badge", "markdown badge", "traffic tracker", "github profile stats"],
    openGraph: {
        title: "Free Visitor Counter Badge Generator",
        description: "Create custom visitor counters for your projects in seconds.",
        type: "website",
    },
};

export default function VisitorCounterPage() {
    return <VisitorCounterClient />;
}

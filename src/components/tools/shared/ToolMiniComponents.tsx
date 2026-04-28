"use client";

import { useState, useMemo, type ChangeEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { diffChars } from "diff";

export function TextCompareMount() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const diff = useMemo(() => diffChars(a, b), [a, b]);
    return (
        <Card className="">
            <CardHeader className="">
                <CardTitle className="text-lg">Text compare</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
                <Textarea className="min-h-[200px] font-mono text-sm" value={a} onChange={(e) => setA(e.target.value)} />
                <Textarea className="min-h-[200px] font-mono text-sm" value={b} onChange={(e) => setB(e.target.value)} />
                <div className="md:col-span-2 sm font-mono whitespace-pre-wrap">
                    {diff.map((part, i) => (
                        <span
                            key={i}
                            className={
                                part.added ? "bg-emerald-500/25" : part.removed ? "bg-rose-500/25" : undefined
                            }
                        >
                            {part.value}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export function SimpleRepeater() {
    const [t, setT] = useState("Hello");
    const [n, setN] = useState("3");
    const out = useMemo(() => {
        const c = Math.max(0, Math.min(5000, Math.floor(Number(n) || 0)));
        return Array(c).fill(t).join("");
    }, [t, n]);
    return (
        <Card className="">
            <CardHeader className="">
                <CardTitle className="text-lg">Text repeater</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <Textarea value={t} onChange={(e) => setT(e.target.value)} />
                <Input type="number" min={0} max={5000} value={n} onChange={(e) => setN(e.target.value)} />
                <Textarea readOnly className="min-h-[160px] font-mono text-sm bg-muted/30" value={out} />
            </CardContent>
        </Card>
    );
}

export function WordCounterMount() {
    const [t, setT] = useState("");
    const stats = useMemo(() => {
        const words = t.trim() ? t.trim().split(/\s+/).length : 0;
        const chars = t.length;
        const lines = t ? t.split(/\r?\n/).length : 0;
        return { words, chars, lines };
    }, [t]);
    return (
        <Card className="">
            <CardHeader className="">
                <CardTitle className="text-lg">Word counter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <Textarea className="min-h-[220px]" value={t} onChange={(e) => setT(e.target.value)} />
                <p className="text-sm text-muted-foreground">
                    Words: <strong>{stats.words}</strong> · Characters: <strong>{stats.chars}</strong> · Lines:{" "}
                    <strong>{stats.lines}</strong>
                </p>
            </CardContent>
        </Card>
    );
}

export function RemoveBreaks() {
    const [t, setT] = useState("");
    const out = useMemo(() => t.replace(/\r?\n+/g, " ").replace(/\s+/g, " ").trim(), [t]);
    return (
        <Card className="">
            <CardHeader className="">
                <CardTitle className="text-lg">Remove line breaks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <Textarea className="min-h-[200px]" value={t} onChange={(e) => setT(e.target.value)} />
                <Textarea readOnly className="min-h-[120px] bg-muted/30" value={out} />
            </CardContent>
        </Card>
    );
}

export function CommaSeparatorMount() {
    const [t, setT] = useState("");
    const out = useMemo(() => t.split(/\r?\n/).join(", "), [t]);
    return (
        <Card className="">
            <CardHeader className="">
                <CardTitle className="text-lg">Lines to comma separated</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <Textarea className="min-h-[200px]" value={t} onChange={(e) => setT(e.target.value)} />
                <Textarea readOnly className="min-h-[120px] bg-muted/30" value={out} />
            </CardContent>
        </Card>
    );
}

export function SlugMount() {
    const [t, setT] = useState("");
    const slug = useMemo(
        () =>
            t
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, ""),
        [t],
    );
    return (
        <Card className="">
            <CardHeader className="">
                <CardTitle className="text-lg">Slug</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <Textarea value={t} onChange={(e) => setT(e.target.value)} />
                <Input readOnly className="font-mono bg-muted/30" value={slug} />
            </CardContent>
        </Card>
    );
}

export function TagsFromText({ prefix }: { prefix: string }) {
    const [t, setT] = useState("");
    const out = useMemo(() => {
        const words = t.toLowerCase().match(/[a-z0-9]{3,}/g) ?? [];
        const uniq = [...new Set(words)].slice(0, 60);
        return uniq.map((w) => `${prefix}${w}`).join(prefix === "#" ? " " : ", ");
    }, [t, prefix]);
    return (
        <Card className="">
            <CardHeader className="">
                <CardTitle className="text-lg">{prefix === "#" ? "Hashtags" : "Comma tags"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <Textarea className="min-h-[180px]" value={t} onChange={(e) => setT(e.target.value)} />
                <Textarea readOnly className="min-h-[100px] bg-muted/30" value={out} />
            </CardContent>
        </Card>
    );
}

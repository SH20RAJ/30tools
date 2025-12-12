"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Search, TrendingUp, BarChart2 } from "lucide-react";
import { toast } from "sonner";

/**
 * Keyword Tool
 * @param {string} mode - 'research' | 'tracking'
 */
export default function KeywordTool({ mode = "research" }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query) {
            toast.error("Please enter a keyword or domain");
            return;
        }

        setLoading(true);
        await new Promise(r => setTimeout(r, 1500)); // Sim usage

        // Mock data
        if (mode === 'research') {
            setResults([
                { keyword: query, volume: "12,500", cpc: "$1.20", difficulty: "Hard" },
                { keyword: `${query} free`, volume: "3,200", cpc: "$0.80", difficulty: "Medium" },
                { keyword: `best ${query}`, volume: "1,800", cpc: "$1.50", difficulty: "High" },
                { keyword: `${query} online`, volume: "4,600", cpc: "$0.45", difficulty: "Easy" },
                { keyword: `how to ${query}`, volume: "8,100", cpc: "$0.90", difficulty: "Medium" },
            ]);
        } else {
            // tracking
            setResults([
                { keyword: "seo tools", position: 4, change: "+2" },
                { keyword: "free keyword research", position: 12, change: "-1" },
                { keyword: "backlink checker", position: 8, change: "+5" },
                { keyword: "website audit", position: 3, change: "0" },
            ]);
        }

        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>{mode === 'research' ? "Keyword Research" : "Rank Tracking"}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-4">
                        <Input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={mode === 'research' ? "Enter base keyword..." : "Enter domain to track..."}
                            className="h-12 text-lg"
                        />
                        <Button size="lg" onClick={handleSearch} disabled={loading} className="w-32">
                            {loading ? "Searching..." : "Search"}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {results && (
                <Card>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[40%]">Keyword</TableHead>
                                    {mode === 'research' ? (
                                        <>
                                            <TableHead>Volume</TableHead>
                                            <TableHead>CPC</TableHead>
                                            <TableHead>Difficulty</TableHead>
                                        </>
                                    ) : (
                                        <>
                                            <TableHead>Position</TableHead>
                                            <TableHead>Change</TableHead>
                                        </>
                                    )}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {results.map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell className="font-medium">{row.keyword}</TableCell>
                                        {mode === 'research' ? (
                                            <>
                                                <TableCell>{row.volume}</TableCell>
                                                <TableCell>{row.cpc}</TableCell>
                                                <TableCell>
                                                    <span className={`px-2 py-1 rounded text-xs font-bold ${row.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                                            row.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                                'bg-red-100 text-red-700'
                                                        }`}>
                                                        {row.difficulty}
                                                    </span>
                                                </TableCell>
                                            </>
                                        ) : (
                                            <>
                                                <TableCell className="font-bold text-lg">{row.position}</TableCell>
                                                <TableCell className={row.change.startsWith('+') ? 'text-green-600' : row.change.startsWith('-') ? 'text-red-500' : 'text-muted-foreground'}>
                                                    {row.change}
                                                </TableCell>
                                            </>
                                        )}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

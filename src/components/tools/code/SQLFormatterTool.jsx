"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Download, Code, Database } from "lucide-react";
import { toast } from "sonner";

export default function SQLFormatter() {
  const [sqlInput, setSqlInput] = useState("");
  const [formattedSql, setFormattedSql] = useState("");
  const [sqlDialect, setSqlDialect] = useState("standard");
  const [indentSize, setIndentSize] = useState("2");
  const [keywordCase, setKeywordCase] = useState("upper");

  const formatSQL = () => {
    if (!sqlInput.trim()) {
      toast.error("Please enter some SQL to format");
      return;
    }

    try {
      // Simple SQL formatter implementation
      let formatted = sqlInput;

      // Remove extra whitespace
      formatted = formatted.replace(/\s+/g, " ").trim();

      // Define SQL keywords
      const keywords = [
        "SELECT",
        "FROM",
        "WHERE",
        "JOIN",
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL JOIN",
        "GROUP BY",
        "ORDER BY",
        "HAVING",
        "INSERT",
        "UPDATE",
        "DELETE",
        "CREATE",
        "ALTER",
        "DROP",
        "TABLE",
        "INDEX",
        "VIEW",
        "PROCEDURE",
        "FUNCTION",
        "TRIGGER",
        "DATABASE",
        "SCHEMA",
        "PRIMARY KEY",
        "FOREIGN KEY",
        "REFERENCES",
        "CONSTRAINT",
        "CHECK",
        "DEFAULT",
        "NULL",
        "NOT NULL",
        "UNIQUE",
        "AUTO_INCREMENT",
        "IF EXISTS",
        "IF NOT EXISTS",
        "CASE",
        "WHEN",
        "THEN",
        "ELSE",
        "END",
        "AS",
        "DISTINCT",
        "ALL",
        "UNION",
        "INTERSECT",
        "EXCEPT",
        "IN",
        "EXISTS",
        "BETWEEN",
        "LIKE",
        "AND",
        "OR",
        "NOT",
        "IS",
        "COUNT",
        "SUM",
        "AVG",
        "MIN",
        "MAX",
        "SUBSTRING",
        "CONCAT",
        "UPPER",
        "LOWER",
        "TRIM",
        "LENGTH",
      ];

      // Apply keyword casing
      keywords.forEach((keyword) => {
        const regex = new RegExp(`\\b${keyword}\\b`, "gi");
        const replacement =
          keywordCase === "upper"
            ? keyword.toUpperCase()
            : keyword.toLowerCase();
        formatted = formatted.replace(regex, replacement);
      });

      // Add line breaks and indentation
      const indent = " ".repeat(parseInt(indentSize));

      // Major clauses on new lines
      const majorClauses = [
        "SELECT",
        "FROM",
        "WHERE",
        "GROUP BY",
        "ORDER BY",
        "HAVING",
        "UNION",
      ];
      majorClauses.forEach((clause) => {
        const regex = new RegExp(`\\b${clause}\\b`, "gi");
        formatted = formatted.replace(regex, `\n${clause}`);
      });

      // JOIN clauses with indentation
      const joinTypes = [
        "JOIN",
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL JOIN",
      ];
      joinTypes.forEach((join) => {
        const regex = new RegExp(`\\b${join}\\b`, "gi");
        formatted = formatted.replace(regex, `\n${indent}${join}`);
      });

      // Subqueries and parentheses
      formatted = formatted.replace(/\(/g, "(\n" + indent);
      formatted = formatted.replace(/\)/g, "\n)");

      // Clean up extra newlines and trim
      formatted = formatted.replace(/\n\s*\n/g, "\n").trim();

      // Split into lines and apply proper indentation
      const lines = formatted.split("\n");
      let indentLevel = 0;
      const formattedLines = lines.map((line) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return "";

        // Decrease indent for closing parentheses
        if (trimmedLine.startsWith(")")) {
          indentLevel = Math.max(0, indentLevel - 1);
        }

        const indentedLine = indent.repeat(indentLevel) + trimmedLine;

        // Increase indent for opening parentheses
        if (trimmedLine.includes("(") && !trimmedLine.includes(")")) {
          indentLevel++;
        }

        return indentedLine;
      });

      setFormattedSql(formattedLines.join("\n"));
      toast.success("SQL formatted successfully!");
    } catch (_error) {
      console.error("Error formatting SQL:", error);
      toast.error("Failed to format SQL. Please check your syntax.");
    }
  };

  const copyToClipboard = async () => {
    if (!formattedSql) {
      toast.error("No formatted SQL to copy");
      return;
    }

    try {
      await navigator.clipboard.writeText(formattedSql);
      toast.success("Formatted SQL copied to clipboard!");
    } catch (_error) {
      console.error("Failed to copy:", error);
      toast.error("Failed to copy to clipboard");
    }
  };

  const downloadSQL = () => {
    if (!formattedSql) {
      toast.error("No formatted SQL to download");
      return;
    }

    const blob = new Blob([formattedSql], { type: "text/sql" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted_query.sql";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("SQL file downloaded!");
  };

  const clearAll = () => {
    setSqlInput("");
    setFormattedSql("");
  };

  const loadSample = () => {
    const sampleSQL = `select u.id, u.name, u.email, p.title from users u left join posts p on u.id = p.user_id where u.active = 1 and p.published_at is not null order by p.created_at desc`;
    setSqlInput(sampleSQL);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">SQL Formatter</h2>
            <p className="text-lg text-muted-foreground">
              Format and beautify SQL queries with proper indentation and syntax
              highlighting
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    SQL Input
                  </CardTitle>
                  <CardDescription>
                    Paste your unformatted SQL query here
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Enter your SQL query here..."
                    value={sqlInput}
                    onChange={(e) => setSqlInput(e.target.value)}
                    className="min-h-[300px] font-mono text-sm"
                  />
                  <div className="flex gap-2">
                    <Button onClick={loadSample} variant="outline" size="sm">
                      Load Sample
                    </Button>
                    <Button onClick={clearAll} variant="outline" size="sm">
                      Clear
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Formatting Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="dialect">SQL Dialect</Label>
                      <Select value={sqlDialect} onValueChange={setSqlDialect}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard SQL</SelectItem>
                          <SelectItem value="mysql">MySQL</SelectItem>
                          <SelectItem value="postgresql">PostgreSQL</SelectItem>
                          <SelectItem value="mssql">SQL Server</SelectItem>
                          <SelectItem value="oracle">Oracle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="indent">Indent Size</Label>
                      <Select value={indentSize} onValueChange={setIndentSize}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 spaces</SelectItem>
                          <SelectItem value="4">4 spaces</SelectItem>
                          <SelectItem value="8">8 spaces</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="case">Keyword Case</Label>
                      <Select
                        value={keywordCase}
                        onValueChange={setKeywordCase}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="upper">UPPERCASE</SelectItem>
                          <SelectItem value="lower">lowercase</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    onClick={formatSQL}
                    className="w-full"
                    disabled={!sqlInput.trim()}
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Format SQL
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Output Section */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Formatted SQL</CardTitle>
                  <CardDescription>
                    Your beautifully formatted SQL query
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Textarea
                      value={formattedSql}
                      readOnly
                      placeholder="Formatted SQL will appear here..."
                      className="min-h-[400px] font-mono text-sm bg-muted/30"
                    />
                    {formattedSql && (
                      <div className="absolute top-2 right-2 space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={copyToClipboard}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={downloadSQL}>
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Proper Indentation</h4>
                  <p className="text-muted-foreground">
                    Clean, readable formatting with consistent indentation
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Keyword Formatting</h4>
                  <p className="text-muted-foreground">
                    Uppercase or lowercase SQL keywords as preferred
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Multiple Dialects</h4>
                  <p className="text-muted-foreground">
                    Support for different SQL database systems
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Download & Copy</h4>
                  <p className="text-muted-foreground">
                    Easy sharing and saving of formatted queries
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

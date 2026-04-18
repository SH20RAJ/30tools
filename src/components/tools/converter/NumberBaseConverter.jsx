"use client";

import { ArrowRight, Code, Copy, RefreshCw, Hash } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function NumberBaseConverter({ defaultFrom = "decimal", defaultTo = "octal" }) {
 const [inputValue, setInputValue] = useState("");
 const [outputValue, setOutputValue] = useState("");
 const [fromBase, setFromBase] = useState(defaultFrom);
 const [toBase, setToBase] = useState(defaultTo);

 const bases = {
 binary: 2,
 octal: 8,
 decimal: 10,
 hexadecimal: 16,
 };

 const convert = (value, from, to) => {
 if (!value) return "";
 try {
 const decimalValue = parseInt(value, bases[from]);
 if (isNaN(decimalValue)) return "Invalid Input";
 return decimalValue.toString(bases[to]).toUpperCase();
 } catch (e) {
 return "Error";
 }
 };

 useEffect(() => {
 setOutputValue(convert(inputValue, fromBase, toBase));
 }, [inputValue, fromBase, toBase]);

 const handleCopy = () => {
 if (!outputValue || outputValue === "Invalid Input") return;
 navigator.clipboard.writeText(outputValue);
 toast.success("Copied to clipboard!");
 };

 return (
 <div className="max-w-4xl mx-auto space-y-6">
 <Card>
 <CardHeader>
 <CardTitle className="flex items-center gap-2">
 <Hash className="h-5 w-5 text-primary" />
 Number Base Converter
 </CardTitle>
 <CardDescription>
 Convert numbers between different bases (Binary, Octal, Decimal, Hexadecimal)
 </CardDescription>
 </CardHeader>
 <CardContent className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-4">
 <div className="space-y-2">
 <Label>From Base</Label>
 <Select value={fromBase} onValueChange={setFromBase}>
 <SelectTrigger>
 <SelectValue />
 </SelectTrigger>
 <SelectContent>
 <SelectItem value="binary">Binary (Base 2)</SelectItem>
 <SelectItem value="octal">Octal (Base 8)</SelectItem>
 <SelectItem value="decimal">Decimal (Base 10)</SelectItem>
 <SelectItem value="hexadecimal">Hexadecimal (Base 16)</SelectItem>
 </SelectContent>
 </Select>
 </div>
 <div className="space-y-2">
 <Label>Input Value</Label>
 <Input
 placeholder={`Enter ${fromBase} value...`}
 value={inputValue}
 onChange={(e) => setInputValue(e.target.value)}
 className="font-mono"
 />
 </div>
 </div>

 <div className="space-y-4">
 <div className="space-y-2">
 <Label>To Base</Label>
 <Select value={toBase} onValueChange={setToBase}>
 <SelectTrigger>
 <SelectValue />
 </SelectTrigger>
 <SelectContent>
 <SelectItem value="binary">Binary (Base 2)</SelectItem>
 <SelectItem value="octal">Octal (Base 8)</SelectItem>
 <SelectItem value="decimal">Decimal (Base 10)</SelectItem>
 <SelectItem value="hexadecimal">Hexadecimal (Base 16)</SelectItem>
 </SelectContent>
 </Select>
 </div>
 <div className="space-y-2">
 <Label>Output Value</Label>
 <div className="relative">
 <Input
 readOnly
 value={outputValue}
 className="font-mono bg-muted"
 />
 <Button
 size="sm"
 variant="ghost"
 className="absolute right-1 top-1"
 onClick={handleCopy}
 disabled={!outputValue || outputValue === "Invalid Input"}
 >
 <Copy className="h-4 w-4" />
 </Button>
 </div>
 </div>
 </div>
 </div>

 <div className="flex justify-center">
 <Button 
 variant="outline" 
 onClick={() => {
 const temp = fromBase;
 setFromBase(toBase);
 setToBase(temp);
 setInputValue(outputValue === "Invalid Input" ? "" : outputValue);
 }}
 className="flex items-center gap-2"
 >
 <RefreshCw className="h-4 w-4" />
 Swap Bases
 </Button>
 </div>
 </CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle className="text-lg">Quick Reference</CardTitle>
 </CardHeader>
 <CardContent>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 <div className="p-3 border ">
 <p className="text-sm font-semibold mb-1">Binary</p>
 <p className="text-xs text-muted-foreground">0, 1</p>
 </div>
 <div className="p-3 border ">
 <p className="text-sm font-semibold mb-1">Octal</p>
 <p className="text-xs text-muted-foreground">0-7</p>
 </div>
 <div className="p-3 border ">
 <p className="text-sm font-semibold mb-1">Decimal</p>
 <p className="text-xs text-muted-foreground">0-9</p>
 </div>
 <div className="p-3 border ">
 <p className="text-sm font-semibold mb-1">Hexadecimal</p>
 <p className="text-xs text-muted-foreground">0-9, A-F</p>
 </div>
 </div>
 </CardContent>
 </Card>
 </div>
 );
}

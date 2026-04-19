"use client";

import {
	AlertCircle,
	CheckCircle,
	Code,
	Copy,
	Download,
	FileJson,
	Maximize2,
	Minimize2,
	RotateCcw,
	Search,
	Settings,
	Shield,
	Upload,
	Zap,
} from "lucide-react";
import { useCallback, useRef, useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function JSONFormatterTool() {
	const [jsonInput, setJsonInput] = useState(
		'{"name":"John Doe","age":30,"city":"New York","hobbies":["reading","coding","gaming"],"address":{"street":"123 Main St","zipCode":"10001"}}',
	);
	const [formattedJson, setFormattedJson] = useState("");
	const [minifiedJson, setMinifiedJson] = useState("");
	const [isValid, setIsValid] = useState(true);
	const [errors, setErrors] = useState([]);
	const [copied, setCopied] = useState("");
	const [indentSize, setIndentSize] = useState(2);
	const [sortKeys, setSortKeys] = useState(false);
	const fileInputRef = useRef(null);

	// Hoisting fix: Define helper functions before validateAndFormat
	const sortObjectKeys = useCallback((obj) => {
		if (Array.isArray(obj)) {
			return obj.map(sortObjectKeys);
		} else if (obj !== null && typeof obj === "object") {
			const sorted = {};
			Object.keys(obj)
				.sort()
				.forEach((key) => {
					sorted[key] = sortObjectKeys(obj[key]);
				});
			return sorted;
		}
		return obj;
	}, []);

	const parseJSONError = useCallback((errorMessage, jsonText) => {
		const errors = [];
		const positionMatch = errorMessage.match(/position (\d+)/);
		if (positionMatch) {
			const position = parseInt(positionMatch[1], 10);
			const lines = jsonText.substring(0, position).split("\n");
			const lineNumber = lines.length;
			const columnNumber = lines[lines.length - 1].length + 1;

			errors.push({
				type: "Syntax Error",
				message: errorMessage,
				line: lineNumber,
				column: columnNumber,
				position,
			});
		} else {
			errors.push({
				type: "Parse Error",
				message: errorMessage,
			});
		}
		return errors;
	}, []);

	const validateAndFormat = useCallback(
		(jsonText) => {
			if (!jsonText) return { isValid: true };
			try {
				const parsed = JSON.parse(jsonText);
				const processedObj = sortKeys ? sortObjectKeys(parsed) : parsed;
				const formatted = JSON.stringify(processedObj, null, indentSize);
				const minified = JSON.stringify(processedObj);

				setFormattedJson(formatted);
				setMinifiedJson(minified);
				setIsValid(true);
				setErrors([]);

				return { isValid: true, formatted, minified };
			} catch (error) {
				setIsValid(false);
				setFormattedJson("");
				setMinifiedJson("");
				const errorDetails = parseJSONError(error.message, jsonText);
				setErrors(errorDetails);
				return { isValid: false, error: error.message };
			}
		},
		[indentSize, sortKeys, sortObjectKeys, parseJSONError],
	);

	// Initialize on mount
	useEffect(() => {
		if (jsonInput) {
			validateAndFormat(jsonInput);
		}
	}, [validateAndFormat, jsonInput]);

	const handleInputChange = (value) => {
		setJsonInput(value);
		if (value.trim()) {
			validateAndFormat(value);
		} else {
			setFormattedJson("");
			setMinifiedJson("");
			setIsValid(true);
			setErrors([]);
		}
	};

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const content = e.target.result;
				setJsonInput(content);
				validateAndFormat(content);
			};
			reader.readAsText(file);
		}
	};

	const copyToClipboard = async (text, type) => {
		if (typeof navigator !== "undefined" && navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(text);
				setCopied(type);
				setTimeout(() => setCopied(""), 2000);
			} catch (err) {
				console.error("Failed to copy:", err);
			}
		}
	};

	const downloadJSON = (content, filename) => {
		if (typeof document === "undefined") return;
		const blob = new Blob([content], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	};

	const clearInput = () => {
		setJsonInput("");
		setFormattedJson("");
		setMinifiedJson("");
		setIsValid(true);
		setErrors([]);
	};

	const loadSample = () => {
		const sampleJSON = {
			user: {
				id: 12345,
				name: "Jane Smith",
				email: "jane.smith@example.com",
				isActive: true,
				preferences: {
					theme: "dark",
					notifications: {
						email: true,
						push: false,
						sms: true,
					},
					languages: ["en", "es", "fr"],
				},
				lastLogin: "2025-01-15T10:30:00Z",
				metadata: {
					created: "2023-06-01T00:00:00Z",
					updated: "2025-01-15T10:30:00Z",
					version: "1.2.3",
				},
			},
			products: [
				{
					id: "prod_001",
					name: "Wireless Headphones",
					price: 99.99,
					inStock: true,
					tags: ["electronics", "audio", "wireless"],
				},
				{
					id: "prod_002",
					name: "Smartphone Case",
					price: 24.99,
					inStock: false,
					tags: ["accessories", "mobile", "protection"],
				},
			],
		};

		const jsonString = JSON.stringify(sampleJSON);
		setJsonInput(jsonString);
		validateAndFormat(jsonString);
	};

	const analyzeJSON = useCallback((obj, depth = 0) => {
		let stats = {
			objects: 0,
			arrays: 0,
			strings: 0,
			numbers: 0,
			booleans: 0,
			nulls: 0,
			maxDepth: depth,
			totalKeys: 0,
		};

		if (Array.isArray(obj)) {
			stats.arrays++;
			obj.forEach((item) => {
				const childStats = analyzeJSON(item, depth + 1);
				stats.objects += childStats.objects;
				stats.arrays += childStats.arrays;
				stats.strings += childStats.strings;
				stats.numbers += childStats.numbers;
				stats.booleans += childStats.booleans;
				stats.nulls += childStats.nulls;
				stats.maxDepth = Math.max(stats.maxDepth, childStats.maxDepth);
				stats.totalKeys += childStats.totalKeys;
			});
		} else if (obj !== null && typeof obj === "object") {
			stats.objects++;
			stats.totalKeys += Object.keys(obj).length;
			Object.values(obj).forEach((value) => {
				const childStats = analyzeJSON(value, depth + 1);
				stats.objects += childStats.objects;
				stats.arrays += childStats.arrays;
				stats.strings += childStats.strings;
				stats.numbers += childStats.numbers;
				stats.booleans += childStats.booleans;
				stats.nulls += childStats.nulls;
				stats.maxDepth = Math.max(stats.maxDepth, childStats.maxDepth);
				stats.totalKeys += childStats.totalKeys;
			});
		} else {
			const type =
				obj === null
					? "nulls"
					: typeof obj === "string"
						? "strings"
						: typeof obj === "number"
							? "numbers"
							: "booleans";
			stats[type]++;
		}

		return stats;
	}, []);

	const [jsonStats, setJsonStats] = useState(null);

	useEffect(() => {
		if (formattedJson) {
			try {
				const parsed = JSON.parse(formattedJson);
				setJsonStats(analyzeJSON(parsed));
			} catch {
				setJsonStats(null);
			}
		} else {
			setJsonStats(null);
		}
	}, [formattedJson, analyzeJSON]);

	return (
		<div className="container mx-auto px-4 py-8 max-w-7xl">
			<div className="text-center mb-8">
				<h2 className="text-4xl font-bold mb-4">
					Free JSON Formatter & Validator
				</h2>
				<p className="text-xl text-muted-foreground mb-6">
					Format, validate, and minify JSON data online. Perfect for developers,
					API testing, and data processing. Includes error detection and JSON
					analytics.
				</p>

				<div className="flex flex-wrap justify-center gap-4 mb-6">
					<div className="flex items-center gap-2">
						<Zap className="h-5 w-5 text-primary" />
						<span className="text-sm font-medium">Instant Validation</span>
					</div>
					<div className="flex items-center gap-2">
						<Shield className="h-5 w-5 text-primary" />
						<span className="text-sm font-medium">Error Detection</span>
					</div>
					<div className="flex items-center gap-2">
						<Search className="h-5 w-5 text-primary" />
						<span className="text-sm font-medium">JSON Analytics</span>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
				{/* Input Section */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center justify-between">
							<span className="flex items-center gap-2">
								<Code className="h-5 w-5" />
								JSON Input
							</span>
							<div className="flex gap-2">
								<Button onClick={loadSample} variant="outline" size="sm">
									Sample
								</Button>
								<Button onClick={clearInput} variant="outline" size="sm">
									<RotateCcw className="h-4 w-4 mr-2" />
									Clear
								</Button>
							</div>
						</CardTitle>
						<CardDescription>
							Paste your JSON data or upload a JSON file
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex gap-2">
							<input
								ref={fileInputRef}
								type="file"
								accept=".json,.txt"
								onChange={handleFileUpload}
								className="hidden"
							/>
							<Button
								onClick={() => fileInputRef.current?.click()}
								variant="outline"
								size="sm"
							>
								<Upload className="h-4 w-4 mr-2" />
								Upload File
							</Button>
						</div>

						<div className="space-y-2">
							<Textarea
								placeholder="Paste your JSON here..."
								value={jsonInput}
								onChange={(e) => handleInputChange(e.target.value)}
								className="font-mono text-sm min-h-96"
							/>

							{!isValid && errors.length > 0 && (
								<Alert variant="destructive">
									<AlertCircle className="h-4 w-4" />
									<AlertDescription>
										<div className="space-y-2">
											{errors.map((error, index) => (
												<div key={index}>
													<strong>{error.type}:</strong> {error.message}
													{error.line && (
														<div className="text-xs mt-1">
															Line {error.line}, Column {error.column}
														</div>
													)}
												</div>
											))}
										</div>
									</AlertDescription>
								</Alert>
							)}

							{isValid && jsonInput.trim() && (
								<Alert>
									<CheckCircle className="h-4 w-4" />
									<AlertDescription>
										Valid JSON - Ready to format or minify
									</AlertDescription>
								</Alert>
							)}
						</div>

						{/* Settings */}
						<Card className="bg-muted/50">
							<CardHeader className="pb-3">
								<CardTitle className="flex items-center gap-2 text-base">
									<Settings className="h-4 w-4" />
									Formatting Options
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0">
								<div className="flex flex-wrap gap-4">
									<div className="flex items-center gap-2">
										<Label htmlFor="indent">Indent Size:</Label>
										<select
											id="indent"
											value={indentSize}
											onChange={(e) => {
												setIndentSize(parseInt(e.target.value, 10));
											}}
											className="border rounded px-2 py-1 text-sm bg-background"
										>
											<option value={2}>2 spaces</option>
											<option value={4}>4 spaces</option>
											<option value={8}>8 spaces</option>
										</select>
									</div>
									<div className="flex items-center gap-2">
										<input
											type="checkbox"
											id="sortKeys"
											checked={sortKeys}
											onChange={(e) => {
												setSortKeys(e.target.checked);
											}}
										/>
										<Label htmlFor="sortKeys">Sort Keys</Label>
									</div>
								</div>
							</CardContent>
						</Card>
					</CardContent>
				</Card>

				{/* Output Section */}
				<div className="space-y-6">
					{/* Formatted JSON */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center justify-between">
								<span className="flex items-center gap-2">
									<Maximize2 className="h-5 w-5" />
									Formatted JSON
								</span>
								<div className="flex gap-2">
									<Button
										onClick={() => copyToClipboard(formattedJson, "formatted")}
										disabled={!formattedJson}
										size="sm"
										variant="outline"
									>
										{copied === "formatted" ? (
											<CheckCircle className="h-4 w-4 mr-2 text-primary" />
										) : (
											<Copy className="h-4 w-4 mr-2" />
										)}
										Copy
									</Button>
									<Button
										onClick={() =>
											downloadJSON(formattedJson, "formatted.json")
										}
										disabled={!formattedJson}
										size="sm"
										variant="outline"
									>
										<Download className="h-4 w-4 mr-2" />
										Download
									</Button>
								</div>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Textarea
								value={formattedJson}
								readOnly
								className="font-mono text-sm min-h-48"
								placeholder="Formatted JSON will appear here..."
							/>
						</CardContent>
					</Card>

					{/* Minified JSON */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center justify-between">
								<span className="flex items-center gap-2">
									<Minimize2 className="h-5 w-5" />
									Minified JSON
								</span>
								<div className="flex gap-2">
									<Button
										onClick={() => copyToClipboard(minifiedJson, "minified")}
										disabled={!minifiedJson}
										size="sm"
										variant="outline"
									>
										{copied === "minified" ? (
											<CheckCircle className="h-4 w-4 mr-2 text-primary" />
										) : (
											<Copy className="h-4 w-4 mr-2" />
										)}
										Copy
									</Button>
									<Button
										onClick={() => downloadJSON(minifiedJson, "minified.json")}
										disabled={!minifiedJson}
										size="sm"
										variant="outline"
									>
										<Download className="h-4 w-4 mr-2" />
										Download
									</Button>
								</div>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Textarea
								value={minifiedJson}
								readOnly
								className="font-mono text-sm min-h-24"
								placeholder="Minified JSON will appear here..."
							/>
						</CardContent>
					</Card>

					{/* JSON Statistics */}
					{jsonStats && (
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<FileJson className="h-5 w-5" />
									JSON Analytics
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
									<div>
										<p className="text-2xl font-bold">{jsonStats.objects}</p>
										<p className="text-sm text-muted-foreground">Objects</p>
									</div>
									<div>
										<p className="text-2xl font-bold">{jsonStats.arrays}</p>
										<p className="text-sm text-muted-foreground">Arrays</p>
									</div>
									<div>
										<p className="text-2xl font-bold">{jsonStats.totalKeys}</p>
										<p className="text-sm text-muted-foreground">Keys</p>
									</div>
									<div>
										<p className="text-2xl font-bold">{jsonStats.maxDepth}</p>
										<p className="text-sm text-muted-foreground">Max Depth</p>
									</div>
								</div>

								<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
									<div>
										<Badge variant="outline">{jsonStats.strings} Strings</Badge>
									</div>
									<div>
										<Badge variant="outline">{jsonStats.numbers} Numbers</Badge>
									</div>
									<div>
										<Badge variant="outline">
											{jsonStats.booleans} Booleans
										</Badge>
									</div>
									<div>
										<Badge variant="outline">{jsonStats.nulls} Nulls</Badge>
									</div>
								</div>

								<div className="mt-4 text-center">
									<p className="text-sm text-muted-foreground">
										Size: {formattedJson.length.toLocaleString()} chars
										(formatted) • {minifiedJson.length.toLocaleString()} chars
										(minified)
									</p>
									<p className="text-sm text-muted-foreground">
										Compression:{" "}
										{Math.round(
											(1 - minifiedJson.length / (formattedJson.length || 1)) *
												100,
										)}
										% size reduction
									</p>
								</div>
							</CardContent>
						</Card>
					)}
				</div>
			</div>

			{/* Help Section */}
			<Card className="mt-8">
				<CardHeader>
					<CardTitle>JSON Formatter Guide</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-6 md:grid-cols-2">
						<div>
							<h4 className="font-medium mb-2">Features:</h4>
							<ul className="text-sm space-y-1 text-muted-foreground">
								<li>• Real-time JSON validation</li>
								<li>• Pretty formatting with custom indentation</li>
								<li>• JSON minification for production use</li>
								<li>• Error detection with line numbers</li>
								<li>• JSON analytics and statistics</li>
								<li>• File upload and download support</li>
								<li>• Key sorting option</li>
								<li>• Copy to clipboard functionality</li>
							</ul>
						</div>
						<div>
							<h4 className="font-medium mb-2">Common Use Cases:</h4>
							<ul className="text-sm space-y-1 text-muted-foreground">
								<li>• API response formatting</li>
								<li>• Configuration file validation</li>
								<li>• Data structure analysis</li>
								<li>• JSON debugging and troubleshooting</li>
								<li>• Code documentation preparation</li>
								<li>• Database export formatting</li>
								<li>• JSON schema validation</li>
								<li>• Production optimization</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

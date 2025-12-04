"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

export default function VisitorCounterClient() {
    const [targetUrl, setTargetUrl] = useState("");
    const [label, setLabel] = useState("VISITORS");
    const [labelColor, setLabelColor] = useState("#555555");
    const [countColor, setCountColor] = useState("#007ec6");
    const [badgeStyle, setBadgeStyle] = useState("flat");
    const [badgeType, setBadgeType] = useState("combined");
    const [labelStyle, setLabelStyle] = useState("upper");
    const [previewUrl, setPreviewUrl] = useState("");
    const [copiedSection, setCopiedSection] = useState<string | null>(null);

    const BASE_API_URL = "https://api.visitorbadge.io/api";

    useEffect(() => {
        if (!targetUrl) {
            setPreviewUrl("");
            return;
        }
        const params = new URLSearchParams();
        params.append("path", targetUrl);
        params.append("label", label);
        params.append("countColor", countColor);
        params.append("style", badgeStyle);
        params.append("labelStyle", labelStyle);
        const fullUrl = `${BASE_API_URL}/${badgeType}?${params.toString()}`;
        setPreviewUrl(fullUrl);
    }, [targetUrl, label, labelColor, countColor, badgeStyle, badgeType, labelStyle]);

    const handleCopy = (text: string, section: string) => {
        navigator.clipboard.writeText(text);
        setCopiedSection(section);
        setTimeout(() => setCopiedSection(null), 2000);
    };

    const getMarkdownCode = () => {
        if (!targetUrl) return "Please enter a URL first.";
        return `![Visitors](${previewUrl})`;
    };

    const getMarkdownWithLinkCode = () => {
        if (!targetUrl) return "Please enter a URL first.";
        const statusUrl = `https://visitorbadge.io/status?path=${encodeURIComponent(targetUrl)}`;
        return `[![Visitors](${previewUrl})](${statusUrl})`;
    };

    const getHtmlCode = () => {
        if (!targetUrl) return "Please enter a URL first.";
        const statusUrl = `https://visitorbadge.io/status?path=${encodeURIComponent(targetUrl)}`;
        return `<a href="${statusUrl}"><img src="${previewUrl}" alt="Visitors" /></a>`;
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Visitor Counter Badge Generator</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Create a custom visitor counter for your GitHub README, website, or documentation in seconds.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="p-8 sm:p-10 space-y-8">
                        <div>
                            <label htmlFor="url" className="block text-sm font-bold text-gray-700 mb-2">URL or Username/Repository <span className="text-red-500">*</span></label>
                            <input type="text" id="url" className="block w-full rounded-lg border-gray-300 bg-gray-50 border p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-lg" placeholder="e.g. https://github.com/username/repo" value={targetUrl} onChange={(e) => setTargetUrl(e.target.value)} />
                            <p className="mt-2 text-sm text-gray-500">The unique identifier for your counter.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Label</label>
                                <input type="text" className="block w-full rounded-lg border-gray-300 bg-gray-50 border p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500" value={label} onChange={(e) => setLabel(e.target.value)} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Badge Style</label>
                                <select className="block w-full rounded-lg border-gray-300 bg-gray-50 border p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500" value={badgeStyle} onChange={(e) => setBadgeStyle(e.target.value)}>
                                    <option value="flat">Flat</option>
                                    <option value="flat-square">Flat Square</option>
                                    <option value="plastic">Plastic</option>
                                    <option value="for-the-badge">For The Badge</option>
                                    <option value="social">Social</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Label Background</label>
                                    <div className="flex items-center space-x-2">
                                        <input type="color" className="h-10 w-10 rounded border border-gray-300 cursor-pointer" value={labelColor} onChange={(e) => setLabelColor(e.target.value)} />
                                        <span className="text-sm text-gray-600 font-mono">{labelColor}</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Count Background</label>
                                    <div className="flex items-center space-x-2">
                                        <input type="color" className="h-10 w-10 rounded border border-gray-300 cursor-pointer" value={countColor} onChange={(e) => setCountColor(e.target.value)} />
                                        <span className="text-sm text-gray-600 font-mono">{countColor}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Badge Type</label>
                                    <select className="block w-full rounded-lg border-gray-300 bg-gray-50 border p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500" value={badgeType} onChange={(e) => setBadgeType(e.target.value)}>
                                        <option value="combined">Combined (Total + Daily)</option>
                                        <option value="visitors">Total Visitors</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Label Style</label>
                                    <select className="block w-full rounded-lg border-gray-300 bg-gray-50 border p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500" value={labelStyle} onChange={(e) => setLabelStyle(e.target.value)}>
                                        <option value="upper">UPPERCASE</option>
                                        <option value="lower">lowercase</option>
                                        <option value="none">Normal</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-dashed border-gray-300 flex flex-col items-center justify-center min-h-[160px]">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Live Preview</h3>
                            {previewUrl ? (
                                <div className="transform transition-all duration-300 hover:scale-105">
                                    <img src={previewUrl} alt="Visitor Badge Preview" className="h-auto max-w-full shadow-sm" />
                                </div>
                            ) : (
                                <p className="text-gray-400 italic">Enter a URL to generate your badge</p>
                            )}
                        </div>
                    </div>
                </div>

                {targetUrl && (
                    <div className="mt-12 space-y-8">
                        <h2 className="text-2xl font-bold text-gray-900">Get Your Code</h2>
                        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                                <span className="text-sm font-medium text-gray-300">Markdown (Recommended)</span>
                                <button onClick={() => handleCopy(getMarkdownCode(), "markdown")} className="text-gray-400 hover:text-white flex items-center text-xs uppercase font-bold">
                                    {copiedSection === "markdown" ? <><Check className="w-4 h-4 mr-1 text-green-400" /> Copied</> : <><Copy className="w-4 h-4 mr-1" /> Copy</>}
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto"><code className="text-sm font-mono text-blue-300 whitespace-pre">{getMarkdownCode()}</code></div>
                        </div>
                        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                                <span className="text-sm font-medium text-gray-300">Markdown with Status Link</span>
                                <button onClick={() => handleCopy(getMarkdownWithLinkCode(), "markdown-link")} className="text-gray-400 hover:text-white flex items-center text-xs uppercase font-bold">
                                    {copiedSection === "markdown-link" ? <><Check className="w-4 h-4 mr-1 text-green-400" /> Copied</> : <><Copy className="w-4 h-4 mr-1" /> Copy</>}
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto"><code className="text-sm font-mono text-green-300 whitespace-pre">{getMarkdownWithLinkCode()}</code></div>
                        </div>
                        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                                <span className="text-sm font-medium text-gray-300">HTML</span>
                                <button onClick={() => handleCopy(getHtmlCode(), "html")} className="text-gray-400 hover:text-white flex items-center text-xs uppercase font-bold">
                                    {copiedSection === "html" ? <><Check className="w-4 h-4 mr-1 text-green-400" /> Copied</> : <><Copy className="w-4 h-4 mr-1" /> Copy</>}
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto"><code className="text-sm font-mono text-purple-300 whitespace-pre">{getHtmlCode()}</code></div>
                        </div>
                        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                                <span className="text-sm font-medium text-gray-300">Image URL</span>
                                <button onClick={() => handleCopy(previewUrl, "url")} className="text-gray-400 hover:text-white flex items-center text-xs uppercase font-bold">
                                    {copiedSection === "url" ? <><Check className="w-4 h-4 mr-1 text-green-400" /> Copied</> : <><Copy className="w-4 h-4 mr-1" /> Copy</>}
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto"><code className="text-sm font-mono text-yellow-300 whitespace-pre">{previewUrl}</code></div>
                        </div>
                    </div>
                )}

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">How to use</h3>
                        <ol className="space-y-3 text-gray-600 list-decimal list-inside">
                            <li>Enter your <strong>GitHub repository URL</strong> or website address.</li>
                            <li>Customize the badge <strong>label</strong> (e.g., "Views", "Hits").</li>
                            <li>Choose a <strong>style</strong> that matches your project.</li>
                            <li>Pick <strong>colors</strong> for the label and count background.</li>
                            <li><strong>Copy the code</strong> snippet (Markdown for GitHub READMEs).</li>
                            <li>Paste it into your project documentation!</li>
                        </ol>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Use Cases</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span><strong>GitHub Profiles:</strong> Show how many people view your profile.</span></li>
                            <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Project READMEs:</strong> Track interest in open-source projects.</span></li>
                            <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Personal Websites:</strong> Add a retro-style counter.</span></li>
                            <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Blog Posts:</strong> Monitor engagement on articles.</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
                    <p className="text-blue-800"><strong>Note:</strong> This tool generates badges powered by <a href="https://visitorbadge.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">visitorbadge.io</a>.</p>
                </div>
            </div>
        </div>
    );
}

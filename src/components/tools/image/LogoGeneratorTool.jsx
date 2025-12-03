"use client";

import { useState, useRef } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Download,
    Rocket,
    Zap,
    Star,
    Heart,
    Globe,
    Briefcase,
    Coffee,
    Code,
    Music,
    Camera,
    Smile,
    Sun,
    Moon,
    Cloud,
    Droplet,
    Flame,
    Anchor,
    Feather,
    Key,
    Lock,
} from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";

const FONTS = [
    { id: "inter", label: "Inter (Modern)", family: "Inter, sans-serif" },
    { id: "serif", label: "Serif (Classic)", family: "serif" },
    { id: "mono", label: "Monospace (Tech)", family: "monospace" },
    { id: "cursive", label: "Cursive (Creative)", family: "cursive" },
    { id: "fantasy", label: "Fantasy (Bold)", family: "fantasy" },
];

const ICONS = [
    { id: "rocket", label: "Rocket", icon: Rocket },
    { id: "zap", label: "Lightning", icon: Zap },
    { id: "star", label: "Star", icon: Star },
    { id: "heart", label: "Heart", icon: Heart },
    { id: "globe", label: "Globe", icon: Globe },
    { id: "briefcase", label: "Briefcase", icon: Briefcase },
    { id: "coffee", label: "Coffee", icon: Coffee },
    { id: "code", label: "Code", icon: Code },
    { id: "music", label: "Music", icon: Music },
    { id: "camera", label: "Camera", icon: Camera },
    { id: "smile", label: "Smile", icon: Smile },
    { id: "sun", label: "Sun", icon: Sun },
    { id: "moon", label: "Moon", icon: Moon },
    { id: "cloud", label: "Cloud", icon: Cloud },
    { id: "droplet", label: "Droplet", icon: Droplet },
    { id: "flame", label: "Flame", icon: Flame },
    { id: "anchor", label: "Anchor", icon: Anchor },
    { id: "feather", label: "Feather", icon: Feather },
    { id: "key", label: "Key", icon: Key },
    { id: "lock", label: "Lock", icon: Lock },
];

const LAYOUTS = [
    { id: "left", label: "Icon Left" },
    { id: "top", label: "Icon Top" },
    { id: "right", label: "Icon Right" },
];

export default function LogoGeneratorTool() {
    const [text, setText] = useState("My Brand");
    const [tagline, setTagline] = useState("");
    const [font, setFont] = useState("inter");
    const [iconId, setIconId] = useState("rocket");
    const [layout, setLayout] = useState("left");
    const [textColor, setTextColor] = useState("#000000");
    const [iconColor, setIconColor] = useState("#2563eb");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [fontSize, setFontSize] = useState(48);
    const [iconSize, setIconSize] = useState(64);
    const [gap, setGap] = useState(16);
    const [isExporting, setIsExporting] = useState(false);
    const logoRef = useRef(null);

    const SelectedIcon = ICONS.find((i) => i.id === iconId)?.icon || Rocket;
    const selectedFontFamily = FONTS.find((f) => f.id === font)?.family;

    const downloadLogo = async () => {
        if (!logoRef.current) return;

        setIsExporting(true);
        try {
            const canvas = await html2canvas(logoRef.current, {
                useCORS: true,
                scale: 4, // High resolution
                backgroundColor: null, // Transparent background
            });

            const link = document.createElement("a");
            link.download = "my-logo.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
            toast.success("Logo downloaded successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate logo.");
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Controls */}
            <div className="space-y-6 lg:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Logo Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <Label>Brand Name</Label>
                                <Input
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Enter brand name"
                                />
                            </div>
                            <div>
                                <Label>Tagline (Optional)</Label>
                                <Input
                                    value={tagline}
                                    onChange={(e) => setTagline(e.target.value)}
                                    placeholder="Enter tagline"
                                />
                            </div>
                        </div>

                        <div>
                            <Label>Icon</Label>
                            <Select value={iconId} onValueChange={setIconId}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {ICONS.map((icon) => (
                                        <SelectItem key={icon.id} value={icon.id}>
                                            <div className="flex items-center gap-2">
                                                <icon.icon className="w-4 h-4" />
                                                {icon.label}
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label>Font</Label>
                            <Select value={font} onValueChange={setFont}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {FONTS.map((f) => (
                                        <SelectItem key={f.id} value={f.id}>
                                            <span style={{ fontFamily: f.family }}>{f.label}</span>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label>Layout</Label>
                            <div className="grid grid-cols-3 gap-2 mt-2">
                                {LAYOUTS.map((l) => (
                                    <Button
                                        key={l.id}
                                        variant={layout === l.id ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setLayout(l.id)}
                                    >
                                        {l.label}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <Label>Text Color</Label>
                                <div className="flex gap-2 mt-2">
                                    <Input
                                        type="color"
                                        value={textColor}
                                        onChange={(e) => setTextColor(e.target.value)}
                                        className="w-12 h-10 p-1 cursor-pointer"
                                    />
                                    <Input
                                        type="text"
                                        value={textColor}
                                        onChange={(e) => setTextColor(e.target.value)}
                                        className="flex-1"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label>Icon Color</Label>
                                <div className="flex gap-2 mt-2">
                                    <Input
                                        type="color"
                                        value={iconColor}
                                        onChange={(e) => setIconColor(e.target.value)}
                                        className="w-12 h-10 p-1 cursor-pointer"
                                    />
                                    <Input
                                        type="text"
                                        value={iconColor}
                                        onChange={(e) => setIconColor(e.target.value)}
                                        className="flex-1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <Label>Font Size ({fontSize}px)</Label>
                                <Slider
                                    value={[fontSize]}
                                    onValueChange={(v) => setFontSize(v[0])}
                                    min={24}
                                    max={120}
                                    step={1}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label>Icon Size ({iconSize}px)</Label>
                                <Slider
                                    value={[iconSize]}
                                    onValueChange={(v) => setIconSize(v[0])}
                                    min={24}
                                    max={120}
                                    step={1}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <Label>Spacing ({gap}px)</Label>
                                <Slider
                                    value={[gap]}
                                    onValueChange={(v) => setGap(v[0])}
                                    min={0}
                                    max={60}
                                    step={1}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <Button
                            className="w-full"
                            onClick={downloadLogo}
                            disabled={isExporting}
                        >
                            <Download className="w-4 h-4 mr-2" />
                            {isExporting ? "Generating..." : "Download Logo"}
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Preview */}
            <div className="lg:col-span-2">
                <Card className="h-full min-h-[500px] flex items-center justify-center bg-gray-50/50 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                        <div className="grid grid-cols-12 gap-4 w-full h-full">
                            {Array.from({ length: 144 }).map((_, i) => (
                                <div key={i} className="border border-gray-300/50" />
                            ))}
                        </div>
                    </div>

                    <CardContent className="p-12 w-full flex items-center justify-center">
                        <div
                            ref={logoRef}
                            className="p-12 rounded-xl bg-transparent flex items-center justify-center"
                            style={{
                                flexDirection: layout === "top" ? "column" : layout === "right" ? "row-reverse" : "row",
                                gap: `${gap}px`,
                            }}
                        >
                            <SelectedIcon
                                style={{
                                    width: `${iconSize}px`,
                                    height: `${iconSize}px`,
                                    color: iconColor,
                                }}
                            />
                            <div className="flex flex-col" style={{
                                alignItems: layout === "top" ? "center" : "flex-start",
                                textAlign: layout === "top" ? "center" : "left",
                            }}>
                                <h2
                                    style={{
                                        fontFamily: selectedFontFamily,
                                        fontSize: `${fontSize}px`,
                                        color: textColor,
                                        lineHeight: 1,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {text}
                                </h2>
                                {tagline && (
                                    <p
                                        style={{
                                            fontFamily: selectedFontFamily,
                                            fontSize: `${fontSize * 0.4}px`,
                                            color: textColor,
                                            opacity: 0.8,
                                            marginTop: "4px",
                                        }}
                                    >
                                        {tagline}
                                    </p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

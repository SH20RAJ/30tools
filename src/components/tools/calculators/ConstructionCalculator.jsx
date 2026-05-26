"use client";

import React, { useState, useMemo } from "react";
import { Calculator, ToyBrick, Eye, Paintbrush } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ConstructionCalculator({ defaultTab = "brick" }) {
    const [activeTab, setActiveTab] = useState(defaultTab); // "brick", "tile", "paint"

    // Brick Calculator States
    const [wallLength, setWallLength] = useState("10"); // feet
    const [wallHeight, setWallHeight] = useState("10"); // feet
    const [wallThickness, setWallThickness] = useState("9"); // inches (4.5 or 9)
    const [brickLength, setBrickLength] = useState("9"); // inches
    const [brickWidth, setBrickWidth] = useState("4.5"); // inches
    const [brickHeight, setBrickHeight] = useState("3"); // inches
    
    // Tile Calculator States
    const [floorLength, setFloorLength] = useState("12"); // feet
    const [floorWidth, setFloorWidth] = useState("12"); // feet
    const [tileLength, setTileLength] = useState("2"); // feet
    const [tileWidth, setTileWidth] = useState("2"); // feet
    const [wastage, setWastage] = useState("10"); // percent

    // Paint Calculator States
    const [roomLength, setRoomLength] = useState("12"); // feet
    const [roomWidth, setRoomWidth] = useState("12"); // feet
    const [roomHeight, setRoomHeight] = useState("10"); // feet
    const [coats, setCoats] = useState("2"); // count
    const [doorsCount, setDoorsCount] = useState("1");
    const [windowsCount, setWindowsCount] = useState("2");

    // --- BRICK CALCULATIONS ---
    const brickResult = useMemo(() => {
        const wl = parseFloat(wallLength) || 0;
        const wh = parseFloat(wallHeight) || 0;
        const wt = parseFloat(wallThickness) || 9; // inches
        
        // Wall volume in cubic feet (CFT)
        const wallVolumeCft = wl * wh * (wt / 12);
        
        // Single brick size in inches (including 0.5 inch mortar joint)
        const bl = parseFloat(brickLength) || 9;
        const bw = parseFloat(brickWidth) || 4.5;
        const bh = parseFloat(brickHeight) || 3;
        
        // Single brick volume in CFT
        const singleBrickVolCft = (bl * bw * bh) / 1728;
        
        // Brick count with mortar adjustments (standard rule: approx 11.7 bricks per CFT for 9" wall including joints)
        // Volume with joint: (bl + 0.5) * (bw + 0.5) * (bh + 0.5)
        const brickVolWithJointCft = ((bl + 0.5) * (bw + 0.5) * (bh + 0.5)) / 1728;
        
        const bricksNeeded = Math.ceil(wallVolumeCft / brickVolWithJointCft);
        
        // Mortar volume calculation (typically 30% of wall volume)
        const mortarVolumeCft = wallVolumeCft * 0.30;
        
        // Assuming 1:6 ratio (1 cement, 6 sand)
        // Wet volume to dry volume factor = 1.33
        const dryVolumeCft = mortarVolumeCft * 1.33;
        const cementRatioPart = 1 / 7;
        const sandRatioPart = 6 / 7;
        
        const cementVolumeCft = dryVolumeCft * cementRatioPart;
        // 1 bag of cement is 1.226 cubic feet (or 35 liters)
        const cementBags = Math.ceil(cementVolumeCft / 1.226);
        const sandVolumeCft = dryVolumeCft * sandRatioPart;

        return {
            bricks: bricksNeeded,
            cementBags: cementBags,
            sandCft: sandVolumeCft.toFixed(1),
            volumeCft: wallVolumeCft.toFixed(1)
        };
    }, [wallLength, wallHeight, wallThickness, brickLength, brickWidth, brickHeight]);

    // --- TILE CALCULATIONS ---
    const tileResult = useMemo(() => {
        const fl = parseFloat(floorLength) || 0;
        const fw = parseFloat(floorWidth) || 0;
        const tl = parseFloat(tileLength) || 2; // feet
        const tw = parseFloat(tileWidth) || 2; // feet
        const wst = parseFloat(wastage) || 10;

        const totalAreaSqft = fl * fw;
        const tileAreaSqft = tl * tw;
        
        const rawTilesNeeded = totalAreaSqft / tileAreaSqft;
        const wastageAmount = rawTilesNeeded * (wst / 100);
        const totalTilesNeeded = Math.ceil(rawTilesNeeded + wastageAmount);

        return {
            areaSqft: totalAreaSqft.toFixed(1),
            tiles: totalTilesNeeded,
            wastageTiles: Math.ceil(wastageAmount)
        };
    }, [floorLength, floorWidth, tileLength, tileWidth, wastage]);

    // --- PAINT CALCULATIONS ---
    const paintResult = useMemo(() => {
        const rl = parseFloat(roomLength) || 0;
        const rw = parseFloat(roomWidth) || 0;
        const rh = parseFloat(roomHeight) || 0;
        const ct = parseInt(coats) || 2;
        const doors = parseInt(doorsCount) || 0;
        const windows = parseInt(windowsCount) || 0;

        // Perimeter = 2 * (L + W)
        // Total Wall Area = Perimeter * Height
        const perimeter = 2 * (rl + rw);
        let wallArea = perimeter * rh;
        
        // Subtract door and window openings (standard door is 21 sq ft, window is 12 sq ft)
        const doorOmissions = doors * 21;
        const windowOmissions = windows * 12;
        
        wallArea = Math.max(0, wallArea - (doorOmissions + windowOmissions));
        
        // Paint coverage: Standard paint covers about 350 sq ft per gallon (1 coat)
        // Or approx 35 sq ft per liter (or 10-12 sq m per liter)
        // Let's calculate in liters. 1 gallon = 3.785 liters. So 1 liter covers approx 90 sq ft.
        const coveragePerLiter = 90; // sq ft per liter
        
        const litersNeeded = (wallArea * ct) / coveragePerLiter;

        return {
            areaSqft: wallArea.toFixed(1),
            liters: litersNeeded.toFixed(1),
            gallons: (litersNeeded / 3.785).toFixed(1)
        };
    }, [roomLength, roomWidth, roomHeight, coats, doorsCount, windowsCount]);

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
            {/* Tab navigation */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-muted/40 border border-border/20 rounded-lg">
                <button
                    onClick={() => setActiveTab("brick")}
                    className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                        activeTab === "brick"
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <ToyBrick className="h-4 w-4" />
                    Brick Calculator
                </button>
                <button
                    onClick={() => setActiveTab("tile")}
                    className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                        activeTab === "tile"
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <Calculator className="h-4 w-4" />
                    Tile Calculator
                </button>
                <button
                    onClick={() => setActiveTab("paint")}
                    className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                        activeTab === "paint"
                            ? "bg-primary text-primary-foreground shadow"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <Paintbrush className="h-4 w-4" />
                    Paint Calculator
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Inputs */}
                <div className="lg:col-span-7 space-y-6">
                    <Card className="border border-border/40 bg-card/20 backdrop-blur-sm shadow-md">
                        <CardContent className="p-6 space-y-6">
                            
                            {/* Brick Calculator Tab */}
                            {activeTab === "brick" && (
                                <div className="space-y-4">
                                    <h3 className="font-bold text-sm text-primary uppercase">Wall Dimensions</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="wall-length-input">Wall Length (ft)</Label>
                                            <Input
                                                id="wall-length-input"
                                                type="number"
                                                value={wallLength}
                                                onChange={(e) => setWallLength(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="wall-height-input">Wall Height (ft)</Label>
                                            <Input
                                                id="wall-height-input"
                                                type="number"
                                                value={wallHeight}
                                                onChange={(e) => setWallHeight(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="wall-thickness-select">Wall Thickness</Label>
                                            <Select value={wallThickness} onValueChange={setWallThickness}>
                                                <SelectTrigger id="wall-thickness-select">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="4.5">Single/Half Wall (4.5 in)</SelectItem>
                                                    <SelectItem value="9">Double/Full Wall (9.0 in)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-sm text-primary uppercase pt-2">Single Brick Size (inches)</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="brick-length">Length (in)</Label>
                                            <Input
                                                id="brick-length"
                                                type="number"
                                                value={brickLength}
                                                onChange={(e) => setBrickLength(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="brick-width">Width (in)</Label>
                                            <Input
                                                id="brick-width"
                                                type="number"
                                                value={brickWidth}
                                                onChange={(e) => setBrickWidth(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="brick-height">Height (in)</Label>
                                            <Input
                                                id="brick-height"
                                                type="number"
                                                value={brickHeight}
                                                onChange={(e) => setBrickHeight(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tile Calculator Tab */}
                            {activeTab === "tile" && (
                                <div className="space-y-4">
                                    <h3 className="font-bold text-sm text-primary uppercase">Floor / Room Size</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="floor-length">Length (ft)</Label>
                                            <Input
                                                id="floor-length"
                                                type="number"
                                                value={floorLength}
                                                onChange={(e) => setFloorLength(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="floor-width">Width (ft)</Label>
                                            <Input
                                                id="floor-width"
                                                type="number"
                                                value={floorWidth}
                                                onChange={(e) => setFloorWidth(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-sm text-primary uppercase pt-2">Tile Specifications</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="tile-length">Tile Length (ft)</Label>
                                            <Input
                                                id="tile-length"
                                                type="number"
                                                value={tileLength}
                                                onChange={(e) => setTileLength(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="tile-width">Tile Width (ft)</Label>
                                            <Input
                                                id="tile-width"
                                                type="number"
                                                value={tileWidth}
                                                onChange={(e) => setTileWidth(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="wastage-select">Wastage Margin (%)</Label>
                                            <Select value={wastage} onValueChange={setWastage}>
                                                <SelectTrigger id="wastage-select">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="5">Standard (5% waste)</SelectItem>
                                                    <SelectItem value="10">Recommended (10% waste)</SelectItem>
                                                    <SelectItem value="15">Complex layouts (15% waste)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Paint Calculator Tab */}
                            {activeTab === "paint" && (
                                <div className="space-y-4">
                                    <h3 className="font-bold text-sm text-primary uppercase">Room Area Details</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="room-length">Room Length (ft)</Label>
                                            <Input
                                                id="room-length"
                                                type="number"
                                                value={roomLength}
                                                onChange={(e) => setRoomLength(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="room-width">Room Width (ft)</Label>
                                            <Input
                                                id="room-width"
                                                type="number"
                                                value={roomWidth}
                                                onChange={(e) => setRoomWidth(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="room-height">Wall Height (ft)</Label>
                                            <Input
                                                id="room-height"
                                                type="number"
                                                value={roomHeight}
                                                onChange={(e) => setRoomHeight(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-sm text-primary uppercase pt-2">Additional Specifications</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="coats-select">Coats count</Label>
                                            <Select value={coats} onValueChange={setCoats}>
                                                <SelectTrigger id="coats-select">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">1 Coat (Touch-up)</SelectItem>
                                                    <SelectItem value="2">2 Coats (Standard)</SelectItem>
                                                    <SelectItem value="3">3 Coats (Deep Cover)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="doors-count">Doors count</Label>
                                            <Input
                                                id="doors-count"
                                                type="number"
                                                value={doorsCount}
                                                onChange={(e) => setDoorsCount(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="windows-count">Windows count</Label>
                                            <Input
                                                id="windows-count"
                                                type="number"
                                                value={windowsCount}
                                                onChange={(e) => setWindowsCount(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                        </CardContent>
                    </Card>
                </div>

                {/* Output Panel */}
                <div className="lg:col-span-5 space-y-6">
                    <Card className="border-2 border-primary/10 bg-card/30 backdrop-blur-sm shadow-xl min-h-[300px] flex flex-col justify-between">
                        <CardContent className="p-6 flex-1 flex flex-col justify-center space-y-6">
                            
                            {/* Brick Results */}
                            {activeTab === "brick" && (
                                <div className="space-y-4 text-left">
                                    <h4 className="text-sm font-bold uppercase text-muted-foreground text-center flex items-center justify-center gap-1.5">
                                        <Eye className="h-4.5 w-4.5 text-primary" /> Material Estimation
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2 text-xs bg-primary/5 border border-primary/10 p-3 rounded">
                                        <div>
                                            <span className="block text-muted-foreground uppercase text-[10px]">Bricks Required</span>
                                            <span className="font-bold text-lg font-mono text-primary">{brickResult.bricks} pcs</span>
                                        </div>
                                        <div>
                                            <span className="block text-muted-foreground uppercase text-[10px]">Cement Bags (1:6)</span>
                                            <span className="font-bold text-lg font-mono text-primary">{brickResult.cementBags} bags</span>
                                        </div>
                                        <div className="col-span-2 pt-2 border-t border-border/10">
                                            <span className="block text-muted-foreground uppercase text-[10px]">Sand Volume</span>
                                            <span className="font-bold text-lg font-mono text-primary">{brickResult.sandCft} CFT</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-center text-muted-foreground">
                                        Calculated for a total wall volume of <strong>{brickResult.volumeCft} cubic feet</strong>.
                                    </p>
                                </div>
                            )}

                            {/* Tile Results */}
                            {activeTab === "tile" && (
                                <div className="space-y-4 text-left">
                                    <h4 className="text-sm font-bold uppercase text-muted-foreground text-center flex items-center justify-center gap-1.5">
                                        <Eye className="h-4.5 w-4.5 text-primary" /> Tile Estimation
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2 text-xs bg-primary/5 border border-primary/10 p-3 rounded">
                                        <div>
                                            <span className="block text-muted-foreground uppercase text-[10px]">Total Tiles Needed</span>
                                            <span className="font-bold text-lg font-mono text-primary">{tileResult.tiles} pcs</span>
                                        </div>
                                        <div>
                                            <span className="block text-muted-foreground uppercase text-[10px]">Wastage Included</span>
                                            <span className="font-bold text-lg font-mono text-primary">{tileResult.wastageTiles} pcs</span>
                                        </div>
                                        <div className="col-span-2 pt-2 border-t border-border/10">
                                            <span className="block text-muted-foreground uppercase text-[10px]">Total Floor Area</span>
                                            <span className="font-bold text-lg font-mono text-primary">{tileResult.areaSqft} Sq. Ft</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Paint Results */}
                            {activeTab === "paint" && (
                                <div className="space-y-4 text-left">
                                    <h4 className="text-sm font-bold uppercase text-muted-foreground text-center flex items-center justify-center gap-1.5">
                                        <Eye className="h-4.5 w-4.5 text-primary" /> Paint Estimation
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2 text-xs bg-primary/5 border border-primary/10 p-3 rounded">
                                        <div>
                                            <span className="block text-muted-foreground uppercase text-[10px]">Paint Quantity</span>
                                            <span className="font-bold text-lg font-mono text-primary">{paintResult.liters} Liters</span>
                                        </div>
                                        <div>
                                            <span className="block text-muted-foreground uppercase text-[10px]">Gallons Equivalent</span>
                                            <span className="font-bold text-lg font-mono text-primary">{paintResult.gallons} Gal</span>
                                        </div>
                                        <div className="col-span-2 pt-2 border-t border-border/10">
                                            <span className="block text-muted-foreground uppercase text-[10px]">Coverage Wall Area</span>
                                            <span className="font-bold text-lg font-mono text-primary">{paintResult.areaSqft} Sq. Ft</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

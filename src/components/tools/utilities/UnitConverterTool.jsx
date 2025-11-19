"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeftIcon,
  ArrowRightLeftIcon,
  CopyIcon,
  RulerIcon,
  ScaleIcon,
  ThermometerIcon,
  FlaskConicalIcon,
  SquareIcon,
  TimerIcon,
  ZapIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";

export default function UnitConverterTool() {
  const [activeCategory, setActiveCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("feet");
  const [fromValue, setFromValue] = useState("1");
  const [toValue, setToValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);

  // Unit definitions with conversion factors to base unit
  const unitCategories = {
    length: {
      name: "Length",
      icon: <RulerIcon className="h-4 w-4" />,
      baseUnit: "meter",
      units: {
        // Metric
        meter: { name: "Meter", symbol: "m", factor: 1, category: "Metric" },
        kilometer: {
          name: "Kilometer",
          symbol: "km",
          factor: 1000,
          category: "Metric",
        },
        centimeter: {
          name: "Centimeter",
          symbol: "cm",
          factor: 0.01,
          category: "Metric",
        },
        millimeter: {
          name: "Millimeter",
          symbol: "mm",
          factor: 0.001,
          category: "Metric",
        },
        // Imperial
        foot: {
          name: "Foot",
          symbol: "ft",
          factor: 0.3048,
          category: "Imperial",
        },
        inch: {
          name: "Inch",
          symbol: "in",
          factor: 0.0254,
          category: "Imperial",
        },
        yard: {
          name: "Yard",
          symbol: "yd",
          factor: 0.9144,
          category: "Imperial",
        },
        mile: {
          name: "Mile",
          symbol: "mi",
          factor: 1609.344,
          category: "Imperial",
        },
        // Nautical
        nauticalMile: {
          name: "Nautical Mile",
          symbol: "nmi",
          factor: 1852,
          category: "Nautical",
        },
      },
    },
    weight: {
      name: "Weight",
      icon: <ScaleIcon className="h-4 w-4" />,
      baseUnit: "kilogram",
      units: {
        // Metric
        kilogram: {
          name: "Kilogram",
          symbol: "kg",
          factor: 1,
          category: "Metric",
        },
        gram: { name: "Gram", symbol: "g", factor: 0.001, category: "Metric" },
        tonne: { name: "Tonne", symbol: "t", factor: 1000, category: "Metric" },
        // Imperial
        pound: {
          name: "Pound",
          symbol: "lb",
          factor: 0.453592,
          category: "Imperial",
        },
        ounce: {
          name: "Ounce",
          symbol: "oz",
          factor: 0.0283495,
          category: "Imperial",
        },
        stone: {
          name: "Stone",
          symbol: "st",
          factor: 6.35029,
          category: "Imperial",
        },
        ton: {
          name: "Ton (US)",
          symbol: "ton",
          factor: 907.185,
          category: "Imperial",
        },
      },
    },
    temperature: {
      name: "Temperature",
      icon: <ThermometerIcon className="h-4 w-4" />,
      baseUnit: "celsius",
      units: {
        celsius: { name: "Celsius", symbol: "°C", category: "Metric" },
        fahrenheit: { name: "Fahrenheit", symbol: "°F", category: "Imperial" },
        kelvin: { name: "Kelvin", symbol: "K", category: "Scientific" },
        rankine: { name: "Rankine", symbol: "°R", category: "Scientific" },
      },
    },
    volume: {
      name: "Volume",
      icon: <FlaskConicalIcon className="h-4 w-4" />,
      baseUnit: "liter",
      units: {
        // Metric
        liter: { name: "Liter", symbol: "L", factor: 1, category: "Metric" },
        milliliter: {
          name: "Milliliter",
          symbol: "mL",
          factor: 0.001,
          category: "Metric",
        },
        cubicMeter: {
          name: "Cubic Meter",
          symbol: "m³",
          factor: 1000,
          category: "Metric",
        },
        // Imperial
        gallon: {
          name: "Gallon (US)",
          symbol: "gal",
          factor: 3.78541,
          category: "Imperial",
        },
        quart: {
          name: "Quart (US)",
          symbol: "qt",
          factor: 0.946353,
          category: "Imperial",
        },
        pint: {
          name: "Pint (US)",
          symbol: "pt",
          factor: 0.473176,
          category: "Imperial",
        },
        cup: {
          name: "Cup (US)",
          symbol: "cup",
          factor: 0.236588,
          category: "Imperial",
        },
        fluidOunce: {
          name: "Fluid Ounce (US)",
          symbol: "fl oz",
          factor: 0.0295735,
          category: "Imperial",
        },
      },
    },
    area: {
      name: "Area",
      icon: <SquareIcon className="h-4 w-4" />,
      baseUnit: "squareMeter",
      units: {
        // Metric
        squareMeter: {
          name: "Square Meter",
          symbol: "m²",
          factor: 1,
          category: "Metric",
        },
        squareKilometer: {
          name: "Square Kilometer",
          symbol: "km²",
          factor: 1000000,
          category: "Metric",
        },
        squareCentimeter: {
          name: "Square Centimeter",
          symbol: "cm²",
          factor: 0.0001,
          category: "Metric",
        },
        hectare: {
          name: "Hectare",
          symbol: "ha",
          factor: 10000,
          category: "Metric",
        },
        // Imperial
        squareFoot: {
          name: "Square Foot",
          symbol: "ft²",
          factor: 0.092903,
          category: "Imperial",
        },
        squareInch: {
          name: "Square Inch",
          symbol: "in²",
          factor: 0.00064516,
          category: "Imperial",
        },
        squareYard: {
          name: "Square Yard",
          symbol: "yd²",
          factor: 0.836127,
          category: "Imperial",
        },
        acre: {
          name: "Acre",
          symbol: "ac",
          factor: 4046.86,
          category: "Imperial",
        },
      },
    },
    speed: {
      name: "Speed",
      icon: <TimerIcon className="h-4 w-4" />,
      baseUnit: "meterPerSecond",
      units: {
        meterPerSecond: {
          name: "Meter per Second",
          symbol: "m/s",
          factor: 1,
          category: "Metric",
        },
        kilometerPerHour: {
          name: "Kilometer per Hour",
          symbol: "km/h",
          factor: 0.277778,
          category: "Metric",
        },
        milePerHour: {
          name: "Mile per Hour",
          symbol: "mph",
          factor: 0.44704,
          category: "Imperial",
        },
        footPerSecond: {
          name: "Foot per Second",
          symbol: "ft/s",
          factor: 0.3048,
          category: "Imperial",
        },
        knot: {
          name: "Knot",
          symbol: "kn",
          factor: 0.514444,
          category: "Nautical",
        },
      },
    },
  };

  // Convert temperature (special case)
  const convertTemperature = (value, fromUnit, toUnit) => {
    const num = parseFloat(value);
    if (isNaN(num)) return "";

    let celsius;

    // Convert to Celsius first
    switch (fromUnit) {
      case "celsius":
        celsius = num;
        break;
      case "fahrenheit":
        celsius = ((num - 32) * 5) / 9;
        break;
      case "kelvin":
        celsius = num - 273.15;
        break;
      case "rankine":
        celsius = ((num - 491.67) * 5) / 9;
        break;
      default:
        return "";
    }

    // Convert from Celsius to target
    switch (toUnit) {
      case "celsius":
        return celsius.toFixed(6);
      case "fahrenheit":
        return ((celsius * 9) / 5 + 32).toFixed(6);
      case "kelvin":
        return (celsius + 273.15).toFixed(6);
      case "rankine":
        return ((celsius * 9) / 5 + 491.67).toFixed(6);
      default:
        return "";
    }
  };

  // Convert regular units using factors
  const convertUnit = (value, fromUnit, toUnit, category) => {
    const num = parseFloat(value);
    if (isNaN(num)) return "";

    if (category === "temperature") {
      return convertTemperature(value, fromUnit, toUnit);
    }

    const categoryData = unitCategories[category];
    const fromFactor = categoryData.units[fromUnit]?.factor || 1;
    const toFactor = categoryData.units[toUnit]?.factor || 1;

    // Convert to base unit, then to target unit
    const baseValue = num * fromFactor;
    const convertedValue = baseValue / toFactor;

    return convertedValue.toFixed(6);
  };

  // Handle conversion
  useEffect(() => {
    if (fromValue && fromUnit && toUnit) {
      const result = convertUnit(fromValue, fromUnit, toUnit, activeCategory);
      setToValue(result);
    }
  }, [fromValue, fromUnit, toUnit, activeCategory]);

  // Initialize units when category changes
  useEffect(() => {
    const categoryData = unitCategories[activeCategory];
    const unitKeys = Object.keys(categoryData.units);
    setFromUnit(unitKeys[0]);
    setToUnit(unitKeys[1] || unitKeys[0]);
    setFromValue("1");
  }, [activeCategory]);

  const swapUnits = () => {
    const tempUnit = fromUnit;
    const tempValue = fromValue;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    setFromValue(toValue);
  };

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(toValue);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const addToFavorites = () => {
    const conversion = {
      id: Date.now(),
      category: activeCategory,
      fromUnit,
      toUnit,
      fromValue,
      toValue,
    };
    setFavorites((prev) => [...prev, conversion]);
  };

  const formatResult = (value) => {
    if (!value) return "0";
    const num = parseFloat(value);
    if (num === 0) return "0";

    // Remove trailing zeros
    return parseFloat(num.toFixed(6)).toString();
  };

  const categoryData = unitCategories[activeCategory];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <RulerIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Unit Converter</h1>
              <p className="text-muted-foreground">
                Convert between metric and imperial units instantly
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">20+ Categories</Badge>
            <Badge variant="secondary">Metric & Imperial</Badge>
            <Badge variant="secondary">High Precision</Badge>
            <Badge variant="secondary">Instant Results</Badge>
            <Badge variant="secondary">Mobile Friendly</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Converter */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Category</CardTitle>
                <CardDescription>
                  Choose the type of units you want to convert
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(unitCategories).map(([key, category]) => (
                    <Button
                      key={key}
                      variant={activeCategory === key ? "default" : "outline"}
                      className="h-16 flex-col gap-2"
                      onClick={() => setActiveCategory(key)}
                    >
                      {category.icon}
                      <span className="text-sm">{category.name}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conversion Interface */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {categoryData.icon}
                  {categoryData.name} Converter
                </CardTitle>
                <CardDescription>
                  Convert between different units of{" "}
                  {categoryData.name.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* From Unit */}
                <div className="space-y-2">
                  <Label>From</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="number"
                      value={fromValue}
                      onChange={(e) => setFromValue(e.target.value)}
                      placeholder="Enter value"
                      className="text-lg"
                    />
                    <Select value={fromUnit} onValueChange={setFromUnit}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(categoryData.units).map(
                          ([key, unit]) => (
                            <SelectItem key={key} value={key}>
                              {unit.name} ({unit.symbol})
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={swapUnits}
                    className="rounded-full"
                  >
                    <ArrowRightLeftIcon className="h-4 w-4" />
                  </Button>
                </div>

                {/* To Unit */}
                <div className="space-y-2">
                  <Label>To</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <Input
                        type="text"
                        value={formatResult(toValue)}
                        readOnly
                        className="text-lg font-mono bg-muted"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyResult}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                      >
                        <CopyIcon className="h-3 w-3" />
                      </Button>
                    </div>
                    <Select value={toUnit} onValueChange={setToUnit}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(categoryData.units).map(
                          ([key, unit]) => (
                            <SelectItem key={key} value={key}>
                              {unit.name} ({unit.symbol})
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Result Display */}
                {toValue && (
                  <div className="p-4 bg-muted/50 rounded-lg border border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">
                        {formatResult(fromValue)}{" "}
                        {categoryData.units[fromUnit].symbol} ={" "}
                        {formatResult(toValue)}{" "}
                        {categoryData.units[toUnit].symbol}
                      </div>
                      <div className="text-sm text-primary mt-1">
                        {categoryData.units[fromUnit].name} to{" "}
                        {categoryData.units[toUnit].name}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={addToFavorites}
                    disabled={!toValue}
                  >
                    <StarIcon className="h-4 w-4 mr-2" />
                    Add to Favorites
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Conversions */}
            <Card>
              <CardHeader>
                <CardTitle>Popular {categoryData.name} Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory === "length" &&
                    [
                      { from: "1 meter", to: "3.28 feet" },
                      { from: "1 kilometer", to: "0.62 miles" },
                      { from: "1 inch", to: "2.54 centimeters" },
                      { from: "1 yard", to: "0.91 meters" },
                    ].map((conv, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center p-3 bg-muted rounded-lg"
                      >
                        <span className="font-medium">{conv.from}</span>
                        <span>=</span>
                        <span className="font-medium">{conv.to}</span>
                      </div>
                    ))}

                  {activeCategory === "weight" &&
                    [
                      { from: "1 kilogram", to: "2.20 pounds" },
                      { from: "1 pound", to: "453.59 grams" },
                      { from: "1 ounce", to: "28.35 grams" },
                      { from: "1 stone", to: "6.35 kilograms" },
                    ].map((conv, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center p-3 bg-muted rounded-lg"
                      >
                        <span className="font-medium">{conv.from}</span>
                        <span>=</span>
                        <span className="font-medium">{conv.to}</span>
                      </div>
                    ))}

                  {activeCategory === "temperature" &&
                    [
                      { from: "0°C", to: "32°F" },
                      { from: "100°C", to: "212°F" },
                      { from: "20°C", to: "68°F" },
                      { from: "37°C", to: "98.6°F" },
                    ].map((conv, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center p-3 bg-muted rounded-lg"
                      >
                        <span className="font-medium">{conv.from}</span>
                        <span>=</span>
                        <span className="font-medium">{conv.to}</span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Unit Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Available Units</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="metric">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="metric">Metric</TabsTrigger>
                    <TabsTrigger value="imperial">Imperial</TabsTrigger>
                  </TabsList>

                  <TabsContent value="metric" className="space-y-2">
                    {Object.entries(categoryData.units)
                      .filter(([_, unit]) => unit.category === "Metric")
                      .map(([key, unit]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center p-2 border rounded"
                        >
                          <span className="font-medium">{unit.name}</span>
                          <Badge variant="outline">{unit.symbol}</Badge>
                        </div>
                      ))}
                  </TabsContent>

                  <TabsContent value="imperial" className="space-y-2">
                    {Object.entries(categoryData.units)
                      .filter(([_, unit]) => unit.category === "Imperial")
                      .map(([key, unit]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center p-2 border rounded"
                        >
                          <span className="font-medium">{unit.name}</span>
                          <Badge variant="outline">{unit.symbol}</Badge>
                        </div>
                      ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ZapIcon className="h-4 w-4 text-primary" />
                    <span>Instant conversions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <RulerIcon className="h-4 w-4 text-primary" />
                    <span>High precision results</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRightLeftIcon className="h-4 w-4 text-primary" />
                    <span>Bidirectional conversion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CopyIcon className="h-4 w-4 text-primary" />
                    <span>Copy results easily</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <StarIcon className="h-4 w-4 text-primary" />
                    <span>Save favorites</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Common Conversions */}
            <Card>
              <CardHeader>
                <CardTitle>Most Searched</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>• Feet to meters</div>
                  <div>• Celsius to Fahrenheit</div>
                  <div>• Pounds to kilograms</div>
                  <div>• Miles to kilometers</div>
                  <div>• Gallons to liters</div>
                  <div>• Square feet to square meters</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Popular Unit Conversions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <RulerIcon className="h-4 w-4" />
                    Length Conversions
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Meters to feet and inches</li>
                    <li>• Kilometers to miles</li>
                    <li>• Inches to centimeters</li>
                    <li>• Yards to meters</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <ScaleIcon className="h-4 w-4" />
                    Weight Conversions
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Kilograms to pounds</li>
                    <li>• Pounds to grams</li>
                    <li>• Ounces to grams</li>
                    <li>• Stones to kilograms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <ThermometerIcon className="h-4 w-4" />
                    Temperature Conversions
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Celsius to Fahrenheit</li>
                    <li>• Fahrenheit to Celsius</li>
                    <li>• Kelvin to Celsius</li>
                    <li>• Celsius to Kelvin</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* SEO Footer */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Professional Unit Converter - Free & Accurate
            </h2>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p className="mb-4">
                <strong>Convert units of measurement online for free</strong>{" "}
                with our comprehensive unit converter. Support for length,
                weight, temperature, volume, area, and speed conversions between
                metric and imperial systems. Essential tool for students,
                engineers, scientists, and professionals.
              </p>
              <p className="mb-4">
                <strong>Popular conversions include:</strong> feet to meters,
                celsius to fahrenheit, pounds to kilograms, miles to kilometers,
                gallons to liters, and many more. Our converter provides
                high-precision results with instant calculation and easy copy
                functionality.
              </p>
              <p>
                <strong>Features:</strong> 20+ unit categories, metric and
                imperial system support, bidirectional conversion, favorites
                system, mobile-optimized interface, and professional-grade
                accuracy. Perfect for engineering calculations, cooking
                measurements, travel planning, and academic work.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

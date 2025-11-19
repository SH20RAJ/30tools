"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function BMICalculatorTool() {
  const [units, setUnits] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    let heightInMeters, weightInKg;

    if (units === "metric") {
      heightInMeters = parseFloat(height) / 100; // Convert cm to meters
      weightInKg = parseFloat(weight);
    } else {
      const totalInches = parseFloat(feet) * 12 + parseFloat(inches);
      heightInMeters = totalInches * 0.0254; // Convert inches to meters
      weightInKg = parseFloat(weight) * 0.453592; // Convert pounds to kg
    }

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      const category = getBMICategory(bmi);
      const idealWeight = getIdealWeightRange(heightInMeters);

      setResult({
        bmi: bmi.toFixed(1),
        category: category.name,
        categoryColor: category.color,
        description: category.description,
        idealWeight: idealWeight,
      });
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return {
        name: "Underweight",
        color: "text-primary",
        description: "Below normal weight range",
      };
    } else if (bmi < 25) {
      return {
        name: "Normal weight",
        color: "text-primary",
        description: "Healthy weight range",
      };
    } else if (bmi < 30) {
      return {
        name: "Overweight",
        color: "text-primary",
        description: "Above normal weight range",
      };
    } else {
      return {
        name: "Obese",
        color: "text-destructive",
        description: "Significantly above normal weight",
      };
    }
  };

  const getIdealWeightRange = (heightInMeters) => {
    const minWeight = 18.5 * heightInMeters * heightInMeters;
    const maxWeight = 24.9 * heightInMeters * heightInMeters;

    if (units === "metric") {
      return `${minWeight.toFixed(1)} - ${maxWeight.toFixed(1)} kg`;
    } else {
      const minPounds = minWeight * 2.20462;
      const maxPounds = maxWeight * 2.20462;
      return `${minPounds.toFixed(1)} - ${maxPounds.toFixed(1)} lbs`;
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>BMI Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Unit Selection */}
          <div>
            <Label className="text-base font-medium">Units</Label>
            <RadioGroup
              value={units}
              onValueChange={setUnits}
              className="flex gap-6 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="metric" id="metric" />
                <Label htmlFor="metric">Metric (cm, kg)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="imperial" id="imperial" />
                <Label htmlFor="imperial">Imperial (ft, in, lbs)</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Height Input */}
            <div>
              <Label htmlFor="height">Height</Label>
              {units === "metric" ? (
                <Input
                  id="height"
                  type="number"
                  placeholder="170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-1"
                />
              ) : (
                <div className="flex gap-2 mt-1">
                  <Input
                    type="number"
                    placeholder="5"
                    value={feet}
                    onChange={(e) => setFeet(e.target.value)}
                  />
                  <span className="flex items-center text-sm text-muted-foreground">
                    ft
                  </span>
                  <Input
                    type="number"
                    placeholder="8"
                    value={inches}
                    onChange={(e) => setInches(e.target.value)}
                  />
                  <span className="flex items-center text-sm text-muted-foreground">
                    in
                  </span>
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                {units === "metric"
                  ? "Enter height in centimeters"
                  : "Enter feet and inches"}
              </p>
            </div>

            {/* Weight Input */}
            <div>
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                type="number"
                placeholder={units === "metric" ? "70" : "154"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {units === "metric"
                  ? "Enter weight in kilograms"
                  : "Enter weight in pounds"}
              </p>
            </div>
          </div>

          {/* Calculate Button */}
          <Button onClick={calculateBMI} className="w-full" size="lg">
            Calculate BMI
          </Button>

          {/* Results */}
          {result && (
            <div className="space-y-4">
              <div className="p-6 bg-background">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Your BMI is</p>
                  <p className="text-4xl font-bold text-foreground">
                    {result.bmi}
                  </p>
                  <p
                    className={`text-lg font-semibold ${result.categoryColor}`}
                  >
                    {result.category}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {result.description}
                  </p>
                </div>

                <div className="flex justify-center mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(`BMI: ${result.bmi} (${result.category})`)
                    }
                  >
                    Copy Result
                  </Button>
                </div>
              </div>

              {/* BMI Categories Chart */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-3">BMI Categories</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary">Underweight</span>
                    <span>Below 18.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary">Normal weight</span>
                    <span>18.5 - 24.9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary">Overweight</span>
                    <span>25.0 - 29.9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-destructive">Obese</span>
                    <span>30.0 and above</span>
                  </div>
                </div>
              </div>

              {/* Ideal Weight Range */}
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Ideal Weight Range</h3>
                <p className="text-sm text-muted-foreground">
                  For your height, a healthy weight range is:
                </p>
                <p className="text-lg font-semibold text-primary">
                  {result.idealWeight}
                </p>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              <strong>Disclaimer:</strong> BMI is a screening tool and not a
              diagnostic tool. It doesn't account for muscle mass, bone density,
              or overall body composition. Consult with a healthcare
              professional for personalized health advice.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

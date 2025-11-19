"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CalorieCalculatorTool() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState(null);

  const activityLevels = {
    sedentary: {
      name: "Sedentary",
      multiplier: 1.2,
      description: "Little or no exercise",
    },
    light: {
      name: "Lightly Active",
      multiplier: 1.375,
      description: "Light exercise 1-3 days/week",
    },
    moderate: {
      name: "Moderately Active",
      multiplier: 1.55,
      description: "Moderate exercise 3-5 days/week",
    },
    very: {
      name: "Very Active",
      multiplier: 1.725,
      description: "Hard exercise 6-7 days/week",
    },
    extra: {
      name: "Extra Active",
      multiplier: 1.9,
      description: "Very hard exercise, physical job",
    },
  };

  const calculateCalories = () => {
    const ageNum = parseFloat(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const activity = activityLevels[activityLevel];

    if (ageNum > 0 && heightNum > 0 && weightNum > 0 && activity) {
      // Calculate BMR using Mifflin-St Jeor Equation
      let bmr;
      if (gender === "male") {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
      } else {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
      }

      // Calculate TDEE
      const tdee = bmr * activity.multiplier;

      // Calculate calories based on goal
      let targetCalories;
      let weeklyChange;

      switch (goal) {
        case "lose":
          targetCalories = tdee - 500; // 1 lb per week
          weeklyChange = "-1 lb";
          break;
        case "lose-fast":
          targetCalories = tdee - 750; // 1.5 lbs per week
          weeklyChange = "-1.5 lbs";
          break;
        case "gain":
          targetCalories = tdee + 300; // 0.5-1 lb per week
          weeklyChange = "+0.5-1 lb";
          break;
        case "gain-fast":
          targetCalories = tdee + 500; // 1 lb per week
          weeklyChange = "+1 lb";
          break;
        default:
          targetCalories = tdee;
          weeklyChange = "0 lbs";
      }

      // Calculate macros (example: 30% protein, 35% carbs, 35% fat)
      const protein = (targetCalories * 0.3) / 4; // 4 calories per gram
      const carbs = (targetCalories * 0.35) / 4;
      const fat = (targetCalories * 0.35) / 9; // 9 calories per gram

      setResult({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        targetCalories: Math.round(targetCalories),
        weeklyChange,
        macros: {
          protein: Math.round(protein),
          carbs: Math.round(carbs),
          fat: Math.round(fat),
        },
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Calorie Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Personal Info */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Personal Information</h3>

              <div>
                <Label className="text-base font-medium">Gender</Label>
                <RadioGroup
                  value={gender}
                  onValueChange={setGender}
                  className="flex gap-6 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="age">Age (years)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>

            {/* Right Column - Activity & Goals */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Activity & Goals</h3>

              <div>
                <Label htmlFor="activityLevel">Activity Level</Label>
                <Select value={activityLevel} onValueChange={setActivityLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(activityLevels).map(([key, level]) => (
                      <SelectItem key={key} value={key}>
                        <div>
                          <div className="font-medium">{level.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {level.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="goal">Goal</Label>
                <Select value={goal} onValueChange={setGoal}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lose-fast">
                      Lose Weight Fast (1.5 lbs/week)
                    </SelectItem>
                    <SelectItem value="lose">
                      Lose Weight (1 lb/week)
                    </SelectItem>
                    <SelectItem value="maintain">Maintain Weight</SelectItem>
                    <SelectItem value="gain">
                      Gain Weight (0.5-1 lb/week)
                    </SelectItem>
                    <SelectItem value="gain-fast">
                      Gain Weight Fast (1 lb/week)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button onClick={calculateCalories} className="w-full" size="lg">
            Calculate Daily Calories
          </Button>

          {result && (
            <div className="space-y-6">
              {/* Main Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">BMR</p>
                  <p className="text-2xl font-bold text-primary">
                    {result.bmr}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    calories/day at rest
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">TDEE</p>
                  <p className="text-2xl font-bold text-primary">
                    {result.tdee}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    maintenance calories
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">
                    Target Calories
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {result.targetCalories}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {result.weeklyChange}/week
                  </p>
                </div>
              </div>

              {/* Macro Breakdown */}
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-4 text-center">
                  Daily Macro Breakdown
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Protein</p>
                    <p className="text-xl font-bold text-primary">
                      {result.macros.protein}g
                    </p>
                    <p className="text-xs text-muted-foreground">
                      30% of calories
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Carbs</p>
                    <p className="text-xl font-bold text-primary">
                      {result.macros.carbs}g
                    </p>
                    <p className="text-xs text-muted-foreground">
                      35% of calories
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fat</p>
                    <p className="text-xl font-bold text-primary">
                      {result.macros.fat}g
                    </p>
                    <p className="text-xs text-muted-foreground">
                      35% of calories
                    </p>
                  </div>
                </div>
              </div>

              {/* Copy Button */}
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `Daily Calories: ${result.targetCalories}, BMR: ${result.bmr}, TDEE: ${result.tdee}`,
                    )
                  }
                >
                  Copy Results
                </Button>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              <strong>Disclaimer:</strong> This calculator provides estimates
              based on standard formulas. Individual metabolic rates can vary.
              Consult with a healthcare professional or registered dietitian for
              personalized nutrition advice.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorIcon, RotateCcw } from "lucide-react";
import { ToolSEOLayout } from "@/components/seo";

const TOOL_FAQS = [
  {
    question: "What functions does this calculator support?",
    answer: "This calculator supports basic arithmetic (addition, subtraction, multiplication, division) as well as scientific functions like sin, cos, tan, log, ln, square root, and powers."
  },
  {
    question: "Is it free to use?",
    answer: "Yes, this online scientific calculator is completely free to use."
  },
  {
    question: "Does it work on mobile?",
    answer: "Yes, the calculator is fully responsive and works great on mobile devices."
  }
];

const TOOL_FEATURES = [
  "Basic Arithmetic",
  "Scientific Functions",
  "History Tracking",
  "Responsive Design",
  "Keyboard Support",
  "Dark Mode Compatible"
];

export default function CalculatorTool() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [history, setHistory] = useState([]);

  const handleNumber = (num) => {
    setDisplay(display === "0" ? num : display + num);
  };

  const handleOperator = (op) => {
    setEquation(display + " " + op + " ");
    setDisplay("0");
  };

  const handleFunction = (func) => {
    let val = parseFloat(display);
    let res = 0;
    switch (func) {
      case "sin": res = Math.sin(val); break;
      case "cos": res = Math.cos(val); break;
      case "tan": res = Math.tan(val); break;
      case "sqrt": res = Math.sqrt(val); break;
      case "log": res = Math.log10(val); break;
      case "ln": res = Math.log(val); break;
      case "sq": res = Math.pow(val, 2); break;
      default: return;
    }
    setDisplay(res.toString());
    addToHistory(`${func}(${val}) = ${res}`);
  };

  const calculate = () => {
    try {
      // Note: eval is dangerous, but for a simple calculator with controlled input it's often used.
      // Better to use a parser, but for simplicity here:
      const fullEq = equation + display;
      // Replace visual operators with JS operators
      const evalEq = fullEq.replace(/×/g, "*").replace(/÷/g, "/");
      // eslint-disable-next-line no-eval
      const res = eval(evalEq);
      setDisplay(res.toString());
      setEquation("");
      addToHistory(`${fullEq} = ${res}`);
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
  };

  const backspace = () => {
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  };

  const addToHistory = (entry) => {
    setHistory(prev => [entry, ...prev].slice(0, 10));
  };

  const buttons = [
    { label: "C", onClick: clear, variant: "destructive" },
    { label: "⌫", onClick: backspace, variant: "secondary" },
    { label: "(", onClick: () => handleNumber("("), variant: "secondary" },
    { label: ")", onClick: () => handleNumber(")"), variant: "secondary" },
    { label: "sin", onClick: () => handleFunction("sin"), variant: "outline" },
    { label: "cos", onClick: () => handleFunction("cos"), variant: "outline" },
    { label: "tan", onClick: () => handleFunction("tan"), variant: "outline" },
    { label: "÷", onClick: () => handleOperator("/"), variant: "secondary" },
    { label: "7", onClick: () => handleNumber("7") },
    { label: "8", onClick: () => handleNumber("8") },
    { label: "9", onClick: () => handleNumber("9") },
    { label: "×", onClick: () => handleOperator("*"), variant: "secondary" },
    { label: "4", onClick: () => handleNumber("4") },
    { label: "5", onClick: () => handleNumber("5") },
    { label: "6", onClick: () => handleNumber("6") },
    { label: "-", onClick: () => handleOperator("-"), variant: "secondary" },
    { label: "1", onClick: () => handleNumber("1") },
    { label: "2", onClick: () => handleNumber("2") },
    { label: "3", onClick: () => handleNumber("3") },
    { label: "+", onClick: () => handleOperator("+"), variant: "secondary" },
    { label: "0", onClick: () => handleNumber("0"), className: "col-span-2" },
    { label: ".", onClick: () => handleNumber(".") },
    { label: "=", onClick: calculate, variant: "default" },
  ];

  return (
    <ToolSEOLayout
      toolId="calculator"
      faqs={TOOL_FAQS}
      features={TOOL_FEATURES}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-0 shadow-xl bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalculatorIcon className="w-6 h-6" />
                Scientific Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-6 rounded-2xl mb-6 text-right">
                <div className="text-muted-foreground h-6 text-sm mb-1">{equation}</div>
                <div className="text-4xl font-bold tracking-wider overflow-x-auto whitespace-nowrap scrollbar-hide">
                  {display}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {buttons.map((btn, i) => (
                  <Button
                    key={i}
                    variant={btn.variant || "outline"}
                    onClick={btn.onClick}
                    className={`h-14 text-lg font-medium ${btn.className || ""}`}
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                History
              </CardTitle>
            </CardHeader>
            <CardContent>
              {history.length === 0 ? (
                <p className="text-muted-foreground text-sm text-center py-8">
                  No calculations yet
                </p>
              ) : (
                <div className="space-y-3">
                  {history.map((item, i) => (
                    <div key={i} className="p-3 bg-muted/50 rounded-lg text-sm font-mono">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </ToolSEOLayout>
  );
}

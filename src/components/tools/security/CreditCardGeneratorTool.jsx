"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

function generateVisaNumber() {
  // Visa test numbers: start with 4, length 16, passes Luhn.
  // Simple generation: prefix '4' and then generate random digits ensuring Luhn.
  const prefix = 4;
  return generateCardNumber(prefix);
}

function generateCardNumber(prefix) {
  const length = 16;
  let number = prefix.toString();
  while (number.length < length - 1) {
    number += Math.floor(Math.random() * 10);
  }
  // Compute check digit
  let sum = 0;
  let isEven = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i], 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
  const check = (10 - (sum % 10)) % 10;
  number += check;
  return number;
}

export default function CreditCardGeneratorTool() {
  const [number, setNumber] = useState("");

  const generate = () => {
    const num = generateVisaNumber();
    setNumber(num);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Credit Card Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button onClick={generate}>Generate Test Card Number</Button>
        {number && (
          <>
            <Input readOnly value={number} />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(number); toast.success("Copied!"); }}>Copy</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function luhnCheck(num) {
  let sum = 0;
  let isEven = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let digit = parseInt(num[i], 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}

export default function CreditCardValidatorTool() {
  const [num, setNum] = useState("");
  const [valid, setValid] = useState(null);

  const validate = () => {
    const cleaned = num.replace(/\s/g, "");
    setValid(luhnCheck(cleaned));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Credit Card Validator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Credit card number" value={num} onChange={e => setNum(e.target.value)} />
        <Button onClick={validate}>Validate</Button>
        {valid !== null && (
          <p className={valid ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
            {valid ? "Valid" : "Invalid"} credit card number
          </p>
        )}
      </CardContent>
    </Card>
  );
}

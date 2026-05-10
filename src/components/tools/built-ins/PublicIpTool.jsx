"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PublicIpTool() {
  const [ip, setIp] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then(r => r.json())
      .then(data => setIp(data.ip))
      .catch(() => setIp("Unable to fetch IP"));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your Public IP Address</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-mono">{ip}</p>
      </CardContent>
    </Card>
  );
}

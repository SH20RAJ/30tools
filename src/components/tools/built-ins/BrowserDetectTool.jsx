"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BrowserDetectTool() {
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    const ua = navigator.userAgent;
    if (ua.includes("Edg/")) setBrowser("Microsoft Edge");
    else if (ua.includes("Chrome/") && !ua.includes("Edg")) setBrowser("Google Chrome");
    else if (ua.includes("Firefox/")) setBrowser("Mozilla Firefox");
    else if (ua.includes("Safari/") && !ua.includes("Chrome")) setBrowser("Apple Safari");
    else if (ua.includes("Opera") || ua.includes("OPR")) setBrowser("Opera");
    else setBrowser("Unknown Browser");
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your Browser</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{browser}</p>
      </CardContent>
    </Card>
  );
}

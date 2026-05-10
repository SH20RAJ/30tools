"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function UserAgentTool() {
  const [ua, setUa] = useState("");

  useEffect(() => {
    setUa(navigator.userAgent);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your User Agent</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea readOnly className="min-h-[120px] font-mono text-sm" value={ua} />
      </CardContent>
    </Card>
  );
}

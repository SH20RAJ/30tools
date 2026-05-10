"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function UuidGeneratorTool() {
  const [uuid, setUuid] = useState("");

  const generate = () => {
    let id;
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      id = crypto.randomUUID();
    } else {
      id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    setUuid(id);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Random UUID Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button onClick={generate}>Generate UUID</Button>
        {uuid && (
          <>
            <Input readOnly value={uuid} />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(uuid); toast.success("Copied!"); }}>Copy</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DomainToIPTool() {
  const [domain, setDomain] = useState("");
  const [ips, setIps] = useState([]);
  const [loading, setLoading] = useState(false);

  const resolve = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=A`);
      const data = await resp.json();
      const aRecords = (data.Answer || []).filter(r => r.type === 1).map(r => r.data);
      setIps(aRecords);
    } catch {
      setIps([]);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Domain to IP Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="example.com" value={domain} onChange={e => setDomain(e.target.value)} />
        <Button onClick={resolve} disabled={loading}>Resolve</Button>
        {ips.length > 0 && (
          <ul className="list-disc pl-5">
            {ips.map((ip, i) => <li key={i} className="font-mono">{ip}</li>)}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

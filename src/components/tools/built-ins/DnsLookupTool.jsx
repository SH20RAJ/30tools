"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DnsLookupTool() {
  const [domain, setDomain] = useState("");
  const [type, setType] = useState("A");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const lookup = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=${type}`);
      const data = await resp.json();
      setResults(data.Answer || []);
    } catch (e) {
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">DNS Records Checker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2 flex-col sm:flex-row">
          <Input placeholder="Domain (e.g., example.com)" value={domain} onChange={e => setDomain(e.target.value)} />
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-24"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="AAAA">AAAA</SelectItem>
              <SelectItem value="MX">MX</SelectItem>
              <SelectItem value="TXT">TXT</SelectItem>
              <SelectItem value="CNAME">CNAME</SelectItem>
              <SelectItem value="NS">NS</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={lookup} disabled={loading}>Lookup</Button>
        {results.length > 0 && (
          <div className="space-y-2">
            {results.map((r, i) => (
              <div key={i} className="p-2 border rounded font-mono text-sm">
                <div>Type: {r.type}</div>
                <div>Name: {r.name}</div>
                <div>Data: {r.data}</div>
                <div className="text-xs text-muted-foreground">TTL: {r.TTL}</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

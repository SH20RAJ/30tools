'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function RegexTesterTool() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [testString, setTestString] = useState('');
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState('');

  const handleTest = () => {
    setError('');
    setMatches([]);
    try {
      const regex = new RegExp(pattern, flags);
      const result = [...testString.matchAll(regex)];
      setMatches(result);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Regex Tester</CardTitle>
          <CardDescription>Test and debug regular expressions instantly. See all matches, groups, and errors in real time.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2">
            <Input
              placeholder="Pattern (e.g. ^[a-z]+$)"
              value={pattern}
              onChange={e => setPattern(e.target.value)}
              className="font-mono"
            />
            <Input
              placeholder="Flags (e.g. g, i, m)"
              value={flags}
              onChange={e => setFlags(e.target.value)}
              className="w-24 font-mono"
            />
            <Button onClick={handleTest} disabled={!pattern}>
              Test
            </Button>
          </div>
          <Textarea
            rows={6}
            placeholder="Enter test string here..."
            value={testString}
            onChange={e => setTestString(e.target.value)}
            className="font-mono"
          />
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {matches.length > 0 && (
            <Alert variant="success">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>
                {matches.length} match{matches.length > 1 ? 'es' : ''} found.
              </AlertDescription>
            </Alert>
          )}
          {matches.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium mb-2">Matches</h3>
              <ul className="list-disc pl-6 space-y-1">
                {matches.map((m, i) => (
                  <li key={i}>
                    <span className="font-mono bg-gray-100 px-1 rounded">{m[0]}</span>
                    {m.length > 1 && (
                      <span className="text-xs text-muted-foreground ml-2">Groups: {m.slice(1).join(', ')}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

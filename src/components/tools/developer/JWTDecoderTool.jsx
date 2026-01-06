"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeftIcon,
  CopyIcon,
  RefreshCwIcon,
  Key,
  CheckCircleIcon,
  AlertTriangleIcon,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function JWTDecoder() {
  const [jwtToken, setJwtToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [signature, setSignature] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [copied, setCopied] = useState("");

  const decodeJWT = () => {
    try {
      if (!jwtToken.trim()) {
        toast.error("Please enter a JWT token");
        return;
      }

      const parts = jwtToken.split(".");
      if (parts.length !== 3) {
        throw new Error("Invalid JWT format");
      }

      // Decode header
      const decodedHeader = JSON.parse(
        atob(parts[0].replace(/-/g, "+").replace(/_/g, "/")),
      );
      setHeader(JSON.stringify(decodedHeader, null, 2));

      // Decode payload
      const decodedPayload = JSON.parse(
        atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")),
      );
      setPayload(JSON.stringify(decodedPayload, null, 2));

      // Set signature
      setSignature(parts[2]);
      setIsValid(true);

      toast.success("JWT decoded successfully!");
    } catch (_error) {
      toast.error("Invalid JWT token format");
      setHeader("");
      setPayload("");
      setSignature("");
      setIsValid(false);
    }
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      toast.success(`${type} copied to clipboard!`);
      setTimeout(() => setCopied(""), 2000);
    } catch (_err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const clearAll = () => {
    setJwtToken("");
    setHeader("");
    setPayload("");
    setSignature("");
    setIsValid(null);
  };

  const sampleJWT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">JWT Decoder</h2>
              <p className="text-muted-foreground">
                Decode and analyze JSON Web Tokens
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">JWT Decoding</Badge>
            <Badge variant="secondary">Token Analysis</Badge>
            <Badge variant="secondary">Security</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>JWT Token Input</CardTitle>
                <CardDescription>
                  Paste your JWT token below to decode it
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jwt">JWT Token</Label>
                  <Textarea
                    id="jwt"
                    placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                    value={jwtToken}
                    onChange={(e) => setJwtToken(e.target.value)}
                    className="min-h-[120px] font-mono text-sm"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={decodeJWT} className="flex-1">
                    Decode JWT
                  </Button>
                  <Button
                    onClick={() => setJwtToken(sampleJWT)}
                    variant="outline"
                  >
                    Load Sample
                  </Button>
                  <Button onClick={clearAll} variant="outline">
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>

                {isValid !== null && (
                  <div
                    className={`flex items-center gap-2 p-3 rounded-lg ${isValid ? "bg-muted/50 dark:bg-green-950" : "bg-destructive/10 dark:bg-red-950"}`}
                  >
                    {isValid ? (
                      <CheckCircleIcon className="h-5 w-5 text-primary" />
                    ) : (
                      <AlertTriangleIcon className="h-5 w-5 text-destructive" />
                    )}
                    <span
                      className={`text-sm font-medium ${isValid ? "text-foreground dark:text-green-200" : "text-destructive dark:text-red-200"}`}
                    >
                      {isValid ? "Valid JWT Format" : "Invalid JWT Format"}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Decoded Header</CardTitle>
                <CardDescription>
                  JWT header contains algorithm and token type
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={header}
                  readOnly
                  placeholder="Decoded header will appear here..."
                  className="min-h-[100px] font-mono text-sm bg-muted"
                />
                <Button
                  onClick={() => copyToClipboard(header, "Header")}
                  disabled={!header}
                  variant="outline"
                  size="sm"
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  {copied === "Header" ? "Copied!" : "Copy Header"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Decoded Payload</CardTitle>
                <CardDescription>
                  JWT payload contains the claims and data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={payload}
                  readOnly
                  placeholder="Decoded payload will appear here..."
                  className="min-h-[150px] font-mono text-sm bg-muted"
                />
                <Button
                  onClick={() => copyToClipboard(payload, "Payload")}
                  disabled={!payload}
                  variant="outline"
                  size="sm"
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  {copied === "Payload" ? "Copied!" : "Copy Payload"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Signature</CardTitle>
                <CardDescription>
                  JWT signature for verification
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-lg font-mono text-sm break-all">
                  {signature || "Signature will appear here..."}
                </div>
                <Button
                  onClick={() => copyToClipboard(signature, "Signature")}
                  disabled={!signature}
                  variant="outline"
                  size="sm"
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  {copied === "Signature" ? "Copied!" : "Copy Signature"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Decode JWT header and payload
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Extract signature information
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Validate JWT format
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Copy decoded parts separately
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Sample JWT for testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  No server communication
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Client-Side Only</h4>
                <p className="text-sm text-muted-foreground">
                  All JWT decoding happens in your browser. Tokens are never
                  sent to our servers.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">What is JWT?</h4>
                <p className="text-sm text-muted-foreground">
                  JSON Web Token is a compact, URL-safe means of representing
                  claims securely between two parties.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">Verification Note</h4>
                <p className="text-sm text-muted-foreground">
                  This tool only decodes JWTs. Signature verification requires
                  the secret key.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

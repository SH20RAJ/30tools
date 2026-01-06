"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe, Wifi, Copy, Check, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function IPLocationFinderTool() {
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const getIPLocation = async () => {
    setLoading(true);
    try {
      // Using a free IP geolocation service
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();

      const ipData = {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        countryCode: data.country_code,
        postal: data.postal,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone,
        isp: data.org,
        asn: data.asn,
        currency: data.currency,
        language: data.languages,
        continent: data.continent_code,
      };

      setIpInfo(ipData);
      toast.success("IP location information retrieved!");
    } catch (_error) {
      toast.error("Failed to get IP location information");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (_error) {
      toast.error("Failed to copy");
    }
  };

  useEffect(() => {
    getIPLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Is My IP Location
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find your IP address location, ISP information, and detailed
            geolocation data instantly.
          </p>
        </div>

        {/* Main Tool */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Your IP Location Information
            </CardTitle>
            <CardDescription>
              Your current IP address and location details
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Getting your IP location...
                </p>
              </div>
            ) : ipInfo ? (
              <div className="space-y-6">
                {/* IP Address */}
                <div className="text-center py-6 bg-background">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Your IP Address
                  </h2>
                  <div className="flex items-center justify-center gap-2">
                    <code className="text-3xl font-mono font-bold text-primary bg-white px-4 py-2 rounded-lg shadow-sm">
                      {ipInfo.ip}
                    </code>
                    <Button
                      onClick={() => copyToClipboard(ipInfo.ip)}
                      variant="outline"
                      size="sm"
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Location Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Location Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">City:</span>
                        <span>{ipInfo.city || "Unknown"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Region:</span>
                        <span>{ipInfo.region || "Unknown"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Country:</span>
                        <div className="flex items-center gap-2">
                          <span>{ipInfo.country}</span>
                          <Badge variant="secondary">
                            {ipInfo.countryCode}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Postal Code:</span>
                        <span>{ipInfo.postal || "Unknown"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Continent:</span>
                        <span>{ipInfo.continent || "Unknown"}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Wifi className="h-5 w-5" />
                        Network Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">ISP:</span>
                        <span className="text-right max-w-[200px] break-words">
                          {ipInfo.isp || "Unknown"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">ASN:</span>
                        <span>{ipInfo.asn || "Unknown"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Timezone:</span>
                        <span>{ipInfo.timezone || "Unknown"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Currency:</span>
                        <span>{ipInfo.currency || "Unknown"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Languages:</span>
                        <span>{ipInfo.language || "Unknown"}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Coordinates */}
                {ipInfo.latitude && ipInfo.longitude && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        Geographic Coordinates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex justify-between">
                          <span className="font-medium">Latitude:</span>
                          <code className="bg-gray-100 px-2 py-1 rounded">
                            {ipInfo.latitude}
                          </code>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Longitude:</span>
                          <code className="bg-gray-100 px-2 py-1 rounded">
                            {ipInfo.longitude}
                          </code>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button
                          onClick={() =>
                            window.open(
                              `https://www.google.com/maps?q=${ipInfo.latitude},${ipInfo.longitude}`,
                              "_blank",
                            )
                          }
                          variant="outline"
                          className="w-full"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          View on Google Maps
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="text-center">
                  <Button onClick={getIPLocation} variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh Information
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Click to get your IP location information
                </p>
                <Button onClick={getIPLocation}>Get My IP Location</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Accurate Location</h3>
                <p className="text-sm text-muted-foreground">
                  Get precise geolocation data for your IP address
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Wifi className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Network Info</h3>
                <p className="text-sm text-muted-foreground">
                  View ISP, timezone, and network details
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Global Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Works worldwide with comprehensive database
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

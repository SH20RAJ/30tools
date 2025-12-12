"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Clock, Globe } from "lucide-react";

export default function TimezoneConverter() {
    const [selectedTimezone, setSelectedTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [currentTime, setCurrentTime] = useState("");

    const timezones = [
        "UTC",
        "America/New_York",
        "America/Los_Angeles",
        "America/Chicago",
        "Europe/London",
        "Europe/Paris",
        "Europe/Berlin",
        "Asia/Tokyo",
        "Asia/Shanghai",
        "Asia/Dubai",
        "Asia/Kolkata",
        "Australia/Sydney"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setCurrentTime(date.toLocaleTimeString("en-US", {
                timeZone: selectedTimezone,
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }));
        }, 1000);

        return () => clearInterval(timer);
    }, [selectedTimezone]);

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        World Clock
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Select City / Timezone</label>
                        <Select value={selectedTimezone} onValueChange={setSelectedTimezone}>
                            <SelectTrigger className="h-12">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {timezones.map(tz => <SelectItem key={tz} value={tz}>{tz}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="text-center p-8 bg-black/5 dark:bg-white/5 rounded-2xl border-2 border-dashed">
                        <Clock className="w-10 h-10 mx-auto mb-4 text-primary opacity-80" />
                        <div className="text-3xl md:text-4xl font-bold font-mono tracking-wider tabular-nums">
                            {currentTime.split(',')[1] || "Loading..."}
                        </div>
                        <div className="text-muted-foreground mt-2 font-medium">
                            {currentTime.split(',')[0]} {currentTime.split(',')[2]}
                        </div>
                        <div className="text-xs text-muted-foreground mt-6 uppercase tracking-widest font-bold opacity-50">
                            {selectedTimezone}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

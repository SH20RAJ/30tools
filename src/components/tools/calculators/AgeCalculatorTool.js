'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AgeCalculatorTool() {
    const [birthDate, setBirthDate] = useState('');
    const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);
    const [result, setResult] = useState(null);

    const calculateAge = () => {
        if (!birthDate) return;

        const birth = new Date(birthDate);
        const target = new Date(targetDate);

        if (birth > target) {
            alert('Birth date cannot be in the future!');
            return;
        }

        // Calculate exact age
        let years = target.getFullYear() - birth.getFullYear();
        let months = target.getMonth() - birth.getMonth();
        let days = target.getDate() - birth.getDate();

        // Adjust for negative days
        if (days < 0) {
            months--;
            const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
            days += lastMonth.getDate();
        }

        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12;
        }

        // Calculate total days, hours, minutes
        const totalMs = target.getTime() - birth.getTime();
        const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(totalMs / (1000 * 60 * 60));
        const totalMinutes = Math.floor(totalMs / (1000 * 60));
        const totalSeconds = Math.floor(totalMs / 1000);

        // Calculate next birthday
        const nextBirthday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());
        if (nextBirthday < target) {
            nextBirthday.setFullYear(target.getFullYear() + 1);
        }
        const daysToNextBirthday = Math.ceil((nextBirthday.getTime() - target.getTime()) / (1000 * 60 * 60 * 24));

        setResult({
            years,
            months,
            days,
            totalDays,
            totalHours,
            totalMinutes,
            totalSeconds,
            daysToNextBirthday,
            nextBirthdayAge: years + (nextBirthday.getFullYear() > target.getFullYear() ? 1 : 0)
        });
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Age Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Input Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="birthDate">Date of Birth</Label>
                            <Input
                                id="birthDate"
                                type="date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                max={new Date().toISOString().split('T')[0]}
                            />
                        </div>
                        <div>
                            <Label htmlFor="targetDate">Calculate Age On</Label>
                            <Input
                                id="targetDate"
                                type="date"
                                value={targetDate}
                                onChange={(e) => setTargetDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <Button onClick={calculateAge} className="w-full" size="lg">
                        Calculate Age
                    </Button>

                    {result && (
                        <div className="space-y-6">
                            {/* Main Age Display */}
                            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center">
                                <p className="text-sm text-muted-foreground mb-2">Your Age Is</p>
                                <div className="flex justify-center items-center gap-4 text-3xl font-bold">
                                    <div className="text-center">
                                        <div className="text-blue-600">{result.years}</div>
                                        <div className="text-xs text-muted-foreground font-normal">Years</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-purple-600">{result.months}</div>
                                        <div className="text-xs text-muted-foreground font-normal">Months</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-green-600">{result.days}</div>
                                        <div className="text-xs text-muted-foreground font-normal">Days</div>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Breakdown */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-center">
                                    <p className="text-lg font-bold text-blue-600">{result.totalDays.toLocaleString()}</p>
                                    <p className="text-xs text-muted-foreground">Total Days</p>
                                </div>
                                <div className="p-3 bg-green-50 rounded-lg text-center">
                                    <p className="text-lg font-bold text-green-600">{result.totalHours.toLocaleString()}</p>
                                    <p className="text-xs text-muted-foreground">Total Hours</p>
                                </div>
                                <div className="p-3 bg-purple-50 rounded-lg text-center">
                                    <p className="text-lg font-bold text-purple-600">{result.totalMinutes.toLocaleString()}</p>
                                    <p className="text-xs text-muted-foreground">Total Minutes</p>
                                </div>
                                <div className="p-3 bg-orange-50 rounded-lg text-center">
                                    <p className="text-lg font-bold text-orange-600">{result.totalSeconds.toLocaleString()}</p>
                                    <p className="text-xs text-muted-foreground">Total Seconds</p>
                                </div>
                            </div>

                            {/* Next Birthday */}
                            <div className="p-4 bg-yellow-50 rounded-lg">
                                <h3 className="font-medium mb-2 text-center">🎂 Next Birthday</h3>
                                <div className="text-center">
                                    <p className="text-lg font-semibold text-yellow-600">
                                        {result.daysToNextBirthday} days to go
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        You'll turn {result.nextBirthdayAge} years old
                                    </p>
                                </div>
                            </div>

                            {/* Age Milestones */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-medium mb-3">📊 Age Milestones</h3>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Weeks lived:</span>
                                        <span className="font-medium">{Math.floor(result.totalDays / 7).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Months lived:</span>
                                        <span className="font-medium">{(result.years * 12 + result.months).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Heartbeats (approx):</span>
                                        <span className="font-medium">{Math.floor(result.totalDays * 100000).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Breaths (approx):</span>
                                        <span className="font-medium">{Math.floor(result.totalDays * 20000).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Copy Button */}
                            <div className="text-center">
                                <Button
                                    variant="outline"
                                    onClick={() => copyToClipboard(`Age: ${result.years} years, ${result.months} months, ${result.days} days`)}
                                >
                                    Copy Age
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Quick Examples */}
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-medium mb-2">💡 Quick Tips</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Use this calculator for official documents and forms</li>
                            <li>• Calculate age differences between family members</li>
                            <li>• Plan milestone birthdays and celebrations</li>
                            <li>• Determine eligibility for age-restricted activities</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
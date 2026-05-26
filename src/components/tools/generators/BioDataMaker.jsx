"use client";

import React, { useState, useRef } from "react";
import { FileText, Printer, Shield, RefreshCw, Upload, Sparkles, Check, Trash2, Heart, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function BioDataMaker() {
    const [mode, setMode] = useState("marriage"); // "marriage" or "job"
    
    // Personal Details
    const [fullName, setFullName] = useState("Rajesh Kumar");
    const [dob, setDob] = useState("1996-08-15");
    const [tob, setTob] = useState("08:45 AM");
    const [pob, setPob] = useState("New Delhi, India");
    const [height, setHeight] = useState("5 ft 8 in");
    const [complexion, setComplexion] = useState("Fair");
    const [education, setEducation] = useState("B.Tech in Computer Science");
    const [occupation, setOccupation] = useState("Senior Software Engineer at MNC");
    const [salary, setSalary] = useState("18 LPA");

    // Horoscope (Marriage Mode)
    const [rashi, setRashi] = useState("Leo (सिंह)");
    const [nakshatra, setNakshatra] = useState("Purva Phalguni");
    const [gotra, setGotra] = useState("Kashyap");
    const [manglik, setManglik] = useState("No");

    // Family Details (Marriage Mode)
    const [fatherName, setFatherName] = useState("Mr. Ramesh Kumar");
    const [fatherOcc, setFatherOcc] = useState("Government Employee (Retired)");
    const [motherName, setMotherName] = useState("Mrs. Sunita Devi");
    const [motherOcc, setMotherOcc] = useState("Homemaker");
    const [siblings, setSiblings] = useState("1 Elder Brother (Married)");

    // Professional Details (Job Mode)
    const [skills, setSkills] = useState("React.js, Next.js, Node.js, Tailwind CSS, TypeScript, Cloudflare Workers");
    const [experience, setExperience] = useState("3+ Years of experience building premium client-side web applications.");

    // Contact details
    const [contactNo, setContactNo] = useState("+91 98765 43210");
    const [email, setEmail] = useState("rajesh@email.com");
    const [address, setAddress] = useState("456, Vikas Marg, Preet Vihar, New Delhi - 110092");

    const photoInputRef = useRef(null);
    const [photoUrl, setPhotoUrl] = useState("");

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                toast.error("Please select an image smaller than 2MB.");
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                setPhotoUrl(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removePhoto = () => {
        setPhotoUrl("");
        if (photoInputRef.current) {
            photoInputRef.current.value = "";
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const resetFields = () => {
        setFullName("Rajesh Kumar");
        setDob("1996-08-15");
        setTob("08:45 AM");
        setPob("New Delhi, India");
        setHeight("5 ft 8 in");
        setComplexion("Fair");
        setEducation("B.Tech in Computer Science");
        setOccupation("Senior Software Engineer at MNC");
        setSalary("18 LPA");
        setRashi("Leo (सिंह)");
        setNakshatra("Purva Phalguni");
        setGotra("Kashyap");
        setManglik("No");
        setFatherName("Mr. Ramesh Kumar");
        setFatherOcc("Government Employee (Retired)");
        setMotherName("Mrs. Sunita Devi");
        setMotherOcc("Homemaker");
        setSiblings("1 Elder Brother (Married)");
        setContactNo("+91 98765 43210");
        setEmail("rajesh@email.com");
        setAddress("456, Vikas Marg, Preet Vihar, New Delhi - 110092");
        toast.success("Biodata form reset.");
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto font-sans">
            {/* Top Action Command Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/20 pb-4 no-print">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        {mode === "marriage" ? <Heart className="h-5 w-5 text-rose-500 animate-pulse" /> : <Briefcase className="h-5 w-5 text-indigo-500" />}
                        Bio Data &amp; Resume Maker
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">
                        Generate formatted marriage biodata sheets or professional resume layouts that are print-ready.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <select
                        className="p-2 rounded-lg border border-border/40 bg-background text-sm mr-2"
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                    >
                        <option value="marriage">Marriage Biodata</option>
                        <option value="job">Professional Resume</option>
                    </select>
                    <Button variant="outline" size="sm" onClick={resetFields}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Reset
                    </Button>
                    <Button variant="default" size="sm" onClick={handlePrint} className={mode === "marriage" ? "bg-rose-600 hover:bg-rose-700 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"}>
                        <Printer className="h-4 w-4 mr-2" />
                        Print / Save PDF
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Form fields */}
                <div className="lg:col-span-5 space-y-6 no-print">
                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Personal Details</h3>
                            
                            <div className="space-y-2">
                                <Label htmlFor="full-name">Full Name</Label>
                                <Input id="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <Input id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="height">Height</Label>
                                    <Input id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="tob">Time of Birth (Optional)</Label>
                                    <Input id="tob" value={tob} onChange={(e) => setTob(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="pob">Place of Birth (Optional)</Label>
                                    <Input id="pob" value={pob} onChange={(e) => setPob(e.target.value)} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="complexion">Complexion (Optional)</Label>
                                    <Input id="complexion" value={complexion} onChange={(e) => setComplexion(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label>Profile Image</Label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            ref={photoInputRef}
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handlePhotoUpload}
                                        />
                                        <Button variant="outline" size="sm" className="w-full" onClick={() => photoInputRef.current.click()}>
                                            <Upload className="h-3 w-3 mr-2" /> Upload
                                        </Button>
                                        {photoUrl && (
                                            <Button variant="ghost" size="sm" onClick={removePhoto}>
                                                <Trash2 className="h-3.5 w-3.5 text-red-500" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {mode === "marriage" && (
                        <>
                            <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Astro &amp; Caste Details</h3>
                                    
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-2">
                                            <Label htmlFor="rashi">Rashi</Label>
                                            <Input id="rashi" value={rashi} onChange={(e) => setRashi(e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="nakshatra">Nakshatra</Label>
                                            <Input id="nakshatra" value={nakshatra} onChange={(e) => setNakshatra(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-2">
                                            <Label htmlFor="gotra">Gotra</Label>
                                            <Input id="gotra" value={gotra} onChange={(e) => setGotra(e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="manglik">Manglik?</Label>
                                            <Input id="manglik" value={manglik} onChange={(e) => setManglik(e.target.value)} />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Career &amp; Income</h3>
                                    
                                    <div className="space-y-2">
                                        <Label htmlFor="education">Education</Label>
                                        <Input id="education" value={education} onChange={(e) => setEducation(e.target.value)} />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-2">
                                            <Label htmlFor="occupation">Occupation</Label>
                                            <Input id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="salary">Annual Income</Label>
                                            <Input id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Family Background</h3>
                                    
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-2">
                                            <Label htmlFor="father-name">Father's Name</Label>
                                            <Input id="father-name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="father-occ">Father's Occupation</Label>
                                            <Input id="father-occ" value={fatherOcc} onChange={(e) => setFatherOcc(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-2">
                                            <Label htmlFor="mother-name">Mother's Name</Label>
                                            <Input id="mother-name" value={motherName} onChange={(e) => setMotherName(e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="mother-occ">Mother's Occupation</Label>
                                            <Input id="mother-occ" value={motherOcc} onChange={(e) => setMotherOcc(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="siblings">Siblings Details</Label>
                                        <Input id="siblings" value={siblings} onChange={(e) => setSiblings(e.target.value)} />
                                    </div>
                                </CardContent>
                            </Card>
                        </>
                    )}

                    {mode === "job" && (
                        <>
                            <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Professional Summary</h3>
                                    
                                    <div className="space-y-2">
                                        <Label htmlFor="education-job">Education Details</Label>
                                        <Input id="education-job" value={education} onChange={(e) => setEducation(e.target.value)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="skills-input">Key Skills (Comma Separated)</Label>
                                        <textarea
                                            id="skills-input"
                                            className="w-full h-20 p-2.5 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                                            value={skills}
                                            onChange={(e) => setSkills(e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="experience-input">Work Experience Summary</Label>
                                        <textarea
                                            id="experience-input"
                                            className="w-full h-24 p-2.5 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                                            value={experience}
                                            onChange={(e) => setExperience(e.target.value)}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </>
                    )}

                    <Card className="border-border/30 bg-card/40 backdrop-blur-md">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-indigo-400">Contact Details</h3>
                            
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="contact-no">Phone Number</Label>
                                    <Input id="contact-no" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <textarea
                                    id="address"
                                    className="w-full h-20 p-2.5 rounded-lg border border-border/40 bg-background/50 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Preview and printable design sheet */}
                <div className="lg:col-span-7">
                    <Card className={`border-border/30 shadow-2xl relative min-h-[842px] p-12 overflow-hidden print-style-biodata ${mode === "marriage" ? "bg-amber-50 text-amber-950 border-4 border-amber-400" : "bg-white text-slate-800"}`}>
                        {/* Elegant frame styling for marriage mode */}
                        {mode === "marriage" && (
                            <div className="absolute inset-4 border-2 border-amber-300 pointer-events-none rounded opacity-60 no-print-border" />
                        )}

                        <div className="space-y-8 relative z-10 text-xs">
                            {/* Header Section */}
                            <div className="flex flex-col items-center justify-center text-center space-y-2 border-b pb-6 border-amber-200">
                                {mode === "marriage" ? (
                                    <>
                                        <div className="text-rose-600 font-serif text-lg tracking-widest uppercase font-bold">|| श्री गणेशाय नमः ||</div>
                                        <h1 className="text-2xl font-bold font-serif text-amber-900 tracking-wider">BIO DATA</h1>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="text-2xl font-bold tracking-wide text-slate-900 uppercase">{fullName}</h1>
                                        <p className="text-sm font-medium text-slate-500">{occupation}</p>
                                    </>
                                )}
                            </div>

                            {/* Photo and Personal Info block */}
                            <div className="grid grid-cols-12 gap-6 items-start">
                                <div className="col-span-8 space-y-4">
                                    <h3 className={`text-sm font-bold uppercase tracking-wider border-b pb-1 ${mode === "marriage" ? "text-amber-800 border-amber-200" : "text-indigo-600 border-slate-200"}`}>
                                        Personal Profile
                                    </h3>
                                    
                                    <table className="w-full text-left font-medium border-collapse">
                                        <tbody className="divide-y divide-amber-100/50">
                                            <tr>
                                                <td className="py-2 font-bold w-36">Full Name:</td>
                                                <td className="py-2">{fullName}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 font-bold">Date of Birth:</td>
                                                <td className="py-2">{new Date(dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                            </tr>
                                            {mode === "marriage" && (
                                                <>
                                                    <tr>
                                                        <td className="py-2 font-bold">Time of Birth:</td>
                                                        <td className="py-2">{tob}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 font-bold">Place of Birth:</td>
                                                        <td className="py-2">{pob}</td>
                                                    </tr>
                                                </>
                                            )}
                                            <tr>
                                                <td className="py-2 font-bold">Height:</td>
                                                <td className="py-2">{height}</td>
                                            </tr>
                                            {complexion && (
                                                <tr>
                                                    <td className="py-2 font-bold">Complexion:</td>
                                                    <td className="py-2">{complexion}</td>
                                                </tr>
                                            )}
                                            <tr>
                                                <td className="py-2 font-bold">Education:</td>
                                                <td className="py-2">{education}</td>
                                            </tr>
                                            {mode === "marriage" ? (
                                                <>
                                                    <tr>
                                                        <td className="py-2 font-bold">Profession:</td>
                                                        <td className="py-2">{occupation}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 font-bold">Income:</td>
                                                        <td className="py-2">{salary}</td>
                                                    </tr>
                                                </>
                                            ) : (
                                                <tr>
                                                    <td className="py-2 font-bold">Designation:</td>
                                                    <td className="py-2">{occupation}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col-span-4 flex flex-col items-center">
                                    {photoUrl ? (
                                        <div className={`w-36 h-44 rounded-lg overflow-hidden border-2 shadow-md ${mode === "marriage" ? "border-amber-300" : "border-slate-300"}`}>
                                            <img src={photoUrl} alt="Profile" className="w-full h-full object-cover" />
                                        </div>
                                    ) : (
                                        <div className={`w-36 h-44 rounded-lg flex flex-col items-center justify-center text-center p-4 border-2 border-dashed ${mode === "marriage" ? "border-amber-300 bg-amber-100/40 text-amber-600" : "border-slate-300 bg-slate-50 text-slate-400"}`}>
                                            <Upload className="h-6 w-6 mb-2 opacity-60" />
                                            <span className="text-[10px]">Upload Photo</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Astro / Gotra details in Marriage Mode */}
                            {mode === "marriage" && (
                                <div className="space-y-3">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-amber-800 border-b border-amber-200 pb-1">
                                        Horoscope &amp; Astrological Details
                                    </h3>
                                    <table className="w-full text-left font-medium">
                                        <tbody>
                                            <tr>
                                                <td className="py-1.5 font-bold w-36">Rashi:</td>
                                                <td className="py-1.5">{rashi}</td>
                                                <td className="py-1.5 font-bold w-28">Nakshatra:</td>
                                                <td className="py-1.5">{nakshatra}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1.5 font-bold">Gotra:</td>
                                                <td className="py-1.5">{gotra}</td>
                                                <td className="py-1.5 font-bold">Manglik:</td>
                                                <td className="py-1.5">{manglik}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {/* Professional job details */}
                            {mode === "job" && (
                                <>
                                    <div className="space-y-3">
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 border-b border-slate-200 pb-1">
                                            Key Skills
                                        </h3>
                                        <p className="leading-relaxed text-slate-700">{skills}</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 border-b border-slate-200 pb-1">
                                            Work Experience Summary
                                        </h3>
                                        <p className="leading-relaxed text-slate-700 whitespace-pre-wrap">{experience}</p>
                                    </div>
                                </>
                            )}

                            {/* Family details in Marriage Mode */}
                            {mode === "marriage" && (
                                <div className="space-y-3">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-amber-800 border-b border-amber-200 pb-1">
                                        Family Background
                                    </h3>
                                    <table className="w-full text-left font-medium">
                                        <tbody>
                                            <tr>
                                                <td className="py-1.5 font-bold w-36">Father's Name:</td>
                                                <td className="py-1.5">{fatherName}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1.5 font-bold">Father's Occupation:</td>
                                                <td className="py-1.5">{fatherOcc}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1.5 font-bold">Mother's Name:</td>
                                                <td className="py-1.5">{motherName}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1.5 font-bold">Mother's Occupation:</td>
                                                <td className="py-1.5">{motherOcc}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1.5 font-bold">Siblings:</td>
                                                <td className="py-1.5">{siblings}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {/* Contact Details */}
                            <div className="space-y-3">
                                <h3 className={`text-sm font-bold uppercase tracking-wider border-b pb-1 ${mode === "marriage" ? "text-amber-800 border-amber-200" : "text-indigo-600 border-slate-200"}`}>
                                    Contact &amp; Address Details
                                </h3>
                                <table className="w-full text-left font-medium">
                                    <tbody>
                                        <tr>
                                            <td className="py-1.5 font-bold w-36">Contact Number:</td>
                                            <td className="py-1.5 font-mono">{contactNo}</td>
                                        </tr>
                                        {email && (
                                            <tr>
                                                <td className="py-1.5 font-bold">Email Address:</td>
                                                <td className="py-1.5">{email}</td>
                                            </tr>
                                        )}
                                        <tr>
                                            <td className="py-1.5 font-bold valign-top">Residential Address:</td>
                                            <td className="py-1.5 whitespace-pre-line leading-relaxed">{address}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Card>

                    <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-3 no-print mt-6 text-foreground">
                        <Shield className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                            <h4 className="text-sm font-medium">100% Client-Side Private Processing</h4>
                            <p className="text-xs text-muted-foreground">
                                All biodata configurations, astro details, family names, and profile photos stay secure. Photos are converted to local data URLs inside your browser and never leave your machine.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx global>{`
                @media print {
                    body {
                        background: white !important;
                        color: black !important;
                    }
                    .no-print, header, footer, nav, aside {
                        display: none !important;
                    }
                    .print-style-biodata {
                        border: none !important;
                        box-shadow: none !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        width: 100% !important;
                        background: transparent !important;
                        color: black !important;
                    }
                    .no-print-border {
                        border: none !important;
                    }
                }
            `}</style>
        </div>
    );
}

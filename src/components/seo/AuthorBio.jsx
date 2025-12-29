import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

const AuthorBio = ({ author = "30Tools Engineering Team", expertVerify = true }) => {
    return (
        <div className="mt-12 p-6 bg-muted/30 rounded-2xl border border-border/50 flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <UserCheck className="w-8 h-8" />
                </div>
                {expertVerify && (
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-background" title="Expert Verified">
                        <ShieldCheck className="w-4 h-4" />
                    </div>
                )}
            </div>
            <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="font-bold text-lg">{author}</span>
                    {expertVerify && (
                        <span className="text-[10px] uppercase tracking-wider bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-full font-bold border border-emerald-500/20">
                            Expert Verified
                        </span>
                    )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Our tools are engineered for performance and privacy. Every tool is rigorously tested by our technical team to ensure it meets the highest standards of data security and conversion quality for 2026 search standards.
                </p>
            </div>
        </div>
    );
};

export default AuthorBio;

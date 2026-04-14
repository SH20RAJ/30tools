
import { Zap, Clock, Shield } from "lucide-react";

export default function ToolInteractivePlaceholder({ toolName = "Tool" }) {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-8 p-12">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
        <div className="relative w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
          <Zap className="w-12 h-12 animate-float" />
        </div>
      </div>
      
      <div className="space-y-4 max-w-md">
        <h3 className="text-3xl font-black tracking-tight">{toolName} Ready</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The interactive engine for {toolName} is initializing. 
          Everything is processed locally in your browser for maximum speed and privacy.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm font-bold text-muted-foreground">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
          <Clock className="w-4 h-4 text-primary" />
          <span>Real-time</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
          <Shield className="w-4 h-4 text-primary" />
          <span>Private</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
          <Zap className="w-4 h-4 text-primary" />
          <span>100% Free</span>
        </div>
      </div>
    </div>
  );
}


import { Check, Shield, Zap, Download } from "lucide-react";

export const ToolTrust = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border border-primary/10 rounded-[2.5rem]">
      <div className="text-center space-y-3">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
          <Zap className="w-7 h-7" />
        </div>
        <h3 className="font-bold text-lg">Instant Results</h3>
        <p className="text-sm text-muted-foreground">
          Real-time processing with zero latency. No waiting, just instant output.
        </p>
      </div>
      <div className="text-center space-y-3">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
          <Shield className="w-7 h-7" />
        </div>
        <h3 className="font-bold text-lg">Maximum Privacy</h3>
        <p className="text-sm text-muted-foreground">
          All processing is done locally in your browser. We never store or see your data.
        </p>
      </div>
      <div className="text-center space-y-3">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
          <Download className="w-7 h-7" />
        </div>
        <h3 className="font-bold text-lg">Free Forever</h3>
        <p className="text-sm text-muted-foreground">
          No signups, no hidden costs, and no limits. Use it as much as you need.
        </p>
      </div>
    </section>
  );
};

export const ToolFeatures = ({ features }) => {
  if (!features || features.length === 0) return null;
  return (
    <section className="scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Key Features & Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-4 p-5 bg-card border border-border/50 rounded-2xl hover:shadow-md transition-all">
            <div className="mt-1 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-base font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ToolSteps = ({ steps, toolName }) => {
  if (!steps || steps.length === 0) return null;
  return (
    <section className="scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight mb-8">How to Use {toolName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="relative p-6 bg-muted/30 rounded-2xl border border-border/40 group hover:border-primary/30 transition-colors">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-lg">
              {idx + 1}
            </div>
            <h3 className="text-xl font-bold mb-3 mt-2">{step.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ToolFAQ = ({ faqs, toolName }) => {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Check className="w-4 h-4 text-primary" />
        </div>
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-8 bg-card border border-border/50 rounded-3xl hover:border-primary/20 transition-all">
            <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

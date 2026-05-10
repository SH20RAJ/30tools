"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function FaqSchemaGenerator() {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addFaq = () => {
    if (question && answer) {
      setFaqs([...faqs, { question, answer }]);
      setQuestion("");
      setAnswer("");
    }
  };

  const removeFaq = (index) => {
    const copy = [...faqs];
    copy.splice(index, 1);
    setFaqs(copy);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))
  };

  const output = `<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">FAQ Schema Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Question" value={question} onChange={e => setQuestion(e.target.value)} />
        <Textarea placeholder="Answer" value={answer} onChange={e => setAnswer(e.target.value)} />
        <Button onClick={addFaq}>Add FAQ</Button>
        {faqs.map((f, i) => (
          <div key={i} className="flex justify-between items-center border p-2 rounded">
            <div>
              <strong>Q:</strong> {f.question}<br />
              <strong>A:</strong> {f.answer}
            </div>
            <Button variant="destructive" size="sm" onClick={() => removeFaq(i)}>Remove</Button>
          </div>
        ))}
        {faqs.length > 0 && (
          <>
            <Textarea readOnly value={output} className="font-mono text-sm min-h-[120px]" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(output); toast.success("Copied!"); }}>Copy</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

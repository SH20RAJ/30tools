"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function LegalTemplateGenerator({ kind = "privacy" }) {
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const generate = () => {
    const date = new Date().toLocaleDateString();
    let content = "";
    const name = siteName || "[Your Site]";
    const url = siteUrl || "[Website URL]";
    const email = contactEmail || "[Contact Email]";
    if (kind === "privacy") {
      content = `Privacy Policy for ${name}
Effective date: ${date}

1. Information We Collect
We collect information you provide directly, such as name, email, and usage data.

2. How We Use Information
We use collected information to provide and maintain our services, and to communicate with you.

3. Data Security
We implement appropriate security measures to protect your data.

4. Cookies
We use cookies to improve your experience. You can disable cookies in your browser settings.

5. Contact Us
If you have any questions, please contact us at ${email}.`;
    } else if (kind === "terms") {
      content = `Terms and Conditions for ${name}
Effective date: ${date}

1. Acceptance of Terms
By accessing or using our website, you agree to be bound by these Terms.

2. Use License
Permission is granted to temporarily view the materials on our website for personal, non-commercial use only.

3. Disclaimer
The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied.

4. Limitations
We shall not be held liable for any damages arising from the use of our materials.

5. Governing Law
These terms shall be governed by and construed in accordance with the laws of your jurisdiction.`;
    } else if (kind === "disclaimer") {
      content = `Disclaimer for ${name}
Effective date: ${date}

The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information.`;
    }
    return content;
  };

  const output = generate();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{kind.charAt(0).toUpperCase() + kind.slice(1)} Policy Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Site Name (optional)" value={siteName} onChange={e => setSiteName(e.target.value)} />
        <Input placeholder="Site URL (optional)" value={siteUrl} onChange={e => setSiteUrl(e.target.value)} />
        <Input placeholder="Contact Email" value={contactEmail} onChange={e => setContactEmail(e.target.value)} />
        {output && (
          <>
            <Textarea readOnly value={output} className="font-mono text-sm min-h-[200px]" />
            <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(output); toast.success("Copied!"); }}>Copy</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

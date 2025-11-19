"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Copy,
  Download,
  Code,
  Building2,
  Package,
  FileText,
  Star,
  Calendar,
  HelpCircle,
} from "lucide-react";
import { toast } from "sonner";

export default function SchemaGenerator() {
  const [schemaType, setSchemaType] = useState("LocalBusiness");
  const [formData, setFormData] = useState({});
  const [generatedSchema, setGeneratedSchema] = useState("");

  const schemaTypes = [
    {
      value: "LocalBusiness",
      label: "Local Business",
      icon: Building2,
      description: "For restaurants, stores, and local services",
    },
    {
      value: "Product",
      label: "Product",
      icon: Package,
      description: "For e-commerce and product listings",
    },
    {
      value: "Article",
      label: "Article",
      icon: FileText,
      description: "For blog posts and news articles",
    },
    {
      value: "Review",
      label: "Review",
      icon: Star,
      description: "For customer reviews and ratings",
    },
    {
      value: "Event",
      label: "Event",
      icon: Calendar,
      description: "For concerts, conferences, and events",
    },
    {
      value: "FAQ",
      label: "FAQ Page",
      icon: HelpCircle,
      description: "For frequently asked questions",
    },
  ];

  const schemaFields = {
    LocalBusiness: [
      { key: "name", label: "Business Name", type: "text", required: true },
      {
        key: "description",
        label: "Description",
        type: "textarea",
        required: true,
      },
      { key: "url", label: "Website URL", type: "url", required: true },
      { key: "telephone", label: "Phone Number", type: "tel", required: false },
      { key: "email", label: "Email", type: "email", required: false },
      {
        key: "streetAddress",
        label: "Street Address",
        type: "text",
        required: false,
      },
      { key: "addressLocality", label: "City", type: "text", required: false },
      {
        key: "addressRegion",
        label: "State/Region",
        type: "text",
        required: false,
      },
      {
        key: "postalCode",
        label: "Postal Code",
        type: "text",
        required: false,
      },
      {
        key: "addressCountry",
        label: "Country",
        type: "text",
        required: false,
      },
      {
        key: "priceRange",
        label: "Price Range (e.g., $$)",
        type: "text",
        required: false,
      },
      {
        key: "openingHours",
        label: "Opening Hours (e.g., Mo-Fr 09:00-17:00)",
        type: "text",
        required: false,
      },
    ],
    Product: [
      { key: "name", label: "Product Name", type: "text", required: true },
      {
        key: "description",
        label: "Description",
        type: "textarea",
        required: true,
      },
      {
        key: "image",
        label: "Product Image URL",
        type: "url",
        required: false,
      },
      { key: "brand", label: "Brand", type: "text", required: false },
      { key: "sku", label: "SKU", type: "text", required: false },
      { key: "price", label: "Price", type: "number", required: false },
      {
        key: "currency",
        label: "Currency (e.g., USD)",
        type: "text",
        required: false,
      },
      {
        key: "availability",
        label: "Availability",
        type: "select",
        options: ["InStock", "OutOfStock", "PreOrder"],
        required: false,
      },
      {
        key: "ratingValue",
        label: "Rating (1-5)",
        type: "number",
        required: false,
      },
      {
        key: "reviewCount",
        label: "Review Count",
        type: "number",
        required: false,
      },
    ],
    Article: [
      { key: "headline", label: "Article Title", type: "text", required: true },
      {
        key: "description",
        label: "Description",
        type: "textarea",
        required: true,
      },
      {
        key: "image",
        label: "Featured Image URL",
        type: "url",
        required: false,
      },
      { key: "author", label: "Author Name", type: "text", required: true },
      {
        key: "publisher",
        label: "Publisher Name",
        type: "text",
        required: true,
      },
      {
        key: "datePublished",
        label: "Publish Date (YYYY-MM-DD)",
        type: "date",
        required: true,
      },
      {
        key: "dateModified",
        label: "Modified Date (YYYY-MM-DD)",
        type: "date",
        required: false,
      },
      { key: "url", label: "Article URL", type: "url", required: true },
    ],
    Review: [
      {
        key: "reviewBody",
        label: "Review Text",
        type: "textarea",
        required: true,
      },
      {
        key: "ratingValue",
        label: "Rating (1-5)",
        type: "number",
        required: true,
      },
      {
        key: "bestRating",
        label: "Best Rating (usually 5)",
        type: "number",
        required: false,
      },
      {
        key: "worstRating",
        label: "Worst Rating (usually 1)",
        type: "number",
        required: false,
      },
      { key: "author", label: "Reviewer Name", type: "text", required: true },
      {
        key: "datePublished",
        label: "Review Date (YYYY-MM-DD)",
        type: "date",
        required: false,
      },
      {
        key: "itemName",
        label: "Item Being Reviewed",
        type: "text",
        required: true,
      },
    ],
    Event: [
      { key: "name", label: "Event Name", type: "text", required: true },
      {
        key: "description",
        label: "Description",
        type: "textarea",
        required: true,
      },
      {
        key: "startDate",
        label: "Start Date (YYYY-MM-DDTHH:MM)",
        type: "datetime-local",
        required: true,
      },
      {
        key: "endDate",
        label: "End Date (YYYY-MM-DDTHH:MM)",
        type: "datetime-local",
        required: false,
      },
      {
        key: "locationName",
        label: "Venue Name",
        type: "text",
        required: false,
      },
      {
        key: "streetAddress",
        label: "Street Address",
        type: "text",
        required: false,
      },
      { key: "addressLocality", label: "City", type: "text", required: false },
      {
        key: "addressRegion",
        label: "State/Region",
        type: "text",
        required: false,
      },
      {
        key: "postalCode",
        label: "Postal Code",
        type: "text",
        required: false,
      },
      { key: "url", label: "Event URL", type: "url", required: false },
      { key: "price", label: "Ticket Price", type: "number", required: false },
      {
        key: "currency",
        label: "Currency (e.g., USD)",
        type: "text",
        required: false,
      },
    ],
    FAQ: [
      {
        key: "questions",
        label: "FAQ Questions & Answers (JSON format)",
        type: "textarea",
        required: true,
        placeholder:
          '[{"question": "What is your return policy?", "answer": "We offer 30-day returns on all items."}]',
      },
    ],
  };

  const generateSchema = () => {
    if (!schemaType || Object.keys(formData).length === 0) {
      toast.error("Please fill in required fields");
      return;
    }

    let schema = {
      "@context": "https://schema.org",
      "@type": schemaType,
    };

    if (schemaType === "LocalBusiness") {
      schema.name = formData.name;
      schema.description = formData.description;
      schema.url = formData.url;

      if (formData.telephone) schema.telephone = formData.telephone;
      if (formData.email) schema.email = formData.email;
      if (formData.priceRange) schema.priceRange = formData.priceRange;
      if (formData.openingHours) schema.openingHours = formData.openingHours;

      if (formData.streetAddress || formData.addressLocality) {
        schema.address = {
          "@type": "PostalAddress",
          ...(formData.streetAddress && {
            streetAddress: formData.streetAddress,
          }),
          ...(formData.addressLocality && {
            addressLocality: formData.addressLocality,
          }),
          ...(formData.addressRegion && {
            addressRegion: formData.addressRegion,
          }),
          ...(formData.postalCode && { postalCode: formData.postalCode }),
          ...(formData.addressCountry && {
            addressCountry: formData.addressCountry,
          }),
        };
      }
    } else if (schemaType === "Product") {
      schema.name = formData.name;
      schema.description = formData.description;

      if (formData.image) schema.image = formData.image;
      if (formData.brand)
        schema.brand = { "@type": "Brand", name: formData.brand };
      if (formData.sku) schema.sku = formData.sku;

      if (formData.price && formData.currency) {
        schema.offers = {
          "@type": "Offer",
          price: formData.price,
          priceCurrency: formData.currency,
          ...(formData.availability && {
            availability: `https://schema.org/${formData.availability}`,
          }),
        };
      }

      if (formData.ratingValue) {
        schema.aggregateRating = {
          "@type": "AggregateRating",
          ratingValue: formData.ratingValue,
          bestRating: "5",
          ...(formData.reviewCount && { reviewCount: formData.reviewCount }),
        };
      }
    } else if (schemaType === "Article") {
      schema.headline = formData.headline;
      schema.description = formData.description;
      schema.url = formData.url;
      schema.datePublished = formData.datePublished;

      if (formData.dateModified) schema.dateModified = formData.dateModified;
      if (formData.image) schema.image = formData.image;

      schema.author = {
        "@type": "Person",
        name: formData.author,
      };

      schema.publisher = {
        "@type": "Organization",
        name: formData.publisher,
      };
    } else if (schemaType === "Review") {
      schema.reviewBody = formData.reviewBody;
      schema.author = {
        "@type": "Person",
        name: formData.author,
      };

      schema.reviewRating = {
        "@type": "Rating",
        ratingValue: formData.ratingValue,
        bestRating: formData.bestRating || "5",
        worstRating: formData.worstRating || "1",
      };

      schema.itemReviewed = {
        "@type": "Thing",
        name: formData.itemName,
      };

      if (formData.datePublished) schema.datePublished = formData.datePublished;
    } else if (schemaType === "Event") {
      schema.name = formData.name;
      schema.description = formData.description;
      schema.startDate = formData.startDate;

      if (formData.endDate) schema.endDate = formData.endDate;
      if (formData.url) schema.url = formData.url;

      if (formData.locationName || formData.streetAddress) {
        schema.location = {
          "@type": "Place",
          ...(formData.locationName && { name: formData.locationName }),
          ...(formData.streetAddress && {
            address: {
              "@type": "PostalAddress",
              streetAddress: formData.streetAddress,
              ...(formData.addressLocality && {
                addressLocality: formData.addressLocality,
              }),
              ...(formData.addressRegion && {
                addressRegion: formData.addressRegion,
              }),
              ...(formData.postalCode && { postalCode: formData.postalCode }),
            },
          }),
        };
      }

      if (formData.price && formData.currency) {
        schema.offers = {
          "@type": "Offer",
          price: formData.price,
          priceCurrency: formData.currency,
        };
      }
    } else if (schemaType === "FAQ") {
      try {
        const questions = JSON.parse(formData.questions || "[]");
        schema.mainEntity = questions.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        }));
      } catch (error) {
        toast.error("Invalid JSON format for questions");
        return;
      }
    }

    const schemaString = JSON.stringify(schema, null, 2);
    setGeneratedSchema(schemaString);
    toast.success("Schema markup generated successfully!");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedSchema);
    toast.success("Schema copied to clipboard!");
  };

  const downloadSchema = () => {
    const blob = new Blob([generatedSchema], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${schemaType.toLowerCase()}-schema.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Schema downloaded!");
  };

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const selectedSchemaType = schemaTypes.find(
    (type) => type.value === schemaType,
  );
  const fields = schemaFields[schemaType] || [];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card className="border-2 border-border/20 shadow-lg">
          <CardHeader className="bg-background/20 dark:to-blue-900/20">
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              Schema Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Schema Type Selection */}
            <div className="space-y-2">
              <Label htmlFor="schema-type">Schema Type</Label>
              <Select value={schemaType} onValueChange={setSchemaType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select schema type" />
                </SelectTrigger>
                <SelectContent>
                  {schemaTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4" />
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-xs text-muted-foreground">
                              {type.description}
                            </div>
                          </div>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* Dynamic Fields */}
            {selectedSchemaType && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <selectedSchemaType.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">
                    {selectedSchemaType.label} Configuration
                  </h3>
                </div>

                {fields.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <Label htmlFor={field.key}>
                      {field.label}
                      {field.required && (
                        <span className="text-destructive ml-1">*</span>
                      )}
                    </Label>

                    {field.type === "textarea" ? (
                      <Textarea
                        id={field.key}
                        placeholder={
                          field.placeholder ||
                          `Enter ${field.label.toLowerCase()}`
                        }
                        value={formData[field.key] || ""}
                        onChange={(e) =>
                          handleInputChange(field.key, e.target.value)
                        }
                        rows={3}
                      />
                    ) : field.type === "select" ? (
                      <Select
                        value={formData[field.key] || ""}
                        onValueChange={(value) =>
                          handleInputChange(field.key, value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={`Select ${field.label.toLowerCase()}`}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        id={field.key}
                        type={field.type}
                        placeholder={
                          field.placeholder ||
                          `Enter ${field.label.toLowerCase()}`
                        }
                        value={formData[field.key] || ""}
                        onChange={(e) =>
                          handleInputChange(field.key, e.target.value)
                        }
                      />
                    )}
                  </div>
                ))}

                <Button
                  onClick={generateSchema}
                  className="w-full bg-muted/500 hover:bg-primary text-white mt-6"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Generate Schema Markup
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Generated Schema Output */}
        <Card className="border-2 border-border/20 shadow-lg">
          <CardHeader className="bg-background/20 dark:to-purple-900/20">
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              Generated Schema
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {generatedSchema ? (
              <div className="space-y-4">
                <div className="flex gap-2 mb-4">
                  <Button onClick={copyToClipboard} size="sm" variant="outline">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button onClick={downloadSchema} size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 max-h-96 overflow-auto">
                  <pre className="text-sm whitespace-pre-wrap break-words">
                    <code>{generatedSchema}</code>
                  </pre>
                </div>

                <div className="bg-muted/50 dark:bg-green-950/20 border border-border rounded-lg p-4">
                  <h4 className="font-medium text-foreground dark:text-green-200 mb-2">
                    Implementation Instructions:
                  </h4>
                  <ol className="text-sm text-primary dark:text-green-300 space-y-1 list-decimal list-inside">
                    <li>Copy the JSON-LD code above</li>
                    <li>
                      Paste it in your HTML &lt;head&gt; section or before
                      &lt;/body&gt;
                    </li>
                    <li>
                      Wrap it in &lt;script
                      type="application/ld+json"&gt;&lt;/script&gt; tags
                    </li>
                    <li>Test with Google's Rich Results Test tool</li>
                  </ol>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>
                  Configure your schema type and fill in the details to generate
                  markup
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

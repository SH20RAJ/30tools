
export const API_KEY_TOOLS = [
  // --- AI Tools ---
  {
    id: "openai",
    name: "OpenAI",
    category: "AI",
    description: "Test your OpenAI API key with the models endpoint",
    documentationUrl: "https://platform.openai.com/docs",
    type: "browser",
    endpoint: "https://api.openai.com/v1/models",
    method: "GET",
    headers: (key) => ({
      Authorization: `Bearer ${key}`,
    }),
    responseCheck: (data) => data && data.data && Array.isArray(data.data),
  },
  {
    id: "anthropic",
    name: "Anthropic Claude",
    category: "AI",
    description: "Test your Anthropic Claude API key with the messages endpoint",
    documentationUrl: "https://docs.anthropic.com/en/api/overview",
    type: "browser",
    endpoint: "https://api.anthropic.com/v1/messages", // Note: This usually requires a body, but we can check auth with a simpler call or expect a strictly auth-related error vs 401
    // Actually, Anthropic usually needs a body. Let's try to just check auth validity if possible.
    // Making a request that fails validation but passes auth is a common strategy.
    // For now, let's assume a simple GET on a different endpoint or a known efficient way.
    // The prompt says "messages endpoint", which is POST.
    // Let's use a curl-like approach for "Browser" but if it requires POST body, we might need a specific "body" in this config.
    // Let's stick effectively to what a "Test" button would do.
    method: "POST",
    headers: (key) => ({
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    }),
    body: {
      model: "claude-3-haiku-20240307",
      max_tokens: 1,
      messages: [{ role: "user", content: "Hi" }],
    },
    responseCheck: (data) => data && data.id && data.type === "message",
  },
  {
    id: "google-gemini",
    name: "Google Gemini",
    category: "AI",
    description: "Test your Google Gemini API key with the generateContent endpoint",
    documentationUrl: "https://ai.google.dev/gemini-api/docs",
    type: "browser",
    // This usually normally uses a query param ?key=... or header.
    // Endpoint: https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY
    endpoint: (key) =>
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`,
    method: "POST",
    headers: () => ({
      "Content-Type": "application/json",
    }),
    body: {
      contents: [{ parts: [{ text: "Hi" }] }],
    },
    responseCheck: (data) => data && data.candidates,
  },
  {
    id: "groq",
    name: "Groq",
    category: "AI",
    description: "Test your Groq API key with the chat completions endpoint",
    documentationUrl: "https://console.groq.com/docs",
    type: "browser",
    endpoint: "https://api.groq.com/openai/v1/models",
    method: "GET",
    headers: (key) => ({
      Authorization: `Bearer ${key}`,
    }),
    responseCheck: (data) => data && data.data,
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    category: "AI",
    description: "Test your DeepSeek API key with the chat completions endpoint",
    documentationUrl: "https://platform.deepseek.com/api-docs",
    type: "browser",
    endpoint: "https://api.deepseek.com/models", // Assuming standard OpenAI-compatible 'models' endpoint exists or similar
    method: "GET",
    headers: (key) => ({
      Authorization: `Bearer ${key}`,
    }),
    responseCheck: (data) => data && data.data,
  },
  {
    id: "cohere",
    name: "Cohere",
    category: "AI",
    description: "Test your Cohere API key with the generate endpoint",
    documentationUrl: "https://docs.cohere.com/reference/generate",
    type: "browser",
    endpoint: "https://api.cohere.ai/v1/check-api-key", // Cohere has a specific check endpoint usually, or we use 'generate'
    // Let's use a safe endpoint if available, 'models' is usually safe. Not all providers have it.
    // 'check-api-key' returns {valid: true}.
    method: "POST", // Actually check-api-key might be different. Let's safe bet on 'tokenize' or similar small op if 'check-api-key' isn't standard.
    // Documentation says 'generate'.
    endpoint: "https://api.cohere.ai/v1/tokenize",
    method: "POST",
    headers: (key) => ({
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    }),
    body: { text: "test" },
    responseCheck: (data) => data && data.tokens,
  },

  // --- CRM Tools ---
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM",
    description: "Test your HubSpot API key with the contacts endpoint",
    documentationUrl: "https://developers.hubspot.com/docs/api/crm/contacts",
    type: "browser",
    endpoint: "https://api.hubapi.com/crm/v3/objects/contacts?limit=1",
    method: "GET",
    headers: (key) => ({
      Authorization: `Bearer ${key}`,
    }),
    responseCheck: (data) => data && data.results,
  },
  {
    id: "attio",
    name: "Attio",
    category: "CRM",
    description: "Test your Attio API key with the records endpoint",
    documentationUrl: "https://docs.attio.com/api",
    type: "browser",
    endpoint: "https://api.attio.com/v2/objects",
    method: "GET",
    headers: (key) => ({
      Authorization: `Bearer ${key}`,
    }),
    responseCheck: (data) => data && data.data,
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    category: "CRM",
    description: "Test your Pipedrive API token with the deals endpoint",
    documentationUrl: "https://developers.pipedrive.com/docs/api/v1",
    type: "browser",
    // Pipedrive uses query param: ?api_token=...
    endpoint: (key) => `https://api.pipedrive.com/v1/users/me?api_token=${key}`,
    method: "GET",
    headers: () => ({}),
    responseCheck: (data) => data && data.success === true,
  },

  // --- Customer Support ---
  {
    id: "zendesk",
    name: "Zendesk",
    category: "Customer Support",
    description: "Test your Zendesk API token with the tickets endpoint",
    documentationUrl: "https://developer.zendesk.com/api-reference/ticketing/introduction/",
    type: "server",
    curlCommand: (key, email, subdomain) =>
      `curl https://${subdomain || "SUBDOMAIN"}.zendesk.com/api/v2/users/me.json \\
  -v -u ${email || "EMAIL_ADDRESS"}/token:${key}`,
    inputs: [
      { name: "subdomain", label: "Zendesk Subdomain" },
      { name: "email", label: "Email Address" },
    ],
  },
  {
    id: "intercom",
    name: "Intercom",
    category: "Customer Support",
    description: "Test your Intercom access token with the me endpoint",
    documentationUrl: "https://developers.intercom.com/docs/references/introduction",
    type: "server",
    curlCommand: (key) =>
      `curl https://api.intercom.io/me \\
  -H 'Authorization: Bearer ${key}'`,
  },
  {
    id: "freshdesk",
    name: "Freshdesk",
    category: "Customer Support",
    description: "Test your Freshdesk API key with the tickets endpoint",
    documentationUrl: "https://developer.freshdesk.com/api/v2/",
    type: "server",
    curlCommand: (key, domain) =>
      `curl -v -u ${key}:X -H "Content-Type: application/json" \\
  https://${domain || "DOMAIN"}.freshdesk.com/api/v2/tickets`,
    inputs: [{ name: "domain", label: "Freshdesk Domain" }],
  },

  // --- Data Enrichment ---
  {
    id: "clearbit",
    name: "Clearbit",
    category: "Data Enrichment",
    description: "Test your Clearbit API key with the company enrichment endpoint",
    documentationUrl: "https://clearbit.com/docs",
    type: "server",
    curlCommand: (key) =>
      `curl 'https://company.clearbit.com/v2/companies/find?domain=clearbit.com' \\
  -u ${key}:`,
  },
  {
    id: "zoominfo",
    name: "ZoomInfo",
    category: "Data Enrichment",
    description: "Test your ZoomInfo API key with the contacts endpoint",
    documentationUrl: "https://developers.zoominfo.com/",
    type: "server",
    curlCommand: (key) =>
      `curl "https://api.zoominfo.com/search/contact" \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json" \\
  -d '{"managementLevel": "C-Level"}'`,
  },
  {
    id: "people-data-labs",
    name: "People Data Labs",
    category: "Data Enrichment",
    description:
      "Test your People Data Labs API key with the person enrichment endpoint",
    documentationUrl: "https://docs.peopledatalabs.com/",
    type: "browser",
    endpoint: "https://api.peopledatalabs.com/v5/person/enrich",
    method: "GET",
    headers: (key) => ({
      "X-Api-Key": key,
    }),
    queryParams: { email: "sean@peopledatalabs.com" }, // Usually need a query param
    endpointBuilder: (key) =>
      `https://api.peopledatalabs.com/v5/person/enrich?email=sean@peopledatalabs.com&api_key=${key}`, // Often PDL allows api_key in query or header. Header is cleaner if allowed primarily. Documentation says X-Api-Key header.
    // Let's stick to standard fetch. The 'endpoint' property can be used directly if it's simpler.
    // If endpoint is a function it builds the full URL.
    endpoint: (key) =>
      `https://api.peopledatalabs.com/v5/person/enrich?email=sean@peopledatalabs.com`,
    headers: (key) => ({ "X-Api-Key": key }),
    responseCheck: (data) => data && data.status === 200,
  },
  {
    id: "fullcontact",
    name: "FullContact",
    category: "Data Enrichment",
    description:
      "Test your FullContact API key with the person enrichment endpoint",
    documentationUrl: "https://docs.fullcontact.com/",
    type: "server",
    curlCommand: (key) =>
      `curl -X POST https://api.fullcontact.com/v3/person.enrich \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json" \\
  -d '{"email": "bart@fullcontact.com"}'`,
  },
  {
    id: "pipl",
    name: "Pipl",
    category: "Data Enrichment",
    description: "Test your Pipl API key with the search endpoint",
    documentationUrl: "https://docs.pipl.com/",
    type: "server",
    curlCommand: (key) =>
      `curl -F raw_name="Clark Kent" \\
  -F key=${key} \\
  http://api.pipl.com/search/`,
  },
  {
    id: "demandbase",
    name: "Demandbase",
    category: "Data Enrichment",
    description: "Test your Demandbase API key with the accounts endpoint",
    documentationUrl: "https://docs.demandbase.com/",
    type: "server",
    curlCommand: (key) =>
      `curl "https://authentication.demandbase.com/api/v1/oauth/token" \\
  -d "grant_type=client_credentials" \\
  -d "client_id=${key}" \\
  -d "client_secret=YOUR_CLIENT_SECRET"`, // Demandbase often implies a more complex auth flow, but let's assume 'API Key' here refers to a simple usage or the user knows.
  },
  {
    id: "enrich",
    name: "Enrich",
    category: "Data Enrichment",
    description: "Test your Enrich API key with the person enrichment endpoint",
    documentationUrl: "https://docs.enrich.io/",
    type: "browser",
    endpoint: (key) => `https://api.enrich.io/v1/person/enrich?email=test@example.com&api_key=${key}`,
    method: "GET",
    headers: () => ({}),
    responseCheck: (data) => data && !data.error,
  },
  {
    id: "datanyze",
    name: "Datanyze",
    category: "Data Enrichment",
    description: "Test your Datanyze API key with the companies endpoint",
    documentationUrl: "https://docs.datanyze.com/",
    type: "server",
    curlCommand: (key, email) =>
      `curl "http://api.datanyze.com/limits/?email=${email || 'EMAIL'}&token=${key}"`,
     inputs: [{ name: "email", label: "Email" }],
  },
  {
    id: "lusha",
    name: "Lusha",
    category: "Data Enrichment",
    description: "Test your Lusha API key with the contacts endpoint",
    documentationUrl: "https://docs.lusha.com/",
    type: "server",
    curlCommand: (key) =>
      `curl -X GET "https://api.lusha.com/person?email=test@example.com" \\
  -H "api_key: ${key}"`,
  },
  {
    id: "data-axle",
    name: "Data Axle",
    category: "Data Enrichment",
    description: "Test your Data Axle API key with the business lookup endpoint",
    documentationUrl: "https://docs.data-axle.com/",
    type: "server",
    curlCommand: (key) =>
      `curl -X GET "https://api.data-axle.com/v1/places/search" \\
  -H "X-AUTH-TOKEN: ${key}"`,
  },
  {
    id: "coresignal",
    name: "Coresignal",
    category: "Data Enrichment",
    description: "Test your Coresignal API key with the companies endpoint",
    documentationUrl: "https://docs.coresignal.com/",
    type: "server",
    curlCommand: (key) =>
      `curl -X GET "https://api.coresignal.com/cdapi/v1/linkedin/member/collect/00000000-0000-0000-0000-000000000000" \\
  -H "Authorization: Bearer ${key}"`,
  },
  {
    id: "snov-io",
    name: "Snov.io",
    category: "Data Enrichment",
    description: "Test your Snov.io API key with the leads endpoint",
    documentationUrl: "https://docs.snov.io/",
    type: "server",
    curlCommand: (key, clientId) =>
      `curl -X POST "https://api.snov.io/v1/oauth/access_token" \\
  -d "grant_type=client_credentials" \\
  -d "client_id=${clientId || 'CLIENT_ID'}" \\
  -d "client_secret=${key}"`,
    inputs: [{ name: "clientId", label: "Client ID" }],
  },
  {
    id: "leadgenius",
    name: "LeadGenius",
    category: "Data Enrichment",
    description: "Test your LeadGenius API key with the companies endpoint",
    documentationUrl: "https://docs.leadgenius.com/",
    type: "server",
    curlCommand: (key) =>
      `curl -X GET "https://api.leadgenius.com/v1/campaigns" \\
  -H "Authorization: Bearer ${key}"`,
  },
  {
    id: "mattermark",
    name: "Mattermark",
    category: "Data Enrichment",
    description: "Test your Mattermark API key with the companies endpoint",
    documentationUrl: "https://docs.mattermark.com/",
    type: "server",
    curlCommand: (key) =>
      `curl "https://api.mattermark.com/companies/99?key=${key}"`,
  },
  {
    id: "crunchbase",
    name: "Crunchbase",
    category: "Data Enrichment",
    description: "Test your Crunchbase API key with the organizations endpoint",
    documentationUrl: "https://data.crunchbase.com/docs",
    type: "server",
    curlCommand: (key) =>
      `curl -X GET "https://api.crunchbase.com/api/v4/entities/organizations/crunchbase" \\
  -H "X-cb-user-key: ${key}"`,
  },
  {
    id: "hg-insights",
    name: "HG Insights",
    category: "Data Enrichment",
    description: "Test your HG Insights API key with the companies endpoint",
    documentationUrl: "https://docs.hginsights.com/",
    type: "server",
    curlCommand: (key) =>
      `curl -X GET "https://api.hginsights.com/v1/companies" \\
  -H "x-api-key: ${key}"`,
  },
  {
    id: "leadspace",
    name: "Leadspace",
    category: "Data Enrichment",
    description: "Test your Leadspace API key with the contacts endpoint",
    documentationUrl: "https://docs.leadspace.com/",
    type: "server",
    curlCommand: (key) =>
      `curl -X POST "https://api.leadspace.com/v1/enrich" \\
  -H "Authorization: Token ${key}"`,
  },
  {
    id: "melissa",
    name: "Melissa",
    category: "Data Enrichment",
    description:
      "Test your Melissa API key with the address verification endpoint",
    documentationUrl: "https://docs.melissa.com/",
    type: "server",
    curlCommand: (key) =>
      `curl "https://address.melissadata.net/v3/WEB/GlobalAddress/doGlobalAddress?id=${key}&format=json"`,
  },

  // --- Email ---
  {
    id: "sendgrid",
    name: "SendGrid",
    category: "Email",
    description: "Test your SendGrid API key with the mail send endpoint",
    documentationUrl: "https://docs.sendgrid.com/api-reference/mail-send/mail-send",
    type: "server",
    curlCommand: (key) =>
      `curl -X "POST" "https://api.sendgrid.com/v3/mail/send" \\
  -H "Authorization: Bearer ${key}" \\
  -H "Content-Type: application/json" \\
  -d '{"personalizations": [{"to": [{"email": "test@example.com"}]}],"from": {"email": "test@example.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}'`,
  },
  {
    id: "twilio",
    name: "Twilio",
    category: "Email",
    description:
      "Test your Twilio Account SID and Auth Token with the messages endpoint",
    documentationUrl: "https://www.twilio.com/docs/messaging/api",
    type: "server",
    curlCommand: (key, sid) =>
      `curl -X POST "https://api.twilio.com/2010-04-01/Accounts/${sid || 'ACCOUNT_SID'}/Messages.json" \\
  --data-urlencode "To=+15558675310" \\
  --data-urlencode "From=+15017122661" \\
  --data-urlencode "Body=Hello from Twilio" \\
  -u "${sid || 'ACCOUNT_SID'}:${key}"`,
    inputs: [{ name: "sid", label: "Account SID" }],
  },
  {
    id: "resend",
    name: "Resend",
    category: "Email",
    description: "Test your Resend API key with the emails endpoint",
    documentationUrl: "https://resend.com/docs/api-reference/emails/send-email",
    type: "browser",
    endpoint: "https://api.resend.com/emails",
    method: "POST",
    headers: (key) => ({
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    }),
    body: {
      from: "onboarding@resend.dev",
      to: "delivered@resend.dev",
      subject: "Hello World",
      html: "<p>Congrats on sending your first email!</p>",
    },
    responseCheck: (data) => data && data.id,
  },
  {
    id: "mailgun",
    name: "Mailgun",
    category: "Email",
    description: "Test your Mailgun API key with the messages endpoint",
    documentationUrl: "https://documentation.mailgun.com/en/latest/api-sending.html",
    type: "server",
    curlCommand: (key, domain) =>
      `curl -s --user "api:${key}" \\
  https://api.mailgun.net/v3/${domain || 'YOUR_DOMAIN_NAME'}/messages \\
  -F from='Excited User <mailgun@${domain || 'YOUR_DOMAIN_NAME'}>' \\
  -F to=YOU@YOUR_DOMAIN_NAME \\
  -F subject='Hello' \\
  -F text='Testing some Mailgun awesomeness!'`,
    inputs: [{ name: "domain", label: "Domain Name" }],
  },
  {
    id: "brevo",
    name: "Brevo (Sendinblue)",
    category: "Email",
    description: "Test your Brevo API key with the send email endpoint",
    documentationUrl: "https://developers.brevo.com/reference/sendtransacemail",
    type: "browser",
    endpoint: "https://api.brevo.com/v3/smtp/email",
    method: "POST",
    headers: (key) => ({
      "api-key": key,
      "content-type": "application/json",
    }),
    body: {
      sender: { name: "Sender", email: "sender@example.com" },
      to: [{ email: "test@example.com", name: "Test" }],
      subject: "Hello world",
      htmlContent: "<html><head></head><body><p>Hello,</p></body></html>",
    },
    responseCheck: (data) => data && (data.messageId || data.message_id),
  },
  {
    id: "postmark",
    name: "Postmark",
    category: "Email",
    description:
      "Test your Postmark Server Token with the email sending endpoint",
    documentationUrl: "https://postmarkapp.com/developer/api/email-api",
    type: "server",
    curlCommand: (key) =>
      `curl "https://api.postmarkapp.com/email" \\
  -X POST \\
  -H "Accept: application/json" \\
  -H "Content-Type: application/json" \\
  -H "X-Postmark-Server-Token: ${key}" \\
  -d '{
  "From": "sender@example.com",
  "To": "receiver@example.com",
  "Subject": "Postmark test",
  "TextBody": "Hello dear Postmark user.",
  "HtmlBody": "<html><body><strong>Hello</strong> dear Postmark user.</body></html>",
  "MessageStream": "outbound"
}'`,
  },
  {
    id: "sparkpost",
    name: "SparkPost",
    category: "Email",
    description: "Test your SparkPost API key with the transmissions endpoint",
    documentationUrl: "https://developers.sparkpost.com/api/transmissions/",
    type: "server",
    curlCommand: (key) =>
      `curl -X POST \\
  https://api.sparkpost.com/api/v1/transmissions \\
  -H "Authorization: ${key}" \\
  -H "Content-Type: application/json" \\
  -d '{"content": {"from": "sandbox@sparkpostbox.com", "subject": "Thundercats are GO", "text": "Sword of Omens, give me sight BEYOND sight"}, "recipients": [{"address": "test@example.com"}]}'`,
  },
  {
    id: "amazon-ses",
    name: "Amazon SES",
    category: "Email",
    description: "Test your Amazon SES credentials with the send email endpoint",
    documentationUrl: "https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html",
    type: "server",
    curlCommand: (key, secret, region) =>
      `# Amazon SES requires complex signature generation v4.
# Using AWS CLI is recommended:
aws ses send-email \\
  --from sender@example.com \\
  --destination ToAddresses=recipient@example.com \\
  --message Subject={Data="Test email"},Body={Text={Data="Hello World"}} \\
  --region ${region || 'us-east-1'} \\
  --profile default # Configure your profile with provided key/secret`,
    inputs: [{ name: "region", label: "AWS Region" }],
    // Note: providing true raw curl for AWS SigV4 is painful and error prone in a simple copy-paste.
  },
  {
    id: "loops",
    name: "Loops",
    category: "Email",
    description: "Test your Loops API key with the contacts endpoint",
    documentationUrl: "https://loops.so/docs/api-reference/intro",
    type: "server",
    curlCommand: (key) =>
      `curl -X POST "https://app.loops.so/api/v1/contacts/find" \\
  -H "Authorization: Bearer ${key}" \\
  -d "email=user@example.com"`,
  },

  // --- Payments ---
  {
    id: "stripe",
    name: "Stripe",
    category: "Payments",
    description: "Test your Stripe API key with the charges endpoint",
    documentationUrl: "https://stripe.com/docs/api",
    type: "server",
    curlCommand: (key) =>
      `curl https://api.stripe.com/v1/charges \\
  -u ${key}:`,
  },
];

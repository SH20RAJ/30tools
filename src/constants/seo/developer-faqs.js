// Comprehensive FAQ database for Developer Tools
export const DEVELOPER_TOOLS_FAQS = {
  // General Developer Tools FAQs
  general: [
    {
      question: "Are these developer tools really free to use?",
      answer:
        "Yes! All our developer tools are completely free with no hidden charges, registration requirements, or usage limits. We believe in providing accessible tools for developers worldwide.",
    },
    {
      question: "Do I need to upload my code or data to your servers?",
      answer:
        "No! All our developer tools process data client-side in your browser. Your code, API keys, and sensitive data never leave your device, ensuring complete privacy and security.",
    },
    {
      question: "Can I use these tools for commercial projects?",
      answer:
        "Absolutely! Our developer tools are free for both personal and commercial use. There are no licensing restrictions on using these tools in your professional development work.",
    },
    {
      question: "Do the tools work offline?",
      answer:
        "Yes! Once the page loads, most developer tools work offline since all processing happens in your browser. No internet connection is required for core functionality.",
    },
    {
      question: "Are these tools suitable for production environments?",
      answer:
        "Our tools are perfect for development, testing, and debugging. For production environments, we recommend using appropriate libraries and frameworks in your codebase.",
    },
    {
      question: "How do I report bugs or request new features?",
      answer:
        "We welcome feedback! Use our contact form or GitHub repository to report issues or suggest new developer tools. We actively respond to community feedback.",
    },
  ],

  // JSON Formatter specific FAQs
  "json-formatter": [
    {
      question: "What is JSON and why do I need to format it?",
      answer:
        "JSON (JavaScript Object Notation) is a lightweight data format used for APIs and configuration files. Formatting makes JSON readable and helps identify syntax errors quickly.",
    },
    {
      question: "Can the JSON formatter handle large files?",
      answer:
        "Yes! Our formatter can handle JSON files up to 10MB in size. For extremely large files, consider breaking them into smaller chunks for better performance.",
    },
    {
      question: "What's the difference between formatting and minifying JSON?",
      answer:
        "Formatting adds indentation and line breaks for readability. Minifying removes whitespace to reduce file size for production use and faster data transmission.",
    },
    {
      question: "Does the tool validate JSON syntax?",
      answer:
        "Yes! Our formatter automatically validates JSON syntax and highlights errors with detailed error messages, including line numbers and error descriptions.",
    },
    {
      question: "Can I format nested JSON objects?",
      answer:
        "Absolutely! The tool handles deeply nested JSON objects and arrays, displaying them in a clear tree structure with proper indentation.",
    },
    {
      question: "Is my JSON data secure when using this tool?",
      answer:
        "Yes! All JSON processing happens locally in your browser. Your data is never uploaded to our servers or stored anywhere, ensuring complete privacy.",
    },
    {
      question: "Can I copy the formatted JSON?",
      answer:
        "Yes! After formatting, you can easily copy the result to your clipboard with a single click, ready to paste into your code editor or API client.",
    },
    {
      question: "Does the formatter support JSON with comments?",
      answer:
        "Our formatter primarily supports standard JSON. For JSON with comments (JSONC), consider removing comments first or using a specialized JSONC formatter.",
    },
  ],

  // Base64 Tool specific FAQs
  "base64-tool": [
    {
      question: "What is Base64 encoding and when is it used?",
      answer:
        "Base64 encoding converts binary data into ASCII text. It's commonly used for email attachments, data URIs, API data transmission, and embedding images in web pages.",
    },
    {
      question: "Can I encode files and images to Base64?",
      answer:
        "Yes! Our tool supports encoding text, files, and images to Base64. Simply upload your file or paste text, and get the encoded Base64 string instantly.",
    },
    {
      question: "What's the maximum file size for Base64 encoding?",
      answer:
        "You can encode files up to 25MB in size. Note that Base64 encoding increases file size by approximately 33%, so consider this for large files.",
    },
    {
      question: "How do I decode Base64 back to the original format?",
      answer:
        "Simply paste your Base64 string into the decoder section. The tool automatically detects the data type and allows you to download the decoded file.",
    },
    {
      question: "Is Base64 encoding secure for sensitive data?",
      answer:
        "Base64 is NOT encryption - it's just encoding. Anyone can decode Base64 data. For sensitive data, use proper encryption methods before Base64 encoding.",
    },
    {
      question: "Can I batch process multiple files?",
      answer:
        "Yes! Our tool supports batch processing, allowing you to encode or decode multiple files simultaneously, saving time for bulk operations.",
    },
    {
      question: "Why does Base64 encoding make files larger?",
      answer:
        "Base64 uses 64 printable ASCII characters to represent binary data. This encoding method increases file size by about 33% due to the character set limitation.",
    },
    {
      question: "Can I use encoded data directly in web pages?",
      answer:
        "Yes! Base64 encoded images can be used as data URIs in HTML/CSS. For example: `<img src='data:image/png;base64,YOUR_ENCODED_DATA'>`",
    },
  ],

  // Hash Generator specific FAQs
  "hash-generator": [
    {
      question: "What are hash functions and why are they important?",
      answer:
        "Hash functions convert input data into fixed-size strings. They're crucial for password storage, data integrity verification, digital signatures, and security applications.",
    },
    {
      question: "Which hash algorithm should I use?",
      answer:
        "For security: SHA-256 or SHA-512. For file integrity: MD5 or SHA-1. For passwords: bcrypt or Argon2 (not available in this tool). Choose based on your security requirements.",
    },
    {
      question: "Is MD5 still secure for password hashing?",
      answer:
        "No! MD5 is cryptographically broken and shouldn't be used for passwords. Use SHA-256 minimum, or better yet, dedicated password hashing functions like bcrypt.",
    },
    {
      question: "Can I hash files as well as text?",
      answer:
        "Yes! Our tool supports hashing both text input and file uploads. File hashing is useful for integrity verification and creating checksums.",
    },
    {
      question: "What's the difference between SHA-1, SHA-256, and SHA-512?",
      answer:
        "They differ in security and output size. SHA-1 (160-bit) is deprecated, SHA-256 (256-bit) is standard, SHA-512 (512-bit) offers maximum security but larger output.",
    },
    {
      question: "Can I compare hashes to verify data integrity?",
      answer:
        "Yes! Generate hashes of your data, then compare them later. If hashes match, the data hasn't been modified. This is perfect for file integrity verification.",
    },
    {
      question: "Are the hash calculations performed securely?",
      answer:
        "Yes! All hash calculations happen locally in your browser using secure JavaScript implementations. Your data never leaves your device.",
    },
    {
      question: "Can I generate salted hashes?",
      answer:
        "Our basic tool generates standard hashes. For salted hashes (recommended for passwords), manually prepend your salt to the input before hashing.",
    },
  ],

  // Regex Tester specific FAQs
  "regex-tester": [
    {
      question: "What is a regular expression (regex)?",
      answer:
        "Regular expressions are patterns used to match character combinations in strings. They're powerful tools for text processing, validation, and data extraction.",
    },
    {
      question: "Which regex flavor does the tool support?",
      answer:
        "Our tool primarily supports JavaScript regex flavor. We also provide options for Python and PHP flavors, with notation differences clearly marked.",
    },
    {
      question: "Can I test regex patterns with multiple test cases?",
      answer:
        "Yes! Add multiple test strings to see how your pattern matches different inputs. This helps ensure your regex works correctly across various scenarios.",
    },
    {
      question: "How do I debug a regex that's not working?",
      answer:
        "Use our step-by-step explanation feature, check for escaped characters, verify pattern syntax, and test with simpler patterns first to isolate issues.",
    },
    {
      question: "What are capture groups and how do I use them?",
      answer:
        "Capture groups (parentheses) extract specific parts of matches. Our tool displays all capture groups, making it easy to see what each group captures.",
    },
    {
      question: "Can I save and share my regex patterns?",
      answer:
        "Currently, patterns aren't saved automatically. We recommend bookmarking URLs with your patterns or copying them to your notes for future use.",
    },
    {
      question: "How do I match special characters like dots or brackets?",
      answer:
        "Escape special characters with backslashes: \\. for literal dots, \\[ \\] for brackets, \\\\ for backslashes. Our tool highlights these syntax elements.",
    },
    {
      question: "What's the difference between greedy and non-greedy matching?",
      answer:
        "Greedy quantifiers (* + {}) match as much as possible. Non-greedy (*? +? {}?) match as little as possible. Test both to see the difference.",
    },
  ],

  // API Tester specific FAQs
  "api-tester": [
    {
      question: "What types of API requests can I test?",
      answer:
        "Our tool supports all standard HTTP methods: GET, POST, PUT, DELETE, PATCH, HEAD, and OPTIONS. Perfect for testing REST APIs and web services.",
    },
    {
      question: "Can I add custom headers for authentication?",
      answer:
        "Yes! Add custom headers including Authorization, API keys, Content-Type, and any other headers your API requires. Headers are sent securely with each request.",
    },
    {
      question: "How do I test APIs that require authentication?",
      answer:
        "Add authentication headers (Bearer tokens, API keys) or use basic auth. Our tool supports various authentication methods commonly used in REST APIs.",
    },
    {
      question: "Can I send JSON data in POST requests?",
      answer:
        "Absolutely! Set Content-Type to application/json and paste your JSON data in the request body. The tool automatically formats and validates JSON.",
    },
    {
      question: "Does the tool support CORS-enabled APIs only?",
      answer:
        "Yes, due to browser security, we can only test CORS-enabled APIs. For non-CORS APIs, consider using our browser extension or desktop API clients.",
    },
    {
      question: "Can I save request history for later use?",
      answer:
        "Yes! The tool maintains a history of your recent requests during your session, making it easy to rerun tests or modify previous requests.",
    },
    {
      question: "How do I interpret HTTP status codes?",
      answer:
        "Our tool displays status codes with explanations: 200 (success), 404 (not found), 500 (server error), etc. Hover over codes for detailed descriptions.",
    },
    {
      question: "Can I test file upload APIs?",
      answer:
        "Yes! Use form-data or multipart encoding to test file upload endpoints. Select files from your device and send them as part of POST requests.",
    },
  ],

  // JWT Decoder specific FAQs
  "jwt-decoder": [
    {
      question: "What is a JWT token and why decode it?",
      answer:
        "JWT (JSON Web Token) is a secure way to transmit information. Decoding helps developers debug authentication issues, verify claims, and understand token structure.",
    },
    {
      question: "Can I verify JWT signatures with this tool?",
      answer:
        "Our tool shows signature information and structure, but doesn't verify signatures (requires secret keys). Use it for debugging token structure and claims.",
    },
    {
      question: "What information is in JWT header and payload?",
      answer:
        "Header contains algorithm and token type. Payload contains claims (user info, permissions, expiration). Our tool displays both sections clearly formatted.",
    },
    {
      question: "How do I check if a JWT token is expired?",
      answer:
        "Look for the 'exp' claim in the payload. Our tool highlights expiration status and shows remaining time for easy verification.",
    },
    {
      question: "Is it safe to decode JWT tokens with this tool?",
      answer:
        "Yes! Decoding happens locally in your browser. However, never paste tokens containing sensitive data into any online tool as a security best practice.",
    },
    {
      question: "What are JWT claims and how do I read them?",
      answer:
        "Claims are statements about an entity (user). Standard claims include 'sub' (subject), 'exp' (expiration), 'iat' (issued at). Our tool explains each claim.",
    },
    {
      question: "Can I decode malformed or invalid JWT tokens?",
      answer:
        "The tool attempts to decode malformed tokens and shows error messages for invalid format, helping you identify and fix token structure issues.",
    },
    {
      question: "What's the difference between access and refresh tokens?",
      answer:
        "Access tokens are short-lived (minutes/hours) for API access. Refresh tokens are long-lived (days/weeks) to get new access tokens. Both can be decoded with our tool.",
    },
  ],

  // URL Encoder specific FAQs
  "url-encoder": [
    {
      question: "When do I need to encode URLs?",
      answer:
        "Encode URLs when they contain special characters, spaces, or non-ASCII characters. This ensures proper transmission in HTTP requests and prevents URL parsing errors.",
    },
    {
      question:
        "What's the difference between URL encoding and percent encoding?",
      answer:
        "They're the same thing! Percent encoding is the formal name for URL encoding, where special characters are replaced with % followed by hexadecimal values.",
    },
    {
      question: "Which characters need to be encoded in URLs?",
      answer:
        "Spaces, special characters (&, =, ?, #, %, +), and non-ASCII characters must be encoded. Our tool automatically identifies and encodes these characters.",
    },
    {
      question: "Can I encode entire URLs or just query parameters?",
      answer:
        "You can encode both! Encode entire URLs for safe transmission, or just query parameter values. The tool handles both use cases automatically.",
    },
    {
      question: "How do I handle spaces in URLs?",
      answer:
        "Spaces can be encoded as %20 or + (in form data). Our tool shows both options, with %20 being the standard for most URL contexts.",
    },
    {
      question: "Is URL encoding reversible?",
      answer:
        "Yes! URL encoding is completely reversible. Use our decoder to convert encoded URLs back to their original form without any data loss.",
    },
    {
      question: "Can I bulk encode multiple URLs?",
      answer:
        "Yes! Paste multiple URLs (one per line) and our tool will encode them all simultaneously, saving time for bulk URL processing tasks.",
    },
    {
      question: "Does the tool handle international characters?",
      answer:
        "Absolutely! Our tool properly encodes UTF-8 characters including international text, emojis, and special symbols for worldwide compatibility.",
    },
  ],
};

// Helper function to get FAQs for a specific tool
export const getDeveloperToolFAQs = (toolId) => {
  const toolFAQs = DEVELOPER_TOOLS_FAQS[toolId] || [];
  const generalFAQs = DEVELOPER_TOOLS_FAQS.general || [];

  return [...toolFAQs, ...generalFAQs];
};

// Helper function to search FAQs
export const searchDeveloperFAQs = (query) => {
  const allFAQs = [];

  // Collect all FAQs
  Object.values(DEVELOPER_TOOLS_FAQS).forEach((faqs) => {
    if (Array.isArray(faqs)) {
      allFAQs.push(...faqs);
    }
  });

  // Search in questions and answers
  return allFAQs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase()),
  );
};

export default DEVELOPER_TOOLS_FAQS;

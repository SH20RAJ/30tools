// Comprehensive FAQ database for Text Tools
export const TEXT_TOOLS_FAQS = {
  // General Text Tools FAQs
  general: [
    {
      question: "Are these text tools really free to use?",
      answer:
        "Yes! All our text tools are completely free with no hidden charges, registration requirements, or usage limits. Process unlimited text without any restrictions.",
    },
    {
      question: "Do I need to create an account to use text tools?",
      answer:
        "No account required! All text tools work instantly in your browser. Simply visit the tool page and start processing your text immediately.",
    },
    {
      question: "Is my text data secure when using these tools?",
      answer:
        "Absolutely! All text processing happens locally in your browser. Your text data never leaves your device and is not stored on our servers, ensuring complete privacy.",
    },
    {
      question: "Can I use these tools for commercial purposes?",
      answer:
        "Yes! All our text tools can be used for personal, educational, and commercial purposes without any licensing restrictions or fees.",
    },
    {
      question: "Do the text tools work offline?",
      answer:
        "Most text tools work offline once the page is loaded since all processing happens in your browser. No internet connection is required for basic functionality.",
    },
    {
      question: "What file formats do the text tools support?",
      answer:
        "Our text tools work with plain text input. You can copy and paste text from any source including Word documents, Google Docs, PDFs, websites, and text files.",
    },
  ],

  // Word Counter specific FAQs
  "word-counter": [
    {
      question: "How accurate is the word counting?",
      answer:
        "Our word counter uses advanced algorithms that accurately count words according to standard conventions. It properly handles contractions, hyphenated words, and different languages.",
    },
    {
      question: "What counts as a word in the word counter?",
      answer:
        "A word is typically defined as a sequence of characters separated by spaces. Our counter handles contractions (like 'don't') as single words and hyphenated words according to standard counting rules.",
    },
    {
      question: "Can I count words in different languages?",
      answer:
        "Yes! Our word counter supports all languages and character sets including English, Spanish, French, German, Chinese, Japanese, Arabic, and many others.",
    },
    {
      question: "Does the tool count characters with or without spaces?",
      answer:
        "Our word counter displays both: characters including spaces and characters excluding spaces. This gives you flexibility for different requirements like social media limits or academic guidelines.",
    },
    {
      question: "How do I count words in a Google Doc or Word document?",
      answer:
        "Simply copy the text from your Google Doc or Word document and paste it into our word counter. The tool will instantly provide accurate word, character, sentence, and paragraph counts.",
    },
    {
      question: "Can I check reading time for my text?",
      answer:
        "Yes! Our word counter includes reading time estimation based on average reading speeds. This is perfect for blog posts, speeches, presentations, and content planning.",
    },
    {
      question: "Is there a limit to how much text I can count?",
      answer:
        "No limits! You can count words in documents of any size, from short social media posts to entire books or research papers.",
    },
    {
      question: "How do I count words for academic papers with citations?",
      answer:
        "Our word counter counts all text including citations. For academic requirements that exclude citations, you'll need to manually remove or exclude citation text before counting.",
    },
  ],

  // Character Counter specific FAQs
  "character-counter": [
    {
      question:
        "What's the difference between characters with and without spaces?",
      answer:
        "Characters with spaces count every letter, number, punctuation mark, and space. Characters without spaces exclude all whitespace, giving you just the visible characters.",
    },
    {
      question: "How do I check character limits for social media?",
      answer:
        "Our character counter shows real-time counts perfect for social media. Twitter has a 280-character limit, Instagram captions allow 2,200 characters, and LinkedIn posts can have up to 3,000 characters.",
    },
    {
      question:
        "Does the character counter work for emojis and special characters?",
      answer:
        "Yes! Our counter accurately counts emojis, Unicode characters, symbols, and special characters from all languages. Some emojis may count as 2 characters on certain platforms.",
    },
    {
      question: "Can I count characters for meta descriptions and SEO?",
      answer:
        "Absolutely! Our character counter is perfect for SEO. Meta descriptions should be 150-160 characters, title tags should be 50-60 characters, and our tool helps you stay within these limits.",
    },
    {
      question: "How accurate is the character count for different platforms?",
      answer:
        "Our character counter provides standard Unicode character counting. Different platforms may have slight variations in how they count certain characters, especially emojis and special symbols.",
    },
    {
      question: "Can I count characters in multiple paragraphs?",
      answer:
        "Yes! Paste any amount of text including multiple paragraphs, and our tool will count all characters while preserving line breaks and formatting.",
    },
    {
      question: "Is the character counter useful for text messages?",
      answer:
        "Definitely! SMS text messages have a 160-character limit for single messages. Our counter helps you stay within limits and avoid message splitting charges.",
    },
    {
      question: "How do I optimize my content for character limits?",
      answer:
        "Use our character counter while writing to see real-time counts. Edit your text to fit platform requirements, and consider using shorter words or removing unnecessary characters.",
    },
  ],

  // Password Generator specific FAQs
  "password-generator": [
    {
      question: "How secure are the generated passwords?",
      answer:
        "Our passwords are cryptographically secure, generated using your browser's secure random number generator. They provide excellent protection against brute force and dictionary attacks.",
    },
    {
      question: "What makes a password strong and secure?",
      answer:
        "Strong passwords combine uppercase and lowercase letters, numbers, and symbols. They should be at least 12 characters long, avoid dictionary words, and be unique for each account.",
    },
    {
      question: "Should I include symbols in my passwords?",
      answer:
        "Yes! Including symbols significantly increases password strength. Our generator includes safe symbols that work with most websites and systems while avoiding problematic characters.",
    },
    {
      question: "How long should my password be?",
      answer:
        "We recommend at least 12-16 characters for most accounts. For high-security accounts like banking or work systems, consider 20+ character passwords. Longer passwords are exponentially harder to crack.",
    },
    {
      question: "Are the passwords stored anywhere?",
      answer:
        "No! All password generation happens locally in your browser. We never store, log, or transmit your passwords. Each password is generated fresh and exists only on your device.",
    },
    {
      question: "Can I customize the password generation options?",
      answer:
        "Yes! You can control password length, include/exclude uppercase, lowercase, numbers, and symbols. You can also avoid similar-looking characters like '0' and 'O' if needed.",
    },
    {
      question: "How often should I change my passwords?",
      answer:
        "Change passwords immediately if there's a security breach. For regular accounts, changing passwords every 6-12 months is good practice. For high-security accounts, consider more frequent changes.",
    },
    {
      question: "Can I generate multiple passwords at once?",
      answer:
        "Yes! Our generator can create multiple passwords simultaneously, perfect for setting up multiple accounts or updating several passwords during a security audit.",
    },
  ],

  // Text Case Converter specific FAQs
  "text-case-converter": [
    {
      question: "What are the different text case types available?",
      answer:
        "We support uppercase, lowercase, title case, sentence case, camel case, pascal case, snake case, and kebab case. Each serves different purposes for writing, coding, and formatting.",
    },
    {
      question: "What's the difference between camel case and pascal case?",
      answer:
        "Camel case starts with a lowercase letter (like 'camelCase'), while pascal case starts with an uppercase letter (like 'PascalCase'). Both are used in programming for different naming conventions.",
    },
    {
      question: "When should I use title case vs sentence case?",
      answer:
        "Title case capitalizes major words and is used for headings, titles, and formal documents. Sentence case capitalizes only the first word and proper nouns, used for regular sentences and modern web headings.",
    },
    {
      question: "What is snake case and when is it used?",
      answer:
        "Snake case uses underscores between words (like 'snake_case') and is commonly used in programming for variable names, file names, and database fields in languages like Python and SQL.",
    },
    {
      question: "Can I convert large amounts of text at once?",
      answer:
        "Yes! Our converter handles any amount of text, from single words to entire documents. It processes the conversion instantly regardless of text length.",
    },
    {
      question: "Does the converter preserve formatting and line breaks?",
      answer:
        "The converter focuses on changing character case while preserving the basic structure of your text. Line breaks are maintained, but some formatting like bold or italic is not preserved.",
    },
    {
      question: "Is the case converter useful for SEO and content creation?",
      answer:
        "Absolutely! Proper case formatting improves readability and SEO. Use title case for headings, sentence case for descriptions, and ensure consistent formatting across your content.",
    },
    {
      question: "Can I convert text in languages other than English?",
      answer:
        "Yes! Our converter works with all languages that have uppercase and lowercase variants, including European languages, Cyrillic scripts, and others. Some case types work better with English.",
    },
  ],

  // Lorem Ipsum Generator specific FAQs
  "lorem-ipsum-generator": [
    {
      question: "What is Lorem Ipsum and why is it used?",
      answer:
        "Lorem Ipsum is scrambled Latin text used as placeholder content in design and publishing since the 1500s. It helps focus on visual design without being distracted by readable content.",
    },
    {
      question: "Is Lorem Ipsum better than using real text for mockups?",
      answer:
        "Yes! Lorem Ipsum prevents viewers from focusing on content instead of design. It's meaningless text that won't distract from layout, typography, and visual elements you're testing.",
    },
    {
      question: "How many words or paragraphs should I generate?",
      answer:
        "It depends on your project. For headlines, use 2-6 words. For paragraphs, 50-100 words is typical. For page layouts, generate enough text to fill your design realistically.",
    },
    {
      question: "Can I use Lorem Ipsum for commercial projects?",
      answer:
        "Absolutely! Lorem Ipsum is public domain and can be used freely in any project, commercial or personal. It's a standard industry practice for placeholder text.",
    },
    {
      question: "Does the generated text have any meaning?",
      answer:
        "Lorem Ipsum is based on scrambled Latin text from Cicero's writings, but the words are altered to be meaningless. This ensures it won't accidentally convey unintended messages.",
    },
    {
      question: "Can I generate specific amounts of text?",
      answer:
        "Yes! You can specify the exact number of words, sentences, or paragraphs you need. This is perfect for fitting specific design constraints or testing layouts.",
    },
    {
      question: "Is Lorem Ipsum still relevant for modern web design?",
      answer:
        "Definitely! Lorem Ipsum remains the industry standard for placeholder text in web design, app development, and print design. It's universally recognized and won't interfere with design decisions.",
    },
    {
      question:
        "Should I replace Lorem Ipsum with real content before launching?",
      answer:
        "Always! Lorem Ipsum is only for design and development phases. Replace it with real, meaningful content before publishing or launching your project to ensure good user experience and SEO.",
    },
  ],

  // Text Diff specific FAQs
  "text-diff": [
    {
      question: "How does the text comparison work?",
      answer:
        "Our diff tool compares texts line by line and character by character, highlighting additions, deletions, and modifications. It uses advanced algorithms to find the most meaningful differences.",
    },
    {
      question: "Can I compare large documents or files?",
      answer:
        "Yes! Our tool handles large texts efficiently. You can compare entire documents, code files, or lengthy content without performance issues.",
    },
    {
      question: "What types of differences are highlighted?",
      answer:
        "The tool highlights added text (usually in green), deleted text (usually in red), and modified text (usually in yellow or blue). This makes it easy to see exactly what changed.",
    },
    {
      question: "Can I ignore whitespace differences?",
      answer:
        "Yes! You can choose to ignore whitespace differences, which is useful when comparing code or formatted text where spacing changes aren't significant.",
    },
    {
      question: "Is the text diff useful for code review?",
      answer:
        "Absolutely! Developers use diff tools to review code changes, compare file versions, and understand modifications. Our tool works great for code comparison and review processes.",
    },
    {
      question: "Can I export or save the comparison results?",
      answer:
        "You can copy the comparison results or take screenshots. The visual diff display helps you document changes for review processes or version control.",
    },
    {
      question: "How accurate is the difference detection?",
      answer:
        "Our algorithm is very accurate at detecting meaningful differences while minimizing false positives. It's designed to show relevant changes clearly and efficiently.",
    },
    {
      question: "Can I compare texts in different languages?",
      answer:
        "Yes! The diff tool works with any language and character set, including Unicode characters, emojis, and special symbols from any writing system.",
    },
  ],
};

// Helper function to get FAQs for a specific text tool
export const getTextToolFAQs = (toolId) => {
  const toolFAQs = TEXT_TOOLS_FAQS[toolId] || [];
  const generalFAQs = TEXT_TOOLS_FAQS.general || [];

  return [...toolFAQs, ...generalFAQs];
};

// Helper function to search text tool FAQs
export const searchTextFAQs = (query) => {
  const allFAQs = [];

  // Collect all FAQs
  Object.values(TEXT_TOOLS_FAQS).forEach((faqs) => {
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

export default TEXT_TOOLS_FAQS;

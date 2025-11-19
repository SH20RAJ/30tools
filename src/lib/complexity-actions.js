"use server";

/**
 * Analyzes the time and space complexity of provided code using Pollinations AI API
 * @param {string} code - The source code to analyze
 * @param {string} language - Programming language of the code (e.g., 'javascript', 'python', 'java', 'cpp', etc.)
 * @param {string} model - AI model to use for analysis (default: 'qwen-coder')
 * @returns {Promise<Object>} Analysis result containing time complexity, space complexity, and explanations
 */
export async function analyzeComplexity(
  code,
  language = "javascript",
  model = "qwen-coder",
) {
  try {
    console.log(`🔍 Starting complexity analysis for ${language} code...`);

    if (!code || code.trim().length === 0) {
      throw new Error("Code cannot be empty");
    }

    // Construct the analysis prompt
    const analysisPrompt = `You are an expert computer science algorithm analyst. Analyze the following ${language} code and provide a detailed complexity analysis.

**Code to analyze:**
\`\`\`${language}
${code}
\`\`\`

**Please provide your analysis in the following JSON format:**
{
  "timeComplexity": {
    "bigO": "O(...)",
    "bestCase": "O(...)",
    "averageCase": "O(...)",
    "worstCase": "O(...)",
    "explanation": "Detailed explanation of why this time complexity..."
  },
  "spaceComplexity": {
    "bigO": "O(...)",
    "auxiliary": "O(...)",
    "explanation": "Detailed explanation of space usage..."
  },
  "algorithmType": "Description of the algorithm type (e.g., sorting, searching, dynamic programming, etc.)",
  "optimizations": [
    "List of possible optimizations to improve complexity"
  ],
  "keyInsights": [
    "Important observations about the algorithm's behavior"
  ],
  "complexity_analysis": {
    "loops": "Analysis of nested loops and their contribution",
    "recursion": "Analysis of recursive calls if any",
    "dataStructures": "Impact of data structures used"
  }
}

**Analysis Guidelines:**
1. Be precise with Big O notation
2. Consider all cases (best, average, worst)
3. Explain the reasoning behind each complexity assessment
4. Identify the dominant operations
5. Consider both time and space trade-offs
6. Provide actionable optimization suggestions
7. Respond ONLY with the JSON object, no additional text`;

    console.log("📡 Sending request to Pollinations AI API...");

    // Make request to Pollinations AI API
    const response = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: analysisPrompt,
          },
        ],
        model: model,
        jsonMode: true,
        seed: Math.floor(Math.random() * 1000000),
        temperature: 0.3, // Lower temperature for more consistent analysis
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ API Error:", response.status, errorText);
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`,
      );
    }

    const responseText = await response.text();
    console.log("✅ Received response from API");

    // Try to parse the JSON response
    let analysisResult;
    try {
      // Clean up the response text (remove any markdown code blocks)
      const cleanedResponse = responseText
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      analysisResult = JSON.parse(cleanedResponse);
    } catch (parseError) {
      console.error("❌ JSON Parse Error:", parseError);
      console.error("Raw response:", responseText);

      // Fallback: try to extract JSON from the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          analysisResult = JSON.parse(jsonMatch[0]);
        } catch (secondParseError) {
          console.error("❌ Second JSON Parse Error:", secondParseError);
          throw new Error("Failed to parse AI response as JSON");
        }
      } else {
        throw new Error("No valid JSON found in AI response");
      }
    }

    // Validate the analysis result structure
    if (!analysisResult.timeComplexity || !analysisResult.spaceComplexity) {
      console.error("❌ Invalid analysis structure:", analysisResult);
      throw new Error(
        "AI response missing required complexity analysis fields",
      );
    }

    console.log("✅ Complexity analysis completed successfully");

    return {
      success: true,
      analysis: analysisResult,
      metadata: {
        language,
        model,
        codeLength: code.length,
        analysisTimestamp: new Date().toISOString(),
      },
    };
  } catch (error) {
    console.error("❌ Error in analyzeComplexity:", error);
    return {
      success: false,
      error: error.message,
      metadata: {
        language,
        model,
        codeLength: code?.length || 0,
        analysisTimestamp: new Date().toISOString(),
      },
    };
  }
}

/**
 * Get available models for complexity analysis
 * @returns {Promise<Array>} List of available AI models
 */
export async function getAvailableModels() {
  try {
    console.log("📡 Fetching available models from Pollinations API...");

    const response = await fetch("https://text.pollinations.ai/models");

    if (!response.ok) {
      throw new Error(`Failed to fetch models: ${response.status}`);
    }

    const models = await response.json();

    // Filter models suitable for code analysis
    const codeAnalysisModels = models.filter(
      (model) =>
        model.input_modalities.includes("text") &&
        model.output_modalities.includes("text") &&
        (model.name.includes("coder") ||
          model.name.includes("openai") ||
          model.name.includes("deepseek") ||
          model.name.includes("qwen") ||
          model.name.includes("mistral")),
    );

    console.log(
      `✅ Found ${codeAnalysisModels.length} suitable models for code analysis`,
    );

    return {
      success: true,
      models: codeAnalysisModels.map((model) => ({
        name: model.name,
        description: model.description,
        aliases: model.aliases || [],
        tier: model.tier,
        maxInputChars: model.maxInputChars || 10000,
        reasoning: model.reasoning || false,
      })),
    };
  } catch (error) {
    console.error("❌ Error fetching models:", error);
    return {
      success: false,
      error: error.message,
      models: [
        // Fallback models
        {
          name: "qwen-coder",
          description: "Qwen 2.5 Coder 32B",
          tier: "anonymous",
        },
        { name: "deepseek", description: "DeepSeek V3.1", tier: "seed" },
        { name: "openai", description: "OpenAI GPT-5 Nano", tier: "anonymous" },
      ],
    };
  }
}

/**
 * Validate code syntax for basic issues before analysis
 * @param {string} code - Code to validate
 * @param {string} language - Programming language
 * @returns {Promise<Object>} Validation result
 */
export async function validateCode(code, language) {
  const issues = [];

  // Basic validation
  if (!code || code.trim().length === 0) {
    issues.push("Code cannot be empty");
    return { valid: false, issues };
  }

  if (code.length > 50000) {
    issues.push("Code is too long (maximum 50,000 characters)");
  }

  // Language-specific basic validation
  switch (language.toLowerCase()) {
    case "javascript":
    case "js":
    case "typescript":
    case "ts":
      // Check for basic JavaScript syntax
      const braceCount =
        (code.match(/\{/g) || []).length - (code.match(/\}/g) || []).length;
      if (braceCount !== 0) {
        issues.push("Unmatched braces detected");
      }
      break;

    case "python":
    case "py":
      // Check for basic Python syntax - validate indentation consistency
      const lines = code.split("\n");
      let indentLevel = 0;
      for (const line of lines) {
        if (line.trim().endsWith(":") && !line.trim().startsWith("#")) {
          indentLevel++;
        }
      }

      // Use indentLevel to check for potential indentation issues
      if (indentLevel > 20) {
        issues.push("Code has deep nesting which may cause indentation issues");
      }
      break;

    case "java":
      if (!code.includes("class") && !code.includes("interface")) {
        issues.push("Java code should contain at least one class or interface");
      }
      break;

    case "cpp":
    case "c++":
    case "c":
      if (!code.includes("#include") && !code.includes("int main")) {
        issues.push("C/C++ code should contain includes or main function");
      }
      break;
  }

  return {
    valid: issues.length === 0,
    issues,
    warnings: issues.length > 0 ? issues : [],
  };
}

/**
 * Get supported programming languages
 * @returns {Promise<Array>} List of supported languages
 */
export async function getSupportedLanguages() {
  return [
    { value: "javascript", label: "JavaScript", extensions: [".js", ".mjs"] },
    { value: "typescript", label: "TypeScript", extensions: [".ts", ".tsx"] },
    { value: "python", label: "Python", extensions: [".py", ".pyw"] },
    { value: "java", label: "Java", extensions: [".java"] },
    { value: "cpp", label: "C++", extensions: [".cpp", ".cxx", ".cc"] },
    { value: "c", label: "C", extensions: [".c", ".h"] },
    { value: "csharp", label: "C#", extensions: [".cs"] },
    { value: "go", label: "Go", extensions: [".go"] },
    { value: "rust", label: "Rust", extensions: [".rs"] },
    { value: "php", label: "PHP", extensions: [".php"] },
    { value: "ruby", label: "Ruby", extensions: [".rb"] },
    { value: "swift", label: "Swift", extensions: [".swift"] },
    { value: "kotlin", label: "Kotlin", extensions: [".kt", ".kts"] },
    { value: "scala", label: "Scala", extensions: [".scala"] },
    { value: "dart", label: "Dart", extensions: [".dart"] },
    { value: "r", label: "R", extensions: [".r", ".R"] },
    { value: "matlab", label: "MATLAB", extensions: [".m"] },
    { value: "perl", label: "Perl", extensions: [".pl", ".pm"] },
    { value: "lua", label: "Lua", extensions: [".lua"] },
    { value: "haskell", label: "Haskell", extensions: [".hs"] },
  ];
}

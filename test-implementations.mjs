// Test script to verify AI and API implementations
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '.env.local') });

// Import modules
import { generateYouTubeTagsAI } from './src/lib/ai-services/youtube-ai-actions.js';
import { downloadYouTubeTranscriptTactiq } from './src/lib/youtube-actions.js';

console.log('🚀 Testing YouTube Tools Implementation...\n');

// Test 1: AI-powered YouTube Tag Generation
console.log('1️⃣ Testing AI-powered YouTube Tag Generation...');
try {
  const tagResult = await generateYouTubeTagsAI('web development tutorial for beginners');
  console.log('✅ Tag Generation Result:', JSON.stringify(tagResult, null, 2));
} catch (error) {
  console.log('❌ Tag Generation Error:', error.message);
}

console.log('\n' + '='.repeat(50) + '\n');

// Test 2: Tactiq API Transcript Download
console.log('2️⃣ Testing Tactiq API Transcript Download...');
try {
  const transcriptResult = await downloadYouTubeTranscriptTactiq('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'en');
  console.log('✅ Transcript Download Result:');
  console.log('- Title:', transcriptResult.data?.title);
  console.log('- Segments:', transcriptResult.data?.segmentCount);
  console.log('- Word Count:', transcriptResult.data?.wordCount);
  console.log('- Duration:', transcriptResult.data?.duration, 'seconds');
  console.log('- Available Formats: Plain Text, SRT, VTT, JSON');
  
  // Show a sample of the transcript
  if (transcriptResult.data?.plainText) {
    console.log('- Sample Text:', transcriptResult.data.plainText.substring(0, 100) + '...');
  }
} catch (error) {
  console.log('❌ Transcript Download Error:', error.message);
}

console.log('\n🎉 Test Complete!');

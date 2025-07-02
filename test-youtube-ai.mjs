#!/usr/bin/env node

/**
 * Test script for YouTube AI tools
 * Tests all AI-powered YouTube functions with sample data
 */

import { 
  generateYouTubeScriptAI, 
  generateCommentResponseAI, 
  generateYouTubeIdeasAI,
  generateTimestampsAI 
} from './src/lib/ai-services/youtube-ai-actions.js';

async function testYouTubeScriptGenerator() {
  console.log('🎬 Testing YouTube Script Generator...');
  
  const scriptData = {
    topic: 'How to Learn JavaScript in 2025',
    videoType: 'tutorial',
    duration: '10',
    targetAudience: 'beginner developers',
    tone: 'friendly',
    additionalInfo: 'Focus on practical examples and real-world projects'
  };

  try {
    const result = await generateYouTubeScriptAI(scriptData);
    
    if (result.success) {
      console.log('✅ Script Generator: SUCCESS');
      console.log(`Generated script length: ${result.script.length} characters`);
      console.log(`Word count: ${result.metadata.wordCount}`);
    } else {
      console.log('❌ Script Generator: FAILED');
      console.log('Error:', result.error);
    }
  } catch (error) {
    console.log('❌ Script Generator: ERROR');
    console.log('Error:', error.message);
  }
  
  console.log('');
}

async function testCommentResponder() {
  console.log('💬 Testing Comment Responder...');
  
  const requestData = {
    comment: 'This tutorial was really helpful! Can you make more videos about React?',
    tone: 'friendly',
    includeQuestion: true,
    includeEmoji: true,
    channelContext: 'Programming tutorial channel focused on web development'
  };

  try {
    const result = await generateCommentResponseAI(requestData);
    
    if (result.success) {
      console.log('✅ Comment Responder: SUCCESS');
      console.log(`Generated ${result.responses.length} response options`);
      console.log('First response:', result.responses[0]);
    } else {
      console.log('❌ Comment Responder: FAILED');
      console.log('Error:', result.error);
    }
  } catch (error) {
    console.log('❌ Comment Responder: ERROR');
    console.log('Error:', error.message);
  }
  
  console.log('');
}

async function testIdeaGenerator() {
  console.log('💡 Testing Idea Generator...');
  
  const requestData = {
    niche: 'Web Development',
    audience: 'beginner developers',
    contentType: 'tutorial',
    videoLength: 'medium',
    goalType: 'education',
    trendingTopics: 'AI tools, Next.js 15, TypeScript'
  };

  try {
    const result = await generateYouTubeIdeasAI(requestData);
    
    if (result.success) {
      console.log('✅ Idea Generator: SUCCESS');
      console.log(`Generated ${result.ideas.length} video ideas`);
      console.log('First idea:', result.ideas[0]?.title);
    } else {
      console.log('❌ Idea Generator: FAILED');
      console.log('Error:', result.error);
    }
  } catch (error) {
    console.log('❌ Idea Generator: ERROR');
    console.log('Error:', error.message);
  }
  
  console.log('');
}

async function testTimestampGenerator() {
  console.log('⏰ Testing Timestamp Generator...');
  
  const transcript = `
    Hello everyone and welcome back to my channel. Today we're going to learn about JavaScript fundamentals.
    First, let's talk about variables and how to declare them using let, const, and var keywords.
    Variables are containers that store data values. In JavaScript, you can declare variables in three ways.
    Next, we'll explore functions and how they help organize your code into reusable blocks.
    Functions are one of the fundamental building blocks in JavaScript programming.
    Finally, we'll cover objects and arrays, which are essential data structures in JavaScript.
    Objects allow you to store collections of key-value pairs, while arrays store ordered lists of values.
    That's all for today's tutorial. Don't forget to like and subscribe for more programming content!
  `;

  try {
    const result = await generateTimestampsAI('https://youtube.com/watch?v=test123', transcript);
    
    if (result.success) {
      console.log('✅ Timestamp Generator: SUCCESS');
      console.log(`Generated ${result.timestamps.length} timestamps`);
      console.log('First timestamp:', result.timestamps[0]);
    } else {
      console.log('❌ Timestamp Generator: FAILED');
      console.log('Error:', result.error);
    }
  } catch (error) {
    console.log('❌ Timestamp Generator: ERROR');
    console.log('Error:', error.message);
  }
  
  console.log('');
}

async function runAllTests() {
  console.log('🚀 Starting YouTube AI Tools Test Suite\n');
  console.log('=====================================\n');
  
  await testYouTubeScriptGenerator();
  await testCommentResponder();
  await testIdeaGenerator();
  await testTimestampGenerator();
  
  console.log('=====================================');
  console.log('🏁 Test Suite Complete');
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runAllTests().catch(console.error);
}

export { runAllTests };

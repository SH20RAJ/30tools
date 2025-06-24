// Test script for server actions
import { fetchTeraboxOGData, fetchTeraboxVideoData } from './src/lib/terabox-actions.js';

async function testServerActions() {
  const testUrl = 'https://teraboxapp.com/s/1_JOOXjZL2H7wJsHjwTwbTw';
  
  console.log('Testing OG data fetch...');
  try {
    const ogData = await fetchTeraboxOGData(testUrl);
    console.log('OG Data:', ogData);
  } catch (error) {
    console.error('OG Data Error:', error);
  }
  
  console.log('\nTesting video data fetch...');
  try {
    const videoData = await fetchTeraboxVideoData(testUrl);
    console.log('Video Data:', videoData);
  } catch (error) {
    console.error('Video Data Error:', error);
  }
}

// testServerActions();
console.log('Server actions test script ready');

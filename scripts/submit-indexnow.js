const fetch = require('node-fetch');

async function submitIndexNow() {
  console.log('🚀 Triggering IndexNow submission...');

  try {
    // We can call our own API route to handle the submission logic
    // This ensures logic is centralized in the Next.js app
    const response = await fetch('http://localhost:3000/api/indexnow');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Submission Result:', data);
  } catch (error) {
    console.error('❌ Error submitting to IndexNow:', error.message);
    console.log('Ensure the dev server is running (npm run dev) or deploy the app first.');
  }
}

submitIndexNow();

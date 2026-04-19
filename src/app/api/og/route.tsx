import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get dynamic parameters
    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 80)
      : 'Free Tools Online';
      
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: '40px 80px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h1
              style={{
                fontSize: 60,
                color: '#ffffff',
                fontFamily: 'sans-serif',
                fontWeight: 800,
                textAlign: 'center',
                marginBottom: 20,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 32,
                color: '#888888',
                fontFamily: 'sans-serif',
                textAlign: 'center',
              }}
            >
              No Signup Required • 100% Free
            </p>
            <div
              style={{
                marginTop: 40,
                display: 'flex',
                color: '#0071e3',
                fontSize: 40,
                fontWeight: 'bold',
                fontFamily: 'sans-serif',
              }}
            >
              30tools.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`Error generating OG image: ${e.message}`);
    return new Response('Failed to generate image', { status: 500 });
  }
}

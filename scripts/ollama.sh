#!/bin/bash

set -e

MODEL=${1:-phi3}

echo ">>> Installing Ollama..."
curl -fsSL https://ollama.com/install.sh | sh

echo ">>> Installing cloudflared..."
wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
chmod +x cloudflared-linux-amd64
sudo mv cloudflared-linux-amd64 /usr/local/bin/cloudflared

echo ">>> Starting Ollama server..."
OLLAMA_HOST=0.0.0.0:11434 ollama serve > ollama.log 2>&1 &
sleep 5

echo ">>> Pulling model: $MODEL"
ollama pull $MODEL

echo ">>> Starting Cloudflare tunnel..."
cloudflared tunnel --url http://localhost:11434 > cf.log 2>&1 &

sleep 8

CF_URL=$(grep -o 'https://.*trycloudflare.com' cf.log | head -n 1)

echo ""
echo "========================================"
echo "✅ OLLAMA IS LIVE"
echo "Model: $MODEL"
echo "URL: $CF_URL"
echo "========================================"
echo ""

echo "Test with:"
echo "curl $CF_URL/api/tags"
echo ""

wait
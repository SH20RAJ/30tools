#!/bin/bash
# Remove all unused imports from the codebase using Biome
# Usage: bash scripts/remove-unused-imports.sh

echo "🧹 Removing unused imports from src/..."

npx -y @biomejs/biome check \
  --write \
  --unsafe \
  --only=lint/correctness/noUnusedImports \
  ./src/

echo "✅ Done! Unused imports removed."
echo "Run 'bun run build' to verify everything still builds."

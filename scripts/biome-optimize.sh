#!/bin/bash
# Comprehensive Biome Optimization (Lint + Format + Import Organize)
# Usage: bash scripts/biome-optimize.sh

echo "🚀 Starting Full Biome Optimization (Lint/Format/Organize)..."

# Run Biome check with auto-write
npx @biomejs/biome check --write ./src

echo ""
echo "✨ Codebase Optimized! ✅"
echo "   - Imports organized"
echo "   - Code formatted"
echo "   - Lint errors auto-fixed"
echo ""
echo "💪 Run 'bun run build' to verify production readiness."

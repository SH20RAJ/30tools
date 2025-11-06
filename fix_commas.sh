#!/bin/bash

# Find files with the pattern "  }," followed by "," on the next line and fix them
find src/app -name "*.js" -exec sed -i.bak 's/^,$//' {} \;

echo "Fixed comma syntax errors in all files"
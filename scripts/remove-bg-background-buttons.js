const fs = require('fs');
const path = require('path');
const glob = require('glob');

const root = path.resolve(__dirname, '..');

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  // Regex to find Button tags with className string literal
  const buttonClassNameRegex = /(<Button[\s\S]*?className\s*=\s*)(["'`])([\s\S]*?)\2([\s\S]*?>)/g;
  let changed = false;
  content = content.replace(buttonClassNameRegex, (match, prefix, quote, classValue, suffix) => {
  const original = classValue;
  const tokens = original.split(/\s+/).filter(Boolean);
  const filtered = tokens.filter(t => !/^bg-background(?:\/[\d\w-]+)?(?::[\w-]+)?$/.test(t));
    if (filtered.length !== tokens.length) {
      changed = true;
      const newClassValue = filtered.join(' ');
      return prefix + quote + newClassValue + quote + suffix;
    }
    return match;
  });

  // Also handle cases where className is an expression with template literal: className={`... bg-background ...`}
  const templateRegex = /(<Button[\s\S]*?className\s*=\s*)`([\s\S]*?)`([\s\S]*?>)/g;
  content = content.replace(templateRegex, (match, prefix, templateValue, suffix) => {
    const original = templateValue;
    const newValue = original.replace(/\bbg-background\b\s*/g, '');
    if (newValue !== original) {
      changed = true;
      return prefix + '`' + newValue + '`' + suffix;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
}

function run() {
  const pattern = path.join(root, 'src', '**', '*.{js,jsx,ts,tsx}');
  const files = glob.sync(pattern, { nodir: true });
  files.forEach(file => {
    processFile(file);
  });
}

run();

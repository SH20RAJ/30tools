const fs = require('fs');
const path = require('path');
const glob = require('glob');

const root = path.resolve(__dirname, '..');

function updateFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Remove bg-background from <h1 className="..."> in generator headers
  const h1Regex = /(className\s*=\s*)(["'`])([^"'`]*?)\bbg-background\b([^"'`]*)\2/gs;
  const newContent = content.replace(h1Regex, (match, prefix, quote, before, after) => {
    changed = true;
    const cleaned = (before + ' ' + after).replace(/\s+/g, ' ').trim();
    return prefix + quote + cleaned + quote;
  });

  content = newContent;

  // Find generate button with onClick={handleGenerate} or onClick={handleGenerate...}
  const buttonRegex = /<Button([\s\S]*?)onClick\s*=\s*{([^}]*(?:handleGenerate)[^}]*)}([\s\S]*?)>/g;
  content = content.replace(buttonRegex, (match, beforeOnclick, onclickHandler, afterOnclick) => {
    // Check if className exists
    const classNameRegex = /className\s*=\s*(["'`])([\s\S]*?)\1/;
    if (classNameRegex.test(match)) {
      // Append our desired classes if not present
      return match.replace(classNameRegex, (m, q, cls) => {
        const classes = cls.split(/\s+/).filter(Boolean);
        const desired = ['text-xl', 'px-12', 'py-5', 'shadow-lg'];
        desired.forEach(d => { if (!classes.includes(d)) classes.push(d); });
        changed = true;
        return `className=${q}${classes.join(' ')}${q}`;
      });
    } else {
      // Add className attribute near the beginning of Button tag
      changed = true;
      return `<Button className="text-xl px-12 py-5 shadow-lg"${beforeOnclick}onClick={${onclickHandler}}${afterOnclick}>`;
    }
  });

  // Remove bg-background from any Button className as extra safety
  const buttonBgRegex = /(<Button[\s\S]*?className\s*=\s*['"`]([^'"`]*?)['"`][\s\S]*?>)/g;
  content = content.replace(buttonBgRegex, (match, full, cls) => {
    if (cls.includes('bg-background')) {
      changed = true;
      const newCls = cls.split(/\s+/).filter(c => c !== 'bg-background').join(' ');
      return match.replace(cls, newCls);
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
}

function run() {
  const pattern = path.join(root, 'src', 'components', 'tools', 'generators', '*.{js,jsx,ts,tsx}');
  const files = glob.sync(pattern, { nodir: true });
  files.forEach(file => updateFile(file));
}

run();

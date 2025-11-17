const fs = require('fs');
const path = require('path');
const glob = require('glob');

const root = path.resolve(__dirname, '..');
const desired = ['text-xl', 'px-12', 'py-5', 'shadow-lg'];

function updateFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const matches = [];
  const onclickRegex = /onClick\s*=\s*{\s*handleGenerate[^}]*}/g;
  let match;
  while ((match = onclickRegex.exec(content)) !== null) {
    matches.push({ index: match.index, 0: match[0] });
  }

  if (matches.length === 0) return false;

  let changed = false;
  // process from end to beginning to avoid messing up indices
  for (let i = matches.length - 1; i >= 0; i--) {
    const { index } = matches[i];
    // find the start of the '<Button' tag preceding this index
    const startIndex = content.lastIndexOf('<Button', index);
    if (startIndex === -1) continue;
    // find the end of the opening tag '>' starting from startIndex
    let endIndex = content.indexOf('>', startIndex);
    if (endIndex === -1) continue; // broken file
    const openingTag = content.slice(startIndex, endIndex + 1);

    // If it is already processed (contains one of desired classes) skip
    if (desired.some(d => openingTag.includes(d))) continue;

    // If className exists, append desired classes
    const classNameRegex = /(className\s*=\s*)(["'`])([\s\S]*?)\2/;
    if (classNameRegex.test(openingTag)) {
      const newOpeningTag = openingTag.replace(classNameRegex, (m, prefix, quote, cls) => {
        const classes = cls.split(/\s+/).filter(Boolean);
        desired.forEach(d => { if (!classes.includes(d)) classes.push(d); });
        return prefix + quote + classes.join(' ') + quote;
      });
      content = content.slice(0, startIndex) + newOpeningTag + content.slice(endIndex + 1);
      changed = true;
    } else {
      // Insert className before the first attribute after <Button
      const insertAt = startIndex + '<Button'.length;
      const beforeInsert = content.slice(0, insertAt);
      const rest = content.slice(insertAt);
      const newClassAttr = ` className="${desired.join(' ')}" `;
      content = beforeInsert + newClassAttr + rest;
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }

  return changed;
}

function run() {
  const pattern = path.join(root, 'src', 'components', 'tools', 'generators', '*.{js,jsx,ts,tsx}');
  const files = glob.sync(pattern, { nodir: true });
  files.forEach(file => updateFile(file));
}

run();

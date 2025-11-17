const fs = require('fs');
const path = require('path');
const glob = require('glob');

const root = path.resolve(__dirname, '..');

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Find Button tags that contain the word Generate inside their inner text
  const buttonInnerRegex = /<Button([\s\S]*?)>([\s\S]*?Generate[\s\S]*?)<\/Button>/g;
  content = content.replace(buttonInnerRegex, (match, _attrs, _inner) => {
    // If className present already, add desired classes if missing
    const classNameRegex = /className\s*=\s*(["'`])([\s\S]*?)\1/;
    let updated = match;
    if (classNameRegex.test(match)) {
      updated = match.replace(classNameRegex, (m, q, cls) => {
        const classes = cls.split(/\s+/).filter(Boolean);
        const desired = ['text-xl', 'px-12', 'py-5', 'shadow-lg'];
        desired.forEach(d => { if (!classes.includes(d)) classes.push(d); });
        changed = true;
        return `className=${q}${classes.join(' ')}${q}`;
      });
    } else {
      // Add className attribute
      updated = match.replace('<Button', '<Button className="text-xl px-12 py-5 shadow-lg"');
      changed = true;
    }
    return updated;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
}

function run() {
  const pattern = path.join(root, 'src', 'components', 'tools', 'generators', '*.{js,jsx,ts,tsx}');
  const files = glob.sync(pattern, { nodir: true });
  files.forEach(file => processFile(file));
}

run();

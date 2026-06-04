import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '..', 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const targetExtensions = ['.ts', '.tsx', '.js', '.jsx'];

let replacedCount = 0;
let fileCount = 0;

walkDir(srcDir, (filePath) => {
  const ext = path.extname(filePath);
  if (!targetExtensions.includes(ext)) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('https://30tools.com')) {
    content = content.replace(/https:\/\/30tools\.com/g, 'https://sopkit.github.io');
    fs.writeFileSync(filePath, content, 'utf8');
    replacedCount++;
    console.log(`Updated: ${path.relative(srcDir, filePath)}`);
  }
  fileCount++;
});

console.log(`\nFinished! Checked ${fileCount} files. Updated ${replacedCount} files.`);

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

// dist/ folder banao agar exist nahin karta
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// src files copy karo dist/ mein (minus test files)
const srcDir = path.join(__dirname, '..', 'src');
const files = fs.readdirSync(srcDir).filter(f => !f.endsWith('.test.js'));

files.forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
  console.log(`Built: ${file}`);
});

// build manifest likho
const manifest = {
  buildTime: new Date().toISOString(),
  nodeVersion: process.version,
  files: files,
};
fs.writeFileSync(path.join(distDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

console.log('Build complete. Output in dist/');

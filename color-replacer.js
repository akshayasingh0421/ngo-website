const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replaceColors = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace teal with soft navy/muted blue mappings
  content = content.replace(/teal-50\b/g, 'blue-50');
  content = content.replace(/teal-100\b/g, 'blue-100');
  content = content.replace(/teal-200\b/g, 'blue-200');
  content = content.replace(/teal-300\b/g, 'blue-300');
  content = content.replace(/teal-400\b/g, 'blue-400');
  content = content.replace(/teal-500\b/g, 'blue-500'); // Muted blue
  content = content.replace(/teal-600\b/g, 'blue-600'); // Muted blue hover
  content = content.replace(/teal-700\b/g, 'blue-800'); // Soft navy
  content = content.replace(/teal-800\b/g, 'blue-900'); // Soft navy dark
  content = content.replace(/teal-900\b/g, 'blue-950'); // Soft navy darker

  // Replace gray with soft gray mappings (slate)
  content = content.replace(/gray-50\b/g, 'slate-50');
  content = content.replace(/gray-100\b/g, 'slate-100');
  content = content.replace(/gray-200\b/g, 'slate-200');
  content = content.replace(/gray-300\b/g, 'slate-300');
  content = content.replace(/gray-400\b/g, 'slate-400');
  content = content.replace(/gray-500\b/g, 'slate-500');
  content = content.replace(/gray-600\b/g, 'slate-600');
  content = content.replace(/gray-700\b/g, 'slate-700');
  content = content.replace(/gray-800\b/g, 'slate-800');
  content = content.replace(/gray-900\b/g, 'slate-900');

  fs.writeFileSync(filePath, content, 'utf8');
};

const walkSync = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkSync(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      replaceColors(filePath);
    }
  }
};

walkSync(directoryPath);
console.log('Colors replaced successfully!');

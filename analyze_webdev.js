const fs = require('fs');
const js = fs.readFileSync('webdev_chunk.js', 'utf8');

// Find headings, titles, sections
console.log('--- HEADINGS & TEXT IN WEBDEV ---');

// Search for strings with length > 20
const strRegex = /"([^"\\]{15,200})"/g;
let m;
const strings = [];
while ((m = strRegex.exec(js)) !== null) {
  const s = m[1];
  if (!s.includes('/') && !s.includes(';') && !s.includes('{') && !s.includes('data:')) {
    strings.push(s);
  }
}

console.log('Sample content strings:');
const uniqueStrings = [...new Set(strings)];
uniqueStrings.slice(0, 50).forEach(s => console.log('•', s));

// Find subcomponents or sections rendered in webdev
console.log('\n--- SECTION OR COMPONENT NAMES ---');
const compNames = js.match(/l\([a-zA-Z0-9_$]+,\s*"([^"]+)"\)/g) || [];
console.log('Registered component names:', [...new Set(compNames)]);

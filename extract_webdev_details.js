const fs = require('fs');
const js = fs.readFileSync('webdev_chunk.js', 'utf8');

// Find all text blocks in jsx
const textRegex = /children:\"([^\"]{5,150})\"/g;
let m;
const textSnippets = [];
while ((m = textRegex.exec(js)) !== null) {
  textSnippets.push(m[1]);
}
console.log('--- FOUND TEXT SNIPPETS IN WEBDEV ---');
console.log([...new Set(textSnippets)].slice(0, 80));

// Find arrays of objects (like features, services, pricing, steps)
console.log('\n--- SEARCHING FOR CORE STRUCTURES ---');
const keywords = [
  'Web Development',
  'Frontend',
  'Backend',
  'Full Stack',
  'Next.js',
  'React',
  'WordPress',
  'Shopify',
  'E-commerce',
  'Process',
  'Pricing',
  'FAQ',
  'Hosting',
  'Maintenance',
  'Why Choose',
  'Technologies'
];

for (const kw of keywords) {
  let idx = 0;
  let count = 0;
  while ((idx = js.indexOf(kw, idx)) !== -1 && count < 3) {
    console.log(`[Keyword "${kw}" at ${idx}]:`, js.slice(Math.max(0, idx - 80), Math.min(js.length, idx + 160)).replace(/\n/g, ' '));
    idx += kw.length;
    count++;
  }
}

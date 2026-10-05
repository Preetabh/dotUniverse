const fs = require('fs');
const js = fs.readFileSync('webdev_chunk.js', 'utf8');

const idx = js.indexOf('"Landing"');
console.log('Landing pos:', idx);
if (idx !== -1) {
  console.log(js.slice(idx - 100, idx + 1500));
}

// Also find the tiers array
const tierMatches = js.match(/\[\{[^\}]+slug:\"[^\"]+\"[^\]]+\]/g) || [];
console.log('Tier arrays found:', tierMatches.length);
tierMatches.forEach((t, i) => console.log(`Tier ${i}:`, t.slice(0, 300)));

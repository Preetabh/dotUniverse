const fs = require('fs');
const js = fs.readFileSync('webdev_chunk.js', 'utf8');

const comps = {
  TopTicker: 'on',
  Hero: 'Sn',
  TrustedBy: 'Tn',
  Features: 'Nn',
  Integrations: 'Kn',
  TechStack: 'ra',
  Process: 'oa',
  Pricing: 'a2',
  Testimonials: 'ua',
  FAQ: 'u2',
  CTA: 'Zo'
};

for (const [name, id] of Object.entries(comps)) {
  console.log(`\n================== ${name} (${id}) ==================`);
  // Look for function definition
  let idx = js.indexOf(`function ${id}(`);
  if (idx === -1) idx = js.indexOf(`const ${id}=`);
  if (idx === -1) idx = js.indexOf(`let ${id}=`);
  if (idx !== -1) {
    const code = js.slice(idx, idx + 2000);
    // Find text inside
    const texts = code.match(/children:(?:\"([^\"]+)\"|\[([^\]]+)\])/g) || [];
    console.log('Snippet:', code.replace(/\n/g, ' ').slice(0, 500));
  } else {
    console.log('Not found by standard function name');
  }
}

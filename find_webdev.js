async function findWebDevChunk() {
  const res = await fetch('https://codexconquer.com/assets/index-BytNgFHL.js');
  const js = await res.text();
  
  // Find where route path:"/web-development" is declared
  let idx = 0;
  while ((idx = js.indexOf('/web-development', idx)) !== -1) {
    console.log(`[Pos ${idx}]:`, js.slice(Math.max(0, idx - 100), Math.min(js.length, idx + 150)));
    idx += 16;
  }

  // Look for lazy imports or component names
  const lazyMatches = js.match(/[a-zA-Z0-9_$]+=\(\)=>(?:import|xe\(\(\)=>import)\([^\)]+\)/g) || [];
  console.log('\nSample lazy imports:');
  lazyMatches.filter(l => l.includes('Web') || l.includes('Service') || l.includes('Dev')).forEach(l => console.log(l));
}

findWebDevChunk();

async function findYI() {
  const res = await fetch('https://codexconquer.com/assets/index-BytNgFHL.js');
  const js = await res.text();
  
  const yiIdx = js.indexOf('YI=');
  console.log('YI= index:', yiIdx);
  if (yiIdx !== -1) {
    console.log('YI code:', js.slice(yiIdx, yiIdx + 300));
  }
}

findYI();

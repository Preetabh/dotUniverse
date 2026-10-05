const fs = require('fs');
const js = fs.readFileSync('webdev_chunk.js', 'utf8');

const y2Idx = js.indexOf('function Y2()');
console.log('function Y2 at:', y2Idx);
if (y2Idx !== -1) {
  console.log(js.slice(y2Idx, y2Idx + 4000));
}

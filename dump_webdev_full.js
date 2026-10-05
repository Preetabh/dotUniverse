const fs = require('fs');
const js = fs.readFileSync('webdev_chunk.js', 'utf8');

// 1. FAQs
const faqIdx = js.indexOf('d2=');
console.log('FAQ index:', faqIdx);
if (faqIdx !== -1) {
  const faqSlice = js.slice(faqIdx, faqIdx + 4000);
  console.log('--- FAQS ---');
  console.log(faqSlice.slice(0, 1500));
}

// 2. Pricing Plans
const pricingIdx = js.indexOf('st=');
console.log('Pricing plans index:', pricingIdx);
if (pricingIdx !== -1) {
  const pricingSlice = js.slice(pricingIdx, pricingIdx + 4000);
  console.log('--- PRICING PLANS ---');
  console.log(pricingSlice.slice(0, 1500));
}

// 3. Process steps
const processIdx = js.indexOf('oa(');
if (processIdx !== -1) {
  console.log('--- PROCESS CODE ---');
  console.log(js.slice(processIdx, processIdx + 2000));
}

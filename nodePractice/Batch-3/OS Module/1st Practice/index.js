const os = require('os');
const path = require('path');

console.log(os.arch());
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024));
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());

console.log(path.dirname('G:/Ostad/nodePractice/Batch-3/OS Module/1st Practice/index.js'));
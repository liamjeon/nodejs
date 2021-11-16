const os = require('os'); //os 모듈들을 import
//내 서버가 동작하는 pc의 환경을 알고싶을 때 쓸 수 있음

console.log(os.EOL === '\n');
console.log(os.EOL === '\r\n'); 

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());

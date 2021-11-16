//노드가 동작하는 프로세스에 대한 정보를 가져옴
const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

//콜백함수를 0ms 이따가 실행
setTimeout(() => {
  console.log('setTimeout');
}, 0);
//지금말고 콜스택에 있는 코드가 수행되면, 테스크큐에 내 콜백함수를 넣었다가 수행해줘
//테스크큐에서 우선순위를 가장 높게 함. 젤 앞에 둠 
process.nextTick(() => {
  console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
  console.log('for loop');
}

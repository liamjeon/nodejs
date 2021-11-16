console.log('code1');
console.time('timeout 0');

//0초로 설정하더라도 실제 0초가 보장되지는 않음. console.time으로 확인 가능함
setTimeout(() => {
  console.log('setTimeout 0');
  console.timeEnd('timeout 0');
}, 0);

console.log('code2');
setImmediate(() => {
  console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {
  console.log('process.nextTick');
});

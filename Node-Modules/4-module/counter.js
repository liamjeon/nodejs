let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module.exports === exports);
//exports는 module을 참조하고있으나 중간에 export에 오브젝트를 할당해버리면 다른 export가  되버림
// exports = {}; 
// console.log(module.exports === exports);
exports.increase = increase; 
console.log(module);

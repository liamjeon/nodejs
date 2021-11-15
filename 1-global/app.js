//브라우저용인지 노드용인지 vs 에게 알려주기 위해 모듈하나를 require함.
const fs = require('fs');
console.log(global);


console.log(global);

//gloabl 객체로 사용가능한, 즉 node에서 기본적으로 사용가능한 것들.
global.hello = ()=>{
    global.console.log('hello');
};

global.hello();
hello();

//브라우저에서의 this와 node에서의 this 는 다름
// 
function hello() {
  console.log(this);
  console.log(this === global);//true, 함수안에서 사용하는 this는 global
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }

//class 안의 this는 class를 가리키고 있음. not global  //
  memberFunction() {
    console.log('----- class -----');
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();

console.log('--- global scope ---');
//아무것도 출력되지 않음 ==> 즉, 적어도 글로벌 오브젝트는 아니다
//브라우저에서는 밖에서 쓰는 this는 글로벌을 가리켰으나, node는 module을 가리키고 있다.
console.log(this); 
console.log(this === module.exports); //모듈의 exports 와 동일하다.

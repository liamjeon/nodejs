const fs = require('fs');//file system module을 가져옴 

// 3 : 모든 api는 3가지 형태로 주어짐
// 1.rename(...., callback(error, data)) : 비동기
// 2.try { renameSync(....) } catch(e) { } : 
//callback을 주지않고, 에러발생을 알리지 않고 멈춤. 그래서 try catch사용,,
//동기로 사용되기 떄문에 끝날땍까지 안넘어감. 가급적 사용안함
//3.promises.rename().then().catch(0) : promise형태소 사용가능

try {
  fs.renameSync('./text.txt', './text-new.txt'); //파일 이름 변경
} catch (error) {
  console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello');

fs.promises
  .rename('./text2.txt', './text-new.txt') //
  .then(() => console.log('Done!'))
  .catch(console.error);

const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname); //글로벌 객체에 있는 dir name
console.log(__filename);  // 글로벌 객체에 있는 file name 

console.log(path.sep); //경로 구분자
console.log(path.delimiter); //환경변수 구분자

// basename
console.log(path.basename(__filename)); //file이름 가져옴
console.log(path.basename(__filename, '.js')); //.js확장자 제거하고 가져옴

// dirname
console.log(path.dirname(__filename)); //경로

// extension
console.log(path.extname(__filename)); //확장자

//parse
const parsed = path.parse(__filename); 
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

// isAbsolute 절대경로 인지 확인
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/ 절대경로
console.log('isAbsolute?', path.isAbsolute('../')); //상대경로

// normalize
console.log(path.normalize('./folder////////sub'));  

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));

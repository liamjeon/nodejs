//counter 라는 하나의 오브젝트에 묶어서 가져옴
import * as counter from './counter.js'; 

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());

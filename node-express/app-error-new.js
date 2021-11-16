import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import {} from 'express-async-errors'; 

const app = express();
app.use(express.json());

//비동기도 마지막 안정망에 걸리도록 못 하나?? catch 사용 귀찮아! 
//이때 express-async-error lib 사용
//미들웨어에서 프로미스를 리턴하는 경우에만! 감지하여 에러를 마지막에서 포착@
//but!@ 제일 좋은 것은 각 미들웨어에서 에러메세지를 처리하는 것이겠죠??

app.get('/file1', (req,res)=>{
})

//Promise
app.get('/file2', (req, res, next)=>{
    return fsAsync.readFile('/file.txt')
})

//Async
//async는 자동으로 promise로 감싸져서 return 됨.
app.get('/file3', async(req,res)=>{
    const data = await fsAsync.readFile('/file.txt'); //promise 함수를 await으로 기다림
})


app.use((error, req, res, next)=>{
    console.error(error);
    res.status(500).json({message: 'Something went worng'});
})

app.listen(8080);
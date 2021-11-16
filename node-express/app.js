import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

//에러처리는 각 미들웨어에서 처리해주는 것이 좋다
app.get('/file1', (req,res)=>{
    // try{
    //     const data = fs.readFileSync('/file.text'); //얘는 동기임
    // }catch(error){ //에러처리를 안해줘도 마지막 에러처리 미들웨어에 떨어짐
    //     res.status(404).send('File not found') 
    // }

    fs.readFile('/file1.text', (err, data)=>{//얘는 비동기임
        //비동기가 처리할떄는 젤 밑에 에러가 출력되지 않음
        //각 미들웨어는 체인으로 동기 연결되어있어서, 에러가 던져져야지 마지막에서 에러를 케치 가능하다.
        //하지만 비동기는 동기가 이니기 때문에, 해당하는 콜백함수 내에서 에러를 던져줘야함!
        if(err){
            res.status(404).send('File not found')
        }
    }); 
})



//Promise
//비동기는 callback함수로 전달하든, promise를 사용하든 try, catch로 잡을 수 없다.
//왜냐? 비동기는 내부적으로 에러가 발생했기 때문!
app.get('/file2', (req, res, next)=>{
    fsAsync
    .readFile('/file.txt')
    .then((data)=>{})
    .catch((error)=> res.status(404).send('File not found'));
    // .catch(next); //error가 마지막까지 던져짐. 
})


//Async
app.get('/file3', async(req,res)=>{
    //Async는 동기이나, 안정망에는 포착되지 않음
    //왜냐? 미들웨어 자체는 promise를 리턴함. 
    //try catch로 에러를 잡을 수 있음.
    //await을 통해 동기적으로 만들었으므로 try, catch를 사용할 수 있다.
    try{
        const data = await fsAsync.readFile('/file.txt'); //promise 함수를 await으로 기다림
    }catch(error){
        res.status(404).send('File not found');
    }
})


app.use((error, req, res, next)=>{
    console.error(error);
    res.status(500).json({message: 'Something went worng'});
})

app.listen(8080);
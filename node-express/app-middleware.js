import express from 'express'
const app = express();



//콜백 함수는 등록한 순서!가 정말 중요하다.
//동일한 경로에서 콜백함수는 배열 형태로 여러가지 등록이 가능하다.
app.get('/',
    (req, res, next)=>{
        console.log('first');
        // next('route'); //현재 경로에서 함꼐 등록된 배열을 무시하고 다음 middleware로 넘어가라
        // next(new Error('error')); //에러를 던질 수도 있다.

        if(true){//send를 보내고 return으로 콜백함수를 끝내 줘야함
            return res.send('hello'); //여러 배열이 있을 때 처음으로 send를 날린 놈에서 끝남!
        }
        res.send('Liam');
    },
    (req, res, next)=>{
        console.log('first2');
    },
);
app.get('/', (req, res, next)=>{
    console.log('second');
});

//처리할 수 없는 경로 처리
app.use((req,res,next)=>{
    res.status(404).send('Not available!!')
})

//어떤 경로든 상관없이 에러 처리를 위해 에러 핸들러를 등록해야함
//서버에는 에러를 출력하고, 클라이언트에게는 notice.
//중간중간에 에러가 발생하더라도 제일 마지막의 미들웨어가 에러를 처리한다.
app.use((error, req, res, next)=>{
    console.error(error);
    res.status(500).send('sorry try later');
})
app.listen(8080);


// app.get('/sky/:id', (req, res, next)=>{
//     console.log(req.path);
//     console.log(req.headers);
//     console.log(req.params.id);
//     console.log(req.query);
//     console.log(req.query.keyword);

//     res.setHeader('key', 'value');
//     res.status(201).send('created');    
//     // res.sendStatus(400);
//     // res.json({name:'Liam'});
//     //res.send('hi!');
// });

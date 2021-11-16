import express from 'express'
const app = express();

//express에서 body내용을 읽기위해서 express에서 제공하는 middleware 사용
//express.json 을 이용하면 읽은 body를 자동으로 파싱하여 보여줌
app.use(express.json());
app.post('/', (req, res, next)=>{
    console.log(req.body);
})

app.listen(8080);


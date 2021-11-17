import express from "express";
import cors from 'cors';

const app = express();

//유용한 미들웨어 : CORS(Cross-origin-resource-sharing)
//client와 server가 다른 도메인이라면 데이터를 주고 받을 수 없음
//가능하도록 하려면 을 헤더에 Access-Constrol-Allow-Orign을 헤더에 추가해줘야함(서버에서 허용)

//cors를 쓰면 한방에 해결(npm cors설치)
app.use(cors({
    origin: ['http://127.0.0.1:5500'], //해당하는 도메인에서만 데이터 접근 가능!
    optionsSuccessStatus: 200,
    credentials: true, //Access-Control-Allow-Credentials:true 와 동일
}));

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(8080);

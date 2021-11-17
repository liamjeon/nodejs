import express from "express";

const app = express();

//유용한 미들웨어 : CORS(Cross-origin-resource-sharing)
//client와 server가 다른 도메인이라면 데이터를 주고 받을 수 없음
//가능하도록 하려면 을 헤더에 Access-Constrol-Allow-Orign을 헤더에 추가해줘야함(서버에서 허용)

//이떄 middleware를 사용.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  //어떤 method들을 이용할 수 있는지 설정할 수 있음
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, DELETE"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(8080);

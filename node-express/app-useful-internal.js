import express from "express";
const app = express();

//REST API에서 body를 파싱할때 사용
//REST API--> Body
app.use(express.json());
//HTML Form이라는 UI에서 submit을하면 body안으로 파싱해줌
//HTML From --> Body
app.use(express.urlencoded({ extended: false })); //

//public에있는 모든 파일들을 사용자가 읽어갈 수 있게 만들거야
//option도 줄 수 있음
const options = {
    dotfiles: 'ignore', //숨겨진 파일은 무시
    etag: false, //
    index: false,
    maxAge: '1d',//얼마나 오래 cache 유지할 건지
    redirect: false,
    setHeaders: function(res,path,stat){ //필요한 데이터가 있으면 헤더에 포함하여 보냄 
        res.set('x-timestamp', Date.now());
    },
};

app.use(express.static('public', options)); 

app.listen(8080);

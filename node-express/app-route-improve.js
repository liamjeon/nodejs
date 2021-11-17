import express from "express";
import postRouter from './router/post.js'
import userRouter from './router/user.js'

const app = express();

app.use(express.json()); //express.json middleware 사용

//우리가 처리하는 router에는 posts라는 경로가있고,
//그 이하에 관련된 애들은 postRouter에 있구나
//우리 서버에는 큰 domain이 post와 users 구나
app.use('/posts', postRouter);//상위루트 /posts로 등록하여서 postRouter에서는 따로 /posts 필요 없음.
app.use('/users',userRouter);

//마지막으로 에러처리 미들웨어 등 넣어주면 됨.

app.listen(8080); 

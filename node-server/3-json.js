    const http = require('http');

    const courses = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JS' },
        { name: 'Node' },
        { name: 'Frontend' },
    ];

    const server = http.createServer((req, res) => {
    const url = req.url; //what? 클라이언트가 어떤 데이터를 원하는지?
    const method = req.method; //how? action? 그것으로 어떤 것을 하고싶은지 
    if (url === '/courses') {
        if (method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
        //json에 있는 stringify를 이용해서 우리가 가지고 있는 course의 object를
        //json 형태로 변환해서 보내줌.
            res.end(JSON.stringify(courses));
        } 
        else if (method === 'POST') {
            const body = [];
            req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
            });

            req.on('end', () => {
            const bodyStr = Buffer.concat(body).toString();
            const course = JSON.parse(bodyStr);
            courses.push(course);
            console.log(course);
            res.writeHead(201);
            res.end();
            });
        }
    }
});

    server.listen(8080);

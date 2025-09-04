const http=require('http');

const server=http.createServer((req,res)=>{

    console.log(req.url,req.method,req.headers);
});
const port =3000;
 server.listen(port,()=>{
    console.log(`server is listening on port at http://localhost:${port}`)
 });

 const http=require('http');
 
           const servert  =require('./user')
       

     const server =http.createServer(servert);





const port =3002;
 server.listen(port,()=>{
    console.log(`server http://localhost:${port}`);
 })
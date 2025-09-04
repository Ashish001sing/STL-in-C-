const http=require('http');
 const server =http.createServer((req,res)=>{
     console.log(req.url);
     if (req.url==='/')
     {
     res.setHeader('Content-Type','text/html')
    res.write(`<html> 
        <title>my first server </title>
        <body> my love i  am happy home </body>
        </html>`);
        return  res.end();
     }
     else if (req.url=='/products')
     {
             res.setHeader('Content-Type','text/html')
    res.write(`<html> 
        <title>my first product </title>
        <body> my love i  am happy  to this guy  </body>
        </html>`);
         return res.end();
     }
                res.setHeader('Content-Type','text/html')
    res.write(`<html> 
        <title>my first server </title>
        <body> my love i  am happy </body>
        </html>`);
      return   res.end();
   // process.exit(39999);
});
const port =3001;
server.listen(port,()=>{
    console.log(`server http://localhost:${port}`);
});
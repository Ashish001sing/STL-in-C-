// const http=require('http');
 const fs =require('fs');

 const serverja =(req,res)=>{
       console.log(req.url);
        
       // console.log(req.headers);
    if (req.url==='/'){
    res.write(`<html>
  <head>
    <title>Submit Your Details</title>
  </head>
  <body>
    <form action ="/submit-details" method="POST">
      <input type="text" name="name" placeholder="Enter your name" /><br><br>

      <label for="male">Male</label>
      <input type="radio" id="male" name="gender" value="male" /><br>

      <label for="female">Female</label>
      <input type="radio" id="female" name="gender" value="female" /><br><br>

      <button type="submit">Submit</button>
    </form>
  </body>
</html>
 `)
       return res.end();
    } 

    

   else if (req.url ==="/submit-details" && req.method=="POST"){
       const body =[];
       req.on ('data' ,(chunk)=>
      {
        console.log(chunk);
        body.push(chunk);
      })
      req.on('end',()=>
      {
        const fullbody = Buffer.concat(body).toString();
        console.log(fullbody);
        const params=new URLSearchParams(fullbody);
         //const jsondata={};
        /// for (const [key,value] of params.entries())
//{
     // jsondata[key]=value;
//}    
             const jsondata=Object.fromEntries(params);
     console.log(jsondata);
         fs.writeFileSync('user.txt', JSON.stringify(jsondata));;

      })

      fs.writeFileSync('user.txt','hello m');
      res.statusCode=302;
      res.setHeader('Location','/');
     // return res.end();

    }
     
     res.write(`<html> 
        <title>my first product </title>
        <body> my love i  am happy  to this guy  </body>
        </html>`);
          res.end();}

 
 //const port =3002;
 //server.listen(port,()=>{
   // console.log(`server http://localhost:${port}`);
 //}) 
 module.exports=serverja;



 const http=require('http');
 
  
   
      const server = http.createServer((req, res) => {
         console.log(req.url);
      


         res.setHeader('Content-Type', 'text/html');

         if (req.url === '/' || req.url === '/home') {
            res.write(`
               <html>
               <head>
                  <title>my myntra product</title>
               </head>
               <body>
                  <div>
                     <a href="/submit-details1">Home</a> |
                     <a href="/submit-details2">Men</a> |
                     <a href="/submit-details3">Women</a> |
                     <a href="/submit-details4">Kids</a> |
                     <a href="/submit-details5">Cart</a>
                  </div>
               </body>
               </html>
            `);
            return res.end();
         }

         switch (req.url) {
            case "/submit-details1":
               res.write(`<h1>Welcome to Myntra Home Page</h1>`);
               break;
            case "/submit-details2":
               res.write(`<h1>Welcome to Myntra Men Page</h1>`);
               break;
            case "/submit-details3":
               res.write(`<h1>Welcome to Myntra Women Page</h1>`);
               break;
            case "/submit-details4":
               res.write(`<h1>Welcome to Myntra Kids Page</h1>`);
               break;
            case "/submit-details5":
               res.write(`<h1>Welcome to Myntra Cart Page</h1>`);
               break;
            default:
               res.statusCode = 302;
               res.setHeader('Location', '/');
               return res.end();
         }
         res.write('<br><a href="/">Back to Home</a>');
         res.end();
      });

      const port = 3003;
      server.listen(port, () => {
         console.log(`http://localhost:${port}`);
      });
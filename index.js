const mathFunctions = require('./models/math')
const hello = require('./models/hello')('Jamshidbek');
const port = 5000;
const http = require('http');





const server = http.createServer((req,res) => {

  res.writeHead(200,{
    'Content-Type': 'text/html',
  })

    res.write(`
      
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>goodreads</title>
        </head>
        <body>
            <h1>bu lorem ipson matni</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestiae voluptates placeat 
                dolore nobis assumenda 
                corrupti vero aut vitae ut excepturi numquam ea deserunt! Sint 
                deleniti nemo placeat aut sapiente!
            </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepLane0dsRd52TZT7jHu7HMVG1OZq7KYssg&usqp=CAU" alt="">
        </body>
      </html>
    
    `);
    res.end(); 

})

server.listen(port,()=>console.log(
  'server run on port: ' + port
))






























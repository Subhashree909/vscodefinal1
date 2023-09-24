// console.log("Hello World");
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Subhashree Swain');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors & more designing</title>
      <style>
          .container {
              border: 2px solid rgb(214, 142, 142);
              background-color: aquamarine;
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: black;
              background-color: brown;
          }
          a:visited{
  background-color: rgb(224, 101, 101)
          }
          a:active{
              background-color:rgb(219, 78, 196)
          }
          .btn{
              font-family: Arial, Helvetica, sans-serif;
              font-weight: bold;
              background-color: blanchedalmond;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              color: brown;
              background-color: aqua;
              border: 2px solid black;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
      <h3>This is my heading</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, natus! Numquam eveniet incidunt excepturi ratione?
          Nostrum velit officia fuga, mollitia quidem nesciunt maxime. Minus labore temporibus nam quibusdam dolor modi
          deserunt molestias distinctio a.</p>
          <a href="https://facebook.com" class="btn">Read more</a>
          <button class="btn">Contact us </button>
      </div>
  </body>
  
  </html>`);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
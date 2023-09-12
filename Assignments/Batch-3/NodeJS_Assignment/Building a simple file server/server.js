const http = require('http');
const fs = require('fs');

// const PORT = 3000;

// const server = http.createServer((req, res)=>{

//     const sendData = (path, statusCode) => {
//         fs.readFile(path, (err, data)=>{
//            if(err){
//             console.log(err);
//            }
//            else{
//             res.writeHead(statusCode, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//            }
//         })
//     }

//     if(req.url == "/" || req.url == "/home"){
//         sendData("./public/home.html", 200)
//     }
//     else if(req.url == "/about"){
//         sendData("./public/about.html", 200)
//     }
//     else if(req.url == "/contact"){
//         sendData("./public/contact.html", 200)
//     }
//     else{
//         res.writeHead(404)
//         res.write("<h1>404 Not Found</h1>")
//         res.end()
//     }
// })

// server.listen(PORT, ()=>{
//     console.log(`Server is listening on port ${PORT}`);
// })









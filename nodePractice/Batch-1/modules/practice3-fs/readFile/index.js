let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res){
    if(req.url == '/'){
        // Asynchronous way
        // fs.readFile('home.html', function(error, data){
        //     res.writeHead(200, {'Content-Type':'text/html'});
        //     res.write(data);
        //     res.end();
        // })


        // Synchronous way
        let myData = fs.readFileSync('home.html');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(myData);
        res.end();
    }
});
server.listen(4040);
console.log("server run successfully");
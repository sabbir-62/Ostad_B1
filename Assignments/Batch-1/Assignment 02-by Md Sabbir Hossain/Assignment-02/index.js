let fs = require('fs');
let http = require('http');

http.createServer(function(req,res){

    if(req.url == '/'){
        fs.readFile('home.html', function(error,data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
        })
    }
    else if(req.url == '/gallery'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<h1 style = "color: red">This is gallery page</h1>');
        res.end();
    }
    else if(req.url == '/event'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<h1>This is event page</h1>');
        res.end();
    }
    else if(req.url == '/feedback'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<h1>This is feedback page</h1>');
        res.end();
    }
    else if(req.url == '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<h1>This is contact page</h1>');
        res.end();
    }

}).listen(3000);

console.log("Server run successfully");
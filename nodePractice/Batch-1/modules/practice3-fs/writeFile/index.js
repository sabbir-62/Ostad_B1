let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req,res){
    if(req.url == '/'){
        // Asynchronous way
        // fs.writeFile('home.html','<h1>hellow world</h1>', function(error){
        //     if(error){
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write('File write fail');
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write('File write successfully');
        //         res.end();
        //     }
        // })


        // Synchronous way
        let error = fs.writeFileSync('home.txt', 'This is synchronous');
        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File write Fail');
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File write Successfully');
            res.end();
        }
    }
})

server.listen(4050);
console.log('server run successfully');
let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res){
    if(req.url == '/'){
        // fs.writeFile('home.txt','This is Home Page', function(error){
        //     if(error){
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write('File write fail');
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File write successfully");
        //         res.end();
        //     }
        // });
        fs.rename('myHome.txt', 'newHome.txt', function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File rename Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File rename successfully");
                res.end();
            }
        })
    }
})
server.listen(5050);

console.log("file run successfully");
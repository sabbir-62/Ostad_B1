let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req,res){
    if(req.url == '/'){
    //     fs.writeFile('data.txt','this is home page',function(error){
    //         if(error){
    //             res.end("fail");
    //         }
    //         else{
    //             res.end('success');
    //         }
    //     })

    
        fs.unlink('home.txt',function(error){
            if(error){
                res.end('fail')
            }
            else{
                res.end('success');
            }
        })
    }


})
server.listen(5000);
console.log("surver run");
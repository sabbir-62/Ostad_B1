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

    
    //     fs.exist('data.txt',function(error){
    //         if(error){
    //             res.end('fail')
    //         }
    //         else{
    //             res.end('success');
    //         }
    //     })
    // }
    //})
    let error = fs.existsSync('daata.txt');
    if(error){
        res.end('pass')
        }
        else{
        res.end('fail');
        }
    }
});

server.listen(5050);
console.log("surver run");
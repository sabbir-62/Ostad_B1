
let https = require('http');
let URL = require('url');

let server = https.createServer(function(req, res){
    let myUrl = "https://codepen.io/pen/?editors=0010";
    let UrlObject = URL.parse(myUrl,true);
    let myHostName = UrlObject.host;
    let pathName = UrlObject.path;
    let searchName = UrlObject.search;

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(myHostName);
    res.write(pathName);
    res.write(searchName);
    res.end();
});
server.listen(3000);
console.log("server run successfully");
let http = require('http');
let url = require('url');

let server = http.createServer((req, res) =>{
    let myUrl = 'https://ostad.app/dashboard/my-courses/63d767e92a16fc19bb0ac893/videos?module=63e8bc42f556736093a092e6';

    let myUrlObj = url.parse(myUrl, true);
    let urlHostName = myUrlObj.host;
    let urlPathName = myUrlObj.pathname;
    let urlSearchName = myUrlObj.search;

    res.write(urlHostName + "\n");
    res.write(urlPathName + "\n");
    res.write(urlSearchName + "\n");
    res.end();
})

server.listen(3000, () => {
    console.log("server run successfully on 3000 port");
})
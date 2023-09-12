let http = require('http');
let port = 3000;

let createServer = () => {
    let server = http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("Hello, World!");
        res.end();
    });

    server.listen(port, ()=>{
        console.log(`server run successfully on port ${port}`);
    });
}

createServer();






#include <stdio.h>

void increment(int x)
{
    x = x + 1;
    printf("Inside function: x = %d\n", x);
}

int main()
{
    int x;
    scanf("%d", &x);
    increment(x);
    printf("Main function: x = %d\n", x);
    return 0;
}

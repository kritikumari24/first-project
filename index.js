const http =require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type ':'application\json'});
    resp.write(JSON.stringify({name:'kriti kumari',email:'kriti@gmail.com'}));
    resp.end();
}).listen(5500);


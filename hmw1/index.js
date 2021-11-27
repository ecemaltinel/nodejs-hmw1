
const http = require('http')
const fs = require('fs')

http.createServer(function(req,res){
 
    switch (req.url) {
        case "/":
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("<h1>You're at the homepage!<h1>")  
            break;
        case "/aboutus":
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("<h1>About us<h1>")
            break;
        case "/contact":
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("<h1>Contact<h1>")
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write("<h1>404 Not Found!<h1>")
            break;
    }
    
    fs.writeFile('logs.txt',
    res.statusCode==200 ? `User was successfully on the ${req.url} page @${new Date()} \n`:` ALERT !! User request to go on the ${req.url} page failed @${new Date()} \n`,
    {flag:"a"},
    (error)=>{ if(error) console.log(`Some error occured while logging -> ${error}`)})

    res.end()
    
}).listen(9696)


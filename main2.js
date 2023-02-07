const { Console } = require('console');
var express = require('express')
var app = express()

app.get('/',(req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<html><body><p>This is the homepage</p></body></html>');
    res.end(); //cần phải có end ko thì server sẽ chạy liên tục
})

app.get('/student',(req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<html><body><p>This is the homepage</p></body></html>');
    res.end(); //cần phải có end ko thì server sẽ chạy liên tục
})

const PORT = 5500 //take a random port: 7000
app.listen(PORT)
console.log('Server is up')
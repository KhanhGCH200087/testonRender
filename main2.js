const { Console } = require('console');
var express = require('express')
var app = express()

app.get('/',(req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<html><body><p>This is the homepage</p><a href="/student"><span>Product</span></a></body></html>');
    res.end(); //cần phải có end ko thì server sẽ chạy liên tục
})

app.get('/student',(req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
     res.write('<html><body><p>This is the student page</p><a href="/"><span>Home</span></a></body></html>');
    res.write('<html><body><img src="https://th.bing.com/th/id/OIP.ihgGf7X6RINzYF2F_nr7vQHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Flowers in Chania" width="100" height="100"></body></html>');
    res.end(); //cần phải có end ko thì server sẽ chạy liên tục
})

const PORT = 5500 //take a random port: 7000
app.listen(PORT)
console.log('Server is up')

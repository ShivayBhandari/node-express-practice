const http = require('http');
const url = require('url');
const fs = require('fs');

// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);


const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is overview');
    }
    else if (pathName === '/product') {
        res.end('This is the product')
    }
    else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('Page not found!');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listenting on port 8000');
});
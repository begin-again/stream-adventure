const http = require('http');
const fs = require('fs');
const through = require('through2');

function write(buf, _, next){
    const line = buf.toString();
    this.push(line.toUpperCase());
    next();
}

const server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        return req
            .pipe(through(write))
            .pipe(res);
    }
});
server.listen(process.argv[2]);

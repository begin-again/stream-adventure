const through = require('through2');

function write(buf, _, next){
    const line = buf.toString();
    this.push(line.toUpperCase());
    next();
}

process.stdin
    .pipe(through(write))
    .pipe(process.stdout)

const through = require('through2');
const split = require('split');

let lineCount = 0;
function write(buf, _, next){
    const line = buf.toString();
    const newLine = lineCount % 2 === 0 ? line.toLowerCase() : line.toUpperCase();
    this.push(newLine + '\n');
    lineCount++;
    next();
}

process.stdin
    .pipe(split())
    .pipe(through(write))
    .pipe(process.stdout)

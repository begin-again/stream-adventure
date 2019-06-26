const through = require('through2');
const trumpet = require('trumpet');
const tr = trumpet();

function upcase(buf, _, next){
    this.push(buf.toString().toUpperCase());
    next();
}
const loud = tr.select('.loud').createStream();

loud.pipe(through(upcase)).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout)

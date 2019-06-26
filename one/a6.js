const cc = require('concat-stream');

process
    .stdin
    .pipe(cc(src =>{
        const s = src.toString().split('').reverse().join('');
        console.log(s)
    }));

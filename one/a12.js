// duplexer part 2
const duplexer = require('duplexer2');
const through = require('through2');

module.exports = function (counter) {
    // return a duplex stream to count countries on the writable side
    // and pass through `counter` on the readable side
    const  counts = {};
    const  input = through.obj(write, end);
    return duplexer({objectMode: true}, input, counter);

    function write (row, _, next) {
        counts[row.country] = (counts[row.country] || 0) + 1;
        next();
    };

    function end (done) {
        counter.setCounts(counts);
        done();
    };
};

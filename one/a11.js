const spawn = require('child_process').spawn;
const duplexer = require('duplexer2');


module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    const o = spawn(cmd, args);
    const writeable = o.stdin
    const readable = o.stdout
    // joining together the stdin and stdout here
    return duplexer(writeable, readable)
};

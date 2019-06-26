const fs = require('fs');

const inFile = process.argv[2]; 
fs.createReadStream(inFile)
.pipe(process.stdout);


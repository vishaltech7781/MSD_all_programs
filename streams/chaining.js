const fs = require("fs");
const zlib = require("zlib");

// Read → Compress → Write
fs.createReadStream("input.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("input.txt.gz"));

console.log("File Compressed.");
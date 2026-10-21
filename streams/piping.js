const fs = require("fs");

// Read from input.txt
const readerStream = fs.createReadStream("input.txt");

// Write to output.txt
const writerStream = fs.createWriteStream("output.txt");

// Pipe readable stream into writable stream
readerStream.pipe(writerStream);

console.log("Program Ended");
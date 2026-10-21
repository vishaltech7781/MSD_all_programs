const { Transform } = require("stream");

const upperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        const data = chunk.toString().toUpperCase();

        callback(null, data);
    }
});

// Read transformed data
upperCaseStream.on("data", (chunk) => {
    console.log(chunk.toString());
});

// Write data
upperCaseStream.write("hello node.js\n");
upperCaseStream.write("this is a transform stream\n");

upperCaseStream.end();
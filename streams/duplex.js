const { Duplex } = require("stream");

const duplexStream = new Duplex({
    read(size) {
        this.push("Hello from Readable side\n");
        this.push(null);
    },

    write(chunk, encoding, callback) {
        console.log("Received:", chunk.toString());
        callback();
    }
});

// Read from stream
duplexStream.on("data", (chunk) => {
    console.log("Read:", chunk.toString());
});

// Write to stream
duplexStream.write("Hello from Writable side");

duplexStream.end();
const fs = require("fs");

// Create a readable stream
const readerStream = fs.createReadStream("input.txt");

// Set encoding
readerStream.setEncoding("UTF8");

// Handle data event
readerStream.on("data", (chunk) => {
    console.log("Received:", chunk);
});

// Handle end event
readerStream.on("end", () => {
    console.log("Reading completed.");
});

// Handle error event
readerStream.on("error", (err) => {
    console.log("Error:", err.message);
});
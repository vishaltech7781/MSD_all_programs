const net = require("net");
const readline = require("readline");

const server = net.createServer((socket) => {
    console.log("Client connected.");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Receive message
    socket.on("data", (data) => {
        console.log("\nClient:", data.toString().trim());
        rl.prompt();
    });

    // Send message
    rl.on("line", (message) => {
        socket.write(message + "\n");
    });

    socket.on("end", () => {
        console.log("Client disconnected.");
        rl.close();
    });
});

server.listen(8080, () => {
    console.log("Server started on port 8080");
});
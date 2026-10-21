const net = require("net");
const readline = require("readline");

const client = net.connect(8080, "localhost", () => {
    console.log("Connected to server.");
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Receive message
client.on("data", (data) => {
    console.log("\nServer:", data.toString().trim());
    rl.prompt();
});

// Send message
rl.on("line", (message) => {
    client.write(message + "\n");
});

client.on("end", () => {
    console.log("Disconnected from server.");
    rl.close();
});
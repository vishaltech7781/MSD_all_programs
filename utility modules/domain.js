const domain = require("domain");
const EventEmitter = require("events");

// Create a domain
const d = domain.create();

// Error handler
d.on("error", (err) => {
    console.log("Error handled:", err.message);
});


// 1. domain.run(function)
console.log("\n1. domain.run()");

d.run(() => {
    console.log("Function executed inside the domain.");
});


// 2. domain.add(emitter)
console.log("\n2. domain.add()");

const emitter = new EventEmitter();

d.add(emitter);

emitter.on("data", (message) => {
    console.log("Emitter received:", message);
});

emitter.emit("data", "Hello from EventEmitter");


// 3. domain.remove(emitter)
console.log("\n3. domain.remove()");

d.remove(emitter);

console.log("Emitter removed from domain.");


// 4. domain.bind(callback)
console.log("\n4. domain.bind()");

const boundFunction = d.bind(() => {
    console.log("Bound callback executed successfully.");
});

boundFunction();


// 5. domain.intercept(callback)
console.log("\n5. domain.intercept()");

const interceptedFunction = d.intercept((data) => {
    console.log("Intercepted callback executed successfully.");
});

interceptedFunction(null, "Hello");

console.log("\nProgram completed successfully.");
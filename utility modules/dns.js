const dns = require("dns");

// 1. dns.lookup()
dns.lookup("www.google.com", (err, address, family) => {
    if (err) {
        console.log("1. Lookup Error:", err.message);
        return;
    }

    console.log("1. DNS Lookup");
    console.log("Address:", address);
    console.log("Family:", family);
});


// 2. dns.lookupService()
dns.lookupService("8.8.8.8", 53, (err, hostname, service) => {
    if (err) {
        console.log("\n2. Lookup Service Error:", err.message);
        return;
    }

    console.log("\n2. DNS Lookup Service");
    console.log("Hostname:", hostname);
    console.log("Service:", service);
});


// 3. dns.resolve()
dns.resolve("www.google.com", "A", (err, addresses) => {
    if (err) {
        console.log("\n3. Resolve Error:", err.message);
        return;
    }

    console.log("\n3. DNS Resolve");
    console.log("Addresses:", addresses);
});


// 4. dns.reverse()
dns.reverse("8.8.8.8", (err, hostnames) => {
    if (err) {
        console.log("\n4. Reverse DNS Error:", err.message);
        return;
    }

    console.log("\n4. DNS Reverse");
    console.log("Hostnames:", hostnames);
});


// 5. dns.getServers()
console.log("\n5. DNS Servers");
console.log(dns.getServers());


// 6. dns.setServers()
dns.setServers(["8.8.8.8", "1.1.1.1"]);

console.log("\n6. DNS Servers After setServers()");
console.log(dns.getServers());
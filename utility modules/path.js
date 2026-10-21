const path = require("path");

// 1. normalize()
console.log("1. Normalize:");
console.log(path.normalize("D:/sem 7/MSD/folder/../file.txt"));

// 2. join()
console.log("\n2. Join:");
console.log(path.join("D:/sem 7", "MSD", "NodeJS", "file.txt"));

// 3. resolve()
console.log("\n3. Resolve:");
console.log(path.resolve("file.txt"));

// 4. isAbsolute()
console.log("\n4. Is Absolute:");
console.log(path.isAbsolute("D:/sem 7/MSD/file.txt"));

// 5. relative()
console.log("\n5. Relative:");
console.log(
    path.relative(
        "D:/sem 7/MSD",
        "D:/sem 7/MSD/NodeJS/file.txt"
    )
);

// 6. dirname()
console.log("\n6. Dirname:");
console.log(
    path.dirname("D:/sem 7/MSD/NodeJS/file.txt")
);

// 7. basename()
console.log("\n7. Basename:");
console.log(
    path.basename("D:/sem 7/MSD/NodeJS/file.txt")
);

// 8. extname()
console.log("\n8. Extension:");
console.log(
    path.extname("D:/sem 7/MSD/NodeJS/file.txt")
);

// 9. parse()
console.log("\n9. Parse:");
console.log(
    path.parse("D:/sem 7/MSD/NodeJS/file.txt")
);

// 10. format()
console.log("\n10. Format:");

const pathObject = {
    dir: "D:/sem 7/MSD/NodeJS",
    name: "file",
    ext: ".txt"
};

console.log(path.format(pathObject));
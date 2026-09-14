const path = require("path");

const filePath = "/home/user/data/report.pdf";

console.log("Original Path:");
console.log(filePath);
console.log("\nDirectory Name:");
console.log(path.dirname(filePath));
console.log("\nBase Name:");
console.log(path.basename(filePath));
console.log("\nExtension:");
console.log(path.extname(filePath));
console.log("\nAbsolute Path:");
console.log(path.resolve("data/report.pdf"));

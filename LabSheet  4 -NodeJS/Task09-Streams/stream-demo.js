const fs = require("fs");

const fileName = "large-file.txt";
let content = "";

for (let i = 1; i <= 50; i++) {
  content += `This is line number ${i}\n`;
}

fs.writeFile(fileName, content, (err) => {
  if (err) return console.error("Error creating file:", err);
  console.log("50-line file created.");

  const readStream = fs.createReadStream(fileName, { encoding: "utf8" });

  readStream.on("data", (chunk) => {
    console.log("Chunk received - Size:", Buffer.byteLength(chunk), "bytes");
  });

  readStream.on("end", () => {
    console.log("Finished reading file.");
  });

  readStream.on("error", (streamError) => {
    console.error("Stream Error:", streamError);
  });
});

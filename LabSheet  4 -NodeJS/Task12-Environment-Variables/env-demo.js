const http = require("http");

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Cartly Node.js Server</h1><p>Server is running on port ${PORT}</p>`);
});

server.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});

const http = require("http");

const students = [
  { id: 1, name: "Rahul", course: "B.Tech CSE" },
  { id: 2, name: "Priya", course: "B.Tech CSE" },
  { id: 3, name: "Aman", course: "B.Tech CSE" }
];

const server = http.createServer((req, res) => {
  const url = req.url;

  if (req.method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>Welcome to Student Server</h1>");
  }

  if (req.method === "GET" && url === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(students));
  }

  if (req.method === "GET" && url.startsWith("/students/")) {
    const id = parseInt(url.split("/")[2], 10);
    const student = students.find((student) => student.id === id);

    if (student) {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(student));
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Student not found" }));
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>404 - Page Not Found</h1>");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

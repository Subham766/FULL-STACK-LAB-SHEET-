const http = require("http");
const url = require("url");

const students = [
  { id: 1, name: "Rahul", course: "B.Tech CSE" },
  { id: 2, name: "Priya", course: "B.Tech CSE" },
  { id: 3, name: "Aman", course: "B.Tech CSE" }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (req.method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>Welcome to Student Server</h1>");
  }

  if (req.method === "GET" && pathname === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(students));
  }

  if (req.method === "GET" && pathname.startsWith("/students/")) {
    const id = parseInt(pathname.split("/")[2], 10);
    const student = students.find((student) => student.id === id);

    if (student) {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(student));
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Student not found" }));
  }

  if (req.method === "GET" && pathname === "/search") {
    const keyword = parsedUrl.query.keyword || "";
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Search Keyword: " + keyword);
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>404 - Page Not Found</h1>");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

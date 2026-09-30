require("dotenv").config();
const express = require("express"),
  cors = require("cors");
const logger = require("./middleware/logger"),
  tasks = require("./routes/tasks");
const app = express(),
  PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.get("/", (req, res) =>
  res.json({ message: "Task Manager API is running" }),
);
app.use("/api/tasks", tasks);
app.use((req, res) =>
  res.status(404).json({ error: "Route not found", path: req.originalUrl }),
);
app.use((err, req, res, next) =>
  res
    .status(err.status || 500)
    .json({
      error: "Internal Server Error",
      message: err.message || "Something went wrong",
    }),
);
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);

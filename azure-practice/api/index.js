const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API working");
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(4000, "127.0.0.1", () => {
  console.log("Server running on http://127.0.0.1:4000");
});
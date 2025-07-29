const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const data = require("./forecast.json");
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

app.get("/", (req, res) => {
  res.send("This is my dummy server!");
});

app.get("/temp", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

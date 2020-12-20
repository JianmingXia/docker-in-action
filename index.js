const express = require("express");

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  console.log(`${new Date()}receiving request....`);
  res.send("Hello Docker!\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

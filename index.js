const axios = require("axios");
const express = require("express");
setInterval(() => {
  axios.get("https://minitwitterbackend-p4lv.onrender.com/test").then((res) => {
    console.log(res.data);
  });
}, 300000);
console.log("File running");
const app = express();
app.listen(3000, () => {
  console.log("Listenning");
});
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
